"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/organisms/TransactionStep/index.tsx":
/*!********************************************************!*\
  !*** ./components/organisms/TransactionStep/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TransactionStep; }
/* harmony export */ });
/* harmony import */ var _molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/ReservationStep */ "./components/molecules/ReservationStep/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TransactionStep\\index.tsx";


function TransactionStep() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    id: "feature",
    className: "feature pt-50 pb-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 text-center mb-30",
        children: ["How To Do ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 86
        }, this), " Online Reservation"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row gap-lg-0 gap-4",
        "data-aos": "fade-up",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__.default, {
          icon: "step1",
          title: "1. Start",
          desc1: "Registrasi akun anda",
          desc2: "jika belum memiliki akun"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__.default, {
          icon: "step2",
          title: "2. Login ",
          desc1: "Login dengan akun ",
          desc2: "yang telah teregistrasi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__.default, {
          icon: "step3",
          title: "3. Reservasi",
          desc1: "Masuk kehalaman reservasi",
          desc2: "untuk melakukan reservasi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = TransactionStep;

var _c;

$RefreshReg$(_c, "TransactionStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTVlOTU3MzZkNDNlMGFmMTk2NmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQyxlQUFULEdBQTJCO0FBQ3RDLHNCQUNJO0FBQVMsTUFBRSxFQUFDLFNBQVo7QUFBc0IsYUFBUyxFQUFDLHFCQUFoQztBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLG9EQUFkO0FBQUEsOENBQTZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLG9CQUFTLFNBQTdDO0FBQUEsZ0NBQ0ksOERBQUMsK0RBQUQ7QUFBYSxjQUFJLEVBQUMsT0FBbEI7QUFBMEIsZUFBSyxFQUFDLFVBQWhDO0FBQTJDLGVBQUssRUFBQyxzQkFBakQ7QUFBd0UsZUFBSyxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQywrREFBRDtBQUFhLGNBQUksRUFBQyxPQUFsQjtBQUEwQixlQUFLLEVBQUMsV0FBaEM7QUFBNEMsZUFBSyxFQUFDLG9CQUFsRDtBQUF1RSxlQUFLLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLCtEQUFEO0FBQWEsY0FBSSxFQUFDLE9BQWxCO0FBQTBCLGVBQUssRUFBQyxjQUFoQztBQUErQyxlQUFLLEVBQUMsMkJBQXJEO0FBQWlGLGVBQUssRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIO0tBaEJ1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvVHJhbnNhY3Rpb25TdGVwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzZXJ2ZVN0ZXAgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9SZXNlcnZhdGlvblN0ZXBcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25TdGVwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVcIiBjbGFzc05hbWU9XCJmZWF0dXJlIHB0LTUwIHBiLTUwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LWNlbnRlciBtYi0zMFwiPkhvdyBUbyBEbyA8YnIvPiBPbmxpbmUgUmVzZXJ2YXRpb25cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGdhcC1sZy0wIGdhcC00XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgIDxSZXNlcnZlU3RlcCBpY29uPVwic3RlcDFcIiB0aXRsZT1cIjEuIFN0YXJ0XCIgZGVzYzE9XCJSZWdpc3RyYXNpIGFrdW4gYW5kYVwiIGRlc2MyPVwiamlrYSBiZWx1bSBtZW1pbGlraSBha3VuXCIvPlxyXG4gICAgICAgICAgICA8UmVzZXJ2ZVN0ZXAgaWNvbj1cInN0ZXAyXCIgdGl0bGU9XCIyLiBMb2dpbiBcIiBkZXNjMT1cIkxvZ2luIGRlbmdhbiBha3VuIFwiIGRlc2MyPVwieWFuZyB0ZWxhaCB0ZXJlZ2lzdHJhc2lcIi8+XHJcbiAgICAgICAgICAgIDxSZXNlcnZlU3RlcCBpY29uPVwic3RlcDNcIiB0aXRsZT1cIjMuIFJlc2VydmFzaVwiIGRlc2MxPVwiTWFzdWsga2VoYWxhbWFuIHJlc2VydmFzaVwiIGRlc2MyPVwidW50dWsgbWVsYWt1a2FuIHJlc2VydmFzaVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVzZXJ2ZVN0ZXAiLCJUcmFuc2FjdGlvblN0ZXAiXSwic291cmNlUm9vdCI6IiJ9