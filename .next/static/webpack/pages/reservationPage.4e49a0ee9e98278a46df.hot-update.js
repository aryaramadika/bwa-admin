"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

/***/ "./config/api/index.ts":
/*!*****************************!*\
  !*** ./config/api/index.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ callAPI; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);




function callAPI(_x) {
  return _callAPI.apply(this, arguments);
}

function _callAPI() {
  _callAPI = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
    var url, method, data, token, headers, tokenCookies, JwtToken, response, _res, res;

    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, method = _ref.method, data = _ref.data, token = _ref.token;
            headers = {};

            if (token) {
              tokenCookies = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get('token');

              if (tokenCookies) {
                JwtToken = atob(tokenCookies);
                headers = {
                  Authorization: "Bearer ".concat(JwtToken)
                };
              }
            }

            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              url: url,
              method: method,
              data: data,
              headers: headers
            })["catch"](function (err) {
              return err.response;
            });

          case 5:
            response = _context.sent;

            if (!((response === null || response === void 0 ? void 0 : response.status) > 300)) {
              _context.next = 9;
              break;
            }

            _res = {
              error: true,
              message: response.data.message,
              data: null
            };
            return _context.abrupt("return", _res);

          case 9:
            ; // console.log(response)

            res = {
              error: false,
              message: 'Success',
              data: response.data.count ? response.data : response.data.data
            };
            return _context.abrupt("return", res);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callAPI.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjRlNDlhMGVlOWU5ODI3OGE0NmRmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVZSxTQUFlRSxPQUE5QjtBQUFBO0FBQUE7OzsyVUFBZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCQyxZQUFBQSxHQUF4QixRQUF3QkEsR0FBeEIsRUFBNkJDLE1BQTdCLFFBQTZCQSxNQUE3QixFQUFxQ0MsSUFBckMsUUFBcUNBLElBQXJDLEVBQTJDQyxLQUEzQyxRQUEyQ0EsS0FBM0M7QUFDUEMsWUFBQUEsT0FETyxHQUNFLEVBREY7O0FBRVgsZ0JBQUdELEtBQUgsRUFBUztBQUNDRSxjQUFBQSxZQURELEdBQ2dCUCxrREFBQSxDQUFZLE9BQVosQ0FEaEI7O0FBRUwsa0JBQUdPLFlBQUgsRUFBZ0I7QUFDTkUsZ0JBQUFBLFFBRE0sR0FDS0MsSUFBSSxDQUFDSCxZQUFELENBRFQ7QUFFWkQsZ0JBQUFBLE9BQU8sR0FBRTtBQUNMSyxrQkFBQUEsYUFBYSxtQkFBV0YsUUFBWDtBQURSLGlCQUFUO0FBSUg7QUFDSjs7QUFYVTtBQUFBLG1CQWFZViw0Q0FBSyxDQUFDO0FBQ3pCRyxjQUFBQSxHQUFHLEVBQUhBLEdBRHlCO0FBRXpCQyxjQUFBQSxNQUFNLEVBQU5BLE1BRnlCO0FBR3pCQyxjQUFBQSxJQUFJLEVBQUpBLElBSHlCO0FBSXpCRSxjQUFBQSxPQUFPLEVBQVBBO0FBSnlCLGFBQUQsQ0FBTCxVQUtkLFVBQUNNLEdBQUQ7QUFBQSxxQkFBU0EsR0FBRyxDQUFDQyxRQUFiO0FBQUEsYUFMYyxDQWJaOztBQUFBO0FBYUxBLFlBQUFBLFFBYks7O0FBQUEsa0JBcUJSLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxNQUFWLElBQW1CLEdBckJYO0FBQUE7QUFBQTtBQUFBOztBQXNCREMsWUFBQUEsSUF0QkMsR0FzQks7QUFDUkMsY0FBQUEsS0FBSyxFQUFFLElBREM7QUFFUkMsY0FBQUEsT0FBTyxFQUFFSixRQUFRLENBQUNULElBQVQsQ0FBY2EsT0FGZjtBQUdSYixjQUFBQSxJQUFJLEVBQUU7QUFIRSxhQXRCTDtBQUFBLDZDQTJCQVcsSUEzQkE7O0FBQUE7QUE0QlYsYUE1QlUsQ0E2Qlg7O0FBQ01BLFlBQUFBLEdBOUJLLEdBOEJDO0FBQ1JDLGNBQUFBLEtBQUssRUFBRSxLQURDO0FBRVJDLGNBQUFBLE9BQU8sRUFBRSxTQUZEO0FBR1JiLGNBQUFBLElBQUksRUFBRVMsUUFBUSxDQUFDVCxJQUFULENBQWNjLEtBQWQsR0FBc0JMLFFBQVEsQ0FBQ1QsSUFBL0IsR0FBc0NTLFFBQVEsQ0FBQ1QsSUFBVCxDQUFjQTtBQUhsRCxhQTlCRDtBQUFBLDZDQW1DSlcsR0FuQ0k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL2FwaS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiXHJcbmltcG9ydCB7IEpXVFBheWxvYWRUeXBlcywgVXNlclR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGF0YS10eXBlcyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENhbGxBcGlQcm9wcyBleHRlbmRzIEF4aW9zUmVxdWVzdENvbmZpZ3tcclxuICAgIHRva2VuPzogYm9vbGVhblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbEFQSSh7dXJsLCBtZXRob2QsIGRhdGEsIHRva2VufTogQ2FsbEFwaVByb3BzKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9e31cclxuICAgIGlmKHRva2VuKXtcclxuICAgICAgICBjb25zdCB0b2tlbkNvb2tpZXMgPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gICAgICAgIGlmKHRva2VuQ29va2llcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbkNvb2tpZXMpXHJcbiAgICAgICAgICAgIGhlYWRlcnMgPXtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke0p3dFRva2VufWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaGVhZGVyc1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4gZXJyLnJlc3BvbnNlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhcGkgcmVzcG9uc2UgOiAnLCByZXNwb25zZSlcclxuICAgIFxyXG4gICAgaWYocmVzcG9uc2U/LnN0YXR1cyA+IDMwMCl7XHJcbiAgICAgICAgY29uc3QgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmNvdW50ID8gcmVzcG9uc2UuZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJjYWxsQVBJIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInRva2VuIiwiaGVhZGVycyIsInRva2VuQ29va2llcyIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsIkF1dGhvcml6YXRpb24iLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcyIsImVycm9yIiwibWVzc2FnZSIsImNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==