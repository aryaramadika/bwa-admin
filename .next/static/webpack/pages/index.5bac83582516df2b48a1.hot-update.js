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






function Auth(props) {
  _s();

  var isLogin = props.isLogin;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get('token');
    var JwtToken = atob(token);
    var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.default)(JwtToken);
    var user = payload.patient;
    console.log('User  :', user);
  }, []);

  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      className: "nav-item my-auto dropdown d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "vertical-line d-lg-block d-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
            src: "/img/avatar-1.png",
            className: "rounded-circle",
            width: "40",
            height: "40",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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
                lineNumber: 34,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
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
                lineNumber: 35,
                columnNumber: 41
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/member/edit-profile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "dropdown-item text-lg color-palette-2",
                href: "#",
                children: "Account Settings"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
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
                lineNumber: 38,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
        lineNumber: 49,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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


/***/ }),

/***/ "./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidTokenError": function() { return /* binding */ n; }
/* harmony export */ });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ __webpack_exports__["default"] = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWJhYzgzNTgyNTE2ZGYyYjQ4YTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTWUsU0FBU0ksSUFBVCxDQUFjQyxLQUFkLEVBQXdDO0FBQUE7O0FBQ25ELE1BQU9DLE9BQVAsR0FBa0JELEtBQWxCLENBQU9DLE9BQVA7QUFFQUwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBTU0sS0FBSyxHQUFHTCxrREFBQSxDQUFZLE9BQVosQ0FBZDtBQUNBLFFBQU1PLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsUUFBTUksT0FBTyxHQUFHUixtREFBVSxDQUFDTSxRQUFELENBQTFCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHRCxPQUFPLENBQUNFLE9BQXJCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JILElBQXRCO0FBQ0gsR0FOUSxFQU1QLEVBTk8sQ0FBVDs7QUFRQSxNQUFHTixPQUFILEVBQVc7QUFDUCx3QkFDSTtBQUFJLGVBQVMsRUFBQyxrQ0FBZDtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLDBCQUFiO0FBQXdDLGNBQUksRUFBQyxHQUE3QztBQUFpRCxjQUFJLEVBQUMsUUFBdEQ7QUFBK0QsWUFBRSxFQUFDLGtCQUFsRTtBQUNJLDRCQUFlLFVBRG5CO0FBQzhCLDJCQUFjLE9BRDVDO0FBQUEsaUNBRUk7QUFBSyxlQUFHLEVBQUMsbUJBQVQ7QUFBNkIscUJBQVMsRUFBQyxnQkFBdkM7QUFBd0QsaUJBQUssRUFBQyxJQUE5RDtBQUFtRSxrQkFBTSxFQUFDLElBQTFFO0FBQ0ksZUFBRyxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFPSTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBdUMsNkJBQWdCLGtCQUF2RDtBQUFBLGtDQUNJO0FBQUEseUNBQUssOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFNBQVg7QUFBQSxxQ0FBcUI7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU8sa0JBQUksRUFBQyxHQUFaO0FBQUEscUNBQWdCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQSxtQ0FBSSw4REFBQyxrREFBRDtBQUFPLGtCQUFJLEVBQUMsc0JBQVo7QUFBQSxxQ0FBbUM7QUFBRyx5QkFBUyxFQUFDLHVDQUFiO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFLSTtBQUFBLG1DQUFJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQXNCO0FBQUcseUJBQVMsRUFBQyx1Q0FBYjtBQUFxRCxvQkFBSSxFQUFDLEdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXFCSDs7QUFDRCxzQkFDSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFVBQWI7QUFBQSw2QkFFQTtBQUFHLGlCQUFTLEVBQUMsb0VBQWI7QUFDQyxZQUFJLEVBQUMsUUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBbER1QkY7O0tBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z4QixjQUFjLGVBQWUsK0RBQStELHFGQUFxRixrQ0FBa0Msa0dBQWtHLHlCQUF5QixnQkFBZ0Isc0pBQXNKLFVBQVUsY0FBYyw0Q0FBNEMsbUJBQW1CLGFBQWEsZUFBZSxNQUFNLGNBQWMsTUFBTSx5Q0FBeUMsSUFBSSxtQkFBbUIsNkRBQTZELGlEQUFpRCxtQ0FBbUMsSUFBSSxJQUFJLFNBQVMsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDZEQUE2RCxtQkFBbUIsYUFBYSxJQUFJLHNDQUFzQyxTQUFTLG9EQUFvRCwyREFBMkQsK0RBQWUsQ0FBQyxFQUFnQztBQUM1c0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyL0F1dGgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG5cclxuXHJcbmludGVyZmFjZSBBdXRoUHJvcHN7XHJcbiAgICBpc0xvZ2luPyA6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aChwcm9wczpQYXJ0aWFsPEF1dGhQcm9wcz4pIHtcclxuICAgIGNvbnN0IHtpc0xvZ2lufSA9IHByb3BzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW4pXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGp3dF9kZWNvZGUoSnd0VG9rZW4pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHBheWxvYWQucGF0aWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyICA6Jyx1c2VyKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBpZihpc0xvZ2luKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIGRyb3Bkb3duIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWxpbmUgZC1sZy1ibG9jayBkLW5vbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBtcy1sZy00MFwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9hdmF0YXItMS5wbmdcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgYm9yZGVyLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiA8TGluayBocmVmPVwiL21lbWJlclwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPk15IFByb2ZpbGU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rICBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPldhbGxldDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvbWVtYmVyL2VkaXQtcHJvZmlsZVwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkFjY291bnQgU2V0dGluZ3M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2lnbi1pblwiPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTJcIiBocmVmPVwiI1wiPkxvZyBPdXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmID0gXCIvc2lnbi1pblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLWluIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1zLWxnLTIgcm91bmRlZC1waWxsXCJcclxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICBTaWduXHJcbiAgICAgICAgICAgICAgICAgSW5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICA8L2xpPlxyXG5cclxuICAgIClcclxufVxyXG4iLCJmdW5jdGlvbiBlKGUpe3RoaXMubWVzc2FnZT1lfWUucHJvdG90eXBlPW5ldyBFcnJvcixlLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmF0b2ImJndpbmRvdy5hdG9iLmJpbmQod2luZG93KXx8ZnVuY3Rpb24ocil7dmFyIHQ9U3RyaW5nKHIpLnJlcGxhY2UoLz0rJC8sXCJcIik7aWYodC5sZW5ndGglND09MSl0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO2Zvcih2YXIgbixvLGE9MCxpPTAsYz1cIlwiO289dC5jaGFyQXQoaSsrKTt+byYmKG49YSU0PzY0Km4rbzpvLGErKyU0KT9jKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZuPj4oLTIqYSY2KSk6MClvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5pbmRleE9mKG8pO3JldHVybiBjfTtmdW5jdGlvbiB0KGUpe3ZhciB0PWUucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpO3N3aXRjaCh0Lmxlbmd0aCU0KXtjYXNlIDA6YnJlYWs7Y2FzZSAyOnQrPVwiPT1cIjticmVhaztjYXNlIDM6dCs9XCI9XCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1wiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwifXRyeXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyKGUpLnJlcGxhY2UoLyguKS9nLChmdW5jdGlvbihlLHIpe3ZhciB0PXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gdC5sZW5ndGg8MiYmKHQ9XCIwXCIrdCksXCIlXCIrdH0pKSl9KHQpfWNhdGNoKGUpe3JldHVybiByKHQpfX1mdW5jdGlvbiBuKGUpe3RoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIG8oZSxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkXCIpO3ZhciBvPSEwPT09KHI9cnx8e30pLmhlYWRlcj8wOjE7dHJ5e3JldHVybiBKU09OLnBhcnNlKHQoZS5zcGxpdChcIi5cIilbb10pKX1jYXRjaChlKXt0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBcIitlLm1lc3NhZ2UpfX1uLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRUb2tlbkVycm9yXCI7ZXhwb3J0IGRlZmF1bHQgbztleHBvcnR7biBhcyBJbnZhbGlkVG9rZW5FcnJvcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3QtZGVjb2RlLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwiQ29va2llcyIsImp3dF9kZWNvZGUiLCJBdXRoIiwicHJvcHMiLCJpc0xvZ2luIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlciIsInBhdGllbnQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==