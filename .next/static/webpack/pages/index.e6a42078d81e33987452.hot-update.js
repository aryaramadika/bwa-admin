"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/molecules/TherapistStaff/index.tsx":
/*!*******************************************************!*\
  !*** ./components/molecules/TherapistStaff/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TherapistStaff; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\molecules\\TherapistStaff\\index.tsx";



function TherapistStaff(props) {
  var nameStaff = props.nameStaff,
      ageStaff = props.ageStaff,
      thumbnail = props.thumbnail,
      id = props.id;
  console.log(nameStaff, ageStaff, thumbnail, id);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "featured-game-card position-relative",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/detail/".concat(id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "blur-sharp",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            className: "thumbnail",
            src: thumbnail,
            width: 205,
            height: 270,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "cover position-absolute bottom-0 m-32",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "d-flex flex-column h-100 justify-content-between text-decoration-none",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "fw-semibold text-white text-xl m-0",
                children: nameStaff
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "fw-light text-white m-0",
                children: ageStaff
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
_c = TherapistStaff;

var _c;

$RefreshReg$(_c, "TherapistStaff");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZhNDIwNzhkODFlMzM5ODc0NTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9lLFNBQVNFLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQW1EO0FBQzlELE1BQU1DLFNBQU4sR0FBd0NELEtBQXhDLENBQU1DLFNBQU47QUFBQSxNQUFnQkMsUUFBaEIsR0FBd0NGLEtBQXhDLENBQWdCRSxRQUFoQjtBQUFBLE1BQXlCQyxTQUF6QixHQUF3Q0gsS0FBeEMsQ0FBeUJHLFNBQXpCO0FBQUEsTUFBbUNDLEVBQW5DLEdBQXdDSixLQUF4QyxDQUFtQ0ksRUFBbkM7QUFHQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBc0JDLFFBQXRCLEVBQStCQyxTQUEvQixFQUF5Q0MsRUFBekM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBLDJCQUNBLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxvQkFBYUEsRUFBYixDQUFWO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJLDhEQUFDLG1EQUFEO0FBQU8scUJBQVMsRUFBQyxXQUFqQjtBQUE2QixlQUFHLEVBQUVELFNBQWxDO0FBQTZDLGlCQUFLLEVBQUUsR0FBcEQ7QUFBeUQsa0JBQU0sRUFBRSxHQUFqRTtBQUFzRSxlQUFHLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFJQTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsdUVBQWY7QUFBQSxtQ0FJSTtBQUFBLHNDQUNJO0FBQUcseUJBQVMsRUFBQyxvQ0FBYjtBQUFBLDBCQUFvREY7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUcseUJBQVMsRUFBQyx5QkFBYjtBQUFBLDBCQUF3Q0M7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIO0tBN0J1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvVGhlcmFwaXN0U3RhZmYvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlcmFwaXN0U3RhZmZQcm9wc3tcclxuICAgIG5hbWVTdGFmZjogc3RyaW5nO1xyXG4gICAgYWdlU3RhZmY6bnVtYmVyO1xyXG4gICAgdGh1bWJuYWlsOnN0cmluZztcclxuICAgIGlkOnN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVyYXBpc3RTdGFmZihwcm9wczpUaGVyYXBpc3RTdGFmZlByb3BzKSB7XHJcbiAgICBjb25zdHtuYW1lU3RhZmYsYWdlU3RhZmYsdGh1bWJuYWlsLGlkfT0gcHJvcHM7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKG5hbWVTdGFmZixhZ2VTdGFmZix0aHVtYm5haWwsaWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtZ2FtZS1jYXJkIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXItc2hhcnBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIiBzcmM9e3RodW1ibmFpbH0gd2lkdGg9ezIwNX0gaGVpZ2h0PXsyNzB9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXIgcG9zaXRpb24tYWJzb2x1dGUgYm90dG9tLTAgbS0zMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gaC0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW4gdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJnYW1lLWljb24gbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgIHNyYz1cIi9pY29uL2NvbnNvbGUuc3ZnXCIgd2lkdGg9ezM0fSBoZWlnaHQgPXsxNn0gYWx0PVwiY29uc29sZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctc2VtaWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXhsIG0tMFwiID57bmFtZVN0YWZmfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbGlnaHQgdGV4dC13aGl0ZSBtLTBcIj57YWdlU3RhZmZ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiVGhlcmFwaXN0U3RhZmYiLCJwcm9wcyIsIm5hbWVTdGFmZiIsImFnZVN0YWZmIiwidGh1bWJuYWlsIiwiaWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==