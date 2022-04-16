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
  var ROOT_IMG = "https://admintbs5.herokuapp.com/uploads";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pb-50 d-md-block d-none",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
      children: data.therapistName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-lg color-palette-2 mb-0",
      children: ["Umur: ", '', data.therapistAge]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
      children: data.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "".concat(ROOT_IMG, "/").concat(data.thumbnail),
        width: "280",
        height: "380",
        className: "img-fluid",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: ["Umur: ", '', data.therapistAge]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uZjg1ZGZjNWE4NjBmZWZhZTllMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFpRDtBQUM1RCxNQUFPQyxJQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxJQUFQO0FBQUEsTUFBYUMsSUFBYixHQUFxQkYsS0FBckIsQ0FBYUUsSUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUNBQWpCO0FBRUksc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSw0QkFDQTtBQUFJLGVBQVMsRUFBQyx5REFBZDtBQUFBLGdCQUNLRixJQUFJLENBQUNLO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBSUE7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQSwyQkFBbUQsRUFBbkQsRUFBdURMLElBQUksQ0FBQ00sWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkEsZUFLQTtBQUFJLGVBQVMsRUFBQyx5REFBZDtBQUFBLGdCQUNLTixJQUFJLENBQUNPO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUosc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxZQUFLTixRQUFMLGNBQWlCRCxJQUFJLENBQUNRLFNBQXRCLENBQVI7QUFBMkMsYUFBSyxFQUFDLEtBQWpEO0FBQXVELGNBQU0sRUFBQyxLQUE5RDtBQUFvRSxpQkFBUyxFQUFDLFdBQTlFO0FBQTBGLFdBQUcsRUFBQztBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBSUE7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsa0RBQWQ7QUFBQSxrQkFBa0VSLElBQUksQ0FBQ0s7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHlDQUFiO0FBQUEsNkJBQThELEVBQTlELEVBQWtFTCxJQUFJLENBQUNNLFlBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7S0EzQnVCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UaGVyYXBpc3REZXNjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGhlcmFwaXN0RGVzY1Byb3BzIHtcclxuICAgIHR5cGU6J2Rlc2t0b3AnfCdtb2JpbGUnO1xyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdGhlcmFwaXN0TmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRoZXJhcGlzdEFnZTpudW1iZXIsXHJcbiAgICAgICAgdGhlcmFwaXN0R2VuZGVyOnN0cmluZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpzdHJpbmcsXHJcbiAgICAgICAgdGh1bWJuYWlsOnN0cmluZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZXJhcGlzdERlc2MocHJvcHM6VGhlcmFwaXN0RGVzY1Byb3BzKSB7XHJcbiAgICBjb25zdCB7dHlwZSwgZGF0YX0gPSBwcm9wcztcclxuICAgIGNvbnN0IFJPT1RfSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01MCBkLW1kLWJsb2NrIGQtbm9uZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgdGV4dC1zdGFydCBtYi0xMCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudGhlcmFwaXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0yIG1iLTBcIj5VbXVyOiB7Jyd9e2RhdGEudGhlcmFwaXN0QWdlfTwvcD5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTAgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLTRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake1JPT1RfSU1HfS8ke2RhdGEudGh1bWJuYWlsfWB9IHdpZHRoPVwiMjgwXCIgaGVpZ2h0PVwiMzgwXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC04IGQtbWQtbm9uZSBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTBcIj57ZGF0YS50aGVyYXBpc3ROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gY29sb3ItcGFsZXR0ZS0yIHRleHQtc3RhcnQgbWItMFwiPlVtdXI6IHsnJ317ZGF0YS50aGVyYXBpc3RBZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRoZXJhcGlzdERlc2MiLCJwcm9wcyIsInR5cGUiLCJkYXRhIiwiUk9PVF9JTUciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU1BR0UiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWwiXSwic291cmNlUm9vdCI6IiJ9