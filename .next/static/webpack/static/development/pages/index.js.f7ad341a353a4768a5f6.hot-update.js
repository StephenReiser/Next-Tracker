webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyHead */ "./components/MyHead.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewPost */ "./components/NewPost.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/StephenReiser/Desktop/SteveProject/next-sample/components/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://localhost:3000/api/blog').then(function (data) {
      return data.json();
    }).then(function (data) {
      return setPosts(data);
    });
  }, []);
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_MyHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageName: 'Home',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, posts.map(function (post, index) {
    return __jsx(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
      post: post,
      key: index,
      id: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  })), __jsx(_NewPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    updateList: setPosts,
    posts: posts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}; // Home.getInitialProps = async function() {
//     const res = await fetch('http://localhost:3000/api/blog');
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.length}`);
//     console.log(data)
//     return {
//       posts: data
//     };
//   };


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f7ad341a353a4768a5f6.hot-update.js.map