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
      src: "/img/avatar-1.png",
      width: "90",
      height: "90",
      className: "img-fluid mb-20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: "fw-bold text-xl color-palette-1 m-0",
      children: "Shayna Anne"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "color-palette-2 m-0",
      children: "shayna@anne.com"
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


/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*! js-cookie v3.0.1 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (key, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    key = encodeURIComponent(key)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      key + '=' + converter.write(value, key) + stringifiedAttributes)
  }

  function get (key) {
    if (typeof document === 'undefined' || (arguments.length && !key)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);

        if (key === foundKey) {
          break
        }
      } catch (e) {}
    }

    return key ? jar[key] : jar
  }

  return Object.create(
    {
      set: set,
      get: get,
      remove: function (key, attributes) {
        set(
          key,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */

/* harmony default export */ __webpack_exports__["default"] = (api);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjQzMjgyZjA0YzVkNmI4Mjk3NDQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUM5QixrQkFBeUJILCtDQUFRLENBQUM7QUFDOUJJLElBQUFBLE1BQU0sRUFBQyxFQUR1QjtBQUU5QkMsSUFBQUEsSUFBSSxFQUFDLEVBRnlCO0FBRzlCQyxJQUFBQSxLQUFLLEVBQUM7QUFId0IsR0FBRCxDQUFqQztBQUFBLE1BQVFDLElBQVI7QUFBQSxNQUFjQyxPQUFkOztBQUtBVCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNVSxLQUFLLEdBQUdSLGtEQUFBLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdRLEtBQUgsRUFBUztBQUNMLFVBQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDSCxLQUFELENBQXJCO0FBQ0EsVUFBTUksT0FBd0IsR0FBR1gsbURBQVUsQ0FBQ1MsUUFBRCxDQUEzQztBQUNBLFVBQU1HLFdBQXVCLEdBQUdELE9BQU8sQ0FBQ0UsT0FBeEMsQ0FISyxDQUlMO0FBQ0E7O0FBQ0FQLE1BQUFBLE9BQU8sQ0FBQ00sV0FBRCxDQUFQO0FBQ0gsS0FUUyxDQVlWOztBQUNILEdBYlEsRUFhUCxFQWJPLENBQVQ7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBLDRCQUNBO0FBQUssU0FBRyxFQUFDLG1CQUFUO0FBQTZCLFdBQUssRUFBQyxJQUFuQztBQUF3QyxZQUFNLEVBQUMsSUFBL0M7QUFBb0QsZUFBUyxFQUFDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQUksZUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBM0J1Qlg7O0tBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054QixjQUFjLGVBQWUsK0RBQStELHFGQUFxRixrQ0FBa0Msa0dBQWtHLHlCQUF5QixnQkFBZ0Isc0pBQXNKLFVBQVUsY0FBYyw0Q0FBNEMsbUJBQW1CLGFBQWEsZUFBZSxNQUFNLGNBQWMsTUFBTSx5Q0FBeUMsSUFBSSxtQkFBbUIsNkRBQTZELGlEQUFpRCxtQ0FBbUMsSUFBSSxJQUFJLFNBQVMsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDZEQUE2RCxtQkFBbUIsYUFBYSxJQUFJLHNDQUFzQyxTQUFTLG9EQUFvRCwyREFBMkQsK0RBQWUsQ0FBQyxFQUFnQztBQUM1c0M7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLHVFQUF1RTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLDZDQUE2QztBQUM3QyxPQUFPO0FBQ1A7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0IseUNBQXlDO0FBQzdELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFdBQVc7QUFDOUM7O0FBRUEsK0RBQWUsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZGVCYXIvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2p3dC1kZWNvZGUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanMtY29va2llL2Rpc3QvanMuY29va2llLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6JycsXHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDonJ1xyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogSldUUGF5bG9hZFR5cGVzID0gand0X2RlY29kZShKd3RUb2tlbilcclxuICAgICAgICAgICAgY29uc3QgdXNlclBheWxvYWQgOiBVc2VyVHlwZXMgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgICAgICAgICAgLy8gY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgICAgICAgICAgLy8gdXNlci5hdmF0YXIgPSBgJHtJTUd9LyR7dXNlclBheWxvYWQuYXZhdGFyfWBcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyUGF5bG9hZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyICA6Jyx1c2VyKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIHRleHQtY2VudGVyIHBiLTUwIHBlLTMwXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL2F2YXRhci0xLnBuZ1wiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCI5MFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yMFwiIC8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC14bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+U2hheW5hIEFubmU8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMiBtLTBcIj5zaGF5bmFAYW5uZS5jb208L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJmdW5jdGlvbiBlKGUpe3RoaXMubWVzc2FnZT1lfWUucHJvdG90eXBlPW5ldyBFcnJvcixlLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmF0b2ImJndpbmRvdy5hdG9iLmJpbmQod2luZG93KXx8ZnVuY3Rpb24ocil7dmFyIHQ9U3RyaW5nKHIpLnJlcGxhY2UoLz0rJC8sXCJcIik7aWYodC5sZW5ndGglND09MSl0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO2Zvcih2YXIgbixvLGE9MCxpPTAsYz1cIlwiO289dC5jaGFyQXQoaSsrKTt+byYmKG49YSU0PzY0Km4rbzpvLGErKyU0KT9jKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZuPj4oLTIqYSY2KSk6MClvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5pbmRleE9mKG8pO3JldHVybiBjfTtmdW5jdGlvbiB0KGUpe3ZhciB0PWUucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpO3N3aXRjaCh0Lmxlbmd0aCU0KXtjYXNlIDA6YnJlYWs7Y2FzZSAyOnQrPVwiPT1cIjticmVhaztjYXNlIDM6dCs9XCI9XCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1wiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwifXRyeXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyKGUpLnJlcGxhY2UoLyguKS9nLChmdW5jdGlvbihlLHIpe3ZhciB0PXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gdC5sZW5ndGg8MiYmKHQ9XCIwXCIrdCksXCIlXCIrdH0pKSl9KHQpfWNhdGNoKGUpe3JldHVybiByKHQpfX1mdW5jdGlvbiBuKGUpe3RoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIG8oZSxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkXCIpO3ZhciBvPSEwPT09KHI9cnx8e30pLmhlYWRlcj8wOjE7dHJ5e3JldHVybiBKU09OLnBhcnNlKHQoZS5zcGxpdChcIi5cIilbb10pKX1jYXRjaChlKXt0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBcIitlLm1lc3NhZ2UpfX1uLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRUb2tlbkVycm9yXCI7ZXhwb3J0IGRlZmF1bHQgbztleHBvcnR7biBhcyBJbnZhbGlkVG9rZW5FcnJvcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3QtZGVjb2RlLmVzbS5qcy5tYXBcbiIsIi8qISBqcy1jb29raWUgdjMuMC4xIHwgTUlUICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbmZ1bmN0aW9uIGFzc2lnbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbnZhciBkZWZhdWx0Q29udmVydGVyID0ge1xuICByZWFkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLCBkZWNvZGVVUklDb21wb25lbnQpXG4gIH0sXG4gIHdyaXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKFxuICAgICAgLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLFxuICAgICAgZGVjb2RlVVJJQ29tcG9uZW50XG4gICAgKVxuICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbmZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlciwgZGVmYXVsdEF0dHJpYnV0ZXMpIHtcbiAgZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF0dHJpYnV0ZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKTtcblxuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGU1KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMuZXhwaXJlcykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgIC5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcbiAgICAgIC5yZXBsYWNlKC9bKCldL2csIGVzY2FwZSk7XG5cbiAgICB2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG4gICAgZm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG4gICAgICAvLyAuLi5cbiAgICAgIC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcbiAgICAgIC8vICAgICBjaGFyYWN0ZXI6XG4gICAgICAvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuICAgICAgLy8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXG4gICAgICAvLyAuLi5cbiAgICAgIHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPVxuICAgICAga2V5ICsgJz0nICsgY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0IChrZXkpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAoYXJndW1lbnRzLmxlbmd0aCAmJiAha2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG4gICAgdmFyIGphciA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgICAgdmFyIHZhbHVlID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZm91bmRLZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICBqYXJbZm91bmRLZXldID0gY29udmVydGVyLnJlYWQodmFsdWUsIGZvdW5kS2V5KTtcblxuICAgICAgICBpZiAoa2V5ID09PSBmb3VuZEtleSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleSA/IGphcltrZXldIDogamFyXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICB7XG4gICAgICBzZXQ6IHNldCxcbiAgICAgIGdldDogZ2V0LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHNldChcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgJycsXG4gICAgICAgICAgYXNzaWduKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICBleHBpcmVzOiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgd2l0aEF0dHJpYnV0ZXM6IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMuY29udmVydGVyLCBhc3NpZ24oe30sIHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlcykpXG4gICAgICB9LFxuICAgICAgd2l0aENvbnZlcnRlcjogZnVuY3Rpb24gKGNvbnZlcnRlcikge1xuICAgICAgICByZXR1cm4gaW5pdChhc3NpZ24oe30sIHRoaXMuY29udmVydGVyLCBjb252ZXJ0ZXIpLCB0aGlzLmF0dHJpYnV0ZXMpXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGVzOiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKGRlZmF1bHRBdHRyaWJ1dGVzKSB9LFxuICAgICAgY29udmVydGVyOiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKGNvbnZlcnRlcikgfVxuICAgIH1cbiAgKVxufVxuXG52YXIgYXBpID0gaW5pdChkZWZhdWx0Q29udmVydGVyLCB7IHBhdGg6ICcvJyB9KTtcbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJqd3RfZGVjb2RlIiwiUHJvZmlsZSIsImF2YXRhciIsIm5hbWUiLCJlbWFpbCIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlclBheWxvYWQiLCJwYXRpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==