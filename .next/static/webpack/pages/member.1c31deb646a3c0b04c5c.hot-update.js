"use strict";
self["webpackHotUpdate_N_E"]("pages/member",{

/***/ "./components/organisms/SideBar/index.tsx":
/*!************************************************!*\
  !*** ./components/organisms/SideBar/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SideBar; }
/* harmony export */ });
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile */ "./components/organisms/SideBar/Profile.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./components/organisms/SideBar/MenuItem.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\index.tsx",
    _s = $RefreshSig$();






function SideBar(props) {
  _s();

  var activeMenu = props.activeMenu;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var onLogOut = function onLogOut() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove('token');
    router.push('/sign-in');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
    className: "sidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "content pt-50 pb-30 ps-30",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "menus",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Overview",
          icon: "ic-menu-overview",
          active: activeMenu === 'overview',
          href: "/member"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Transactions",
          icon: "ic-menu-transaction",
          active: activeMenu === 'transactions',
          href: "/member/transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Recommendation",
          icon: "ic-menu-messages",
          active: activeMenu === 'recommendations',
          href: "/member/recommendation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Treatment History",
          icon: "ic-menu-card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Booking",
          icon: "ic-menu-rewards"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Setting",
          icon: "ic-menu-settings",
          active: activeMenu === 'settings'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Log Out",
          icon: "ic-menu-logout",
          onClick: onLogOut
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(SideBar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = SideBar;

var _c;

$RefreshReg$(_c, "SideBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjFjMzFkZWI2NDZhM2MwYjA0YzVjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTWUsU0FBU0ksT0FBVCxDQUFpQkMsS0FBakIsRUFBcUM7QUFBQTs7QUFDaEQsTUFBUUMsVUFBUixHQUF1QkQsS0FBdkIsQ0FBUUMsVUFBUjtBQUNBLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQk4sSUFBQUEscURBQUEsQ0FBZSxPQUFmO0FBQ0FLLElBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQVo7QUFDRCxHQUhIOztBQUlBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDQSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNJLDhEQUFDLDhDQUFEO0FBQVUsZUFBSyxFQUFDLFVBQWhCO0FBQTJCLGNBQUksRUFBQyxrQkFBaEM7QUFBbUQsZ0JBQU0sRUFBRUosVUFBVSxLQUFLLFVBQTFFO0FBQXVGLGNBQUksRUFBQztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsY0FBaEI7QUFBK0IsY0FBSSxFQUFDLHFCQUFwQztBQUF5RCxnQkFBTSxFQUFFQSxVQUFVLEtBQUssY0FBaEY7QUFBaUcsY0FBSSxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyw4Q0FBRDtBQUFVLGVBQUssRUFBQyxnQkFBaEI7QUFBaUMsY0FBSSxFQUFDLGtCQUF0QztBQUF5RCxnQkFBTSxFQUFFQSxVQUFVLEtBQUssaUJBQWhGO0FBQW1HLGNBQUksRUFBQztBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsbUJBQWhCO0FBQW9DLGNBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsU0FBaEI7QUFBMEIsY0FBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSw4REFBQyw4Q0FBRDtBQUFVLGVBQUssRUFBQyxTQUFoQjtBQUEwQixjQUFJLEVBQUMsa0JBQS9CO0FBQWtELGdCQUFNLEVBQUVBLFVBQVUsS0FBSztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0ksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsU0FBaEI7QUFBMEIsY0FBSSxFQUFDLGdCQUEvQjtBQUErQyxpQkFBTyxFQUFFRTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0F4QnVCSjtVQUVMRDs7O0tBRktDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZGVCYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9NZW51SXRlbVwiXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBTaWRlQmFyUHJvcHMge1xyXG4gICAgYWN0aXZlTWVudTogJ292ZXJ2aWV3JyB8ICd0cmFuc2FjdGlvbnMnIHwgJ3NldHRpbmdzJyB8ICdyZWNvbW1lbmRhdGlvbnMnXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKHByb3BzOlNpZGVCYXJQcm9wcykge1xyXG4gICAgY29uc3QgeyBhY3RpdmVNZW51IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvbkxvZ091dCA9ICgpID0+IHtcclxuICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ24taW4nKTtcclxuICAgICAgfTtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHB0LTUwIHBiLTMwIHBzLTMwXCI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiT3ZlcnZpZXdcIiBpY29uPVwiaWMtbWVudS1vdmVydmlld1wiIGFjdGl2ZT17YWN0aXZlTWVudSA9PT0gJ292ZXJ2aWV3J30gIGhyZWY9XCIvbWVtYmVyXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJUcmFuc2FjdGlvbnNcIiBpY29uPVwiaWMtbWVudS10cmFuc2FjdGlvblwiYWN0aXZlPXthY3RpdmVNZW51ID09PSAndHJhbnNhY3Rpb25zJ30gIGhyZWY9XCIvbWVtYmVyL3RyYW5zYWN0aW9uc1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgaWNvbj1cImljLW1lbnUtbWVzc2FnZXNcIiBhY3RpdmU9e2FjdGl2ZU1lbnUgPT09ICdyZWNvbW1lbmRhdGlvbnMnfSBocmVmPVwiL21lbWJlci9yZWNvbW1lbmRhdGlvblwiICAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJUcmVhdG1lbnQgSGlzdG9yeVwiIGljb249XCJpYy1tZW51LWNhcmRcIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIkJvb2tpbmdcIiBpY29uPVwiaWMtbWVudS1yZXdhcmRzXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiU2V0dGluZ1wiIGljb249XCJpYy1tZW51LXNldHRpbmdzXCIgYWN0aXZlPXthY3RpdmVNZW51ID09PSAnc2V0dGluZ3MnfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJMb2cgT3V0XCIgaWNvbj1cImljLW1lbnUtbG9nb3V0XCJvbkNsaWNrPXtvbkxvZ091dH0vPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm9maWxlIiwiTWVudUl0ZW0iLCJDb29raWVzIiwidXNlUm91dGVyIiwiU2lkZUJhciIsInByb3BzIiwiYWN0aXZlTWVudSIsInJvdXRlciIsIm9uTG9nT3V0IiwicmVtb3ZlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=