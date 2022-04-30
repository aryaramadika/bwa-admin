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
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\TableRow.tsx";




function TableRow(props) {
  var title = props.title,
      treatmenType = props.treatmenType,
      item = props.item,
      price = props.price,
      status = props.status,
      image = props.image;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'float-start icon-status': true,
    'pending': status === 'Pending',
    'success': status === 'Success',
    'failed': status === 'Failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "game-title-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: treatmenType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_0__.default, {
            value: price,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjBhYjYxYWU5MWU4OTUzMDY1ZjZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUVBOzs7QUFTZSxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUNsRCxNQUFNQyxLQUFOLEdBQWtERCxLQUFsRCxDQUFNQyxLQUFOO0FBQUEsTUFBWUMsWUFBWixHQUFrREYsS0FBbEQsQ0FBWUUsWUFBWjtBQUFBLE1BQXlCQyxJQUF6QixHQUFrREgsS0FBbEQsQ0FBeUJHLElBQXpCO0FBQUEsTUFBOEJDLEtBQTlCLEdBQWtESixLQUFsRCxDQUE4QkksS0FBOUI7QUFBQSxNQUFvQ0MsTUFBcEMsR0FBa0RMLEtBQWxELENBQW9DSyxNQUFwQztBQUFBLE1BQTJDQyxLQUEzQyxHQUFrRE4sS0FBbEQsQ0FBMkNNLEtBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFDVCxpREFBRSxDQUFDO0FBQ2pCLCtCQUEwQixJQURUO0FBRWpCLGVBQVVPLE1BQU0sS0FBRyxTQUZGO0FBR2pCLGVBQVVBLE1BQU0sS0FBRyxTQUhGO0FBSWpCLGNBQVNBLE1BQU0sS0FBRztBQUpELEdBQUQsQ0FBcEI7QUFPQSxzQkFDSTtBQUFBLDJCQUNBO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQSw4QkFDQTtBQUFJLGFBQUssRUFBQyxLQUFWO0FBQUEsK0JBR0k7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLHFEQUFiO0FBQUEsc0JBQW9FSjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLGtEQUFiO0FBQUEsc0JBQWlFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVVBO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLDBDQUFiO0FBQUEsaUNBQ0EsOERBQUMsd0RBQUQ7QUFDWSxpQkFBSyxFQUFFRSxLQURuQjtBQUVZLGtCQUFNLEVBQUMsS0FGbkI7QUFHWSx1QkFBVyxFQUFDLE1BSHhCO0FBSVksNkJBQWlCLEVBQUMsR0FKOUI7QUFLWSw0QkFBZ0IsRUFBQztBQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWQSxlQW9CQTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFFRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLDREQUFiO0FBQUEsc0JBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBaUNIO0tBMUN1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvT3ZlcnZpZXdDb250ZW50L1RhYmxlUm93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL3RyZWF0ZW1lbnRPdmVydmlld1wiXHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcclxuICAgIGl0ZW0gOiBudW1iZXI7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBzdGF0dXM6J1BlbmRpbmcnfCdTdWNjZXNzJ3wnRmFpbGVkJztcclxuICAgIGltYWdlOnN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZVJvdyhwcm9wczpUYWJsZVJvd1Byb3BzKSB7XHJcbiAgICBjb25zdHt0aXRsZSx0cmVhdG1lblR5cGUsaXRlbSxwcmljZSxzdGF0dXMsaW1hZ2V9PXByb3BzO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2xhc3M9Y3goe1xyXG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcclxuICAgICAgICAncGVuZGluZyc6c3RhdHVzPT09J1BlbmRpbmcnLFxyXG4gICAgICAgICdzdWNjZXNzJzpzdGF0dXM9PT0nU3VjY2VzcycsXHJcbiAgICAgICAgJ2ZhaWxlZCc6c3RhdHVzPT09J0ZhaWxlZCdcclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtc3RhcnQgbWUtMyBtYi1sZy0wIG1iLTNcIiBzcmM9e2AvaW1nLyR7aW1hZ2V9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17ODB9IGhlaWdodD17NjB9IGFsdD1cImdhbWUgdGh1bWJcIi8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtdGl0bGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnYW1lLXRpdGxlIGZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmdy1ub3JtYWwgdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTIgbS0wXCI+e3RyZWF0bWVuVHlwZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcbiAgICAgXHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XHJcbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9wPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIk51bWJlckZvcm1hdCIsImN4IiwiVGFibGVSb3ciLCJwcm9wcyIsInRpdGxlIiwidHJlYXRtZW5UeXBlIiwiaXRlbSIsInByaWNlIiwic3RhdHVzIiwiaW1hZ2UiLCJzdGF0dXNDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=