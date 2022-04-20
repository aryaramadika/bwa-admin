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
        // justifyContent:'center',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQuOWYyZjZlNWNjMmEzOTBmZWE4MGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFPZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QztBQUN2RCxNQUFNQyxZQUFOLEdBQThCRCxLQUE5QixDQUFNQyxZQUFOO0FBQUEsTUFBbUJDLEtBQW5CLEdBQThCRixLQUE5QixDQUFtQkUsS0FBbkI7QUFBQSxNQUF5QkMsRUFBekIsR0FBOEJILEtBQTlCLENBQXlCRyxFQUF6QjtBQUdBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosWUFBWixFQUF5QkMsS0FBekIsRUFBK0JDLEVBQS9CO0FBQ0E7QUFBQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUssV0FBSyxFQUFFO0FBQ1I7QUFDQUcsUUFBQUEsT0FBTyxFQUFFLE1BRkQ7QUFHUkMsUUFBQUEsS0FBSyxFQUFDO0FBSEUsT0FBWjtBQUFBLDZCQU1JO0FBQU8saUJBQVMsRUFBQyxtRUFBakI7QUFBQSxnQ0FFSTtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMEIsY0FBSSxFQUFDLE9BQS9CO0FBQXVDLFlBQUUsRUFBQyxRQUExQztBQUFtRCxjQUFJLEVBQUMsT0FBeEQ7QUFBZ0UsZUFBSyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxnQ0FBZjtBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBQyw4QkFBYjtBQUFBLHFDQUE0QztBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQSwyQkFBNkJOLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBSyxnQkFBRSxFQUFDLFlBQVI7QUFBcUIsbUJBQUssRUFBQyxJQUEzQjtBQUFnQyxvQkFBTSxFQUFDLElBQXZDO0FBQTRDLHFCQUFPLEVBQUMsV0FBcEQ7QUFBZ0Usa0JBQUksRUFBQyxNQUFyRTtBQUNJLG1CQUFLLEVBQUMsNEJBRFY7QUFBQSxzQ0FFSTtBQUFRLGtCQUFFLEVBQUMsSUFBWDtBQUFnQixrQkFBRSxFQUFDLElBQW5CO0FBQXdCLGlCQUFDLEVBQUMsSUFBMUI7QUFBK0Isb0JBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBTSxpQkFBQyxFQUFDLHNDQUFSO0FBQStDLHNCQUFNLEVBQUMsU0FBdEQ7QUFDSSxnQ0FBYSxHQURqQjtBQUNxQixrQ0FBZSxPQURwQztBQUM0QyxtQ0FBZ0I7QUFENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBWUk7QUFBRyxxQkFBUyxFQUFDLDZCQUFiO0FBQUEsbUNBQ0ksOERBQUMsd0RBQUQ7QUFDQSxtQkFBSyxFQUFFQyxLQURQO0FBRUEsb0JBQU0sRUFBQyxLQUZQO0FBR0EseUJBQVcsRUFBQyxNQUhaO0FBSUEsK0JBQWlCLEVBQUMsR0FKbEI7QUFLQSw4QkFBZ0IsRUFBQztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCSixDQW9FUTtBQUNBO0FBQ1I7QUFDQTs7QUF2RUE7QUEwRUg7S0EvRXVCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljZURldGFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmljZURldGFpUHJvcHN7XHJcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcclxuICAgIHByaWNlOm51bWJlcjtcclxuICAgIGlkOnN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZURldGFpbChwcm9wczpQcmljZURldGFpUHJvcHMpIHtcclxuICAgIGNvbnN0e3RyZWF0bWVuVHlwZSxwcmljZSxpZH09IHByb3BzO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0cmVhdG1lblR5cGUscHJpY2UsaWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicHQtbWQtNTAgcGItbWQtNTAgcHQtMzAgcGItMjBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi1tZC0xMCBtYi0wXCI+UHJpY2UgSW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgLy8gICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgcHMtbWQtMTUgcGUtbWQtMTUgcHQtbWQtMTUgcGItbWQtMTUgcHQtMTAgcGItMTBcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkLW5vbmVcIiB0eXBlPVwicmFkaW9cIiBpZD1cInRvcHVwMVwiIG5hbWU9XCJ0b3B1cFwiIHZhbHVlPVwidG9wdXAxXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jYXJkXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy1tZWRpdW1cIj57dHJlYXRtZW5UeXBlfSAgPC9zcGFuPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaWNvbi1jaGVja1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiIGZpbGw9XCIjQ0RGMUZGXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjgzMzAxIDEwTDguNDY0NTkgMTIuNUwxNC4xNjYzIDcuNVwiIHN0cm9rZT1cIiMwMEJBRkZcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPntwcmljZX08L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXNtLWJsb2NrIGQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgPGEgaHJlZj1cIi4vXCIgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWJtaXQgcm91bmRlZC1waWxsIGZ3LW1lZGl1bSB0ZXh0LXdoaXRlIGJvcmRlci0wIHRleHQtbGdcIj5CYWNrIHRvIEhvbWVwYWdlPC9hPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB0LW1kLTUwIHBiLW1kLTUwIHB0LTMwIHBiLTIwXCI+XHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC8vIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIHdpZHRoOic3NSUnXHJcblxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgcHMtbWQtMTUgcGUtbWQtMTUgcHQtbWQtMTUgcGItbWQtMTUgcHQtMTAgcGItMTBcIlxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0b3B1cDFcIiBuYW1lPVwidG9wdXBcIiB2YWx1ZT1cInRvcHVwMVwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctbWVkaXVtXCI+e3RyZWF0bWVuVHlwZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD1cImljb24tY2hlY2tcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiIGZpbGw9XCIjQ0RGMUZGXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS44MzMwMSAxMEw4LjQ2NDU5IDEyLjVMMTQuMTY2MyA3LjVcIiBzdHJva2U9XCIjMDBCQUZGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIlJwIFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiTnVtYmVyRm9ybWF0IiwiUHJpY2VEZXRhaWwiLCJwcm9wcyIsInRyZWF0bWVuVHlwZSIsInByaWNlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==