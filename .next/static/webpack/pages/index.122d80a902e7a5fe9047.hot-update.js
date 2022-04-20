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
      setIsLogin(true);
    } // console.log('User  :',user)

  }, []);

  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      className: "nav-item my-auto dropdown d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "vertical-line d-lg-block d-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
            lineNumber: 42,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
                lineNumber: 51,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
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
                lineNumber: 52,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
                lineNumber: 53,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
                lineNumber: 55,
                columnNumber: 47
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
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 66,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTIyZDgwYTkwMmU3YTVmZTkwNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS2UsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUMzQixrQkFBOEJILCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9JLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCTCwrQ0FBUSxDQUFDO0FBQzdCTSxJQUFBQSxNQUFNLEVBQUUsRUFEcUI7QUFFN0JDLElBQUFBLEtBQUssRUFBRSxFQUZzQjtBQUc3QkMsSUFBQUEsRUFBRSxFQUFFLEVBSHlCO0FBSTdCQyxJQUFBQSxJQUFJLEVBQUUsRUFKdUI7QUFLN0JDLElBQUFBLFdBQVcsRUFBRSxFQUxnQjtBQU03QkMsSUFBQUEsUUFBUSxFQUFFO0FBTm1CLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYixpQkFGMkIsQ0FVM0I7OztBQUVBZCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNZSxLQUFLLEdBQUdiLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdhLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBTyxHQUFHaEIsbURBQVUsQ0FBQ2MsUUFBRCxDQUExQjtBQUNBLFVBQU1KLEtBQUksR0FBR00sT0FBTyxDQUFDQyxPQUFyQjtBQUNBZCxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsS0FQUyxDQVVWOztBQUNILEdBWFEsRUFXUCxFQVhPLENBQVQ7O0FBYUEsTUFBR0QsT0FBSCxFQUFXO0FBQ1Asd0JBQ0k7QUFBSSxlQUFTLEVBQUMsa0NBQWQ7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQywwQkFBYjtBQUF3QyxjQUFJLEVBQUMsR0FBN0M7QUFBaUQsY0FBSSxFQUFDLFFBQXREO0FBQStELFlBQUUsRUFBQyxrQkFBbEU7QUFDSSw0QkFBZSxVQURuQjtBQUM4QiwyQkFBYyxPQUQ1QztBQUFBLGlDQUVJO0FBQ0EsZUFBRyxFQUFFUSxJQUFJLENBQUNOLE1BRFY7QUFFQSxxQkFBUyxFQUFDLGdCQUZWO0FBR0EsaUJBQUssRUFBQyxJQUhOO0FBSUEsa0JBQU0sRUFBQyxJQUpQO0FBS0EsZUFBRyxFQUFDO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFXSTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBdUMsNkJBQWdCLGtCQUF2RDtBQUFBLGtDQUNJO0FBQUEseUNBQUssOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFNBQVg7QUFBQSxxQ0FBcUI7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU8sa0JBQUksRUFBQyxHQUFaO0FBQUEscUNBQWdCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFPLGtCQUFJLEVBQUMsc0JBQVo7QUFBQSxxQ0FBbUM7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFLSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQXNCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXlCSDs7QUFDRCxzQkFDSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFVBQWI7QUFBQSw2QkFFQTtBQUFHLGlCQUFTLEVBQUMsb0VBQWI7QUFDQyxZQUFJLEVBQUMsUUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBcEV1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhci9BdXRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGF2YXRhcjogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiIFxyXG4gICAgfSk7XHJcbiAgICAvLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgICAgICAgICAgc2V0SXNMb2dpbih0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXIgIDonLHVzZXIpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGlmKGlzTG9naW4pe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gZHJvcGRvd24gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtbGluZSBkLWxnLWJsb2NrIGQtbm9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlIG1zLWxnLTQwXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGJvcmRlci0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4gPExpbmsgaHJlZj1cIi9tZW1iZXJcIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayAgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5XYWxsZXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rICBocmVmPVwiL21lbWJlci9lZGl0LXByb2ZpbGVcIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5BY2NvdW50IFNldHRpbmdzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3NpZ24taW5cIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtcy1sZy0yIHJvdW5kZWQtcGlsbFwiXHJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgU2lnblxyXG4gICAgICAgICAgICAgICAgIEluXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgPC9saT5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJqd3RfZGVjb2RlIiwiQXV0aCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiYXZhdGFyIiwiZW1haWwiLCJpZCIsIm5hbWUiLCJwaG9uZU51bWJlciIsInVzZXJuYW1lIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsInBheWxvYWQiLCJwYXRpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==