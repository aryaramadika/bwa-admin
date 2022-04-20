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
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmU2OTI1YjRiMWI3YzFjY2M0NjY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUtlLFNBQVNLLFdBQVQsR0FBdUI7QUFBQTs7QUFDOUIsbUJBQXlCRixzREFBUyxFQUFsQztBQUFBLE1BQU9HLEtBQVAsY0FBT0EsS0FBUDtBQUFBLE1BQWNDLE9BQWQsY0FBY0EsT0FBZDs7QUFJQUgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0csT0FBSCxFQUFXO0FBQ1BDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSCxLQUFLLENBQUNJLEVBQXpDLEVBRE8sQ0FFUDtBQUNILEtBSEQsTUFHTTtBQUNGRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNIO0FBQ0osR0FQUSxFQU9OLENBQUNGLE9BQUQsQ0FQTSxDQUFUO0FBU0osc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw2QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQVVKLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSTtBQUFBLGtCQURKO0FBY0g7O0dBNUJ1QkY7VUFDU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb25QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXJcIjtcclxuaW1wb3J0IFJlc2VydmF0aW9uRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZXNlcnZhdGlvbkRldGFpbFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBKV1RQYXlsb2FkVHlwZXMsIFVzZXJUeXBlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmljZURldGFpbCgpIHtcclxuICAgICAgICBjb25zdCB7cXVlcnksIGlzUmVhZHl9ID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYoaXNSZWFkeSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUm91dGVyIGlzIGF2YWlsYWJsZScsIHF1ZXJ5LmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIGdldFZvdWNoZXJEZXRhaWxBUEkocXVlcnkuaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUm91dGVyIGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtpc1JlYWR5XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXJ2YXRpb25EZXRhaWwgLz5cclxuIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgZ2V0U2VydmVyU2lkZVByb3BzKHtyZXF9KSB7XHJcbiAgICBjb25zdCB7dG9rZW59ID0gcmVxLmNvb2tpZXM7XHJcbiAgICBjb25zb2xlLmxvZygnVE9LRU4gOicsdG9rZW4pXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3NpZ24taW4nLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICBjb25zdCBKd3RUb2tlbiA9QnVmZmVyLmZyb20odG9rZW4sJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpOyBcclxuICAgIGNvbnN0IHBheWxvYWQ6IEpXVFBheWxvYWRUeXBlcyA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICBjb25zb2xlLmxvZygnUGF5bG9hZCA6ICcsIHBheWxvYWQpXHJcblxyXG4gICAgLy8gY29uc3QgdXNlclBheWxvYWQgOiBVc2VyVHlwZXMgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgIC8vIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFICBcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHVzZXI6e30sXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIk5hdmJhciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInByaWNlRGV0YWlsIiwicXVlcnkiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==