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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
      setUser = _useState2[1]; //   const router = useRouter();


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get('token');

    if (token) {
      var JwtToken = atob(token);
      var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.default)(JwtToken);
      var _user = payload.patient;
      var IMG = "https://admintbs5.herokuapp.com/uploads";
      _user.avatar = "".concat(IMG, "/").concat(_user.avatar);
      setIsLogin(true);
      setUser(_user);
    } // console.log('User  :',user)

  }, []);

  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      className: "nav-item my-auto dropdown d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "vertical-line d-lg-block d-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "dropdown-toggle ms-lg-40",
          href: "#",
          role: "button",
          id: "dropdownMenuLink",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: user.avatar,
            className: "rounded-circle",
            width: "40",
            height: "40",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "dropdown-menu border-0",
          "aria-labelledby": "dropdownMenuLink",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "My Profile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member/edit-profile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Account Settings"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/sign-in",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Log Out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
    className: "nav-item my-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/sign-in",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: "btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill",
        role: "button",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, this);
}

_s(Auth, "Y/bdSzBw/tEPl85WAKYtQKCjwOc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmEzYzMyYjg5NTA5MDllMTRiM2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS2UsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUMzQixrQkFBOEJILCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9JLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCTCwrQ0FBUSxDQUFDO0FBQzdCTSxJQUFBQSxNQUFNLEVBQUUsRUFEcUI7QUFFN0JDLElBQUFBLEtBQUssRUFBRSxFQUZzQjtBQUc3QkMsSUFBQUEsRUFBRSxFQUFFLEVBSHlCO0FBSTdCQyxJQUFBQSxJQUFJLEVBQUUsRUFKdUI7QUFLN0JDLElBQUFBLFdBQVcsRUFBRSxFQUxnQjtBQU03QkMsSUFBQUEsUUFBUSxFQUFFO0FBTm1CLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYixpQkFGMkIsQ0FVM0I7OztBQUVBZCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNZSxLQUFLLEdBQUdiLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdhLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBTyxHQUFHaEIsbURBQVUsQ0FBQ2MsUUFBRCxDQUExQjtBQUNBLFVBQU1KLEtBQUksR0FBR00sT0FBTyxDQUFDQyxPQUFyQjtBQUNBLFVBQU1DLEdBQUcsR0FBR0MseUNBQVo7QUFDQVQsTUFBQUEsS0FBSSxDQUFDTixNQUFMLGFBQWlCYyxHQUFqQixjQUF3QlIsS0FBSSxDQUFDTixNQUE3QjtBQUNBRCxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FRLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBRCxDQUFQO0FBQ0gsS0FWUyxDQWFWOztBQUNILEdBZFEsRUFjUCxFQWRPLENBQVQ7O0FBZ0JBLE1BQUdSLE9BQUgsRUFBVztBQUNQLHdCQUNJO0FBQUksZUFBUyxFQUFDLGtDQUFkO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsMEJBQWI7QUFBd0MsY0FBSSxFQUFDLEdBQTdDO0FBQWlELGNBQUksRUFBQyxRQUF0RDtBQUErRCxZQUFFLEVBQUMsa0JBQWxFO0FBQ0ksNEJBQWUsVUFEbkI7QUFDOEIsMkJBQWMsT0FENUM7QUFBQSxpQ0FFSTtBQUNBLGVBQUcsRUFBRVEsSUFBSSxDQUFDTixNQURWO0FBRUEscUJBQVMsRUFBQyxnQkFGVjtBQUdBLGlCQUFLLEVBQUMsSUFITjtBQUlBLGtCQUFNLEVBQUMsSUFKUDtBQUtBLGVBQUcsRUFBQztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBV0k7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQXVDLDZCQUFnQixrQkFBdkQ7QUFBQSxrQ0FDSTtBQUFBLHlDQUFLLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxTQUFYO0FBQUEscUNBQXFCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFPLGtCQUFJLEVBQUMsR0FBWjtBQUFBLHFDQUFnQjtBQUFHLHlCQUFTLEVBQUMsdUNBQWI7QUFBcUQsb0JBQUksRUFBQyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsbUNBQUksOERBQUMsa0RBQUQ7QUFBTyxrQkFBSSxFQUFDLHNCQUFaO0FBQUEscUNBQW1DO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBS0k7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBLHFDQUFzQjtBQUFHLHlCQUFTLEVBQUMsdUNBQWI7QUFBcUQsb0JBQUksRUFBQyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF5Qkg7O0FBQ0Qsc0JBQ0k7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxVQUFiO0FBQUEsNkJBRUE7QUFBRyxpQkFBUyxFQUFDLG9FQUFiO0FBQ0MsWUFBSSxFQUFDLFFBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXZFdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZiYXIvQXV0aC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAgICAgICB1c2VybmFtZTogXCJcIiBcclxuICAgIH0pO1xyXG4gICAgLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBqd3RfZGVjb2RlKEp3dFRva2VuKVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gcGF5bG9hZC5wYXRpZW50XHJcbiAgICAgICAgICAgIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFXHJcbiAgICAgICAgICAgIHVzZXIuYXZhdGFyID0gYCR7SU1HfS8ke3VzZXIuYXZhdGFyfWBcclxuICAgICAgICAgICAgc2V0SXNMb2dpbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlciAgOicsdXNlcilcclxuICAgIH0sW10pXHJcblxyXG4gICAgaWYoaXNMb2dpbil7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBkcm9wZG93biBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1saW5lIGQtbGctYmxvY2sgZC1ub25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgbXMtbGctNDBcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgYm9yZGVyLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiA8TGluayBocmVmPVwiL21lbWJlclwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPk15IFByb2ZpbGU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rICBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPldhbGxldDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvbWVtYmVyL2VkaXQtcHJvZmlsZVwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkFjY291bnQgU2V0dGluZ3M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2lnbi1pblwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkxvZyBPdXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmID0gXCIvc2lnbi1pblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLWluIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1zLWxnLTIgcm91bmRlZC1waWxsXCJcclxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICBTaWduXHJcbiAgICAgICAgICAgICAgICAgSW5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICA8L2xpPlxyXG5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsImp3dF9kZWNvZGUiLCJBdXRoIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJhdmF0YXIiLCJlbWFpbCIsImlkIiwibmFtZSIsInBob25lTnVtYmVyIiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwiZ2V0IiwiSnd0VG9rZW4iLCJhdG9iIiwicGF5bG9hZCIsInBhdGllbnQiLCJJTUciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU1BR0UiXSwic291cmNlUm9vdCI6IiJ9