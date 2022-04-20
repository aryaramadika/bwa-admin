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
        display: 'flex'
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("priceDetail", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "button-group d-flex flex-column mx-auto pt-50",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill",
          href: "/sign-in",
          role: "button",
          children: "Reservation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmNmNTAwMDQ5MTViZDY1NWRjMDM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBSWUsU0FBU0csaUJBQVQsR0FBNkI7QUFBQTs7QUFDeEMsa0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9NLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NULCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9VLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLE1BQU1XLFNBQVMsR0FBRztBQUNkQyxJQUFBQSxLQUFLLEVBQUViLGlEQUFFLENBQUMsb0RBQUQ7QUFESyxHQUFsQixDQVB3QyxDQVV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFFSTtBQUFBLDRCQUNBO0FBQUssV0FBSyxFQUFFO0FBQUNjLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUM7QUFBdkQsT0FBWjtBQUFBLDZCQUNBO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNGLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEs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QTtBQUFBLGtCQUZKO0FBc0RIOztHQTFFdUJkO1VBTUxEOzs7S0FOS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVzZXJ2YXRpb25EZXRhaWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFByaWNlRGV0YWlsIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvUHJpY2VEZXRhaWxcIjtcclxuaW1wb3J0IHByaWNlRGV0YWlsIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9wcmljZURldGFpbFRyZWF0bWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2YXRpb25EZXRhaWwoKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RyZWF0bWVudCwgc2V0VHJlYXRtZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcclxuICAgICAgICBsYWJlbDogY3goJ2Zvcm0tbGFiZWwgdGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLTEwJyksXHJcbiAgICB9O1xyXG4gICAgLy8gY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgdXNlckZvcm0gPSB7XHJcbiAgICAvLyAgICAgICAgIGVtYWlsLFxyXG4gICAgLy8gICAgICAgICBuYW1lLCBcclxuICAgIC8vICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAvLyAgICAgICAgIHRyZWF0bWVudFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlci1mb3JtJywgSlNPTi5zdHJpbmdpZnkodXNlckZvcm0pKTtcclxuICAgIC8vICAgICByb3V0ZXIucHVzaCgnL3NpZ24tdXAtcGhvdG8nKTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnIH19PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSBtYi0xMFwiPlJlc2VydmF0aW9uIEZvcm08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZS5sYWJlbH0+RnVsbCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4J319PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMzBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmxhYmVsfT5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtcGlsbCB0ZXh0LWxnXCIgXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZS5sYWJlbH0+TGVtZW50YXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtcGlsbCB0ZXh0LWxnXCIgXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNlbnRpbmcgY29tcGxhaW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwcmljZURldGFpbCAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtbiBteC1hdXRvIHB0LTUwXCIgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi11cCBmdy1tZWRpdW0gdGV4dC1sZyB0ZXh0LXdoaXRlIHJvdW5kZWQtcGlsbCBtYi0xNlwiXHJcbiAgICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH0+Q29udGludWU8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBmdy1tZWRpdW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTEgcm91bmRlZC1waWxsXCIgaHJlZj1cIi9zaWduLWluXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+UmVzZXJ2YXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3giLCJ1c2VSb3V0ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ0cmVhdG1lbnQiLCJzZXRUcmVhdG1lbnQiLCJyb3V0ZXIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==