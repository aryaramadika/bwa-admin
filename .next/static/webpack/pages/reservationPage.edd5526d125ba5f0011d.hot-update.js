"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmVkZDU1MjZkMTI1YmE1ZjAwMTFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT2UsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEM7QUFDdkQsTUFBTUMsWUFBTixHQUE4QkQsS0FBOUIsQ0FBTUMsWUFBTjtBQUFBLE1BQW1CQyxLQUFuQixHQUE4QkYsS0FBOUIsQ0FBbUJFLEtBQW5CO0FBQUEsTUFBeUJDLEVBQXpCLEdBQThCSCxLQUE5QixDQUF5QkcsRUFBekI7QUFHQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVosRUFBeUJDLEtBQXpCLEVBQStCQyxFQUEvQjtBQUNBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFLLFdBQUssRUFBRTtBQUNSRyxRQUFBQSxjQUFjLEVBQUMsUUFEUDtBQUVSQyxRQUFBQSxPQUFPLEVBQUUsTUFGRDtBQUdSQyxRQUFBQSxLQUFLLEVBQUM7QUFIRSxPQUFaO0FBQUEsNkJBTUk7QUFBTyxpQkFBUyxFQUFDLG1FQUFqQjtBQUFBLGdDQUVJO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEwQixjQUFJLEVBQUMsT0FBL0I7QUFBdUMsWUFBRSxFQUFDLFFBQTFDO0FBQW1ELGNBQUksRUFBQyxPQUF4RDtBQUFnRSxlQUFLLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDLDhCQUFiO0FBQUEscUNBQTRDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBLDJCQUE2QlAsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFLLGdCQUFFLEVBQUMsWUFBUjtBQUFxQixtQkFBSyxFQUFDLElBQTNCO0FBQWdDLG9CQUFNLEVBQUMsSUFBdkM7QUFBNEMscUJBQU8sRUFBQyxXQUFwRDtBQUFnRSxrQkFBSSxFQUFDLE1BQXJFO0FBQ0ksbUJBQUssRUFBQyw0QkFEVjtBQUFBLHNDQUVJO0FBQVEsa0JBQUUsRUFBQyxJQUFYO0FBQWdCLGtCQUFFLEVBQUMsSUFBbkI7QUFBd0IsaUJBQUMsRUFBQyxJQUExQjtBQUErQixvQkFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFNLGlCQUFDLEVBQUMsc0NBQVI7QUFBK0Msc0JBQU0sRUFBQyxTQUF0RDtBQUNJLGdDQUFhLEdBRGpCO0FBQ3FCLGtDQUFlLE9BRHBDO0FBQzRDLG1DQUFnQjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFZSTtBQUFHLHFCQUFTLEVBQUMsNkJBQWI7QUFBQSxtQ0FDSSw4REFBQyx3REFBRDtBQUNBLG1CQUFLLEVBQUVDLEtBRFA7QUFFQSxvQkFBTSxFQUFDLEtBRlA7QUFHQSx5QkFBVyxFQUFDLE1BSFo7QUFJQSwrQkFBaUIsRUFBQyxHQUpsQjtBQUtBLDhCQUFnQixFQUFDO0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKLENBb0VRO0FBQ0E7QUFDUjtBQUNBOztBQXZFQTtBQTBFSDtLQS9FdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNlRGV0YWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByaWNlRGV0YWlQcm9wc3tcclxuICAgIHRyZWF0bWVuVHlwZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6bnVtYmVyO1xyXG4gICAgaWQ6c3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlRGV0YWlsKHByb3BzOlByaWNlRGV0YWlQcm9wcykge1xyXG4gICAgY29uc3R7dHJlYXRtZW5UeXBlLHByaWNlLGlkfT0gcHJvcHM7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRyZWF0bWVuVHlwZSxwcmljZSxpZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwdC1tZC01MCBwYi1tZC01MCBwdC0zMCBwYi0yMFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLW1kLTEwIG1iLTBcIj5QcmljZSBJbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAvLyAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBwcy1tZC0xNSBwZS1tZC0xNSBwdC1tZC0xNSBwYi1tZC0xNSBwdC0xMCBwYi0xMFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImQtbm9uZVwiIHR5cGU9XCJyYWRpb1wiIGlkPVwidG9wdXAxXCIgbmFtZT1cInRvcHVwXCIgdmFsdWU9XCJ0b3B1cDFcIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNhcmRcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZ3LW1lZGl1bVwiPnt0cmVhdG1lblR5cGV9ICA8L3NwYW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJpY29uLWNoZWNrXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD1cIiNDREYxRkZcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuODMzMDEgMTBMOC40NjQ1OSAxMi41TDE0LjE2NjMgNy41XCIgc3Ryb2tlPVwiIzAwQkFGRlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3ByaWNlfTwvcD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtc20tYmxvY2sgZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8YSBocmVmPVwiLi9cIiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdCByb3VuZGVkLXBpbGwgZnctbWVkaXVtIHRleHQtd2hpdGUgYm9yZGVyLTAgdGV4dC1sZ1wiPkJhY2sgdG8gSG9tZXBhZ2U8L2E+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicHQtbWQtNTAgcGItbWQtNTAgcHQtMzAgcGItMjBcIj5cclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgd2lkdGg6Jzc1JSdcclxuXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBwcy1tZC0xNSBwZS1tZC0xNSBwdC1tZC0xNSBwYi1tZC0xNSBwdC0xMCBwYi0xMFwiXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkLW5vbmVcIiB0eXBlPVwicmFkaW9cIiBpZD1cInRvcHVwMVwiIG5hbWU9XCJ0b3B1cFwiIHZhbHVlPVwidG9wdXAxXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy1tZWRpdW1cIj57dHJlYXRtZW5UeXBlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaWNvbi1jaGVja1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD1cIiNDREYxRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjgzMzAxIDEwTDguNDY0NTkgMTIuNUwxNC4xNjYzIDcuNVwiIHN0cm9rZT1cIiMwMEJBRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOdW1iZXJGb3JtYXQiLCJQcmljZURldGFpbCIsInByb3BzIiwidHJlYXRtZW5UeXBlIiwicHJpY2UiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=