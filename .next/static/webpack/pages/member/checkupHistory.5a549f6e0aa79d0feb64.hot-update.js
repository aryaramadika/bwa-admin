"use strict";
self["webpackHotUpdate_N_E"]("pages/member/checkupHistory",{

/***/ "./components/organisms/ReccomendationHistory/TableRow.tsx":
/*!*****************************************************************!*\
  !*** ./components/organisms/ReccomendationHistory/TableRow.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableRow; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReccomendationHistory\\TableRow.tsx";



function TableRow(props) {
  var title = props.title,
      primaryComplain = props.primaryComplain,
      diagnosis = props.diagnosis,
      date = props.date;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    'float-start icon-status': true // 'pending':status==='Pending',
    // 'success':status==='Success',
    // 'failed':status==='Failed'

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
      className: "align-middle",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "game-title-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: primaryComplain
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = TableRow;

var _c;

$RefreshReg$(_c, "TableRow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL2NoZWNrdXBIaXN0b3J5LjVhNTQ5ZjZlMGFhNzlkMGZlYjY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7QUFTZSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUNsRCxNQUFNQyxLQUFOLEdBQStDRCxLQUEvQyxDQUFNQyxLQUFOO0FBQUEsTUFBYUMsZUFBYixHQUErQ0YsS0FBL0MsQ0FBYUUsZUFBYjtBQUFBLE1BQThCQyxTQUE5QixHQUErQ0gsS0FBL0MsQ0FBOEJHLFNBQTlCO0FBQUEsTUFBeUNDLElBQXpDLEdBQStDSixLQUEvQyxDQUF5Q0ksSUFBekM7QUFDQSxNQUFNQyxXQUFXLEdBQUNQLGlEQUFFLENBQUM7QUFDakIsK0JBQTBCLElBRFQsQ0FFakI7QUFDQTtBQUNBOztBQUppQixHQUFELENBQXBCO0FBT0Esc0JBQ0k7QUFBQSwyQkFDQTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUEsNkJBQ0E7QUFBSSxhQUFLLEVBQUMsS0FBVjtBQUFBLCtCQUdJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQyxxREFBYjtBQUFBLHNCQUFvRUc7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBLHNCQUFpRUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBLHNCQUFpRUU7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBa0NIO0tBM0N1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjY29tZW5kYXRpb25IaXN0b3J5L1RhYmxlUm93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xuICAgIHRpdGxlIDogc3RyaW5nO1xuICAgIHByaW1hcnlDb21wbGFpbjogc3RyaW5nO1xuICAgIGRpYWdub3Npczogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICAvLyBzdGF0dXM6J1BlbmRpbmcnfCdTdWNjZXNzJ3wnRmFpbGVkJztcbiAgICAvLyBpbWFnZTpzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZVJvdyhwcm9wczpUYWJsZVJvd1Byb3BzKSB7XG4gICAgY29uc3R7dGl0bGUsIHByaW1hcnlDb21wbGFpbiwgZGlhZ25vc2lzLCBkYXRlfT1wcm9wcztcbiAgICBjb25zdCBzdGF0dXNDbGFzcz1jeCh7XG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcbiAgICAgICAgLy8gJ3BlbmRpbmcnOnN0YXR1cz09PSdQZW5kaW5nJyxcbiAgICAgICAgLy8gJ3N1Y2Nlc3MnOnN0YXR1cz09PSdTdWNjZXNzJyxcbiAgICAgICAgLy8gJ2ZhaWxlZCc6c3RhdHVzPT09J0ZhaWxlZCdcblxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LXN0YXJ0IG1lLTMgbWItbGctMCBtYi0zXCIgc3JjPXtgL2ltZy8ke2ltYWdlfS5wbmdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MH0gaGVpZ2h0PXs2MH0gYWx0PVwiZ2FtZSB0aHVtYlwiLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtdGl0bGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZ3LW5vcm1hbCB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMiBtLTBcIj57cHJpbWFyeUNvbXBsYWlufTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZ3LW5vcm1hbCB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMiBtLTBcIj57ZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90aD5cbiAgICAgXG4gICAgICAgIHsvKiA8dGQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XG4gICAgICAgICAgICA8TnVtYmVyRm9ybWF0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjwvcD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPiAqL31cbiAgICA8L3RyPlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJ0aXRsZSIsInByaW1hcnlDb21wbGFpbiIsImRpYWdub3NpcyIsImRhdGUiLCJzdGF0dXNDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=