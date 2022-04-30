"use strict";
self["webpackHotUpdate_N_E"]("pages/member",{

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
            ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjE1ODNmZTIzMzUxODRmOTQ0NGFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVZSxTQUFlRSxPQUE5QjtBQUFBO0FBQUE7OzsyVUFBZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCQyxZQUFBQSxHQUF4QixRQUF3QkEsR0FBeEIsRUFBNkJDLE1BQTdCLFFBQTZCQSxNQUE3QixFQUFxQ0MsSUFBckMsUUFBcUNBLElBQXJDLEVBQTJDQyxLQUEzQyxRQUEyQ0EsS0FBM0M7QUFDUEMsWUFBQUEsT0FETyxHQUNFLEVBREY7O0FBRVgsZ0JBQUdELEtBQUgsRUFBUztBQUNDRSxjQUFBQSxZQURELEdBQ2dCUCxrREFBQSxDQUFZLE9BQVosQ0FEaEI7O0FBRUwsa0JBQUdPLFlBQUgsRUFBZ0I7QUFDTkUsZ0JBQUFBLFFBRE0sR0FDS0MsSUFBSSxDQUFDSCxZQUFELENBRFQ7QUFFWkQsZ0JBQUFBLE9BQU8sR0FBRTtBQUNMSyxrQkFBQUEsYUFBYSxtQkFBV0YsUUFBWDtBQURSLGlCQUFUO0FBSUg7QUFDSjs7QUFYVTtBQUFBLG1CQWFZViw0Q0FBSyxDQUFDO0FBQ3pCRyxjQUFBQSxHQUFHLEVBQUhBLEdBRHlCO0FBRXpCQyxjQUFBQSxNQUFNLEVBQU5BLE1BRnlCO0FBR3pCQyxjQUFBQSxJQUFJLEVBQUpBLElBSHlCO0FBSXpCRSxjQUFBQSxPQUFPLEVBQVBBO0FBSnlCLGFBQUQsQ0FBTCxVQUtkLFVBQUNNLEdBQUQ7QUFBQSxxQkFBU0EsR0FBRyxDQUFDQyxRQUFiO0FBQUEsYUFMYyxDQWJaOztBQUFBO0FBYUxBLFlBQUFBLFFBYks7O0FBQUEsa0JBcUJSLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxNQUFWLElBQW1CLEdBckJYO0FBQUE7QUFBQTtBQUFBOztBQXNCREMsWUFBQUEsSUF0QkMsR0FzQks7QUFDUkMsY0FBQUEsS0FBSyxFQUFFLElBREM7QUFFUkMsY0FBQUEsT0FBTyxFQUFFSixRQUFRLENBQUNULElBQVQsQ0FBY2EsT0FGZjtBQUdSYixjQUFBQSxJQUFJLEVBQUU7QUFIRSxhQXRCTDtBQUFBLDZDQTJCQVcsSUEzQkE7O0FBQUE7QUE0QlY7QUFDS0EsWUFBQUEsR0E3QkssR0E2QkM7QUFDUkMsY0FBQUEsS0FBSyxFQUFFLEtBREM7QUFFUkMsY0FBQUEsT0FBTyxFQUFFLFNBRkQ7QUFHUmIsY0FBQUEsSUFBSSxFQUFFUyxRQUFRLENBQUNULElBQVQsQ0FBY2MsS0FBZCxHQUFzQkwsUUFBUSxDQUFDVCxJQUEvQixHQUFzQ1MsUUFBUSxDQUFDVCxJQUFULENBQWNBO0FBSGxELGFBN0JEO0FBQUEsNkNBa0NKVyxHQWxDSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvYXBpL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2FsbEFwaVByb3BzIGV4dGVuZHMgQXhpb3NSZXF1ZXN0Q29uZmlne1xyXG4gICAgdG9rZW4/OiBib29sZWFuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYWxsQVBJKHt1cmwsIG1ldGhvZCwgZGF0YSwgdG9rZW59OiBDYWxsQXBpUHJvcHMpIHtcclxuICAgIGxldCBoZWFkZXJzID17fVxyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIGNvbnN0IHRva2VuQ29va2llcyA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW5Db29raWVzKXtcclxuICAgICAgICAgICAgY29uc3QgSnd0VG9rZW4gPSBhdG9iKHRva2VuQ29va2llcylcclxuICAgICAgICAgICAgaGVhZGVycyA9e1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7Snd0VG9rZW59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBoZWFkZXJzXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2FwaSByZXNwb25zZSA6ICcsIHJlc3BvbnNlKVxyXG4gICAgXHJcbiAgICBpZihyZXNwb25zZT8uc3RhdHVzID4gMzAwKXtcclxuICAgICAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcclxuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmNvdW50ID8gcmVzcG9uc2UuZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJjYWxsQVBJIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInRva2VuIiwiaGVhZGVycyIsInRva2VuQ29va2llcyIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsIkF1dGhvcml6YXRpb24iLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcyIsImVycm9yIiwibWVzc2FnZSIsImNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==