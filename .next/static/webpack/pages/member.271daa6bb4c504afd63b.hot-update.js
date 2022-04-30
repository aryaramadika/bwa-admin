"use strict";
self["webpackHotUpdate_N_E"]("pages/member",{

/***/ "./components/organisms/SideBar/Profile.tsx":
/*!**************************************************!*\
  !*** ./components/organisms/SideBar/Profile.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\Profile.tsx",
    _s = $RefreshSig$();





function Profile() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    avatar: '',
    name: '',
    email: ''
  }),
      user = _useState[0],
      setUser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.get('token');

    if (token) {
      var JwtToken = atob(token);
      var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(JwtToken);
      var userPayload = payload.patient; // const IMG = process.env.NEXT_PUBLIC_IMAGE
      // user.avatar = `${IMG}/${userPayload.avatar}`

      setUser(userPayload);
    } // console.log('User  :',user)

  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "user text-center pb-50 pe-30",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
      src: user.avatar,
      width: "90",
      height: "90",
      className: "img-fluid mb-20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: "fw-bold text-xl color-palette-1 m-0",
      children: user.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "color-palette-2 m-0",
      children: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Profile, "Nf2N4xNibV7hwsb8w+7RHfZux4Y=");

_c = Profile;

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjI3MWRhYTZiYjRjNTA0YWZkNjNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUM5QixrQkFBeUJILCtDQUFRLENBQUM7QUFDOUJJLElBQUFBLE1BQU0sRUFBQyxFQUR1QjtBQUU5QkMsSUFBQUEsSUFBSSxFQUFDLEVBRnlCO0FBRzlCQyxJQUFBQSxLQUFLLEVBQUM7QUFId0IsR0FBRCxDQUFqQztBQUFBLE1BQVFDLElBQVI7QUFBQSxNQUFjQyxPQUFkOztBQUtBVCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNVSxLQUFLLEdBQUdSLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdRLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBd0IsR0FBR1gsbURBQVUsQ0FBQ1MsUUFBRCxDQUEzQztBQUNBLFVBQU1HLFdBQXVCLEdBQUdELE9BQU8sQ0FBQ0UsT0FBeEMsQ0FISyxDQUlMO0FBQ0E7O0FBQ0FQLE1BQUFBLE9BQU8sQ0FBQ00sV0FBRCxDQUFQO0FBQ0gsS0FUUyxDQVlWOztBQUNILEdBYlEsRUFhUCxFQWJPLENBQVQ7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBLDRCQUNBO0FBQUssU0FBRyxFQUFFUCxJQUFJLENBQUNILE1BQWY7QUFBdUIsV0FBSyxFQUFDLElBQTdCO0FBQWtDLFlBQU0sRUFBQyxJQUF6QztBQUE4QyxlQUFTLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBSSxlQUFTLEVBQUMscUNBQWQ7QUFBQSxnQkFBcURHLElBQUksQ0FBQ0Y7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBR0E7QUFBRyxlQUFTLEVBQUMscUJBQWI7QUFBQSxnQkFBb0NFLElBQUksQ0FBQ0Q7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBM0J1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZGVCYXIvUHJvZmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcbmltcG9ydCB7IEpXVFBheWxvYWRUeXBlcywgVXNlclR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGF0YS10eXBlcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYXZhdGFyOicnLFxyXG4gICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgZW1haWw6JydcclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQ6IEpXVFBheWxvYWRUeXBlcyA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQYXlsb2FkIDogVXNlclR5cGVzID0gcGF5bG9hZC5wYXRpZW50XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFXHJcbiAgICAgICAgICAgIC8vIHVzZXIuYXZhdGFyID0gYCR7SU1HfS8ke3VzZXJQYXlsb2FkLmF2YXRhcn1gXHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlclBheWxvYWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlciAgOicsdXNlcilcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciB0ZXh0LWNlbnRlciBwYi01MCBwZS0zMFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gd2lkdGg9XCI5MFwiIGhlaWdodD1cIjkwXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTIwXCIgLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LXhsIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZS0yIG0tMFwiPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJqd3RfZGVjb2RlIiwiUHJvZmlsZSIsImF2YXRhciIsIm5hbWUiLCJlbWFpbCIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlclBheWxvYWQiLCJwYXRpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==