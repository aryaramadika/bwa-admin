"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

/***/ "./components/organisms/ReservationDetail/index.tsx":
/*!**********************************************************!*\
  !*** ./components/organisms/ReservationDetail/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReservationDetail; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReservationDetail\\index.tsx",
    _s = $RefreshSig$();






function ReservationDetail() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      treatment = _useState4[0],
      setTreatment = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var className = {
    label: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-label text-lg fw-medium color-palette-1 mb-10')
  }; // const onSubmit = () => {
  //     const userForm = {
  //         email,
  //         name, 
  //         password,
  //         treatment
  //     }
  //     localStorage.setItem('user-form', JSON.stringify(userForm));
  //     router.push('/sign-up-photo');
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-10",
        children: "Reservation Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: "50px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "pt-50",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          className: className.label,
          children: "Full Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "name",
          placeholder: "Enter your name",
          value: name,
          onChange: function onChange(event) {
            return setName(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "pt-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          className: className.label,
          children: "Phone Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "email",
          placeholder: "Enter your phone number",
          value: email,
          onChange: function onChange(event) {
            return setEmail(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "pt-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          className: className.label,
          children: "Lementation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "password",
          placeholder: "Presenting complaint",
          value: password,
          onChange: function onChange(event) {
            return setPassword(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(ReservationDetail, "yr8z8JfDpgsfZ79djpKB38A0CUM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ReservationDetail;

var _c;

$RefreshReg$(_c, "ReservationDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmVmZDE5NGMwZTYwNjQyMGFhNmEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBSWUsU0FBU0csaUJBQVQsR0FBNkI7QUFBQTs7QUFDeEMsa0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9NLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NULCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9VLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLE1BQU1XLFNBQVMsR0FBRztBQUNkQyxJQUFBQSxLQUFLLEVBQUViLGlEQUFFLENBQUMsb0RBQUQ7QUFESyxHQUFsQixDQVB3QyxDQVV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFFSTtBQUFBLDRCQUNBO0FBQUssV0FBSyxFQUFFO0FBQUNjLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUM7QUFBdkQsT0FBWjtBQUFBLDZCQUNBO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNGLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUMsTUFBdkQ7QUFBOERDLFFBQUFBLEtBQUssRUFBQztBQUFwRSxPQUFaO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUVMLFNBQVMsQ0FBQ0MsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQ0EsbUJBQVMsRUFBQyxtQ0FEVjtBQUVBLDhCQUFpQixNQUZqQjtBQUdBLHFCQUFXLEVBQUMsaUJBSFo7QUFJQSxlQUFLLEVBQUVWLElBSlA7QUFLQSxrQkFBUSxFQUFFLGtCQUFDZSxLQUFEO0FBQUEsbUJBQVdkLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBLGVBZ0JBO0FBQUssV0FBSyxFQUFFO0FBQUNOLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUM7QUFBdkQsT0FBWjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFFSixTQUFTLENBQUNDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUNBLG1CQUFTLEVBQUMsbUNBRFY7QUFFQSw4QkFBaUIsT0FGakI7QUFHQSxxQkFBVyxFQUFDLHlCQUhaO0FBSUEsZUFBSyxFQUFFUixLQUpQO0FBS0Esa0JBQVEsRUFBRSxrQkFBQ2EsS0FBRDtBQUFBLG1CQUFXWixRQUFRLENBQUNZLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQW5CO0FBQUE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkEsZUE0QkE7QUFBSyxXQUFLLEVBQUU7QUFBQ04sUUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCQyxRQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFFBQUFBLE9BQU8sRUFBQztBQUF2RCxPQUFaO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUVKLFNBQVMsQ0FBQ0MsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQ0EsbUJBQVMsRUFBQyxtQ0FEVjtBQUVBLDhCQUFpQixVQUZqQjtBQUdBLHFCQUFXLEVBQUMsc0JBSFo7QUFJQSxlQUFLLEVBQUVOLFFBSlA7QUFLQSxrQkFBUSxFQUFFLGtCQUFDVyxLQUFEO0FBQUEsbUJBQVdWLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBdEI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCQTtBQUFBLGtCQUZKO0FBOENIOztHQWxFdUJsQjtVQU1MRDs7O0tBTktDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Jlc2VydmF0aW9uRGV0YWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBQcmljZURldGFpbCBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1ByaWNlRGV0YWlsXCI7XHJcbmltcG9ydCBwcmljZURldGFpbCBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmF0aW9uRGV0YWlsKCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnQsIHNldFRyZWF0bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB7XHJcbiAgICAgICAgbGFiZWw6IGN4KCdmb3JtLWxhYmVsIHRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xMCcpLFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHVzZXJGb3JtID0ge1xyXG4gICAgLy8gICAgICAgICBlbWFpbCxcclxuICAgIC8vICAgICAgICAgbmFtZSwgXHJcbiAgICAvLyAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICB0cmVhdG1lbnRcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItZm9ybScsIEpTT04uc3RyaW5naWZ5KHVzZXJGb3JtKSk7XHJcbiAgICAvLyAgICAgcm91dGVyLnB1c2goJy9zaWduLXVwLXBob3RvJyk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4JyB9fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMTBcIj5SZXNlcnZhdGlvbiBGb3JtPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnLHdpZHRoOlwiNTBweFwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01MFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWUubGFiZWx9PkZ1bGwgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC1waWxsIHRleHQtbGdcIiBcclxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZS5sYWJlbH0+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBob25lIG51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWUubGFiZWx9PkxlbWVudGF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVzZW50aW5nIGNvbXBsYWludFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgXHJcbiAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImN4IiwidXNlUm91dGVyIiwiUmVzZXJ2YXRpb25EZXRhaWwiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidHJlYXRtZW50Iiwic2V0VHJlYXRtZW50Iiwicm91dGVyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkaXNwbGF5Iiwid2lkdGgiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==