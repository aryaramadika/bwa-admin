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
    router.push('/');
    setIsLogin(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdhNzIxZDU3YjhlYWNhZDVhYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtlLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0Isa0JBQThCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPSyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3Qk4sK0NBQVEsQ0FBQztBQUM3Qk8sSUFBQUEsTUFBTSxFQUFFLEVBRHFCO0FBRTdCQyxJQUFBQSxLQUFLLEVBQUUsRUFGc0I7QUFHN0JDLElBQUFBLEVBQUUsRUFBRSxFQUh5QjtBQUk3QkMsSUFBQUEsSUFBSSxFQUFFLEVBSnVCO0FBSzdCQyxJQUFBQSxXQUFXLEVBQUUsRUFMZ0I7QUFNN0JDLElBQUFBLFFBQVEsRUFBRTtBQU5tQixHQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBUUUsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4QjtBQUVGSixFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNaUIsS0FBSyxHQUFHZixrREFBQSxDQUFZLE9BQVosQ0FBZDs7QUFDQSxRQUFHZSxLQUFILEVBQVM7QUFDTCxVQUFNRSxRQUFRLEdBQUdDLElBQUksQ0FBQ0gsS0FBRCxDQUFyQjtBQUNBLFVBQU1JLE9BQXdCLEdBQUdsQixtREFBVSxDQUFDZ0IsUUFBRCxDQUEzQztBQUNBLFVBQU1HLFdBQXVCLEdBQUdELE9BQU8sQ0FBQ0UsT0FBeEM7QUFDQSxVQUFNQyxHQUFHLEdBQUdDLHlDQUFaO0FBQ0FYLE1BQUFBLElBQUksQ0FBQ04sTUFBTCxhQUFpQmdCLEdBQWpCLGNBQXdCRixXQUFXLENBQUNkLE1BQXBDO0FBQ0FELE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVEsTUFBQUEsT0FBTyxDQUFDRCxJ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YW5pc21zL05hdmJhci9BdXRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBKV1RQYXlsb2FkVHlwZXMsIFVzZXJUeXBlcyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGF2YXRhcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiIFxyXG4gICAgfSk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogSldUUGF5bG9hZFR5cGVzID0gand0X2RlY29kZShKd3RUb2tlbilcclxuICAgICAgICAgICAgY29uc3QgdXNlclBheWxvYWQgOiBVc2VyVHlwZXMgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgICAgICAgICAgY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgICAgICAgICAgdXNlci5hdmF0YXIgPSBgJHtJTUd9LyR7dXNlclBheWxvYWQuYXZhdGFyfWBcclxuICAgICAgICAgICAgc2V0SXNMb2dpbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlciAgOicsdXNlcilcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICBzZXRJc0xvZ2luKGZhbHNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZihpc0xvZ2luKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIGRyb3Bkb3duIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWxpbmUgZC1sZy1ibG9jayBkLW5vbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBtcy1sZy00MFwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIiBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBib3JkZXItMFwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxMaW5rIGhyZWY9XCIvbWVtYmVyXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+TXkgUHJvZmlsZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+V2FsbGV0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayAgaHJlZj1cIi9tZW1iZXIvZWRpdC1wcm9maWxlXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+QWNjb3VudCBTZXR0aW5nczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17b25Mb2dvdXR9PjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkxvZyBPdXQ8L2E+PC9saT4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtcy1sZy0yIHJvdW5kZWQtcGlsbFwiXHJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgU2lnblxyXG4gICAgICAgICAgICAgICAgIEluXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgPC9saT5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJqd3RfZGVjb2RlIiwidXNlUm91dGVyIiwiQXV0aCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiYXZhdGFyIiwiZW1haWwiLCJpZCIsIm5hbWUiLCJwaG9uZU51bWJlciIsInVzZXJuYW1lIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsInBheWxvYWQiLCJ1c2VyUGF5bG9hZCIsInBhdGllbnQiLCJJTUciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU1BR0UiLCJvbkxvZ291dCIsInJlbW92ZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9