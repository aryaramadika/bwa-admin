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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\index.tsx";



function SideBar(props) {
  var activeMenu = props.activeMenu;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
    className: "sidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "content pt-50 pb-30 ps-30",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "menus",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Overview",
          icon: "ic-menu-overview",
          active: activeMenu === 'overview'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Transactions",
          icon: "ic-menu-transaction",
          active: activeMenu === 'transactions'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Recommendation",
          icon: "ic-menu-messages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Treatment History",
          icon: "ic-menu-card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Booking",
          icon: "ic-menu-rewards"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Setting",
          icon: "ic-menu-settings",
          active: activeMenu === 'settings'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Log Out",
          icon: "ic-menu-logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLmNhMTdkNjY5MjE5OTk4N2M3OTU3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBS2UsU0FBU0UsT0FBVCxDQUFpQkMsS0FBakIsRUFBcUM7QUFDaEQsTUFBUUMsVUFBUixHQUF1QkQsS0FBdkIsQ0FBUUMsVUFBUjtBQUNBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDQSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNJLDhEQUFDLDhDQUFEO0FBQVUsZUFBSyxFQUFDLFVBQWhCO0FBQTJCLGNBQUksRUFBQyxrQkFBaEM7QUFBbUQsZ0JBQU0sRUFBRUEsVUFBVSxLQUFLO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyw4Q0FBRDtBQUFVLGVBQUssRUFBQyxjQUFoQjtBQUErQixjQUFJLEVBQUMscUJBQXBDO0FBQXlELGdCQUFNLEVBQUVBLFVBQVUsS0FBSztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsZ0JBQWhCO0FBQWlDLGNBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsbUJBQWhCO0FBQW9DLGNBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsU0FBaEI7QUFBMEIsY0FBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSw4REFBQyw4Q0FBRDtBQUFVLGVBQUssRUFBQyxTQUFoQjtBQUEwQixjQUFJLEVBQUMsa0JBQS9CO0FBQWtELGdCQUFNLEVBQUVBLFVBQVUsS0FBSztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0ksOERBQUMsOENBQUQ7QUFBVSxlQUFLLEVBQUMsU0FBaEI7QUFBMEIsY0FBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIO0tBbkJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2lkZUJhci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9Qcm9maWxlXCJcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtXCJcclxuXHJcbmludGVyZmFjZSBTaWRlQmFyUHJvcHMge1xyXG4gICAgYWN0aXZlTWVudTogJ292ZXJ2aWV3JyB8ICd0cmFuc2FjdGlvbnMnIHwgJ3NldHRpbmdzJ1xyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcihwcm9wczpTaWRlQmFyUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlTWVudSB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBwdC01MCBwYi0zMCBwcy0zMFwiPlxyXG4gICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIk92ZXJ2aWV3XCIgaWNvbj1cImljLW1lbnUtb3ZlcnZpZXdcIiBhY3RpdmU9e2FjdGl2ZU1lbnUgPT09ICdvdmVydmlldyd9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIlRyYW5zYWN0aW9uc1wiIGljb249XCJpYy1tZW51LXRyYW5zYWN0aW9uXCJhY3RpdmU9e2FjdGl2ZU1lbnUgPT09ICd0cmFuc2FjdGlvbnMnfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJSZWNvbW1lbmRhdGlvblwiIGljb249XCJpYy1tZW51LW1lc3NhZ2VzXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiVHJlYXRtZW50IEhpc3RvcnlcIiBpY29uPVwiaWMtbWVudS1jYXJkXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJCb29raW5nXCIgaWNvbj1cImljLW1lbnUtcmV3YXJkc1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIlNldHRpbmdcIiBpY29uPVwiaWMtbWVudS1zZXR0aW5nc1wiIGFjdGl2ZT17YWN0aXZlTWVudSA9PT0gJ3NldHRpbmdzJ30gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiTG9nIE91dFwiIGljb249XCJpYy1tZW51LWxvZ291dFwiLz4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxGb290ZXIgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUHJvZmlsZSIsIk1lbnVJdGVtIiwiU2lkZUJhciIsInByb3BzIiwiYWN0aXZlTWVudSJdLCJzb3VyY2VSb290IjoiIn0=