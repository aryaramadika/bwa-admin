"use strict";
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./components/organisms/TherapistDesc/index.tsx":
/*!******************************************************!*\
  !*** ./components/organisms/TherapistDesc/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TherapistDesc; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TherapistDesc\\index.tsx";

function TherapistDesc(props) {
  var type = props.type,
      data = props.data;
  var ROOT_IMG = "https://admintbs5.herokuapp.com/uploads"; // if(type ==='desktop'){
  //     return(
  //         <div className="pb-50 d-md-block d-none">
  //         <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
  //             {data.therapistName}
  //             </h2>
  //         <p className="text-lg color-palette-2 mb-0">Umur: {''}{data.therapistAge}</p>
  //     </div>
  //     )
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "".concat(ROOT_IMG, "/").concat(data.thumbnail),
        width: "280",
        height: "380",
        className: "img-fluid",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: ["Umur: ", '', data.therapistAge]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}
_c = TherapistDesc;

var _c;

$RefreshReg$(_c, "TherapistDesc");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uZDNmNjRhZjhiNmJhYjM0ODQwYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFpRDtBQUM1RCxNQUFPQyxJQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxJQUFQO0FBQUEsTUFBYUMsSUFBYixHQUFxQkYsS0FBckIsQ0FBYUUsSUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUNBQWpCLENBRjRELENBRzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsWUFBS0QsUUFBTCxjQUFpQkQsSUFBSSxDQUFDSyxTQUF0QixDQUFSO0FBQTJDLGFBQUssRUFBQyxLQUFqRDtBQUF1RCxjQUFNLEVBQUMsS0FBOUQ7QUFBb0UsaUJBQVMsRUFBQyxXQUE5RTtBQUEwRixXQUFHLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlBO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLGtEQUFkO0FBQUEsa0JBQWtFTCxJQUFJLENBQUNNO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUFBLDZCQUE4RCxFQUE5RCxFQUFrRU4sSUFBSSxDQUFDTyxZQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIO0tBeEJ1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvVGhlcmFwaXN0RGVzYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRoZXJhcGlzdERlc2NQcm9wcyB7XHJcbiAgICB0eXBlOidkZXNrdG9wJ3wnbW9iaWxlJztcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHRoZXJhcGlzdE5hbWU6IHN0cmluZyxcclxuICAgICAgICB0aGVyYXBpc3RBZ2U6bnVtYmVyLFxyXG4gICAgICAgIHRoZXJhcGlzdEdlbmRlcjpzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246c3RyaW5nLFxyXG4gICAgICAgIHRodW1ibmFpbDpzdHJpbmdcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVyYXBpc3REZXNjKHByb3BzOlRoZXJhcGlzdERlc2NQcm9wcykge1xyXG4gICAgY29uc3Qge3R5cGUsIGRhdGF9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBST09UX0lNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFXHJcbiAgICAvLyBpZih0eXBlID09PSdkZXNrdG9wJyl7XHJcbiAgICAvLyAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTUwIGQtbWQtYmxvY2sgZC1ub25lXCI+XHJcbiAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwIG10LTEwXCI+XHJcbiAgICAvLyAgICAgICAgICAgICB7ZGF0YS50aGVyYXBpc3ROYW1lfVxyXG4gICAgLy8gICAgICAgICAgICAgPC9oMj5cclxuICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTIgbWItMFwiPlVtdXI6IHsnJ317ZGF0YS50aGVyYXBpc3RBZ2V9PC9wPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICAgIClcclxuICAgIC8vIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLTRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake1JPT1RfSU1HfS8ke2RhdGEudGh1bWJuYWlsfWB9IHdpZHRoPVwiMjgwXCIgaGVpZ2h0PVwiMzgwXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC04IGQtbWQtbm9uZSBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTBcIj57ZGF0YS50aGVyYXBpc3ROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gY29sb3ItcGFsZXR0ZS0yIHRleHQtc3RhcnQgbWItMFwiPlVtdXI6IHsnJ317ZGF0YS50aGVyYXBpc3RBZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRoZXJhcGlzdERlc2MiLCJwcm9wcyIsInR5cGUiLCJkYXRhIiwiUk9PVF9JTUciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU1BR0UiLCJ0aHVtYm5haWwiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIl0sInNvdXJjZVJvb3QiOiIifQ==