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
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjZkY2U0YjVlMmRlNjY1NDA3MjY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBVWUsU0FBU0ksaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQW9EO0FBQUE7O0FBQzNELG1CQUF5QkYsc0RBQVMsRUFBbEM7QUFBQSxNQUFPRyxLQUFQLGNBQU9BLEtBQVA7QUFBQSxNQUFjQyxPQUFkLGNBQWNBLE9BQWQ7O0FBQ0EsTUFBT0MsSUFBUCxHQUFlSCxLQUFmLENBQU9HLElBQVA7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkYsSUFBdEIsRUFIMkQsQ0FPM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSixzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQVMsZUFBUyxFQUFDLHVCQUFuQjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0ksOERBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBVUosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZJO0FBQUEsa0JBREo7QUFjSDs7R0E5QnVCSjtVQUNTRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXNlcnZhdGlvblBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25EZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Jlc2VydmF0aW9uRGV0YWlsXCI7XHJcbmltcG9ydCBwcmljZURldGFpbFRyZWF0bWVudCBmcm9tIFwiLi4vcHJpY2VEZXRhaWxUcmVhdG1lbnRcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG5cclxuXHJcbmludGVyZmFjZSByZXNlcnZhdGlvblByb3Bze1xyXG4gICAgdXNlcjpVc2VyVHlwZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzZXJ2YXRpb25EZXRhaWwocHJvcHM6IHJlc2VydmF0aW9uUHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7cXVlcnksIGlzUmVhZHl9ID0gdXNlUm91dGVyKCk7XHJcbiAgICAgICAgY29uc3Qge3VzZXJ9ID0gcHJvcHNcclxuICAgICAgICBjb25zb2xlLmxvZygnVVNFUiA6ICcsdXNlcilcclxuICAgIFxyXG4gICAgICAgXHJcbiAgICBcclxuICAgICAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihpc1JlYWR5KXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdSb3V0ZXIgaXMgYXZhaWxhYmxlJywgcXVlcnkuaWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gZ2V0Vm91Y2hlckRldGFpbEFQSShxdWVyeS5pZCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdSb3V0ZXIgaXMgbm90IGF2YWlsYWJsZScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwgW2lzUmVhZHldKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbCBwdC1sZy02MCBwYi01MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxSZXNlcnZhdGlvbkRldGFpbCAvPlxyXG4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcX0pIHtcclxuICAgIGNvbnN0IHt0b2tlbn0gPSByZXEuY29va2llcztcclxuICAgIGNvbnNvbGUubG9nKCdUT0tFTiA6Jyx0b2tlbilcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb246ICcvc2lnbi1pbicsXHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIGNvbnN0IEp3dFRva2VuID1CdWZmZXIuZnJvbSh0b2tlbiwnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJyk7IFxyXG4gICAgY29uc3QgcGF5bG9hZDogSldUUGF5bG9hZFR5cGVzID0gand0X2RlY29kZShKd3RUb2tlbilcclxuICAgIC8vIGNvbnNvbGUubG9nKCdQYXlsb2FkIDogJywgcGF5bG9hZClcclxuICAgIGNvbnN0IHVzZXJQYXlsb2FkIDogVXNlclR5cGVzID0gcGF5bG9hZC5wYXRpZW50XHJcbiAgICBjb25zdCBJTUcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTUFHRVxyXG4gICAgdXNlclBheWxvYWQuYXZhdGFyID0gYCR7SU1HfS8ke3VzZXJQYXlsb2FkLmF2YXRhcn1gXHJcblxyXG4gICAgLy8gY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0UgIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgdXNlcjp1c2VyUGF5bG9hZCxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkZvb3RlciIsIlJlc2VydmF0aW9uRGV0YWlsIiwiTmF2YmFyIiwidXNlUm91dGVyIiwicmVzZXJ2YXRpb25EZXRhaWwiLCJwcm9wcyIsInF1ZXJ5IiwiaXNSZWFkeSIsInVzZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==