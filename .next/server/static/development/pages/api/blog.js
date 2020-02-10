module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/blog.js":
/*!***************************!*\
  !*** ./pages/api/blog.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const myData = [{
  author: "Steve",
  title: 'First Post',
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultrices ex. Morbi maximus odio vel lorem posuere laoreet. Aliquam rutrum blandit vulputate. Etiam gravida placerat nisl, ut iaculis nisl luctus at. Donec consectetur eros sed eleifend rutrum. Fusce vel arcu aliquam, malesuada turpis ac, aliquet arcu. Nunc egestas est a posuere auctor. Sed erat eros, consequat sed quam vel, egestas molestie nisl. Ut porta urna feugiat, ultricies quam lobortis, mattis lectus.",
  date: "2/1/2020",
  _id: 1
}, {
  author: "Steve",
  title: 'Second Post',
  content: "Duis a volutpat mi, vitae tempus nulla. Curabitur varius, dolor in tincidunt lacinia, tortor lorem congue libero, et accumsan ante nunc eget arcu. Mauris luctus sem non orci malesuada, dignissim luctus sapien cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in vestibulum erat, a sodales erat. Nulla id nisi nunc. Vivamus faucibus finibus pharetra. Aliquam condimentum ante mi, nec porttitor enim tempor ac. Pellentesque non ultrices magna, non maximus nisl. Cras egestas congue feugiat. Ut quis nunc blandit, lobortis lorem eget, elementum mauris.",
  date: "2/2/2020",
  _id: 2
}]; // export default (req, res) => {
//   res.status(200).json(myData);
// };

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(myData);
      break;

    case 'POST':
      console.log(req);
      myData.push(req.body);
      console.log(myData);
      res.status(200).json(myData);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(); //Method Not Allowed

      break;
  }
});

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/api/blog.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/StephenReiser/Desktop/SteveProject/next-sample/pages/api/blog.js */"./pages/api/blog.js");


/***/ })

/******/ });
//# sourceMappingURL=blog.js.map