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
            return getFeaturedTherapist();

          case 2:
            data = _context.sent;
            setTherapistList(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [getFeaturedTherapist]);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
    className: "featured-game pt-50 pb-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container-fluid",
      id: "fisioterapi",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: ["Our Physiotherapists", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 84
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
            lineNumber: 24,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThiZjllN2ZjYjhjNmEzNzAwMDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0ksaUJBQVQsR0FBNkI7QUFBQTs7QUFBQTs7QUFDeEMsa0JBQTBDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPRyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxNQUFNQyx3QkFBd0IsR0FBR0MsV0FBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QkMsb0JBQW9CLEVBREU7O0FBQUE7QUFDbkNDLFlBQUFBLElBRG1DO0FBRXpDSixZQUFBQSxnQkFBZ0IsQ0FBQ0ksSUFBRCxDQUFoQjs7QUFGeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUd6QyxDQUFDRCxvQkFBRCxDQUh5QyxDQUE1QztBQUlBUixFQUFBQSxnREFBUyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkUsZ0RBQUEsQ0FBVSxtREFBVixDQURoQjs7QUFBQTtBQUNEUyxZQUFBQSxRQURDO0FBRU5DLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjQSxJQUFwQztBQUNBSixZQUFBQSxnQkFBZ0IsQ0FBQ00sUUFBUSxDQUFDRixJQUFULENBQWNBLElBQWYsQ0FBaEI7O0FBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlQLEVBSk8sQ0FBVDtBQUtBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFFBQUUsRUFBQyxhQUFwQztBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBLHdEQUEyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBQyx5RkFBZjtBQUNJLG9CQUFTLFNBRGI7QUFBQSxrQkFHS0wsYUFBYSxDQUFDVSxHQUFkLENBQWtCLFVBQUFDLEtBQUssRUFBRztBQUN2QjtBQUFBLHdFQUFDLDhEQUFEO0FBRUEscUJBQVMsRUFBRUEsS0FBSyxDQUFDQyxhQUZqQjtBQUdBLG9CQUFRLEVBQUlELEtBQUssQ0FBQ0UsWUFIbEI7QUFJQSxxQkFBUyxpREFBMENGLEtBQUssQ0FBQ0csU0FBaEQ7QUFKVCxhQUNLSCxLQUFLLENBQUNJLEdBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILFNBUEE7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQWxDdUJoQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRmVhdHVyZWRUaGVyYXBpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVyYXBpc3RTdGFmZiBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1RoZXJhcGlzdFN0YWZmXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZFRoZXJhcGlzdCgpIHtcclxuICAgIGNvbnN0IFt0aGVyYXBpc3RMaXN0LCBzZXRUaGVyYXBpc3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0RmVhdHVyZWRUaGVyYXBpc3RMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmVhdHVyZWRUaGVyYXBpc3QoKTtcclxuICAgICAgICBzZXRUaGVyYXBpc3RMaXN0KGRhdGEpO1xyXG4gICAgfSwgW2dldEZlYXR1cmVkVGhlcmFwaXN0XSlcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS92MS9wYXRpZW50cy9sYW5kaW5ncGFnZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIDonLCByZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldFRoZXJhcGlzdExpc3QocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVkLWdhbWUgcHQtNTAgcGItNTBcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJmaXNpb3RlcmFwaVwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSBtYi0zMFwiPk91ciBQaHlzaW90aGVyYXBpc3RzPGJyLz4gXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBmbGV4LWxnLXdyYXAgb3ZlcmZsb3ctc2V0dGluZyBqdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiBnYXAtbGctMyBnYXAtNFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cclxuICAgICAgICAgICAge3RoZXJhcGlzdExpc3QubWFwKHN0YWZmID0+e1xyXG4gICAgICAgICAgICAgICAgPFRoZXJhcGlzdFN0YWZmIFxyXG4gICAgICAgICAgICAgICAga2V5PXtzdGFmZi5faWR9IFxyXG4gICAgICAgICAgICAgICAgbmFtZVN0YWZmPXtzdGFmZi50aGVyYXBpc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgIGFnZVN0YWZmID0ge3N0YWZmLnRoZXJhcGlzdEFnZX0gXHJcbiAgICAgICAgICAgICAgICB0aHVtYm5haWw9e2BodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpL3YxL3VwbG9hZHMvJHtzdGFmZi50aHVtYm5haWx9YH0vPlxyXG5cclxuICAgICAgICAgICAgfSl9ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiVGhlcmFwaXN0U3RhZmYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmVhdHVyZWRUaGVyYXBpc3QiLCJ0aGVyYXBpc3RMaXN0Iiwic2V0VGhlcmFwaXN0TGlzdCIsImdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCIsInVzZUNhbGxiYWNrIiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3QiLCJkYXRhIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3RhZmYiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwidGh1bWJuYWlsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==