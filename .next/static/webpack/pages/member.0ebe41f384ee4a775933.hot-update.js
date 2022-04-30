"use strict";
self["webpackHotUpdate_N_E"]("pages/member",{

/***/ "./components/organisms/OverviewContent/TableRow.tsx":
/*!***********************************************************!*\
  !*** ./components/organisms/OverviewContent/TableRow.tsx ***!
  \***********************************************************/
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
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\TableRow.tsx";



function TableRow(props) {
  var title = props.title,
      treatmenType = props.treatmenType,
      item = props.item,
      price = props.price,
      status = props.status,
      image = props.image;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    'float-start icon-status': true,
    'pending': status === 'Pending',
    'success': status === 'Success',
    'failed': status === 'Failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("th", {
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
            children: treatmenType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjBlYmU0MWYzODRlZTRhNzc1OTMzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7QUFTZSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUNsRCxNQUFNQyxLQUFOLEdBQWtERCxLQUFsRCxDQUFNQyxLQUFOO0FBQUEsTUFBWUMsWUFBWixHQUFrREYsS0FBbEQsQ0FBWUUsWUFBWjtBQUFBLE1BQXlCQyxJQUF6QixHQUFrREgsS0FBbEQsQ0FBeUJHLElBQXpCO0FBQUEsTUFBOEJDLEtBQTlCLEdBQWtESixLQUFsRCxDQUE4QkksS0FBOUI7QUFBQSxNQUFvQ0MsTUFBcEMsR0FBa0RMLEtBQWxELENBQW9DSyxNQUFwQztBQUFBLE1BQTJDQyxLQUEzQyxHQUFrRE4sS0FBbEQsQ0FBMkNNLEtBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFDVCxpREFBRSxDQUFDO0FBQ2pCLCtCQUEwQixJQURUO0FBRWpCLGVBQVVPLE1BQU0sS0FBRyxTQUZGO0FBR2pCLGVBQVVBLE1BQU0sS0FBRyxTQUhGO0FBSWpCLGNBQVNBLE1BQU0sS0FBRztBQUpELEdBQUQsQ0FBcEI7QUFPQSxzQkFDSTtBQUFBLDJCQUNBO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQSw4QkFDQTtBQUFJLGFBQUssRUFBQyxLQUFWO0FBQUEsK0JBR0k7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLHFEQUFiO0FBQUEsc0JBQW9FSjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLGtEQUFiO0FBQUEsc0JBQWlFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVVBO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLDBDQUFiO0FBQUEsb0JBQXlERTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZBLGVBYUE7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBRUc7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyw0REFBYjtBQUFBLHNCQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBMEJIO0tBbkN1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvT3ZlcnZpZXdDb250ZW50L1RhYmxlUm93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL3RyZWF0ZW1lbnRPdmVydmlld1wiXHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbnRlcmZhY2UgVGFibGVSb3dQcm9wc3tcclxuICAgIHRpdGxlIDogc3RyaW5nO1xyXG4gICAgdHJlYXRtZW5UeXBlOiBzdHJpbmc7XHJcbiAgICBpdGVtIDogbnVtYmVyO1xyXG4gICAgcHJpY2U6bnVtYmVyO1xyXG4gICAgc3RhdHVzOidQZW5kaW5nJ3wnU3VjY2Vzcyd8J0ZhaWxlZCc7XHJcbiAgICBpbWFnZTpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVSb3cocHJvcHM6VGFibGVSb3dQcm9wcykge1xyXG4gICAgY29uc3R7dGl0bGUsdHJlYXRtZW5UeXBlLGl0ZW0scHJpY2Usc3RhdHVzLGltYWdlfT1wcm9wcztcclxuICAgIGNvbnN0IHN0YXR1c0NsYXNzPWN4KHtcclxuICAgICAgICAnZmxvYXQtc3RhcnQgaWNvbi1zdGF0dXMnOnRydWUsXHJcbiAgICAgICAgJ3BlbmRpbmcnOnN0YXR1cz09PSdQZW5kaW5nJyxcclxuICAgICAgICAnc3VjY2Vzcyc6c3RhdHVzPT09J1N1Y2Nlc3MnLFxyXG4gICAgICAgICdmYWlsZWQnOnN0YXR1cz09PSdGYWlsZWQnXHJcblxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LXN0YXJ0IG1lLTMgbWItbGctMCBtYi0zXCIgc3JjPXtgL2ltZy8ke2ltYWdlfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezgwfSBoZWlnaHQ9ezYwfSBhbHQ9XCJnYW1lIHRodW1iXCIvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLXRpdGxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZnctbm9ybWFsIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0yIG0tMFwiPnt0cmVhdG1lblR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgIFxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPntwcmljZX08L3A+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiY3giLCJUYWJsZVJvdyIsInByb3BzIiwidGl0bGUiLCJ0cmVhdG1lblR5cGUiLCJpdGVtIiwicHJpY2UiLCJzdGF0dXMiLCJpbWFnZSIsInN0YXR1c0NsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==