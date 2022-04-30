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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "float-start me-3 mb-lg-0 mb-3",
          src: "/img/".concat(image, ".png"),
          width: 80,
          height: 60,
          alt: "game thumb"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjQ4MTc1NDMxYWE5MjIxODM1MGJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7QUFTZSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUNsRCxNQUFNQyxLQUFOLEdBQWtERCxLQUFsRCxDQUFNQyxLQUFOO0FBQUEsTUFBWUMsWUFBWixHQUFrREYsS0FBbEQsQ0FBWUUsWUFBWjtBQUFBLE1BQXlCQyxJQUF6QixHQUFrREgsS0FBbEQsQ0FBeUJHLElBQXpCO0FBQUEsTUFBOEJDLEtBQTlCLEdBQWtESixLQUFsRCxDQUE4QkksS0FBOUI7QUFBQSxNQUFvQ0MsTUFBcEMsR0FBa0RMLEtBQWxELENBQW9DSyxNQUFwQztBQUFBLE1BQTJDQyxLQUEzQyxHQUFrRE4sS0FBbEQsQ0FBMkNNLEtBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFDVCxpREFBRSxDQUFDO0FBQ2pCLCtCQUEwQixJQURUO0FBRWpCLGVBQVVPLE1BQU0sS0FBRyxTQUZGO0FBR2pCLGVBQVVBLE1BQU0sS0FBRyxTQUhGO0FBSWpCLGNBQVNBLE1BQU0sS0FBRztBQUpELEdBQUQsQ0FBcEI7QUFPQSxzQkFDSTtBQUFBLDJCQUNBO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQSw4QkFDQTtBQUFJLGFBQUssRUFBQyxLQUFWO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQStDLGFBQUcsaUJBQVVDLEtBQVYsU0FBbEQ7QUFDSSxlQUFLLEVBQUUsRUFEWDtBQUNlLGdCQUFNLEVBQUUsRUFEdkI7QUFDMkIsYUFBRyxFQUFDO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUMscURBQWI7QUFBQSxzQkFBb0VMO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUMsa0RBQWI7QUFBQSxzQkFBaUVDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRBLGVBWUE7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsMENBQWI7QUFBQSxvQkFBeURFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkEsZUFlQTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFFRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLDREQUFiO0FBQUEsc0JBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUE0Qkg7S0FyQ3VCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvVGFibGVSb3cudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vdHJlYXRlbWVudE92ZXJ2aWV3XCJcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcclxuICAgIGl0ZW0gOiBudW1iZXI7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBzdGF0dXM6J1BlbmRpbmcnfCdTdWNjZXNzJ3wnRmFpbGVkJztcclxuICAgIGltYWdlOnN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZVJvdyhwcm9wczpUYWJsZVJvd1Byb3BzKSB7XHJcbiAgICBjb25zdHt0aXRsZSx0cmVhdG1lblR5cGUsaXRlbSxwcmljZSxzdGF0dXMsaW1hZ2V9PXByb3BzO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2xhc3M9Y3goe1xyXG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcclxuICAgICAgICAncGVuZGluZyc6c3RhdHVzPT09J1BlbmRpbmcnLFxyXG4gICAgICAgICdzdWNjZXNzJzpzdGF0dXM9PT0nU3VjY2VzcycsXHJcbiAgICAgICAgJ2ZhaWxlZCc6c3RhdHVzPT09J0ZhaWxlZCdcclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1zdGFydCBtZS0zIG1iLWxnLTAgbWItM1wiIHNyYz17YC9pbWcvJHtpbWFnZX0ucG5nYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MH0gaGVpZ2h0PXs2MH0gYWx0PVwiZ2FtZSB0aHVtYlwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLXRpdGxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZnctbm9ybWFsIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0yIG0tMFwiPnt0cmVhdG1lblR5cGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbS0wXCI+e2l0ZW19IEdvbGQ8L3A+ICovfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3ByaWNlfTwvcD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJ0aXRsZSIsInRyZWF0bWVuVHlwZSIsIml0ZW0iLCJwcmljZSIsInN0YXR1cyIsImltYWdlIiwic3RhdHVzQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9