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
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\molecules\\PriceDetail\\index.tsx";


function PriceDetail(props) {
  var treatmenType = props.treatmenType,
      price = props.price,
      id = props.id;
  console.log(treatmenType, price, id);
  return (
    /*#__PURE__*/
    // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
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
    // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
    // <div className="row justify-content-between">
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        display: 'flex',
        width: '75%'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        className: "col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          className: "d-none",
          type: "radio",
          id: "topup1",
          name: "topup",
          value: "topup1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "detail-card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "d-flex justify-content-between",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-3xl color-palette-1 m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "fw-medium",
                children: [treatmenType, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 69
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
              id: "icon-check",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                fill: "#CDF1FF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                d: "M5.83301 10L8.46459 12.5L14.1663 7.5",
                stroke: "#00BAFF",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-lg color-palette-1 m-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_0__.default, {
              value: price,
              prefix: "Rp ",
              displayType: "text",
              thousandSeparator: ".",
              decimalSeparator: ","
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this) // <div className="col-lg-4 col-sm-6">
    // </div>
    //     </div>
    // </div>

  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQuZWRkNTUyNmQxMjViYTVmMDAxMWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFPZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QztBQUN2RCxNQUFNQyxZQUFOLEdBQThCRCxLQUE5QixDQUFNQyxZQUFOO0FBQUEsTUFBbUJDLEtBQW5CLEdBQThCRixLQUE5QixDQUFtQkUsS0FBbkI7QUFBQSxNQUF5QkMsRUFBekIsR0FBOEJILEtBQTlCLENBQXlCRyxFQUF6QjtBQUdBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosWUFBWixFQUF5QkMsS0FBekIsRUFBK0JDLEVBQS9CO0FBQ0E7QUFBQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUssV0FBSyxFQUFFO0FBQ1JHLFFBQUFBLGNBQWMsRUFBQyxRQURQO0FBRVJDLFFBQUFBLE9BQU8sRUFBRSxNQUZEO0FBR1JDLFFBQUFBLEtBQUssRUFBQztBQUhFLE9BQVo7QUFBQSw2QkFNSTtBQUFPLGlCQUFTLEVBQUMsbUVBQWpCO0FBQUEsZ0NBRUk7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGNBQUksRUFBQyxPQUEvQjtBQUF1QyxZQUFFLEVBQUMsUUFBMUM7QUFBbUQsY0FBSSxFQUFDLE9BQXhEO0FBQWdFLGVBQUssRUFBQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsZ0NBQWY7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUMsOEJBQWI7QUFBQSxxQ0FBNEM7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUEsMkJBQTZCUCxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUlJO0FBQUssZ0JBQUUsRUFBQyxZQUFSO0FBQXFCLG1CQUFLLEVBQUMsSUFBM0I7QUFBZ0Msb0JBQU0sRUFBQyxJQUF2QztBQUE0QyxxQkFBTyxFQUFDLFdBQXBEO0FBQWdFLGtCQUFJLEVBQUMsTUFBckU7QUFDSSxtQkFBSyxFQUFDLDRCQURWO0FBQUEsc0NBRUk7QUFBUSxrQkFBRSxFQUFDLElBQVg7QUFBZ0Isa0JBQUUsRUFBQyxJQUFuQjtBQUF3QixpQkFBQyxFQUFDLElBQTFCO0FBQStCLG9CQUFJLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQU0saUJBQUMsRUFBQyxzQ0FBUjtBQUErQyxzQkFBTSxFQUFDLFNBQXREO0FBQ0ksZ0NBQWEsR0FEakI7QUFDcUIsa0NBQWUsT0FEcEM7QUFDNEMsbUNBQWdCO0FBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVlJO0FBQUcscUJBQVMsRUFBQyw2QkFBYjtBQUFBLG1DQUNJLDhEQUFDLHdEQUFEO0FBQ0EsbUJBQUssRUFBRUMsS0FEUDtBQUVBLG9CQUFNLEVBQUMsS0FGUDtBQUdBLHlCQUFXLEVBQUMsTUFIWjtBQUlBLCtCQUFpQixFQUFDLEdBSmxCO0FBS0EsOEJBQWdCLEVBQUM7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkosQ0FvRVE7QUFDQTtBQUNSO0FBQ0E7O0FBdkVBO0FBMEVIO0tBL0V1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJpY2VEZXRhaWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2VEZXRhaVByb3Bze1xyXG4gICAgdHJlYXRtZW5UeXBlOiBzdHJpbmc7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBpZDpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VEZXRhaWwocHJvcHM6UHJpY2VEZXRhaVByb3BzKSB7XHJcbiAgICBjb25zdHt0cmVhdG1lblR5cGUscHJpY2UsaWR9PSBwcm9wcztcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2codHJlYXRtZW5UeXBlLHByaWNlLGlkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB0LW1kLTUwIHBiLW1kLTUwIHB0LTMwIHBiLTIwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItbWQtMTAgbWItMFwiPlByaWNlIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IHBzLW1kLTE1IHBlLW1kLTE1IHB0LW1kLTE1IHBiLW1kLTE1IHB0LTEwIHBiLTEwXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0b3B1cDFcIiBuYW1lPVwidG9wdXBcIiB2YWx1ZT1cInRvcHVwMVwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctbWVkaXVtXCI+e3RyZWF0bWVuVHlwZX0gIDwvc3Bhbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD1cImljb24tY2hlY2tcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPVwiI0NERjFGRlwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS44MzMwMSAxMEw4LjQ2NDU5IDEyLjVMMTQuMTY2MyA3LjVcIiBzdHJva2U9XCIjMDBCQUZGXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57cHJpY2V9PC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxhIGhyZWY9XCIuL1wiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VibWl0IHJvdW5kZWQtcGlsbCBmdy1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXItMCB0ZXh0LWxnXCI+QmFjayB0byBIb21lcGFnZTwvYT5cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwdC1tZC01MCBwYi1tZC01MCBwdC0zMCBwYi0yMFwiPlxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDonNzUlJ1xyXG5cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IHBzLW1kLTE1IHBlLW1kLTE1IHB0LW1kLTE1IHBiLW1kLTE1IHB0LTEwIHBiLTEwXCJcclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImQtbm9uZVwiIHR5cGU9XCJyYWRpb1wiIGlkPVwidG9wdXAxXCIgbmFtZT1cInRvcHVwXCIgdmFsdWU9XCJ0b3B1cDFcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZ3LW1lZGl1bVwiPnt0cmVhdG1lblR5cGV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJpY29uLWNoZWNrXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPVwiI0NERjFGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuODMzMDEgMTBMOC40NjQ1OSAxMi41TDE0LjE2NjMgNy41XCIgc3Ryb2tlPVwiIzAwQkFGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCJScCBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIk51bWJlckZvcm1hdCIsIlByaWNlRGV0YWlsIiwicHJvcHMiLCJ0cmVhdG1lblR5cGUiLCJwcmljZSIsImlkIiwiY29uc29sZSIsImxvZyIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==