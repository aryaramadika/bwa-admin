"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/organisms/Navbar/Auth.tsx":
/*!**********************************************!*\
  !*** ./components/organisms/Navbar/Auth.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auth; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\Navbar\\Auth.tsx",
    _s = $RefreshSig$();







function Auth() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    avatar: "",
    email: "",
    id: "",
    name: "",
    phoneNumber: "",
    username: ""
  }),
      user = _useState2[0],
      setUser = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get('token');

    if (token) {
      var JwtToken = atob(token);
      var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.default)(JwtToken);
      var userPayload = payload.patient;
      var IMG = "https://admintbs5.herokuapp.com/uploads";
      user.avatar = "".concat(IMG, "/").concat(userPayload.avatar);
      setIsLogin(true);
      setUser(user);
    } // console.log('User  :',user)

  }, []);

  var onLogout = function onLogout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove('token');
    router.push('/'); // setIsLogin(false);
  };

  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
      className: "nav-item my-auto dropdown d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "vertical-line d-lg-block d-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          className: "dropdown-toggle ms-lg-40",
          href: "#",
          role: "button",
          id: "dropdownMenuLink",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: user.avatar,
            className: "rounded-circle",
            width: "40",
            height: "40",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
          className: "dropdown-menu border-0",
          "aria-labelledby": "dropdownMenuLink",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "My Profile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member/edit-profile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Account Settings"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            onClick: onLogout,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: "dropdown-item text-lg color-palette-2",
              href: "#",
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 44
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, this), "                "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
    className: "nav-item my-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/sign-in",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: "btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill",
        role: "button",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, this);
}

_s(Auth, "4wHHVEM1kA9l4J2upcjoKNSzXFs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Auth;

var _c;

$RefreshReg$(_c, "Auth");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzliNTAxMTE3ZTE0YTFlYTQ5NTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtlLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0Isa0JBQThCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPSyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3Qk4sK0NBQVEsQ0FBQztBQUM3Qk8sSUFBQUEsTUFBTSxFQUFFLEVBRHFCO0FBRTdCQyxJQUFBQSxLQUFLLEVBQUUsRUFGc0I7QUFHN0JDLElBQUFBLEVBQUUsRUFBRSxFQUh5QjtBQUk3QkMsSUFBQUEsSUFBSSxFQUFFLEVBSnVCO0FBSzdCQyxJQUFBQSxXQUFXLEVBQUUsRUFMZ0I7QUFNN0JDLElBQUFBLFFBQVEsRUFBRTtBQU5tQixHQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBUUUsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4QjtBQUVGSixFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNaUIsS0FBSyxHQUFHZixrREFBQSxDQUFZLE9BQVosQ0FBZDs7QUFDQSxRQUFHZSxLQUFILEVBQVM7QUFDTCxVQUFNRSxRQUFRLEdBQUdDLElBQUksQ0FBQ0gsS0FBRCxDQUFyQjtBQUNBLFVBQU1JLE9BQXdCLEdBQUdsQixtREFBVSxDQUFDZ0IsUUFBRCxDQUEzQztBQUNBLFVBQU1HLFdBQXVCLEdBQUdELE9BQU8sQ0FBQ0UsT0FBeEM7QUFDQSxVQUFNQyxHQUFHLEdBQUdDLHlDQUFaO0FBQ0FYLE1BQUFBLElBQUksQ0FBQ04sTUFBTCxhQUFpQmdCLEdBQWpCLGNBQXdCRixXQUFXLENBQUNkLE1BQXBDO0FBQ0FELE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVEsTUFBQUEsT0FBTyxDQUFDRCxJ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c3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAgICAgICB1c2VybmFtZTogXCJcIiBcclxuICAgIH0pO1xyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQ6IEpXVFBheWxvYWRUeXBlcyA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQYXlsb2FkIDogVXNlclR5cGVzID0gcGF5bG9hZC5wYXRpZW50XHJcbiAgICAgICAgICAgIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFXHJcbiAgICAgICAgICAgIHVzZXIuYXZhdGFyID0gYCR7SU1HfS8ke3VzZXJQYXlsb2FkLmF2YXRhcn1gXHJcbiAgICAgICAgICAgIHNldElzTG9naW4odHJ1ZSlcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXIgIDonLHVzZXIpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgLy8gc2V0SXNMb2dpbihmYWxzZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYoaXNMb2dpbil7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBkcm9wZG93biBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1saW5lIGQtbGctYmxvY2sgZC1ub25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgbXMtbGctNDBcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgYm9yZGVyLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiA8TGluayBocmVmPVwiL21lbWJlclwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPk15IFByb2ZpbGU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rICBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPldhbGxldDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvbWVtYmVyL2VkaXQtcHJvZmlsZVwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkFjY291bnQgU2V0dGluZ3M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e29uTG9nb3V0fT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+ICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9zaWduLWluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24taW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXMtbGctMiByb3VuZGVkLXBpbGxcIlxyXG4gICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgIFNpZ25cclxuICAgICAgICAgICAgICAgICBJblxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiand0X2RlY29kZSIsInVzZVJvdXRlciIsIkF1dGgiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImF2YXRhciIsImVtYWlsIiwiaWQiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJ1c2VybmFtZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlclBheWxvYWQiLCJwYXRpZW50IiwiSU1HIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lNQUdFIiwib25Mb2dvdXQiLCJyZW1vdmUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==