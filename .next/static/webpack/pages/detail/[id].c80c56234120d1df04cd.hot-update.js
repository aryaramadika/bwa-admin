"use strict";
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./components/organisms/TherapistDesc/index.tsx":
/*!******************************************************!*\
  !*** ./components/organisms/TherapistDesc/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TherapistDesc; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TherapistDesc\\index.tsx";

function TherapistDesc(props) {
  var type = props.type,
      data = props.data;

  if (type === 'desktop') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pb-50 d-md-block d-none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-lg color-palette-2 mb-0",
        children: "Category: Mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/img/Thumbnail-3.png",
        width: "280",
        height: "380",
        className: "img-fluid",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: ["Mobile Legends:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 93
        }, this), "The New Battle 2021"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: "Category: Mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
_c = TherapistDesc;

var _c;

$RefreshReg$(_c, "TherapistDesc");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uYzgwYzU2MjM0MTIwZDFkZjA0Y2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFpRDtBQUM1RCxNQUFPQyxJQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxJQUFQO0FBQUEsTUFBYUMsSUFBYixHQUFxQkYsS0FBckIsQ0FBYUUsSUFBYjs7QUFDQSxNQUFHRCxJQUFJLEtBQUksU0FBWCxFQUFxQjtBQUNqQix3QkFDSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyx5REFBZDtBQUFBLGtCQUF5RUMsSUFBSSxDQUFDQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQU1IOztBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBQyxzQkFBVDtBQUFnQyxhQUFLLEVBQUMsS0FBdEM7QUFBNEMsY0FBTSxFQUFDLEtBQW5EO0FBQXlELGlCQUFTLEVBQUMsV0FBbkU7QUFBK0UsV0FBRyxFQUFDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFJQTtBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxrREFBZDtBQUFBLG1EQUFnRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7S0F0QnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UaGVyYXBpc3REZXNjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGhlcmFwaXN0RGVzY1Byb3BzIHtcclxuICAgIHR5cGU6J2Rlc2t0b3AnfCdtb2JpbGUnO1xyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdGhlcmFwaXN0TmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRoZXJhcGlzdEFnZTpudW1iZXIsXHJcbiAgICAgICAgdGhlcmFwaXN0R2VuZGVyOnN0cmluZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpzdHJpbmdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVyYXBpc3REZXNjKHByb3BzOlRoZXJhcGlzdERlc2NQcm9wcykge1xyXG4gICAgY29uc3Qge3R5cGUsIGRhdGF9ID0gcHJvcHM7XHJcbiAgICBpZih0eXBlID09PSdkZXNrdG9wJyl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTUwIGQtbWQtYmxvY2sgZC1ub25lXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwIG10LTEwXCI+e2RhdGEudGhlcmFwaXN0TmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMiBtYi0wXCI+Q2F0ZWdvcnk6IE1vYmlsZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC00XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9UaHVtYm5haWwtMy5wbmdcIiB3aWR0aD1cIjI4MFwiIGhlaWdodD1cIjM4MFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtOCBkLW1kLW5vbmUgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwXCI+TW9iaWxlIExlZ2VuZHM6PGJyLz5cclxuICAgICAgICAgICAgICAgIFRoZSBOZXcgQmF0dGxlIDIwMjE8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGNvbG9yLXBhbGV0dGUtMiB0ZXh0LXN0YXJ0IG1iLTBcIj5DYXRlZ29yeTogTW9iaWxlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRoZXJhcGlzdERlc2MiLCJwcm9wcyIsInR5cGUiLCJkYXRhIiwidGhlcmFwaXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=