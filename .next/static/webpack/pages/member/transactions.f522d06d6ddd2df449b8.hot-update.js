"use strict";
self["webpackHotUpdate_N_E"]("pages/member/transactions",{

/***/ "./components/organisms/TransactionContent/TableRow.tsx":
/*!**************************************************************!*\
  !*** ./components/organisms/TransactionContent/TableRow.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableRow; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TransactionContent\\TableRow.tsx";





function TableRow(props) {
  var title = props.title,
      treatmenType = props.treatmenType,
      price = props.price,
      status = props.status;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'float-start icon-status': true,
    'pending': status === 'pending',
    'success': status === 'success',
    'failed': status === 'failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "game-title-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: treatmenType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_1__.default, {
            value: price,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "btn btn-status rounded-pill text-sm",
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3RyYW5zYWN0aW9ucy5mNTIyZDA2ZDZkZGQyZGY0NDliOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQU9lLFNBQVNHLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXVDO0FBQ2xELE1BQU1DLEtBQU4sR0FBdUNELEtBQXZDLENBQU1DLEtBQU47QUFBQSxNQUFZQyxZQUFaLEdBQXVDRixLQUF2QyxDQUFZRSxZQUFaO0FBQUEsTUFBeUJDLEtBQXpCLEdBQXVDSCxLQUF2QyxDQUF5QkcsS0FBekI7QUFBQSxNQUErQkMsTUFBL0IsR0FBdUNKLEtBQXZDLENBQStCSSxNQUEvQjtBQUNBLE1BQU1DLFdBQVcsR0FBQ1AsaURBQUUsQ0FBQztBQUNqQiwrQkFBMEIsSUFEVDtBQUVqQixlQUFVTSxNQUFNLEtBQUcsU0FGRjtBQUdqQixlQUFVQSxNQUFNLEtBQUcsU0FIRjtBQUlqQixjQUFTQSxNQUFNLEtBQUc7QUFKRCxHQUFELENBQXBCO0FBT0Esc0JBQ0k7QUFBQSwyQkFDQTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUMsS0FBVjtBQUFBLCtCQUdJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQyxxREFBYjtBQUFBLHNCQUFvRUg7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBLHNCQUFpRUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQywwQ0FBYjtBQUFBLGlDQUNBLDhEQUFDLHdEQUFEO0FBQ1ksaUJBQUssRUFBRUMsS0FEbkI7QUFFWSxrQkFBTSxFQUFDLEtBRm5CO0FBR1ksdUJBQVcsRUFBQyxNQUh4QjtBQUlZLDZCQUFpQixFQUFDLEdBSjlCO0FBS1ksNEJBQWdCLEVBQUM7QUFMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkEsZUFvQkE7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBRUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyw0REFBYjtBQUFBLHNCQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCQSxlQTJCQTtBQUFBLCtCQUNBLDhEQUFDLGtEQUFEO0FBQ0EsY0FBSSxLQURKO0FBQUEsaUNBRUU7QUFDRSxxQkFBUyxFQUFDLHFDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUE0Q0g7S0FyRHVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UcmFuc2FjdGlvbkNvbnRlbnQvVGFibGVSb3cudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcclxuICAgIHByaWNlOm51bWJlcjtcclxuICAgIHN0YXR1czpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVSb3cocHJvcHM6VGFibGVSb3dQcm9wcykge1xyXG4gICAgY29uc3R7dGl0bGUsdHJlYXRtZW5UeXBlLHByaWNlLHN0YXR1c309cHJvcHM7XHJcbiAgICBjb25zdCBzdGF0dXNDbGFzcz1jeCh7XHJcbiAgICAgICAgJ2Zsb2F0LXN0YXJ0IGljb24tc3RhdHVzJzp0cnVlLFxyXG4gICAgICAgICdwZW5kaW5nJzpzdGF0dXM9PT0ncGVuZGluZycsXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOnN0YXR1cz09PSdzdWNjZXNzJyxcclxuICAgICAgICAnZmFpbGVkJzpzdGF0dXM9PT0nZmFpbGVkJ1xyXG5cclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxyXG4gICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJmbG9hdC1zdGFydCBtZS0zIG1iLWxnLTAgbWItM1wiIHNyYz17YC9pbWcvJHtpbWFnZX0ucG5nYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MH0gaGVpZ2h0PXs2MH0gYWx0PVwiZ2FtZSB0aHVtYlwiLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdhbWUtdGl0bGUgZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZ3LW5vcm1hbCB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMiBtLTBcIj57dHJlYXRtZW5UeXBlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuICAgICBcclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTBcIj5cclxuICAgICAgICAgICAgPE51bWJlckZvcm1hdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCJScCBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz48L3A+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgIDxMaW5rIFxyXG4gICAgICAgIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN0YXR1cyByb3VuZGVkLXBpbGwgdGV4dC1zbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERldGFpbHNcclxuXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJOdW1iZXJGb3JtYXQiLCJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJ0aXRsZSIsInRyZWF0bWVuVHlwZSIsInByaWNlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9