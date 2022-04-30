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
      className: "img-fluid mb-20",
      style: {
        borderRadius: "100%"
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLmU3OWNiOGU2MjAwMTNlYjc3NjgwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUM5QixrQkFBeUJILCtDQUFRLENBQUM7QUFDOUJJLElBQUFBLE1BQU0sRUFBQyxFQUR1QjtBQUU5QkMsSUFBQUEsSUFBSSxFQUFDLEVBRnlCO0FBRzlCQyxJQUFBQSxLQUFLLEVBQUM7QUFId0IsR0FBRCxDQUFqQztBQUFBLE1BQVFDLElBQVI7QUFBQSxNQUFjQyxPQUFkOztBQUtBVCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNVSxLQUFLLEdBQUdSLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdRLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBd0IsR0FBR1gsbURBQVUsQ0FBQ1MsUUFBRCxDQUEzQztBQUNBLFVBQU1HLFdBQXVCLEdBQUdELE9BQU8sQ0FBQ0UsT0FBeEMsQ0FISyxDQUlMO0FBQ0E7O0FBQ0FQLE1BQUFBLE9BQU8sQ0FBQ00sV0FBRCxDQUFQO0FBQ0gsS0FUUyxDQVlWOztBQUNILEdBYlEsRUFhUCxFQWJPLENBQVQ7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBLDRCQUNBO0FBQUssU0FBRyxFQUFFUCxJQUFJLENBQUNILE1BQWY7QUFBdUIsV0FBSyxFQUFDLElBQTdCO0FBQWtDLFlBQU0sRUFBQyxJQUF6QztBQUE4QyxlQUFTLEVBQUMsaUJBQXhEO0FBQTBFLFdBQUssRUFBRTtBQUFDWSxRQUFBQSxZQUFZLEVBQUM7QUFBZDtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFJLGVBQVMsRUFBQyxxQ0FBZDtBQUFBLGdCQUFxRFQsSUFBSSxDQUFDRjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBLGdCQUFvQ0UsSUFBSSxDQUFDRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7R0EzQnVCSDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2lkZUJhci9Qcm9maWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6JycsXHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDonJ1xyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogSldUUGF5bG9hZFR5cGVzID0gand0X2RlY29kZShKd3RUb2tlbilcclxuICAgICAgICAgICAgY29uc3QgdXNlclBheWxvYWQgOiBVc2VyVHlwZXMgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgICAgICAgICAgLy8gY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgICAgICAgICAgLy8gdXNlci5hdmF0YXIgPSBgJHtJTUd9LyR7dXNlclBheWxvYWQuYXZhdGFyfWBcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyUGF5bG9hZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyICA6Jyx1c2VyKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIHRleHQtY2VudGVyIHBiLTUwIHBlLTMwXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiOTBcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMjBcIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjEwMCVcIn19IC8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC14bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMiBtLTBcIj57dXNlci5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiand0X2RlY29kZSIsIlByb2ZpbGUiLCJhdmF0YXIiLCJuYW1lIiwiZW1haWwiLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwiZ2V0IiwiSnd0VG9rZW4iLCJhdG9iIiwicGF5bG9hZCIsInVzZXJQYXlsb2FkIiwicGF0aWVudCIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=