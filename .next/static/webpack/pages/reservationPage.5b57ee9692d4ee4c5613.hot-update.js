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
                backgroundColor: "#4d17e2",
                color: 'white',
                width: '23.75rem'
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
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjViNTdlZTk2OTJkNGVlNGM1NjEzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNRLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDbEMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFNRyxXQUFOO0FBQUEsTUFBa0JDLGNBQWxCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNoQkksaUVBQWMsRUFERTs7QUFBQTtBQUM3QkksWUFBQUEsSUFENkI7QUFFbkNGLFlBQUFBLGNBQWMsQ0FBQ0UsSUFBRCxDQUFkO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUhtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSW5DLENBQUNKLDZEQUFELENBSm1DLENBQXRDO0FBTUFILEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWTSxJQUFBQSxrQkFBa0I7QUFDckIsR0FGUSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBT0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQStDLGFBQUssRUFBRTtBQUNsREksVUFBQUEsY0FBYyxFQUFDLFFBRG1DO0FBRWxEQyxVQUFBQSxLQUFLLEVBQUM7QUFGNEMsU0FBdEQ7QUFBQSwrQkFJQTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFzQixlQUFLLEVBQUU7QUFDekJBLFlBQUFBLEtBQUssRUFBQztBQURtQixXQUE3QjtBQUFBLG9CQUdLUCxXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUEyQjtBQUN4QyxnQ0FDQSw4REFBQyxzRUFBRDtBQUVJLDBCQUFZLEVBQUVBLEtBQUssQ0FBQ0MsYUFGeEI7QUFHSSxtQkFBSyxFQUFJRCxLQUFLLENBQUNBO0FBSG5CLGVBQ1NBLEtBQUssQ0FBQ0UsR0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBUUgsV0FUQTtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsZUE0Qkk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBRTtBQUFDTCxZQUFBQSxjQUFjLEVBQUMsUUFBaEI7QUFBMEJNLFlBQUFBLFVBQVUsRUFBQyxRQUFyQztBQUErQ0MsWUFBQUEsT0FBTyxFQUFDO0FBQXZELFdBQVo7QUFBQSxpQ0FDSjtBQUFLLHFCQUFTLEVBQUMsK0NBQWY7QUFBQSxtQ0FHQTtBQUNBLHVCQUFTLEVBQUMsZ0VBRFY7QUFFQSxrQkFBSSxFQUFDLFVBRkw7QUFHQSxrQkFBSSxFQUFDLFFBSEw7QUFJQSxtQkFBSyxFQUFFO0FBQ0hDLGdCQUFBQSxlQUFlLEVBQUMsU0FEYjtBQUVIQyxnQkFBQUEsS0FBSyxFQUFDLE9BRkg7QUFHSFIsZ0JBQUFBLEtBQUssRUFBRTtBQUhKLGVBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFrREosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxESTtBQUFBLGtCQURKO0FBc0RIOztHQWxFdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc2VydmF0aW9uUGFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyXCI7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkRldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVzZXJ2YXRpb25EZXRhaWxcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByaWNlRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljZURldGFpbFwiO1xyXG5pbXBvcnQgeyBnZXRQcmljZURldGFpbCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCI7XHJcbmltcG9ydCB7IFByaWNlRGV0YWlsVHlwZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YS10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpY2VEZXRhaWwoKSB7XHJcbiAgICBjb25zdFtwcmljZURldGFpbCxzZXRQcmljZURldGFpbF09dXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBnZXRQcmljZURldGFpbExpc3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcmljZURldGFpbCgpO1xyXG4gICAgICAgIHNldFByaWNlRGV0YWlsKGRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0sIFtnZXRQcmljZURldGFpbF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0UHJpY2VEZXRhaWxMaXN0KClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXJ2YXRpb25EZXRhaWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcIjc1JVwiXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6XCIxNTAlXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtwcmljZURldGFpbC5tYXAoKHByaWNlOlByaWNlRGV0YWlsVHlwZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQcmljZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ByaWNlLl9pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW5UeXBlPXtwcmljZS50cmVhdG1lbnRUeXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IHtwcmljZS5wcmljZX0gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pfSAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBkLWZsZXggZmxleC1jb2x1bW4gbXgtYXV0byBwdC01MFwiID5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24tdXAgZnctbWVkaXVtIHRleHQtbGcgdGV4dC13aGl0ZSByb3VuZGVkLXBpbGwgbWItMTZcIlxyXG4gICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9PkNvbnRpbnVlPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLWluIGZ3LW1lZGl1bSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSByb3VuZGVkLXBpbGxcIiBcclxuICAgICAgICAgICAgaHJlZj1cIi9zaWduLWluXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjNGQxN2UyXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyMy43NXJlbSdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlJlc2VydmF0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8Rm9vdGVyLz5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkZvb3RlciIsIlJlc2VydmF0aW9uRGV0YWlsIiwiTmF2YmFyIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWwiLCJwcmljZURldGFpbCIsInNldFByaWNlRGV0YWlsIiwiZ2V0UHJpY2VEZXRhaWxMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFwIiwicHJpY2UiLCJ0cmVhdG1lbnRUeXBlIiwiX2lkIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=