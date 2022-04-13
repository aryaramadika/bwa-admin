"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/organisms/FeaturedTherapist/index.tsx":
/*!**********************************************************!*\
  !*** ./components/organisms/FeaturedTherapist/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeaturedTherapist; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_TherapistStaff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/TherapistStaff */ "./components/molecules/TherapistStaff/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\FeaturedTherapist\\index.tsx",
    _s = $RefreshSig$();






function FeaturedTherapist() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      therapistList = _useState[0],
      setTherapistList = _useState[1];

  var getFeaturedTherapistList = useCallback( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_4__.getFeaturedTherapist)();

          case 2:
            data = _context.sent;
            setTherapistList(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [_services_patient__WEBPACK_IMPORTED_MODULE_4__.getFeaturedTherapist]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
    className: "featured-game pt-50 pb-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container-fluid",
      id: "fisioterapi",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: ["Our Physiotherapists", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 84
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4",
        "data-aos": "fade-up",
        children: therapistList.map(function (staff) {
          /*#__PURE__*/
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_molecules_TherapistStaff__WEBPACK_IMPORTED_MODULE_2__.default, {
            nameStaff: staff.therapistName,
            ageStaff: staff.therapistAge,
            thumbnail: "http://localhost:2000/api/v1/uploads/".concat(staff.thumbnail)
          }, staff._id, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(FeaturedTherapist, "CgDFDw6iC3q8qxdk1sjzVVITdPU=");

_c = FeaturedTherapist;

var _c;

$RefreshReg$(_c, "FeaturedTherapist");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWUwNmE4NTA0MjJlOTlmZTlmODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDZSxTQUFTSSxpQkFBVCxHQUE2QjtBQUFBOztBQUFBOztBQUN4QyxrQkFBMENGLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9HLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQU1DLHdCQUF3QixHQUFHQyxXQUFXLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3RCTCx1RUFBb0IsRUFERTs7QUFBQTtBQUNuQ00sWUFBQUEsSUFEbUM7QUFFekNILFlBQUFBLGdCQUFnQixDQUFDRyxJQUFELENBQWhCOztBQUZ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBR3pDLENBQUNOLG1FQUFELENBSHlDLENBQTVDO0FBSUFGLEVBQUFBLGdEQUFTLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlQLEVBSk8sQ0FBVDtBQUtBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFFBQUUsRUFBQyxhQUFwQztBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBLHdEQUEyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBQyx5RkFBZjtBQUNJLG9CQUFTLFNBRGI7QUFBQSxrQkFHS0ksYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLEtBQUssRUFBRztBQUN2QjtBQUFBLHdFQUFDLDhEQUFEO0FBRUEscUJBQVMsRUFBRUEsS0FBSyxDQUFDQyxhQUZqQjtBQUdBLG9CQUFRLEVBQUlELEtBQUssQ0FBQ0UsWUFIbEI7QUFJQSxxQkFBUyxpREFBMENGLEtBQUssQ0FBQ0csU0FBaEQ7QUFKVCxhQUNLSCxLQUFLLENBQUNJLEdBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILFNBUEE7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQWxDdUJYOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9GZWF0dXJlZFRoZXJhcGlzdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZXJhcGlzdFN0YWZmIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvVGhlcmFwaXN0U3RhZmZcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IGdldEZlYXR1cmVkVGhlcmFwaXN0IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZFRoZXJhcGlzdCgpIHtcclxuICAgIGNvbnN0IFt0aGVyYXBpc3RMaXN0LCBzZXRUaGVyYXBpc3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0RmVhdHVyZWRUaGVyYXBpc3RMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmVhdHVyZWRUaGVyYXBpc3QoKTtcclxuICAgICAgICBzZXRUaGVyYXBpc3RMaXN0KGRhdGEpXHJcbiAgICB9LCBbZ2V0RmVhdHVyZWRUaGVyYXBpc3RdKVxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpL3YxL3BhdGllbnRzL2xhbmRpbmdwYWdlJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2RhdGEgOicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAvLyAgICAgc2V0VGhlcmFwaXN0TGlzdChyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtZ2FtZSBwdC01MCBwYi01MFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cImZpc2lvdGVyYXBpXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTMwXCI+T3VyIFBoeXNpb3RoZXJhcGlzdHM8YnIvPiBcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtbGctd3JhcCBvdmVyZmxvdy1zZXR0aW5nIGp1c3RpZnktY29udGVudC1sZy1iZXR3ZWVuIGdhcC1sZy0zIGdhcC00XCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblxyXG4gICAgICAgICAgICB7dGhlcmFwaXN0TGlzdC5tYXAoc3RhZmYgPT57XHJcbiAgICAgICAgICAgICAgICA8VGhlcmFwaXN0U3RhZmYgXHJcbiAgICAgICAgICAgICAgICBrZXk9e3N0YWZmLl9pZH0gXHJcbiAgICAgICAgICAgICAgICBuYW1lU3RhZmY9e3N0YWZmLnRoZXJhcGlzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgYWdlU3RhZmYgPSB7c3RhZmYudGhlcmFwaXN0QWdlfSBcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbD17YGh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9hcGkvdjEvdXBsb2Fkcy8ke3N0YWZmLnRodW1ibmFpbH1gfS8+XHJcblxyXG4gICAgICAgICAgICB9KX0gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUaGVyYXBpc3RTdGFmZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3QiLCJGZWF0dXJlZFRoZXJhcGlzdCIsInRoZXJhcGlzdExpc3QiLCJzZXRUaGVyYXBpc3RMaXN0IiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3RMaXN0IiwidXNlQ2FsbGJhY2siLCJkYXRhIiwibWFwIiwic3RhZmYiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwidGh1bWJuYWlsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==