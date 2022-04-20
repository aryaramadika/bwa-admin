"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

/***/ "./pages/reservationPage/index.tsx":
/*!*****************************************!*\
  !*** ./pages/reservationPage/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ priceDetail; }
/* harmony export */ });
/* harmony import */ var _components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/organisms/Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/organisms/ReservationDetail */ "./components/organisms/ReservationDetail/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\reservationPage\\index.tsx",
    _s = $RefreshSig$();








var __N_SSP = true;
function priceDetail() {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      query = _useRouter.query,
      isReady = _useRouter.isReady;

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (isReady) {
      console.log('Router is available', query.id); // getVoucherDetailAPI(query.id);
    } else {
      console.log('Router is not available');
    }
  }, [isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(priceDetail, "0R9hcjkWrio5VVN/xJbM1REzNYE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmRmZTY5NGY5ZTU3YjZjYzYyOTY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVlLFNBQVNLLFdBQVQsR0FBdUI7QUFBQTs7QUFDOUIsbUJBQXlCRixzREFBUyxFQUFsQztBQUFBLE1BQU9HLEtBQVAsY0FBT0EsS0FBUDtBQUFBLE1BQWNDLE9BQWQsY0FBY0EsT0FBZDs7QUFJQUgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0csT0FBSCxFQUFXO0FBQ1BDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSCxLQUFLLENBQUNJLEVBQXpDLEVBRE8sQ0FFUDtBQUNILEtBSEQsTUFHTTtBQUNGRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNIO0FBQ0osR0FQUSxFQU9OLENBQUNGLE9BQUQsQ0FQTSxDQUFUO0FBU0osc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw2QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQVVKLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSTtBQUFBLGtCQURKO0FBY0g7O0dBNUJ1QkY7VUFDU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb25QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXJcIjtcclxuaW1wb3J0IFJlc2VydmF0aW9uRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZXNlcnZhdGlvbkRldGFpbFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpY2VEZXRhaWwoKSB7XHJcbiAgICAgICAgY29uc3Qge3F1ZXJ5LCBpc1JlYWR5fSA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzUmVhZHkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlciBpcyBhdmFpbGFibGUnLCBxdWVyeS5pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXRWb3VjaGVyRGV0YWlsQVBJKHF1ZXJ5LmlkKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlciBpcyBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaXNSZWFkeV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsIHB0LWxnLTYwIHBiLTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteHhsIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFJlc2VydmF0aW9uRGV0YWlsIC8+XHJcbiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8Rm9vdGVyLz5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIkZvb3RlciIsIlJlc2VydmF0aW9uRGV0YWlsIiwiTmF2YmFyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHJpY2VEZXRhaWwiLCJxdWVyeSIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9