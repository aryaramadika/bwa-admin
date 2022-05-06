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
          className: "game-title fw-medium text-start color-palette-2 m-0",
          children: diagnosis
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 10
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            className: "btn btn-status rounded-pill text-sm",
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3JlY29tbWVuZGF0aW9uSGlzdG9yeS41NDZkZDA2YWNkOGQwMWZiMmFmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7OztBQVFlLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXVDO0FBQ2xELE1BQU1DLGNBQU4sR0FBNENELEtBQTVDLENBQU1DLGNBQU47QUFBQSxNQUFxQkMsU0FBckIsR0FBNENGLEtBQTVDLENBQXFCRSxTQUFyQjtBQUFBLE1BQStCQyxJQUEvQixHQUE0Q0gsS0FBNUMsQ0FBK0JHLElBQS9CO0FBQUEsTUFBb0NDLE1BQXBDLEdBQTRDSixLQUE1QyxDQUFvQ0ksTUFBcEM7QUFDQSxNQUFNQyxXQUFXLEdBQUNQLGlEQUFFLENBQUM7QUFDakIsK0JBQTBCLElBRFQ7QUFFakIsZUFBVU0sTUFBTSxLQUFHLFNBRkY7QUFHakIsZUFBVUEsTUFBTSxLQUFHLFNBSEY7QUFJakIsY0FBU0EsTUFBTSxLQUFHO0FBSkQsR0FBRCxDQUFwQjtBQU9BLHNCQUNJO0FBQUEsMkJBQ0E7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBLDhCQUNBO0FBQUksYUFBSyxFQUFDLEtBQVY7QUFBQSwrQkFHSTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMscURBQWI7QUFBQSxzQkFBb0VIO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBU0g7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMscURBQWI7QUFBQSxvQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRHLGVBY0E7QUFBQSwrQkFFSTtBQUFHLG1CQUFTLEVBQUMsMENBQWI7QUFBQSxvQkFDQ0M7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRBLGVBbUJBO0FBQUEsK0JBQ0EsOERBQUMsa0RBQUQ7QUFDQSxjQUFJLEtBREo7QUFBQSxpQ0FFRTtBQUNFLHFCQUFTLEVBQUMscUNBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CQSxlQW1DQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBNENIO0tBckR1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjY29tZW5kYXRpb25IaXN0b3J5L1RhYmxlUm93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiXG5cbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW50ZXJmYWNlIFRhYmxlUm93UHJvcHN7XG4gICAgcmVjb21tZW5kYXRpb24gOiBzdHJpbmc7XG4gICAgZGlhZ25vc2lzOiBzdHJpbmc7XG4gICAgLy8gcHJpY2U6bnVtYmVyO1xuICAgIGRhdGU6RGF0ZTtcbiAgICBzdGF0dXM6c3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVSb3cocHJvcHM6VGFibGVSb3dQcm9wcykge1xuICAgIGNvbnN0e3JlY29tbWVuZGF0aW9uLGRpYWdub3NpcyxkYXRlLHN0YXR1c309cHJvcHM7XG4gICAgY29uc3Qgc3RhdHVzQ2xhc3M9Y3goe1xuICAgICAgICAnZmxvYXQtc3RhcnQgaWNvbi1zdGF0dXMnOnRydWUsXG4gICAgICAgICdwZW5kaW5nJzpzdGF0dXM9PT0ncGVuZGluZycsXG4gICAgICAgICdzdWNjZXNzJzpzdGF0dXM9PT0nc3VjY2VzcycsXG4gICAgICAgICdmYWlsZWQnOnN0YXR1cz09PSdmYWlsZWQnXG5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJmbG9hdC1zdGFydCBtZS0zIG1iLWxnLTAgbWItM1wiIHNyYz17YC9pbWcvJHtpbWFnZX0ucG5nYH1cbiAgICAgICAgICAgICAgICB3aWR0aD17ODB9IGhlaWdodD17NjB9IGFsdD1cImdhbWUgdGh1bWJcIi8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLXRpdGxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdhbWUtdGl0bGUgZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPntyZWNvbW1lbmRhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90aD5cbiAgICAgPHRkPlxuICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTIgbS0wXCI+XG4gICAgICAgICAgICAge2RpYWdub3Npc31cbiAgICAgICAgICAgICA8L3A+XG4gICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XG4gICAgICAgICAgICB7ZGF0ZX08L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9e2AvYH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3RhdHVzIHJvdW5kZWQtcGlsbCB0ZXh0LXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZXRhaWxzXG5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgXG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJyZWNvbW1lbmRhdGlvbiIsImRpYWdub3NpcyIsImRhdGUiLCJzdGF0dXMiLCJzdGF0dXNDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=