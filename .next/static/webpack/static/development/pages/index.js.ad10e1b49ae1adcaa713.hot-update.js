webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewPostTextArea.js":
/*!***************************************!*\
  !*** ./components/NewPostTextArea.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/StephenReiser/Desktop/SteveProject/next-sample/components/NewPostTextArea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var NewPostInput = function NewPostInput(props) {
  return __jsx("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("label", {
    htmlFor: props.name,
    className: "col-sm-2 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.name, ":"), __jsx("div", {
    className: "col-sm-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("textarea", {
    className: "form-control",
    type: "text",
    value: props.value,
    name: props.name,
    onChange: function onChange(e) {
      return props.onChange(e);
    },
    rows: "3",
    id: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewPostInput);

/***/ })

})
//# sourceMappingURL=index.js.ad10e1b49ae1adcaa713.hot-update.js.map