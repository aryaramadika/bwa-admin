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
          children: priceDetail.map(function (price) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
              treatmenType: price.treatmentType,
              price: price.price
            }, price._id, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
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
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VEZXRhaWxUcmVhdG1lbnQuYmU5ZTU4ZGE0MGMxZWExN2E4ZDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBS2UsU0FBU1EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUM5QjtBQUNBLGtCQUFrQ0gsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBTUcsV0FBTjtBQUFBLE1BQWtCQyxjQUFsQjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR1Asa0RBQVcsNlVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaEJJLGlFQUFjLEVBREU7O0FBQUE7QUFDN0JJLFlBQUFBLElBRDZCO0FBRW5DRixZQUFBQSxjQUFjLENBQUNFLElBQUQsQ0FBZDtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFIbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUluQyxDQUFDSiw2REFBRCxDQUptQyxDQUF0QztBQU1BSCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVk0sSUFBQUEsa0JBQWtCO0FBQ3JCLEdBRlEsQ0FBVDtBQUlKLHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBUyxlQUFTLEVBQUMsdUJBQW5CO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLG1EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBQ0NGLFdBQVcsQ0FBQ00sR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQTJCO0FBQ3hDLGdDQUNBLDhEQUFDLHNFQUFEO0FBRUksMEJBQVksRUFBRUEsS0FBSyxDQUFDQyxhQUZ4QjtBQUdJLG1CQUFLLEVBQUlELEtBQUssQ0FBQ0E7QUFIbkIsZUFDU0EsS0FBSyxDQUFDRSxHQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFRSCxXQVRBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFzQkosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSTtBQUFBLGtCQURKO0FBMEJIOztHQXZDdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByaWNlRGV0YWlsVHJlYXRtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXJcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJpY2VEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNlRGV0YWlsXCI7XG5pbXBvcnQgeyBnZXRQcmljZURldGFpbCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCJcbmltcG9ydCB7IFByaWNlRGV0YWlsVHlwZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YS10eXBlc1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmljZURldGFpbCgpIHtcbiAgICAgICAgLy8gY29uc3Qge3F1ZXJ5LCBpc1JlYWR5fSA9IHVzZVJvdXRlcigpO1xuICAgICAgICBjb25zdFtwcmljZURldGFpbCxzZXRQcmljZURldGFpbF09dXNlU3RhdGUoW10pXG4gICAgICAgIGNvbnN0IGdldFByaWNlRGV0YWlsTGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJpY2VEZXRhaWwoKTtcbiAgICAgICAgICAgIHNldFByaWNlRGV0YWlsKGRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9LCBbZ2V0UHJpY2VEZXRhaWxdKVxuXG4gICAgICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICAgICAgZ2V0UHJpY2VEZXRhaWxMaXN0KClcbiAgICAgICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsIHB0LWxnLTYwIHBiLTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWhlYWRlciBwYi01MFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwXCI+UHJpY2UgRGV0YWlsPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtwcmljZURldGFpbC5tYXAoKHByaWNlOlByaWNlRGV0YWlsVHlwZXMpID0+e1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsIFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ByaWNlLl9pZH0gXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVuVHlwZT17cHJpY2UudHJlYXRtZW50VHlwZX0gXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0ge3ByaWNlLnByaWNlfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pfSAgICBcbiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPEZvb3Rlci8+XG4gICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsIk5hdmJhciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWwiLCJwcmljZURldGFpbCIsInNldFByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWxMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcmljZSIsInRyZWF0bWVudFR5cGUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9