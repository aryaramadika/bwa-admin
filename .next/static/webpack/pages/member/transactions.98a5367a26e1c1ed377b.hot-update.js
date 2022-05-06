"use strict";
self["webpackHotUpdate_N_E"]("pages/member/transactions",{

/***/ "./components/organisms/SideBar/MenuItem.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/SideBar/MenuItem.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MenuItem; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\MenuItem.tsx";




function MenuItem(props) {
  var title = props.title,
      icon = props.icon,
      active = props.active,
      _props$href = props.href,
      href = _props$href === void 0 ? '/' : _props$href,
      onClick = props.onClick;
  var classItem = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    'item': true,
    'mb-30': true,
    active: active
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: classItem,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "me-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "/icon/".concat(icon, ".svg"),
        width: 25,
        height: 25
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "item-title m-0",
      children: onClick ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "text-lg text-decoration-none",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "text-lg text-decoration-none",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
_c = MenuItem;

var _c;

$RefreshReg$(_c, "MenuItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3RyYW5zYWN0aW9ucy45OGE1MzY3YTI2ZTFjMWVkMzc3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdlLFNBQVNHLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQWdEO0FBQzNELE1BQ0lDLEtBREosR0FHTUQsS0FITixDQUNJQyxLQURKO0FBQUEsTUFDV0MsSUFEWCxHQUdNRixLQUhOLENBQ1dFLElBRFg7QUFBQSxNQUNpQkMsTUFEakIsR0FHTUgsS0FITixDQUNpQkcsTUFEakI7QUFBQSxvQkFHTUgsS0FITixDQUN5QkksSUFEekI7QUFBQSxNQUN5QkEsSUFEekIsNEJBQ2dDLEdBRGhDO0FBQUEsTUFFSUMsT0FGSixHQUdNTCxLQUhOLENBRUlLLE9BRko7QUFJQSxNQUFNQyxTQUFTLEdBQUVWLGlEQUFFLENBQUM7QUFDaEIsWUFBTyxJQURTO0FBRWhCLGFBQVEsSUFGUTtBQUdoQk8sSUFBQUEsTUFBTSxFQUFOQTtBQUhnQixHQUFELENBQW5CO0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVHLFNBQWhCO0FBQTJCLFdBQU8sRUFBRUQsT0FBcEM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxXQUFHLGtCQUFXSCxJQUFYLFNBQVY7QUFBaUMsYUFBSyxFQUFFLEVBQXhDO0FBQTRDLGNBQU0sRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBRyxlQUFTLEVBQUMsZ0JBQWI7QUFBQSxnQkFDR0csT0FBTyxnQkFDTjtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQSxrQkFBNkNKO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxnQkFHTiw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUcsSUFBWjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyw4QkFBYjtBQUFBLG9CQUE2Q0g7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7S0EzQnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9TaWRlQmFyL01lbnVJdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBNZW51SXRlbVByb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICBpY29uIDogJ2ljLW1lbnUtb3ZlcnZpZXcnfCdpYy1tZW51LXRyYW5zYWN0aW9uJ1xyXG4gICAgfCdpYy1tZW51LW1lc3NhZ2VzJ3wnaWMtbWVudS1jYXJkJ3wnaWMtbWVudS1yZXdhcmRzJ1xyXG4gICAgfCdpYy1tZW51LXNldHRpbmdzJ3wnaWMtbWVudS1sb2dvdXQnO1xyXG4gICAgYWN0aXZlPyA6IGJvb2xlYW47XHJcbiAgICBocmVmPzogc3RyaW5nO1xyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHM6UGFydGlhbDxNZW51SXRlbVByb3BzPikge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRpdGxlLCBpY29uLCBhY3RpdmUsIGhyZWYgPSAnLycsXHJcbiAgICAgICAgb25DbGljayxcclxuICAgICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NJdGVtPSBjeCh7XHJcbiAgICAgICAgJ2l0ZW0nOnRydWUsXHJcbiAgICAgICAgJ21iLTMwJzp0cnVlLFxyXG4gICAgICAgIGFjdGl2ZVxyXG5cclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0l0ZW19IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZS0zXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvaWNvbi8ke2ljb259LnN2Z2B9IHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS10aXRsZSBtLTBcIj5cclxuICAgICAgICAgICAge29uQ2xpY2sgPyAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPnt0aXRsZX08L2E+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImN4IiwiSW1hZ2UiLCJMaW5rIiwiTWVudUl0ZW0iLCJwcm9wcyIsInRpdGxlIiwiaWNvbiIsImFjdGl2ZSIsImhyZWYiLCJvbkNsaWNrIiwiY2xhc3NJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==