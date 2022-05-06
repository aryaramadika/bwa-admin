"use strict";
self["webpackHotUpdate_N_E"]("pages/member/recommendationHistory",{

/***/ "./components/organisms/ReccomendationHistory/TableRow.tsx":
/*!*****************************************************************!*\
  !*** ./components/organisms/ReccomendationHistory/TableRow.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableRow; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReccomendationHistory\\TableRow.tsx";




function TableRow(props) {
  var recommendation = props.recommendation,
      diagnosis = props.diagnosis,
      date = props.date,
      status = props.status;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'float-start icon-status': true,
    'pending': status === 'pending',
    'success': status === 'success',
    'failed': status === 'failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "game-title-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: recommendation
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "game-title fw-medium text-start color-palette-1 m-0",
          children: diagnosis
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: date
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
            lineNumber: 42,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            className: "btn btn-status rounded-pill text-sm",
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3JlY29tbWVuZGF0aW9uSGlzdG9yeS4wMjIxMWEzODg2YTgyMTc1YjZkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7OztBQVFlLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXVDO0FBQ2xELE1BQU1DLGNBQU4sR0FBNENELEtBQTVDLENBQU1DLGNBQU47QUFBQSxNQUFxQkMsU0FBckIsR0FBNENGLEtBQTVDLENBQXFCRSxTQUFyQjtBQUFBLE1BQStCQyxJQUEvQixHQUE0Q0gsS0FBNUMsQ0FBK0JHLElBQS9CO0FBQUEsTUFBb0NDLE1BQXBDLEdBQTRDSixLQUE1QyxDQUFvQ0ksTUFBcEM7QUFDQSxNQUFNQyxXQUFXLEdBQUNQLGlEQUFFLENBQUM7QUFDakIsK0JBQTBCLElBRFQ7QUFFakIsZUFBVU0sTUFBTSxLQUFHLFNBRkY7QUFHakIsZUFBVUEsTUFBTSxLQUFHLFNBSEY7QUFJakIsY0FBU0EsTUFBTSxLQUFHO0FBSkQsR0FBRCxDQUFwQjtBQU9BLHNCQUNJO0FBQUEsMkJBQ0E7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBLDhCQUNBO0FBQUksYUFBSyxFQUFDLEtBQVY7QUFBQSwrQkFHSTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMscURBQWI7QUFBQSxzQkFBb0VIO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBU0E7QUFBQSwrQkFDQTtBQUFHLG1CQUFTLEVBQUMscURBQWI7QUFBQSxvQkFBb0VDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEEsZUFhQTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQywwQ0FBYjtBQUFBLG9CQUNDQztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkEsZUFpQkE7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBRUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyw0REFBYjtBQUFBLHNCQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCQSxlQXdCQTtBQUFBLCtCQUNBLDhEQUFDLGtEQUFEO0FBQ0EsY0FBSSxLQURKO0FBQUEsaUNBRUU7QUFDRSxxQkFBUyxFQUFDLHFDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUF5Q0g7S0FsRHVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZWNjb21lbmRhdGlvbkhpc3RvcnkvVGFibGVSb3cudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCJcblxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbnRlcmZhY2UgVGFibGVSb3dQcm9wc3tcbiAgICByZWNvbW1lbmRhdGlvbiA6IHN0cmluZztcbiAgICBkaWFnbm9zaXM6IHN0cmluZztcbiAgICAvLyBwcmljZTpudW1iZXI7XG4gICAgZGF0ZTpEYXRlO1xuICAgIHN0YXR1czpzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZVJvdyhwcm9wczpUYWJsZVJvd1Byb3BzKSB7XG4gICAgY29uc3R7cmVjb21tZW5kYXRpb24sZGlhZ25vc2lzLGRhdGUsc3RhdHVzfT1wcm9wcztcbiAgICBjb25zdCBzdGF0dXNDbGFzcz1jeCh7XG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcbiAgICAgICAgJ3BlbmRpbmcnOnN0YXR1cz09PSdwZW5kaW5nJyxcbiAgICAgICAgJ3N1Y2Nlc3MnOnN0YXR1cz09PSdzdWNjZXNzJyxcbiAgICAgICAgJ2ZhaWxlZCc6c3RhdHVzPT09J2ZhaWxlZCdcblxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LXN0YXJ0IG1lLTMgbWItbGctMCBtYi0zXCIgc3JjPXtgL2ltZy8ke2ltYWdlfS5wbmdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MH0gaGVpZ2h0PXs2MH0gYWx0PVwiZ2FtZSB0aHVtYlwiLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtdGl0bGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3JlY29tbWVuZGF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e2RpYWdub3Npc308L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgIFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XG4gICAgICAgICAgICB7ZGF0ZX08L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTAgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICA8TGluayBcbiAgICAgICAgaHJlZj17YC9gfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdGF0dXMgcm91bmRlZC1waWxsIHRleHQtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERldGFpbHNcblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiY3giLCJUYWJsZVJvdyIsInByb3BzIiwicmVjb21tZW5kYXRpb24iLCJkaWFnbm9zaXMiLCJkYXRlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9