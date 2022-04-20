"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

/***/ "./pages/reservationPage/index.tsx":
/*!*****************************************!*\
  !*** ./pages/reservationPage/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ priceDetail; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms/Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/organisms/ReservationDetail */ "./components/organisms/ReservationDetail/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/molecules/PriceDetail */ "./components/molecules/PriceDetail/index.tsx");
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/patient */ "./services/patient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\reservationPage\\index.tsx",
    _s = $RefreshSig$();










function priceDetail() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      priceDetail = _useState[0],
      setPriceDetail = _useState[1];

  var getPriceDetailList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_7__.getPriceDetail)();

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
  })), [_services_patient__WEBPACK_IMPORTED_MODULE_7__.getPriceDetail]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getPriceDetailList();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_ReservationDetail__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        style: {
          justifyContent: "center",
          width: "75%"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row",
          style: {
            width: "150%"
          },
          children: priceDetail.map(function (price) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_6__.default, {
              treatmenType: price.treatmentType,
              price: price.price
            }, price._id, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          style: {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "button-group d-flex flex-column mx-auto pt-50",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              className: "btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill",
              href: "/sign-in",
              role: "button",
              style: {
                backgroundColor: "blue"
              },
              children: "Reservation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjRkNjA4NDQ3OTA0OGYxYWFmNzFhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNRLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDbEMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFNRyxXQUFOO0FBQUEsTUFBa0JDLGNBQWxCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNoQkksaUVBQWMsRUFERTs7QUFBQTtBQUM3QkksWUFBQUEsSUFENkI7QUFFbkNGLFlBQUFBLGNBQWMsQ0FBQ0UsSUFBRCxDQUFkO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUhtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSW5DLENBQUNKLDZEQUFELENBSm1DLENBQXRDO0FBTUFILEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWTSxJQUFBQSxrQkFBa0I7QUFDckIsR0FGUSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBT0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQStDLGFBQUssRUFBRTtBQUNsREksVUFBQUEsY0FBYyxFQUFDLFFBRG1DO0FBRWxEQyxVQUFBQSxLQUFLLEVBQUM7QUFGNEMsU0FBdEQ7QUFBQSwrQkFJQTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFzQixlQUFLLEVBQUU7QUFDekJBLFlBQUFBLEtBQUssRUFBQztBQURtQixXQUE3QjtBQUFBLG9CQUdLUCxXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUEyQjtBQUN4QyxnQ0FDQSw4REFBQyxzRUFBRDtBQUVJLDBCQUFZLEVBQUVBLEtBQUssQ0FBQ0MsYUFGeEI7QUFHSSxtQkFBSyxFQUFJRCxLQUFLLENBQUNBO0FBSG5CLGVBQ1NBLEtBQUssQ0FBQ0UsR0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBUUgsV0FUQTtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsZUE0Qkk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBRTtBQUFDTCxZQUFBQSxjQUFjLEVBQUMsUUFBaEI7QUFBMEJNLFlBQUFBLFVBQVUsRUFBQyxRQUFyQztBQUErQ0MsWUFBQUEsT0FBTyxFQUFDO0FBQXZELFdBQVo7QUFBQSxpQ0FDSjtBQUFLLHFCQUFTLEVBQUMsK0NBQWY7QUFBQSxtQ0FHQTtBQUNBLHVCQUFTLEVBQUMsZ0VBRFY7QUFFQSxrQkFBSSxFQUFDLFVBRkw7QUFHQSxrQkFBSSxFQUFDLFFBSEw7QUFJQSxtQkFBSyxFQUFFO0FBQ0hDLGdCQUFBQSxlQUFlLEVBQUM7QUFEYixlQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBZ0RKLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREk7QUFBQSxrQkFESjtBQW9ESDs7R0FoRXVCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXNlcnZhdGlvblBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25EZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Jlc2VydmF0aW9uRGV0YWlsXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcmljZURldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJpY2VEZXRhaWxcIjtcclxuaW1wb3J0IHsgZ2V0UHJpY2VEZXRhaWwgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGF0aWVudFwiO1xyXG5pbXBvcnQgeyBQcmljZURldGFpbFR5cGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaWNlRGV0YWlsKCkge1xyXG4gICAgY29uc3RbcHJpY2VEZXRhaWwsc2V0UHJpY2VEZXRhaWxdPXVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0UHJpY2VEZXRhaWxMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJpY2VEZXRhaWwoKTtcclxuICAgICAgICBzZXRQcmljZURldGFpbChkYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9LCBbZ2V0UHJpY2VEZXRhaWxdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFByaWNlRGV0YWlsTGlzdCgpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsIHB0LWxnLTYwIHBiLTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteHhsIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFJlc2VydmF0aW9uRGV0YWlsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgd2lkdGg6XCI3NSVcIlxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOlwiMTUwJVwiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7cHJpY2VEZXRhaWwubWFwKChwcmljZTpQcmljZURldGFpbFR5cGVzKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcmljZS5faWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVuVHlwZT17cHJpY2UudHJlYXRtZW50VHlwZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7cHJpY2UucHJpY2V9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KX0gIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgZC1mbGV4IGZsZXgtY29sdW1uIG14LWF1dG8gcHQtNTBcIiA+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLXVwIGZ3LW1lZGl1bSB0ZXh0LWxnIHRleHQtd2hpdGUgcm91bmRlZC1waWxsIG1iLTE2XCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fT5Db250aW51ZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBmdy1tZWRpdW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTEgcm91bmRlZC1waWxsXCIgXHJcbiAgICAgICAgICAgIGhyZWY9XCIvc2lnbi1pblwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiYmx1ZVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5SZXNlcnZhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIk5hdmJhciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZURldGFpbCIsImdldFByaWNlRGV0YWlsIiwicHJpY2VEZXRhaWwiLCJzZXRQcmljZURldGFpbCIsImdldFByaWNlRGV0YWlsTGlzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1hcCIsInByaWNlIiwidHJlYXRtZW50VHlwZSIsIl9pZCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==