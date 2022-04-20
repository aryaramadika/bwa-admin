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
      var userPayload = payload.patient;
      var IMG = "https://admintbs5.herokuapp.com/uploads";
      user.avatar = "".concat(IMG, "/").concat(userPayload.avatar);
      setIsLogin(true);
      setUser(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzFkOTdkMGFhMjEzMWE1NTdjNmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS2UsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUMzQixrQkFBOEJILCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9JLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCTCwrQ0FBUSxDQUFDO0FBQzdCTSxJQUFBQSxNQUFNLEVBQUUsRUFEcUI7QUFFN0JDLElBQUFBLEtBQUssRUFBRSxFQUZzQjtBQUc3QkMsSUFBQUEsRUFBRSxFQUFFLEVBSHlCO0FBSTdCQyxJQUFBQSxJQUFJLEVBQUUsRUFKdUI7QUFLN0JDLElBQUFBLFdBQVcsRUFBRSxFQUxnQjtBQU03QkMsSUFBQUEsUUFBUSxFQUFFO0FBTm1CLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYixpQkFGMkIsQ0FVM0I7OztBQUVBZCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNZSxLQUFLLEdBQUdiLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdhLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBTyxHQUFHaEIsbURBQVUsQ0FBQ2MsUUFBRCxDQUExQjtBQUNBLFVBQU1HLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxPQUE1QjtBQUNBLFVBQU1DLEdBQUcsR0FBR0MseUNBQVo7QUFDQVYsTUFBQUEsSUFBSSxDQUFDTixNQUFMLGFBQWlCZSxHQUFqQixjQUF3QkYsV0FBVyxDQUFDYixNQUFwQztBQUNBRCxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FRLE1BQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0gsS0FWUyxDQWFWOztBQUNILEdBZFEsRUFjUCxFQWRPLENBQVQ7O0FBZ0JBLE1BQUdSLE9BQUgsRUFBVztBQUNQLHdCQUNJO0FBQUksZUFBUyxFQUFDLGtDQUFkO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsMEJBQWI7QUFBd0MsY0FBSSxFQUFDLEdBQTdDO0FBQWlELGNBQUksRUFBQyxRQUF0RDtBQUErRCxZQUFFLEVBQUMsa0JBQWxFO0FBQ0ksNEJBQWUsVUFEbkI7QUFDOEIsMkJBQWMsT0FENUM7QUFBQSxpQ0FFSTtBQUNBLGVBQUcsRUFBRVEsSUFBSSxDQUFDTixNQURWO0FBRUEscUJBQVMsRUFBQyxnQkFGVjtBQUdBLGlCQUFLLEVBQUMsSUFITjtBQUlBLGtCQUFNLEVBQUMsSUFKUDtBQUtBLGVBQUcsRUFBQztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBV0k7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQXVDLDZCQUFnQixrQkFBdkQ7QUFBQSxrQ0FDSTtBQUFBLHlDQUFLLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxTQUFYO0FBQUEscUNBQXFCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFPLGtCQUFJLEVBQUMsR0FBWjtBQUFBLHFDQUFnQjtBQUFHLHlCQUFTLEVBQUMsdUNBQWI7QUFBcUQsb0JBQUksRUFBQyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsbUNBQUksOERBQUMsa0RBQUQ7QUFBTyxrQkFBSSxFQUFDLHNCQUFaO0FBQUEscUNBQW1DO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBS0k7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBLHFDQUFzQjtBQUFHLHlCQUFTLEVBQUMsdUNBQWI7QUFBcUQsb0JBQUksRUFBQyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF5Qkg7O0FBQ0Qsc0JBQ0k7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxVQUFiO0FBQUEsNkJBRUE7QUFBRyxpQkFBUyxFQUFDLG9FQUFiO0FBQ0MsWUFBSSxFQUFDLFFBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXZFdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZiYXIvQXV0aC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAgICAgICB1c2VybmFtZTogXCJcIiBcclxuICAgIH0pO1xyXG4gICAgLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBqd3RfZGVjb2RlKEp3dFRva2VuKVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyUGF5bG9hZCA9IHBheWxvYWQucGF0aWVudFxyXG4gICAgICAgICAgICBjb25zdCBJTUcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTUFHRVxyXG4gICAgICAgICAgICB1c2VyLmF2YXRhciA9IGAke0lNR30vJHt1c2VyUGF5bG9hZC5hdmF0YXJ9YFxyXG4gICAgICAgICAgICBzZXRJc0xvZ2luKHRydWUpXHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyICA6Jyx1c2VyKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBpZihpc0xvZ2luKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIGRyb3Bkb3duIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWxpbmUgZC1sZy1ibG9jayBkLW5vbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBtcy1sZy00MFwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIiBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBib3JkZXItMFwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxMaW5rIGhyZWY9XCIvbWVtYmVyXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+TXkgUHJvZmlsZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+V2FsbGV0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayAgaHJlZj1cIi9tZW1iZXIvZWRpdC1wcm9maWxlXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+QWNjb3VudCBTZXR0aW5nczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9zaWduLWluXCI+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiIGhyZWY9XCIjXCI+TG9nIE91dDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9zaWduLWluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24taW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXMtbGctMiByb3VuZGVkLXBpbGxcIlxyXG4gICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgIFNpZ25cclxuICAgICAgICAgICAgICAgICBJblxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiand0X2RlY29kZSIsIkF1dGgiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImF2YXRhciIsImVtYWlsIiwiaWQiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJ1c2VybmFtZSIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlclBheWxvYWQiLCJwYXRpZW50IiwiSU1HIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lNQUdFIl0sInNvdXJjZVJvb3QiOiIifQ==