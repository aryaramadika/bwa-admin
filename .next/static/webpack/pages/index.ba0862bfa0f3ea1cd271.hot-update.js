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
            console.log(data.data.data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmEwODYyYmZhMGYzZWExY2QyNzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDZSxTQUFTSyxpQkFBVCxHQUE2QjtBQUFBOztBQUFBOztBQUN4QyxrQkFBMENGLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9HLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQU1DLHdCQUF3QixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QkcsdUVBQW9CLEVBREU7O0FBQUE7QUFDbkNLLFlBQUFBLElBRG1DO0FBRXpDRixZQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBRCxDQUFoQjtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDQSxJQUFMLENBQVVBLElBQXRCOztBQUh5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSXpDLENBQUNMLG1FQUFELENBSnlDLENBQTVDO0FBS0FGLEVBQUFBLGdEQUFTLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVjtBQUNBO0FBQ0E7QUFDQU0sWUFBQUEsd0JBQXdCOztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFLUCxFQUxPLENBQVQ7QUFNQSxzQkFDSTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQSwyQkFDSjtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFpQyxRQUFFLEVBQUMsYUFBcEM7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0NBQWQ7QUFBQSx3REFBMkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFLLGlCQUFTLEVBQUMseUZBQWY7QUFDSSxvQkFBUyxTQURiO0FBQUEsa0JBR0tGLGFBQWEsQ0FBQ00sR0FBZCxDQUFrQixVQUFBQyxLQUFLLEVBQUc7QUFDdkI7QUFBQSx3RUFBQyw4REFBRDtBQUVBLHFCQUFTLEVBQUVBLEtBQUssQ0FBQ0MsYUFGakI7QUFHQSxvQkFBUSxFQUFJRCxLQUFLLENBQUNFLFlBSGxCO0FBSUEscUJBQVMsaURBQTBDRixLQUFLLENBQUNHLFNBQWhEO0FBSlQsYUFDS0gsS0FBSyxDQUFDSSxHQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSCxTQVBBO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDs7R0FwQ3VCWjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRmVhdHVyZWRUaGVyYXBpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVyYXBpc3RTdGFmZiBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1RoZXJhcGlzdFN0YWZmXCJcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBnZXRGZWF0dXJlZFRoZXJhcGlzdCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZWRUaGVyYXBpc3QoKSB7XHJcbiAgICBjb25zdCBbdGhlcmFwaXN0TGlzdCwgc2V0VGhlcmFwaXN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZlYXR1cmVkVGhlcmFwaXN0KCk7XHJcbiAgICAgICAgc2V0VGhlcmFwaXN0TGlzdChkYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5kYXRhKVxyXG4gICAgfSwgW2dldEZlYXR1cmVkVGhlcmFwaXN0XSlcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS92MS9wYXRpZW50cy9sYW5kaW5ncGFnZScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIDonLCByZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgLy8gICAgIHNldFRoZXJhcGlzdExpc3QocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgIGdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCgpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1nYW1lIHB0LTUwIHBiLTUwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlzaW90ZXJhcGlcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMzBcIj5PdXIgUGh5c2lvdGhlcmFwaXN0czxici8+IFxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgZmxleC1sZy13cmFwIG92ZXJmbG93LXNldHRpbmcganVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4gZ2FwLWxnLTMgZ2FwLTRcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgIHt0aGVyYXBpc3RMaXN0Lm1hcChzdGFmZiA9PntcclxuICAgICAgICAgICAgICAgIDxUaGVyYXBpc3RTdGFmZiBcclxuICAgICAgICAgICAgICAgIGtleT17c3RhZmYuX2lkfSBcclxuICAgICAgICAgICAgICAgIG5hbWVTdGFmZj17c3RhZmYudGhlcmFwaXN0TmFtZX0gXHJcbiAgICAgICAgICAgICAgICBhZ2VTdGFmZiA9IHtzdGFmZi50aGVyYXBpc3RBZ2V9IFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsPXtgaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS92MS91cGxvYWRzLyR7c3RhZmYudGh1bWJuYWlsfWB9Lz5cclxuXHJcbiAgICAgICAgICAgIH0pfSAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRoZXJhcGlzdFN0YWZmIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEZlYXR1cmVkVGhlcmFwaXN0IiwiRmVhdHVyZWRUaGVyYXBpc3QiLCJ0aGVyYXBpc3RMaXN0Iiwic2V0VGhlcmFwaXN0TGlzdCIsImdldEZlYXR1cmVkVGhlcmFwaXN0TGlzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3RhZmYiLCJ0aGVyYXBpc3ROYW1lIiwidGhlcmFwaXN0QWdlIiwidGh1bWJuYWlsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==