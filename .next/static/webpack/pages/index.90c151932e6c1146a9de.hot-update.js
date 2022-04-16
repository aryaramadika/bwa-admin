"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/patient.ts":
/*!*****************************!*\
  !*** ./services/patient.ts ***!
  \*****************************/
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



var ROOT_API = "https://admintbs5.herokuapp.com";
var API_VERSION = 'api/v1';
function getFeaturedTherapist() {
  return _getFeaturedTherapist.apply(this, arguments);
}

function _getFeaturedTherapist() {
  _getFeaturedTherapist = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var ENDPOINT, response, axiosResponse;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ENDPOINT = 'patients/landingpage';
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(ROOT_API, "/").concat(API_VERSION, "/").concat(ENDPOINT));

          case 3:
            response = _context.sent;
            axiosResponse = response.data;
            return _context.abrupt("return", axiosResponse.data);

          case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTBjMTUxOTMyZTZjMTE0NmE5ZGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQyxRQUFRLEdBQUdDLGlDQUFqQjtBQUNBLElBQU1HLFdBQVcsR0FBRyxRQUFwQjtBQUVPLFNBQWVDLG9CQUF0QjtBQUFBO0FBQUE7Ozt3VkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFR0MsWUFBQUEsUUFGSCxHQUVjLHNCQUZkO0FBQUE7QUFBQSxtQkFJb0JQLGdEQUFBLFdBQWFDLFFBQWIsY0FBeUJJLFdBQXpCLGNBQXdDRSxRQUF4QyxFQUpwQjs7QUFBQTtBQUlHRSxZQUFBQSxRQUpIO0FBS0dDLFlBQUFBLGFBTEgsR0FLbUJELFFBQVEsQ0FBQ0UsSUFMNUI7QUFBQSw2Q0FPS0QsYUFBYSxDQUFDQyxJQVBuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVVBLFNBQWVDLGlCQUF0QjtBQUFBO0FBQUE7OztxVkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0ksSUFESjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9wYXRpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5jb25zdCBST09UX0FQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuY29uc3QgQVBJX1ZFUlNJT04gPSAnYXBpL3YxJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWF0dXJlZFRoZXJhcGlzdCgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgRU5EUE9JTlQgPSAncGF0aWVudHMvbGFuZGluZ3BhZ2UnO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke1JPT1RfQVBJfS8ke0FQSV9WRVJTSU9OfS8ke0VORFBPSU5UfWApO1xyXG4gICAgY29uc3QgYXhpb3NSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxuICAgIHJldHVybiAgYXhpb3NSZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpVGhlcmFwaXN0KCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlJPT1RfQVBJIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsIkFQSV9WRVJTSU9OIiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3QiLCJFTkRQT0lOVCIsImdldCIsInJlc3BvbnNlIiwiYXhpb3NSZXNwb25zZSIsImRhdGEiLCJnZXREZXRhaVRoZXJhcGlzdCJdLCJzb3VyY2VSb290IjoiIn0=