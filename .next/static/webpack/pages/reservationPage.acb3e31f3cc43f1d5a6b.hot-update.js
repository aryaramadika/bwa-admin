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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
          lineNumber: 32,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          justifyContent: 'left',
          alignItems: 'center',
          display: 'flex',
          marginLeft: " 240px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "pt-50",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
            className: className.label,
            children: "Full Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "text",
            className: "form-control rounded-pill text-lg",
            "aria-describedby": "name",
            placeholder: "Enter your name",
            value: name,
            onChange: function onChange(event) {
              return setName(event.target.value);
            },
            style: {
              width: "250%",
              maxWidth: "1000%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          justifyContent: 'left',
          alignItems: 'center',
          display: 'flex',
          marginLeft: " 240px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "pt-30",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
            className: className.label,
            children: "Phone Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "text",
            className: "form-control rounded-pill text-lg",
            "aria-describedby": "email",
            placeholder: "Enter your phone number",
            value: email,
            onChange: function onChange(event) {
              return setEmail(event.target.value);
            },
            style: {
              width: "250%",
              maxWidth: "1000%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          justifyContent: 'left',
          alignItems: 'center',
          display: 'flex',
          marginLeft: " 240px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "pt-30",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
            className: className.label,
            children: "Lementation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "text",
            className: "form-control rounded-pill text-lg",
            "aria-describedby": "password",
            placeholder: "Presenting complaint",
            value: password,
            onChange: function onChange(event) {
              return setPassword(event.target.value);
            },
            style: {
              width: "250%",
              maxWidth: "1000%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmFjYjNlMzFmM2NjNDNmMWQ1YTZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBSWUsU0FBU0csaUJBQVQsR0FBNkI7QUFBQTs7QUFDeEMsa0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9NLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NULCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9VLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLE1BQU1XLFNBQVMsR0FBRztBQUNkQyxJQUFBQSxLQUFLLEVBQUViLGlEQUFFLENBQUMsb0RBQUQ7QUFESyxHQUFsQixDQVB3QyxDQVV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFFSTtBQUFBLDJCQUNBO0FBQUEsOEJBQ0E7QUFBSyxhQUFLLEVBQUU7QUFBQ2MsVUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCQyxVQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFVBQUFBLE9BQU8sRUFBQztBQUF2RCxTQUFaO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBSUk7QUFBSyxhQUFLLEVBQUU7QUFBQ0YsVUFBQUEsY0FBYyxFQUFDLE1BQWhCO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFGSjtBQThESDs7R0FsRnVCcEI7VUFNTEQ7OztLQU5LQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZXNlcnZhdGlvbkRldGFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUHJpY2VEZXRhaWwgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9QcmljZURldGFpbFwiO1xyXG5pbXBvcnQgcHJpY2VEZXRhaWwgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL3ByaWNlRGV0YWlsVHJlYXRtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNlcnZhdGlvbkRldGFpbCgpIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHJlYXRtZW50LCBzZXRUcmVhdG1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0ge1xyXG4gICAgICAgIGxhYmVsOiBjeCgnZm9ybS1sYWJlbCB0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTAnKSxcclxuICAgIH07XHJcbiAgICAvLyBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB1c2VyRm9ybSA9IHtcclxuICAgIC8vICAgICAgICAgZW1haWwsXHJcbiAgICAvLyAgICAgICAgIG5hbWUsIFxyXG4gICAgLy8gICAgICAgICBwYXNzd29yZCxcclxuICAgIC8vICAgICAgICAgdHJlYXRtZW50XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyLWZvcm0nLCBKU09OLnN0cmluZ2lmeSh1c2VyRm9ybSkpO1xyXG4gICAgLy8gICAgIHJvdXRlci5wdXNoKCcvc2lnbi11cC1waG90bycpO1xyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCcsIH19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMTBcIj5SZXNlcnZhdGlvbiBGb3JtPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonbGVmdCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnLG1hcmdpbkxlZnQ6IFwiIDI0MHB4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmxhYmVsfT5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC1waWxsIHRleHQtbGdcIiBcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIyNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6XCIxMDAwJVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidsZWZ0JywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCcsbWFyZ2luTGVmdDogXCIgMjQwcHhcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMzBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmxhYmVsfT5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtcGlsbCB0ZXh0LWxnXCIgXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCIyNTAlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDpcIjEwMDAlXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2xlZnQnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4JyxtYXJnaW5MZWZ0OiBcIiAyNDBweFwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWUubGFiZWx9PkxlbWVudGF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVzZW50aW5nIGNvbXBsYWludFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiMjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6XCIxMDAwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICBcclxuICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3giLCJ1c2VSb3V0ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ0cmVhdG1lbnQiLCJzZXRUcmVhdG1lbnQiLCJyb3V0ZXIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9