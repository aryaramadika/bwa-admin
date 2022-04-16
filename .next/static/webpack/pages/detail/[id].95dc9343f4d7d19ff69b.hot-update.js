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

  if (type === 'desktop') {
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this);
  }

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
        lineNumber: 27,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: ["Umur: ", '', data.therapistAge]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uOTVkYzkzNDNmNGQ3ZDE5ZmY2OWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFpRDtBQUM1RCxNQUFPQyxJQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxJQUFQO0FBQUEsTUFBYUMsSUFBYixHQUFxQkYsS0FBckIsQ0FBYUUsSUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUNBQWpCOztBQUNBLE1BQUdILElBQUksS0FBSSxTQUFYLEVBQXFCO0FBQ2pCLHdCQUNJO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLHlEQUFkO0FBQUEsa0JBQ0tDLElBQUksQ0FBQ0s7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQSw2QkFBbUQsRUFBbkQsRUFBdURMLElBQUksQ0FBQ00sWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFRSDs7QUFDRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLFlBQUtMLFFBQUwsY0FBaUJELElBQUksQ0FBQ08sU0FBdEIsQ0FBUjtBQUEyQyxhQUFLLEVBQUMsS0FBakQ7QUFBdUQsY0FBTSxFQUFDLEtBQTlEO0FBQW9FLGlCQUFTLEVBQUMsV0FBOUU7QUFBMEYsV0FBRyxFQUFDO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFJQTtBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxrREFBZDtBQUFBLGtCQUFrRVAsSUFBSSxDQUFDSztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMseUNBQWI7QUFBQSw2QkFBOEQsRUFBOUQsRUFBa0VMLElBQUksQ0FBQ00sWUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtLQXhCdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RoZXJhcGlzdERlc2MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUaGVyYXBpc3REZXNjUHJvcHMge1xyXG4gICAgdHlwZTonZGVza3RvcCd8J21vYmlsZSc7XHJcbiAgICBkYXRhOntcclxuICAgICAgICB0aGVyYXBpc3ROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGhlcmFwaXN0QWdlOm51bWJlcixcclxuICAgICAgICB0aGVyYXBpc3RHZW5kZXI6c3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOnN0cmluZyxcclxuICAgICAgICB0aHVtYm5haWw6c3RyaW5nXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlcmFwaXN0RGVzYyhwcm9wczpUaGVyYXBpc3REZXNjUHJvcHMpIHtcclxuICAgIGNvbnN0IHt0eXBlLCBkYXRhfSA9IHByb3BzO1xyXG4gICAgY29uc3QgUk9PVF9JTUcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTUFHRVxyXG4gICAgaWYodHlwZSA9PT0nZGVza3RvcCcpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01MCBkLW1kLWJsb2NrIGQtbm9uZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgdGV4dC1zdGFydCBtYi0xMCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudGhlcmFwaXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0yIG1iLTBcIj5VbXVyOiB7Jyd9e2RhdGEudGhlcmFwaXN0QWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC00XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtST09UX0lNR30vJHtkYXRhLnRodW1ibmFpbH1gfSB3aWR0aD1cIjI4MFwiIGhlaWdodD1cIjM4MFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtOCBkLW1kLW5vbmUgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwXCI+e2RhdGEudGhlcmFwaXN0TmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGNvbG9yLXBhbGV0dGUtMiB0ZXh0LXN0YXJ0IG1iLTBcIj5VbXVyOiB7Jyd9e2RhdGEudGhlcmFwaXN0QWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUaGVyYXBpc3REZXNjIiwicHJvcHMiLCJ0eXBlIiwiZGF0YSIsIlJPT1RfSU1HIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lNQUdFIiwidGhlcmFwaXN0TmFtZSIsInRoZXJhcGlzdEFnZSIsInRodW1ibmFpbCJdLCJzb3VyY2VSb290IjoiIn0=