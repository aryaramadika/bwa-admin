"use strict";
self["webpackHotUpdate_N_E"]("pages/member/transactions",{

/***/ "./services/member.ts":
/*!****************************!*\
  !*** ./services/member.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMemberTransactions": function() { return /* binding */ getMemberTransactions; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/api */ "./config/api/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var ROOT_API = "https://admintbs5.herokuapp.com";
var API_VERSION = 'api/v1';
function getMemberTransactions() {
  return _getMemberTransactions.apply(this, arguments);
}

function _getMemberTransactions() {
  _getMemberTransactions = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var url;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // let params = '';
            // if (valueParams === 'all') {
            //   params = '';
            // } else {
            //   params = `?status=${valueParams}`;
            // }
            url = "".concat(ROOT_API, "/").concat(API_VERSION, "/patients/history");
            return _context.abrupt("return", (0,_config_api__WEBPACK_IMPORTED_MODULE_2__.default)({
              url: url,
              method: 'GET',
              token: true
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMemberTransactions.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3RyYW5zYWN0aW9ucy4wODAzMWVlZGQwYzk5NTY1YTA3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLGlDQUFqQjtBQUNBLElBQU1HLFdBQVcsR0FBRyxRQUFwQjtBQUVPLFNBQWVDLHFCQUF0QjtBQUFBO0FBQUE7Ozt5VkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTUMsWUFBQUEsR0FQSCxhQU9ZTixRQVBaLGNBT3dCSSxXQVB4QjtBQUFBLDZDQVNJTCxvREFBTyxDQUFDO0FBQ2JPLGNBQUFBLEdBQUcsRUFBSEEsR0FEYTtBQUViQyxjQUFBQSxNQUFNLEVBQUUsS0FGSztBQUdiQyxjQUFBQSxLQUFLLEVBQUU7QUFITSxhQUFELENBVFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvbWVtYmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYWxsQVBJIGZyb20gXCIuLi9jb25maWcvYXBpXCI7XHJcblxyXG5jb25zdCBST09UX0FQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuY29uc3QgQVBJX1ZFUlNJT04gPSAnYXBpL3YxJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXJUcmFuc2FjdGlvbnMoKSB7XHJcbiAgICAvLyBsZXQgcGFyYW1zID0gJyc7XHJcbiAgICAvLyBpZiAodmFsdWVQYXJhbXMgPT09ICdhbGwnKSB7XHJcbiAgICAvLyAgIHBhcmFtcyA9ICcnO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgcGFyYW1zID0gYD9zdGF0dXM9JHt2YWx1ZVBhcmFtc31gO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgdXJsID0gYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059L3BhdGllbnRzL2hpc3RvcnlgO1xyXG4gIFxyXG4gICAgcmV0dXJuIGNhbGxBUEkoe1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHRva2VuOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfSJdLCJuYW1lcyI6WyJjYWxsQVBJIiwiUk9PVF9BUEkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiQVBJX1ZFUlNJT04iLCJnZXRNZW1iZXJUcmFuc2FjdGlvbnMiLCJ1cmwiLCJtZXRob2QiLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=