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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\Navbar\\Auth.tsx",
    _s = $RefreshSig$();





function Auth(props) {
  _s();

  var isLogin = props.isLogin;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get('token');
    var JwtToken = atob(token);
    console.log('TOKEN :', JwtToken);
  }, []);

  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
      className: "nav-item my-auto dropdown d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "vertical-line d-lg-block d-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "dropdown-toggle ms-lg-40",
          href: "#",
          role: "button",
          id: "dropdownMenuLink",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/img/avatar-1.png",
            className: "rounded-circle",
            width: "40",
            height: "40",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
          className: "dropdown-menu border-0",
          "aria-labelledby": "dropdownMenuLink",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "My Profile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member/edit-profile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Account Settings"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/sign-in",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Log Out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
    className: "nav-item my-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/sign-in",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill",
        role: "button",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(Auth, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDA5MDE4N2MyYjVlOWM5ZmJiNGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBTWUsU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXdDO0FBQUE7O0FBQ25ELE1BQU9DLE9BQVAsR0FBa0JELEtBQWxCLENBQU9DLE9BQVA7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBTUssS0FBSyxHQUFHSixrREFBQSxDQUFZLE9BQVosQ0FBZDtBQUNBLFFBQU1NLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JILFFBQXRCO0FBQ0gsR0FKUSxFQUlQLEVBSk8sQ0FBVDs7QUFNQSxNQUFHSCxPQUFILEVBQVc7QUFDUCx3QkFDSTtBQUFJLGVBQVMsRUFBQyxrQ0FBZDtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLDBCQUFiO0FBQXdDLGNBQUksRUFBQyxHQUE3QztBQUFpRCxjQUFJLEVBQUMsUUFBdEQ7QUFBK0QsWUFBRSxFQUFDLGtCQUFsRTtBQUNJLDRCQUFlLFVBRG5CO0FBQzhCLDJCQUFjLE9BRDVDO0FBQUEsaUNBRUk7QUFBSyxlQUFHLEVBQUMsbUJBQVQ7QUFBNkIscUJBQVMsRUFBQyxnQkFBdkM7QUFBd0QsaUJBQUssRUFBQyxJQUE5RDtBQUFtRSxrQkFBTSxFQUFDLElBQTFFO0FBQ0ksZUFBRyxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFPSTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBdUMsNkJBQWdCLGtCQUF2RDtBQUFBLGtDQUNJO0FBQUEseUNBQUssOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFNBQVg7QUFBQSxxQ0FBcUI7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU8sa0JBQUksRUFBQyxHQUFaO0FBQUEscUNBQWdCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFPLGtCQUFJLEVBQUMsc0JBQVo7QUFBQSxxQ0FBbUM7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFLSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQXNCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXFCSDs7QUFDRCxzQkFDSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFVBQWI7QUFBQSw2QkFFQTtBQUFHLGlCQUFTLEVBQUMsb0VBQWI7QUFDQyxZQUFJLEVBQUMsUUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBaER1QkY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhci9BdXRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5pbnRlcmZhY2UgQXV0aFByb3Bze1xyXG4gICAgaXNMb2dpbj8gOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgocHJvcHM6UGFydGlhbDxBdXRoUHJvcHM+KSB7XHJcbiAgICBjb25zdCB7aXNMb2dpbn0gPSBwcm9wcztcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgY29uc3QgSnd0VG9rZW4gPSBhdG9iKHRva2VuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0tFTiA6JyxKd3RUb2tlbilcclxuICAgIH0sW10pXHJcblxyXG4gICAgaWYoaXNMb2dpbil7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBkcm9wZG93biBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1saW5lIGQtbGctYmxvY2sgZC1ub25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgbXMtbGctNDBcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvYXZhdGFyLTEucG5nXCIgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGJvcmRlci0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4gPExpbmsgaHJlZj1cIi9tZW1iZXJcIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayAgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5XYWxsZXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rICBocmVmPVwiL21lbWJlci9lZGl0LXByb2ZpbGVcIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5BY2NvdW50IFNldHRpbmdzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3NpZ24taW5cIj48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCIgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtcy1sZy0yIHJvdW5kZWQtcGlsbFwiXHJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgU2lnblxyXG4gICAgICAgICAgICAgICAgIEluXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgPC9saT5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwiQXV0aCIsInByb3BzIiwiaXNMb2dpbiIsInRva2VuIiwiZ2V0IiwiSnd0VG9rZW4iLCJhdG9iIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=