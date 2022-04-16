"use strict";
self["webpackHotUpdate_N_E"]("pages/priceDetailTreatment",{

/***/ "./components/molecules/PriceDetail/index.tsx":
/*!****************************************************!*\
  !*** ./components/molecules/PriceDetail/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PriceDetail; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\molecules\\PriceDetail\\index.tsx";

function PriceDetail() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pt-md-50 pb-md-50 pt-30 pb-20",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row justify-content-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("treatmentForm", {
        _id: "123",
        treatmentType: "standard treatment",
        price: 20000
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("treatmentForm", {
        _id: "123",
        treatmentType: "standard treatment",
        price: 20000
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this) // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
  //         <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Price Information</p>
  //         {/* <div className="row justify-content-between">
  //             <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
  //                 >
  //                 <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
  //                 <div className="detail-card">
  //                     <div className="d-flex justify-content-between">
  //                         <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{treatmenType}  </span>
  //                         </p>
  //                         <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
  //                             xmlns="http://www.w3.org/2000/svg">
  //                             <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
  //                             <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
  //                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  //                         </svg>
  //                     </div>
  //                     <p className="text-lg color-palette-1 m-0">{price}</p>
  //                 </div>
  //             </label>
  //         </div> */}
  //     <div className="d-sm-block d-flex flex-column w-100">
  //         <a href="./" type="submit"
  //             className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Back to Homepage</a>
  //     </div>
  ;
}
_c = PriceDetail;

var _c;

$RefreshReg$(_c, "PriceDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQuZmVmZWUwZTJjYzdmYTk1NWY1ZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBRWxDLHNCQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDQTtBQUFlLFdBQUcsRUFBQyxLQUFuQjtBQUF5QixxQkFBYSxFQUFDLG9CQUF2QztBQUE0RCxhQUFLLEVBQUU7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBZSxXQUFHLEVBQUMsS0FBbkI7QUFBeUIscUJBQWEsRUFBQyxvQkFBdkM7QUFBNEQsYUFBSyxFQUFFO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FTSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWxDSjtBQXdDSDtLQTFDdUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNlRGV0YWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJlYXRtZW50Rm9ybSBmcm9tIFwiLi90cmVhdG1lbnRGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZURldGFpbCgpIHtcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtbWQtNTAgcGItbWQtNTAgcHQtMzAgcGItMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPHRyZWF0bWVudEZvcm0gX2lkPVwiMTIzXCIgdHJlYXRtZW50VHlwZT1cInN0YW5kYXJkIHRyZWF0bWVudFwiIHByaWNlPXsyMDAwMH0gLz5cclxuICAgICAgICAgICAgPHRyZWF0bWVudEZvcm0gX2lkPVwiMTIzXCIgdHJlYXRtZW50VHlwZT1cInN0YW5kYXJkIHRyZWF0bWVudFwiIHByaWNlPXsyMDAwMH0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB0LW1kLTUwIHBiLW1kLTUwIHB0LTMwIHBiLTIwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItbWQtMTAgbWItMFwiPlByaWNlIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IHBzLW1kLTE1IHBlLW1kLTE1IHB0LW1kLTE1IHBiLW1kLTE1IHB0LTEwIHBiLTEwXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0b3B1cDFcIiBuYW1lPVwidG9wdXBcIiB2YWx1ZT1cInRvcHVwMVwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctbWVkaXVtXCI+e3RyZWF0bWVuVHlwZX0gIDwvc3Bhbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD1cImljb24tY2hlY2tcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPVwiI0NERjFGRlwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS44MzMwMSAxMEw4LjQ2NDU5IDEyLjVMMTQuMTY2MyA3LjVcIiBzdHJva2U9XCIjMDBCQUZGXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57cHJpY2V9PC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxhIGhyZWY9XCIuL1wiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VibWl0IHJvdW5kZWQtcGlsbCBmdy1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXItMCB0ZXh0LWxnXCI+QmFjayB0byBIb21lcGFnZTwvYT5cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmljZURldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=