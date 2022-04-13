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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_5__.getFeaturedTherapist)();

          case 2:
            data = _context.sent;
            setTherapistList(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [_services_patient__WEBPACK_IMPORTED_MODULE_5__.getFeaturedTherapist]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var response;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:2000/api/v1/patients/landingpage');

          case 2:
            response = _context2.sent;
            console.log('data :', response.data.data);
            setTherapistList(response.data.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
    className: "featured-game pt-50 pb-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "container-fluid",
      id: "fisioterapi",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: ["Our Physiotherapists", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 84
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4",
        "data-aos": "fade-up",
        children: therapistList.map(function (staff) {
          /*#__PURE__*/
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_molecules_TherapistStaff__WEBPACK_IMPORTED_MODULE_2__.default, {
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


/***/ }),

/***/ "./services/patient.tsx":
/*!******************************!*\
  !*** ./services/patient.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFeaturedTherapist": function() { return /* binding */ getFeaturedTherapist; },
/* harmony export */   "getDetaiTherapist": function() { return /* binding */ getDetaiTherapist; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



function getFeaturedTherapist() {
  return _getFeaturedTherapist.apply(this, arguments);
}

function _getFeaturedTherapist() {
  _getFeaturedTherapist = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var ROOT_API, API_VERSION, ENDPOINT, response, axiosResponse;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ROOT_API = "http://localhost:2000";
            API_VERSION = 'api/v1';
            ENDPOINT = 'patients/landingpage';
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(ROOT_API, "/").concat(API_VERSION, "/").concat(ENDPOINT));

          case 5:
            response = _context.sent;
            axiosResponse = response.data;
            return _context.abrupt("return", axiosResponse.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFeaturedTherapist.apply(this, arguments);
}

function getDetaiTherapist() {
  return _getDetaiTherapist.apply(this, arguments);
}

function _getDetaiTherapist() {
  _getDetaiTherapist = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", null);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDetaiTherapist.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODFiY2Y2YWU5ZDhjYjZiOTFhYWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0ssaUJBQVQsR0FBNkI7QUFBQTs7QUFBQTs7QUFDeEMsa0JBQTBDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPSSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxNQUFNQyx3QkFBd0IsR0FBR0MsV0FBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QkwsdUVBQW9CLEVBREU7O0FBQUE7QUFDbkNNLFlBQUFBLElBRG1DO0FBRXpDSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csSUFBRCxDQUFoQjs7QUFGeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUd6QyxDQUFDTixtRUFBRCxDQUh5QyxDQUE1QztBQUlBSCxFQUFBQSxnREFBUyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkUsZ0RBQUEsQ0FBVSxtREFBVixDQURoQjs7QUFBQTtBQUNEUyxZQUFBQSxRQURDO0FBRU5DLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjQSxJQUFwQztBQUNBSCxZQUFBQSxnQkFBZ0IsQ0FBQ0ssUUFBUSxDQUFDRixJQUFULENBQWNBLElBQWYsQ0FBaEI7O0FBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlQLEVBSk8sQ0FBVDtBQUtBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFFBQUUsRUFBQyxhQUFwQztBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBLHdEQUEyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBQyx5RkFBZjtBQUNJLG9CQUFTLFNBRGI7QUFBQSxrQkFHS0osYUFBYSxDQUFDUyxHQUFkLENBQWtCLFVBQUFDLEtBQUssRUFBRztBQUN2QjtBQUFBLHdFQUFDLDhEQUFEO0FBRUEscUJBQVMsRUFBRUEsS0FBSyxDQUFDQyxhQUZqQjtBQUdBLG9CQUFRLEVBQUlELEtBQUssQ0FBQ0UsWUFIbEI7QUFJQSxxQkFBUyxpREFBMENGLEtBQUssQ0FBQ0csU0FBaEQ7QUFKVCxhQUNLSCxLQUFLLENBQUNJLEdBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILFNBUEE7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQWxDdUJmOztLQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFFTyxTQUFlRCxvQkFBdEI7QUFBQTtBQUFBOzs7d1ZBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dpQixZQUFBQSxRQURILEdBQ2NDLHVCQURkO0FBRUdHLFlBQUFBLFdBRkgsR0FFaUIsUUFGakI7QUFHR0MsWUFBQUEsUUFISCxHQUdjLHNCQUhkO0FBQUE7QUFBQSxtQkFLb0J2QixnREFBQSxXQUFha0IsUUFBYixjQUF5QkksV0FBekIsY0FBd0NDLFFBQXhDLEVBTHBCOztBQUFBO0FBS0dkLFlBQUFBLFFBTEg7QUFNR2UsWUFBQUEsYUFOSCxHQU1tQmYsUUFBUSxDQUFDRixJQU41QjtBQUFBLDZDQVFLaUIsYUFBYSxDQUFDakIsSUFSbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFXQSxTQUFla0IsaUJBQXRCO0FBQUE7QUFBQTs7O3FWQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDSSxJQURKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0ZlYXR1cmVkVGhlcmFwaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvcGF0aWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZXJhcGlzdFN0YWZmIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvVGhlcmFwaXN0U3RhZmZcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IGdldEZlYXR1cmVkVGhlcmFwaXN0IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZFRoZXJhcGlzdCgpIHtcclxuICAgIGNvbnN0IFt0aGVyYXBpc3RMaXN0LCBzZXRUaGVyYXBpc3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0RmVhdHVyZWRUaGVyYXBpc3RMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmVhdHVyZWRUaGVyYXBpc3QoKTtcclxuICAgICAgICBzZXRUaGVyYXBpc3RMaXN0KGRhdGEpXHJcbiAgICB9LCBbZ2V0RmVhdHVyZWRUaGVyYXBpc3RdKVxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpL3YxL3BhdGllbnRzL2xhbmRpbmdwYWdlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgOicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0VGhlcmFwaXN0TGlzdChyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtZ2FtZSBwdC01MCBwYi01MFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cImZpc2lvdGVyYXBpXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTMwXCI+T3VyIFBoeXNpb3RoZXJhcGlzdHM8YnIvPiBcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtbGctd3JhcCBvdmVyZmxvdy1zZXR0aW5nIGp1c3RpZnktY29udGVudC1sZy1iZXR3ZWVuIGdhcC1sZy0zIGdhcC00XCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblxyXG4gICAgICAgICAgICB7dGhlcmFwaXN0TGlzdC5tYXAoc3RhZmYgPT57XHJcbiAgICAgICAgICAgICAgICA8VGhlcmFwaXN0U3RhZmYgXHJcbiAgICAgICAgICAgICAgICBrZXk9e3N0YWZmLl9pZH0gXHJcbiAgICAgICAgICAgICAgICBuYW1lU3RhZmY9e3N0YWZmLnRoZXJhcGlzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgYWdlU3RhZmYgPSB7c3RhZmYudGhlcmFwaXN0QWdlfSBcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbD17YGh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9hcGkvdjEvdXBsb2Fkcy8ke3N0YWZmLnRodW1ibmFpbH1gfS8+XHJcblxyXG4gICAgICAgICAgICB9KX0gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWF0dXJlZFRoZXJhcGlzdCgpIHtcclxuICAgIGNvbnN0IFJPT1RfQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gICAgY29uc3QgQVBJX1ZFUlNJT04gPSAnYXBpL3YxJztcclxuICAgIGNvbnN0IEVORFBPSU5UID0gJ3BhdGllbnRzL2xhbmRpbmdwYWdlJztcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vJHtFTkRQT0lOVH1gKTtcclxuICAgIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIGF4aW9zUmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXRhaVRoZXJhcGlzdCgpIHtcclxuICAgIHJldHVybiBudWxsXHJcbn0iXSwibmFtZXMiOlsiVGhlcmFwaXN0U3RhZmYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3QiLCJGZWF0dXJlZFRoZXJhcGlzdCIsInRoZXJhcGlzdExpc3QiLCJzZXRUaGVyYXBpc3RMaXN0IiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3RMaXN0IiwidXNlQ2FsbGJhY2siLCJkYXRhIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3RhZmYiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwidGh1bWJuYWlsIiwiX2lkIiwiUk9PVF9BUEkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiQVBJX1ZFUlNJT04iLCJFTkRQT0lOVCIsImF4aW9zUmVzcG9uc2UiLCJnZXREZXRhaVRoZXJhcGlzdCJdLCJzb3VyY2VSb290IjoiIn0=