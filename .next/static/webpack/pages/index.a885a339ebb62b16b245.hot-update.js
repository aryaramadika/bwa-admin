"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/molecules/ReservationStep/index.tsx":
/*!********************************************************!*\
  !*** ./components/molecules/ReservationStep/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StepItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\molecules\\ReservationStep\\index.tsx";

function StepItem(props) {
  var icon = props.icon,
      title = props.title,
      desc1 = props.desc1,
      desc2 = props.desc2;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-lg-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card feature-card border-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/icon/".concat(icon, ".svg"),
        alt: "icon step",
        className: "mb-30",
        width: 80,
        height: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "fw-semibold text-2xl mb-2 color-palette-1",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-0",
        children: [desc1, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), desc2]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = StepItem;

var _c;

$RefreshReg$(_c, "StepItem");

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


/***/ }),

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
          desc1: "Pilih salah satu game",
          desc2: "yang ingin kamu top up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__.default, {
          icon: "step2",
          title: "2. 2. Fill Up ",
          desc1: "Top up sesuai dengan",
          desc2: "nominal yang sudah tersedia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ReservationStep__WEBPACK_IMPORTED_MODULE_0__.default, {
          icon: "step3",
          title: "3. Be a Winner",
          desc1: "Siap digunakan untuk",
          desc2: "improve permainan kamu"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTg4NWEzMzllYmI2MmIxNmIyNDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUNyRCxNQUNFQyxJQURGLEdBRUlELEtBRkosQ0FDRUMsSUFERjtBQUFBLE1BQ1FDLEtBRFIsR0FFSUYsS0FGSixDQUNRRSxLQURSO0FBQUEsTUFDZUMsS0FEZixHQUVJSCxLQUZKLENBQ2VHLEtBRGY7QUFBQSxNQUNzQkMsS0FEdEIsR0FFSUosS0FGSixDQUNzQkksS0FEdEI7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw4QkFDRTtBQUFLLFdBQUcsa0JBQVdILElBQVgsU0FBUjtBQUErQixXQUFHLEVBQUMsV0FBbkM7QUFBK0MsaUJBQVMsRUFBQyxPQUF6RDtBQUFpRSxhQUFLLEVBQUUsRUFBeEU7QUFBNEUsY0FBTSxFQUFFO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUcsaUJBQVMsRUFBQywyQ0FBYjtBQUFBLGtCQUEwREM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBRyxpQkFBUyxFQUFDLDhCQUFiO0FBQUEsbUJBQ0dDLEtBREgsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0dDLEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7S0FqQnVCTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054Qjs7QUFFZSxTQUFTTyxlQUFULEdBQTJCO0FBQ3RDLHNCQUNJO0FBQVMsTUFBRSxFQUFDLFNBQVo7QUFBc0IsYUFBUyxFQUFDLHFCQUFoQztBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLG9EQUFkO0FBQUEsOENBQTZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLG9CQUFTLFNBQTdDO0FBQUEsZ0NBQ0ksOERBQUMsK0RBQUQ7QUFBYSxjQUFJLEVBQUMsT0FBbEI7QUFBMEIsZUFBSyxFQUFDLFVBQWhDO0FBQTJDLGVBQUssRUFBQyx1QkFBakQ7QUFBeUUsZUFBSyxFQUFDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQywrREFBRDtBQUFhLGNBQUksRUFBQyxPQUFsQjtBQUEwQixlQUFLLEVBQUMsZ0JBQWhDO0FBQWlELGVBQUssRUFBQyxzQkFBdkQ7QUFBOEUsZUFBSyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQywrREFBRDtBQUFhLGNBQUksRUFBQyxPQUFsQjtBQUEwQixlQUFLLEVBQUMsZ0JBQWhDO0FBQWlELGVBQUssRUFBQyxzQkFBdkQ7QUFBOEUsZUFBSyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7S0FoQnVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9SZXNlcnZhdGlvblN0ZXAvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UcmFuc2FjdGlvblN0ZXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgU3RlcEl0ZW1Qcm9wcyB7XG4gICAgaWNvbjogJ3N0ZXAxJyB8ICdzdGVwMicgfCAnc3RlcDMnXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjMTogc3RyaW5nO1xuICAgIGRlc2MyOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwSXRlbShwcm9wczogU3RlcEl0ZW1Qcm9wcykge1xuICBjb25zdCB7XG4gICAgaWNvbiwgdGl0bGUsIGRlc2MxLCBkZXNjMixcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmZWF0dXJlLWNhcmQgYm9yZGVyLTBcIj5cbiAgICAgICAgPGltZyBzcmM9e2AvaWNvbi8ke2ljb259LnN2Z2B9IGFsdD1cImljb24gc3RlcFwiIGNsYXNzTmFtZT1cIm1iLTMwXCIgd2lkdGg9ezgwfSBoZWlnaHQ9ezgwfSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1zZW1pYm9sZCB0ZXh0LTJ4bCBtYi0yIGNvbG9yLXBhbGV0dGUtMVwiPnt0aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG1iLTBcIj5cbiAgICAgICAgICB7ZGVzYzF9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2Rlc2MyfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZXNlcnZlU3RlcCBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1Jlc2VydmF0aW9uU3RlcFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvblN0ZXAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZVwiIGNsYXNzTmFtZT1cImZlYXR1cmUgcHQtNTAgcGItNTBcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtY2VudGVyIG1iLTMwXCI+SG93IFRvIERvIDxici8+IE9ubGluZSBSZXNlcnZhdGlvblxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ2FwLWxnLTAgZ2FwLTRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgPFJlc2VydmVTdGVwIGljb249XCJzdGVwMVwiIHRpdGxlPVwiMS4gU3RhcnRcIiBkZXNjMT1cIlBpbGloIHNhbGFoIHNhdHUgZ2FtZVwiIGRlc2MyPVwieWFuZyBpbmdpbiBrYW11IHRvcCB1cFwiLz5cclxuICAgICAgICAgICAgPFJlc2VydmVTdGVwIGljb249XCJzdGVwMlwiIHRpdGxlPVwiMi4gMi4gRmlsbCBVcCBcIiBkZXNjMT1cIlRvcCB1cCBzZXN1YWkgZGVuZ2FuXCIgZGVzYzI9XCJub21pbmFsIHlhbmcgc3VkYWggdGVyc2VkaWFcIi8+XHJcbiAgICAgICAgICAgIDxSZXNlcnZlU3RlcCBpY29uPVwic3RlcDNcIiB0aXRsZT1cIjMuIEJlIGEgV2lubmVyXCIgZGVzYzE9XCJTaWFwIGRpZ3VuYWthbiB1bnR1a1wiIGRlc2MyPVwiaW1wcm92ZSBwZXJtYWluYW4ga2FtdVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiU3RlcEl0ZW0iLCJwcm9wcyIsImljb24iLCJ0aXRsZSIsImRlc2MxIiwiZGVzYzIiLCJSZXNlcnZlU3RlcCIsIlRyYW5zYWN0aW9uU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=