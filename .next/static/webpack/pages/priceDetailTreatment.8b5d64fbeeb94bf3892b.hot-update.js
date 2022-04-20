"use strict";
self["webpackHotUpdate_N_E"]("pages/priceDetailTreatment",{

/***/ "./pages/priceDetailTreatment/index.tsx":
/*!**********************************************!*\
  !*** ./pages/priceDetailTreatment/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ priceDetail; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms/Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/molecules/PriceDetail */ "./components/molecules/PriceDetail/index.tsx");
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/patient */ "./services/patient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\priceDetailTreatment\\index.tsx",
    _s = $RefreshSig$();









function priceDetail() {
  _s();

  var _this = this;

  // const {query, isReady} = useRouter();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      priceDetail = _useState[0],
      setPriceDetail = _useState[1];

  var getPriceDetailList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_6__.getPriceDetail)();

          case 2:
            data = _context.sent;
            setPriceDetail(data);
            console.log(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [_services_patient__WEBPACK_IMPORTED_MODULE_6__.getPriceDetail]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getPriceDetailList();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "detail-header pb-50",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
            className: "text-4xl fw-bold color-palette-1 text-start mb-10",
            children: "Price Detail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "row",
          style: {
            marginTop: "50px"
          },
          children: priceDetail.map(function (price) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
              treatmenType: price.treatmentType,
              price: price.price
            }, price._id, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(priceDetail, "tuzlqzeeXgtCNwfPqAeFw55hYFk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQuOGI1ZDY0ZmJlZWI5NGJmMzg5MmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBS2UsU0FBU1EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUM5QjtBQUNBLGtCQUFrQ0gsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBTUcsV0FBTjtBQUFBLE1BQWtCQyxjQUFsQjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR1Asa0RBQVcsNlVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaEJJLGlFQUFjLEVBREU7O0FBQUE7QUFDN0JJLFlBQUFBLElBRDZCO0FBRW5DRixZQUFBQSxjQUFjLENBQUNFLElBQUQsQ0FBZDtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFIbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUluQyxDQUFDSiw2REFBRCxDQUptQyxDQUF0QztBQU1BSCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVk0sSUFBQUEsa0JBQWtCO0FBQ3JCLEdBRlEsQ0FBVDtBQUlKLHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBUyxlQUFTLEVBQUMsdUJBQW5CO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLG1EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRTtBQUN4QkksWUFBQUEsU0FBUyxFQUFDO0FBRGMsV0FBNUI7QUFBQSxvQkFHQ04sV0FBVyxDQUFDTyxHQUFaLENBQWdCLFVBQUNDLEtBQUQsRUFBMkI7QUFDeEMsZ0NBQ0EsOERBQUMsc0VBQUQ7QUFFSSwwQkFBWSxFQUFFQSxLQUFLLENBQUNDLGFBRnhCO0FBR0ksbUJBQUssRUFBSUQsS0FBSyxDQUFDQTtBQUhuQixlQUNTQSxLQUFLLENBQUNFLEdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQVFILFdBVEE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQXdCSiw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJJO0FBQUEsa0JBREo7QUE0Qkg7O0dBekN1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcmljZURldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJpY2VEZXRhaWxcIjtcbmltcG9ydCB7IGdldFByaWNlRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIlxuaW1wb3J0IHsgUHJpY2VEZXRhaWxUeXBlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaWNlRGV0YWlsKCkge1xuICAgICAgICAvLyBjb25zdCB7cXVlcnksIGlzUmVhZHl9ID0gdXNlUm91dGVyKCk7XG4gICAgICAgIGNvbnN0W3ByaWNlRGV0YWlsLHNldFByaWNlRGV0YWlsXT11c2VTdGF0ZShbXSlcbiAgICAgICAgY29uc3QgZ2V0UHJpY2VEZXRhaWxMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcmljZURldGFpbCgpO1xuICAgICAgICAgICAgc2V0UHJpY2VEZXRhaWwoZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0sIFtnZXRQcmljZURldGFpbF0pXG5cbiAgICAgICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgICAgICBnZXRQcmljZURldGFpbExpc3QoKVxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteHhsIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtaGVhZGVyIHBiLTUwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTBcIj5QcmljZSBEZXRhaWw8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOlwiNTBweFwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtwcmljZURldGFpbC5tYXAoKHByaWNlOlByaWNlRGV0YWlsVHlwZXMpID0+e1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsIFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ByaWNlLl9pZH0gXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVuVHlwZT17cHJpY2UudHJlYXRtZW50VHlwZX0gXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0ge3ByaWNlLnByaWNlfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pfSAgICBcbiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPEZvb3Rlci8+XG4gICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsIk5hdmJhciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWwiLCJwcmljZURldGFpbCIsInNldFByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWxMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJtYXAiLCJwcmljZSIsInRyZWF0bWVudFR5cGUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9