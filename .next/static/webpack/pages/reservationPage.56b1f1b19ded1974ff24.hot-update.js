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
/* harmony export */   "default": function() { return /* binding */ reservationDetail; }
/* harmony export */ });
/* harmony import */ var _components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/organisms/Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/organisms/ReservationDetail */ "./components/organisms/ReservationDetail/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\reservationPage\\index.tsx",
    _s = $RefreshSig$();







var __N_SSP = true;
function reservationDetail(props) {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      query = _useRouter.query,
      isReady = _useRouter.isReady;

  var user = props.user;
  console.log('USER : ', user); // useEffect(() => {
  //     if(isReady){
  //         console.log('Router is available', query.id);
  //         // getVoucherDetailAPI(query.id);
  //     } else{
  //         console.log('Router is not available');
  //     }
  // }, [isReady]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(reservationDetail, "s+9a8e7Zxwh94UYy+Obq1E+xbIs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjU2YjFmMWIxOWRlZDE5NzRmZjI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBVWUsU0FBU0ksaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQW9EO0FBQUE7O0FBQzNELG1CQUF5QkYsc0RBQVMsRUFBbEM7QUFBQSxNQUFPRyxLQUFQLGNBQU9BLEtBQVA7QUFBQSxNQUFjQyxPQUFkLGNBQWNBLE9BQWQ7O0FBQ0EsTUFBT0MsSUFBUCxHQUFlSCxLQUFmLENBQU9HLElBQVA7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkYsSUFBdEIsRUFIMkQsQ0FPM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSixzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQVMsZUFBUyxFQUFDLHVCQUFuQjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0ksOERBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBVUosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZJO0FBQUEsa0JBREo7QUFjSDs7R0E5QnVCSjtVQUNTRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXNlcnZhdGlvblBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25EZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Jlc2VydmF0aW9uRGV0YWlsXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEpXVFBheWxvYWRUeXBlcywgVXNlclR5cGVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS10eXBlcyc7XHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuXHJcblxyXG5pbnRlcmZhY2UgcmVzZXJ2YXRpb25Qcm9wc3tcclxuICAgIHVzZXI6VXNlclR5cGVzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2VydmF0aW9uRGV0YWlsKHByb3BzOiByZXNlcnZhdGlvblByb3BzKSB7XHJcbiAgICAgICAgY29uc3Qge3F1ZXJ5LCBpc1JlYWR5fSA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgIGNvbnN0IHt1c2VyfSA9IHByb3BzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VTRVIgOiAnLHVzZXIpXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYoaXNSZWFkeSl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnUm91dGVyIGlzIGF2YWlsYWJsZScsIHF1ZXJ5LmlkKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGdldFZvdWNoZXJEZXRhaWxBUEkocXVlcnkuaWQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnUm91dGVyIGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIFtpc1JlYWR5XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXJ2YXRpb25EZXRhaWwgLz5cclxuIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgZ2V0U2VydmVyU2lkZVByb3BzKHtyZXF9KSB7XHJcbiAgICBjb25zdCB7dG9rZW59ID0gcmVxLmNvb2tpZXM7XHJcbiAgICBjb25zb2xlLmxvZygnVE9LRU4gOicsdG9rZW4pXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3NpZ24taW4nLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICBjb25zdCBKd3RUb2tlbiA9QnVmZmVyLmZyb20odG9rZW4sJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpOyBcclxuICAgIGNvbnN0IHBheWxvYWQ6IEpXVFBheWxvYWRUeXBlcyA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICAvLyBjb25zb2xlLmxvZygnUGF5bG9hZCA6ICcsIHBheWxvYWQpXHJcbiAgICBjb25zdCB1c2VyUGF5bG9hZCA6IFVzZXJUeXBlcyA9IHBheWxvYWQucGF0aWVudFxyXG4gICAgY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgIHVzZXJQYXlsb2FkLmF2YXRhciA9IGAke0lNR30vJHt1c2VyUGF5bG9hZC5hdmF0YXJ9YFxyXG5cclxuICAgIC8vIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFICBcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHVzZXI6dXNlclBheWxvYWQsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIk5hdmJhciIsInVzZVJvdXRlciIsInJlc2VydmF0aW9uRGV0YWlsIiwicHJvcHMiLCJxdWVyeSIsImlzUmVhZHkiLCJ1c2VyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=