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

  var getFeaturedTherapistList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
            console.log(data);

          case 5:
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
            //    const response = await axios.get('http://localhost:2000/api/v1/patients/landingpage');
            //     console.log('data :', response.data.data);
            //     setTherapistList(response.data.data);
            getFeaturedTherapistList();

          case 1:
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
          lineNumber: 21,
          columnNumber: 84
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
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
            lineNumber: 27,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQxN2Y5MTRmYWY5ZGJiNzg5OTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDZSxTQUFTSyxpQkFBVCxHQUE2QjtBQUFBOztBQUFBOztBQUN4QyxrQkFBMENGLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9HLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQU1DLHdCQUF3QixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QkcsdUVBQW9CLEVBREU7O0FBQUE7QUFDbkNLLFlBQUFBLElBRG1DO0FBRXpDRixZQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBRCxDQUFoQjtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFIeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUl6QyxDQUFDTCxtRUFBRCxDQUp5QyxDQUE1QztBQUtBRixFQUFBQSxnREFBUyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1Y7QUFDQTtBQUNBO0FBQ0FNLFlBQUFBLHdCQUF3Qjs7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS1AsRUFMTyxDQUFUO0FBTUEsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsMkJBQW5CO0FBQUEsMkJBQ0o7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLGFBQXBDO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHdDQUFkO0FBQUEsd0RBQTJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLHlGQUFmO0FBQ0ksb0JBQVMsU0FEYjtBQUFBLGtCQUdLRixhQUFhLENBQUNNLEdBQWQsQ0FBa0IsVUFBQUMsS0FBSyxFQUFHO0FBQ3ZCO0FBQUEsd0VBQUMsOERBQUQ7QUFFQSxxQkFBUyxFQUFFQSxLQUFLLENBQUNDLGFBRmpCO0FBR0Esb0JBQVEsRUFBSUQsS0FBSyxDQUFDRSxZQUhsQjtBQUlBLHFCQUFTLGlEQUEwQ0YsS0FBSyxDQUFDRyxTQUFoRDtBQUpULGFBQ0tILEtBQUssQ0FBQ0ksR0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUgsU0FQQTtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1Qkg7O0dBcEN1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0ZlYXR1cmVkVGhlcmFwaXN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlcmFwaXN0U3RhZmYgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9UaGVyYXBpc3RTdGFmZlwiXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgZ2V0RmVhdHVyZWRUaGVyYXBpc3QgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcGF0aWVudFwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkVGhlcmFwaXN0KCkge1xyXG4gICAgY29uc3QgW3RoZXJhcGlzdExpc3QsIHNldFRoZXJhcGlzdExpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBnZXRGZWF0dXJlZFRoZXJhcGlzdExpc3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRGZWF0dXJlZFRoZXJhcGlzdCgpO1xyXG4gICAgICAgIHNldFRoZXJhcGlzdExpc3QoZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSwgW2dldEZlYXR1cmVkVGhlcmFwaXN0XSlcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS92MS9wYXRpZW50cy9sYW5kaW5ncGFnZScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIDonLCByZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgLy8gICAgIHNldFRoZXJhcGlzdExpc3QocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgIGdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCgpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1nYW1lIHB0LTUwIHBiLTUwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlzaW90ZXJhcGlcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMzBcIj5PdXIgUGh5c2lvdGhlcmFwaXN0czxici8+IFxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgZmxleC1sZy13cmFwIG92ZXJmbG93LXNldHRpbmcganVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4gZ2FwLWxnLTMgZ2FwLTRcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgIHt0aGVyYXBpc3RMaXN0Lm1hcChzdGFmZiA9PntcclxuICAgICAgICAgICAgICAgIDxUaGVyYXBpc3RTdGFmZiBcclxuICAgICAgICAgICAgICAgIGtleT17c3RhZmYuX2lkfSBcclxuICAgICAgICAgICAgICAgIG5hbWVTdGFmZj17c3RhZmYudGhlcmFwaXN0TmFtZX0gXHJcbiAgICAgICAgICAgICAgICBhZ2VTdGFmZiA9IHtzdGFmZi50aGVyYXBpc3RBZ2V9IFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsPXtgaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS92MS91cGxvYWRzLyR7c3RhZmYudGh1bWJuYWlsfWB9Lz5cclxuXHJcbiAgICAgICAgICAgIH0pfSAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRoZXJhcGlzdFN0YWZmIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEZlYXR1cmVkVGhlcmFwaXN0IiwiRmVhdHVyZWRUaGVyYXBpc3QiLCJ0aGVyYXBpc3RMaXN0Iiwic2V0VGhlcmFwaXN0TGlzdCIsImdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3RhZmYiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwidGh1bWJuYWlsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==