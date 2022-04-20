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
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row",
          children: priceDetail.map(function (price) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_6__.default, {
              treatmenType: price.treatmentType,
              price: price.price
            }, price._id, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
              children: "Reservation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjQ2NTc0NGM5YTRkMDRkMDQ5ZGU3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNRLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDbEMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFNRyxXQUFOO0FBQUEsTUFBa0JDLGNBQWxCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNoQkksaUVBQWMsRUFERTs7QUFBQTtBQUM3QkksWUFBQUEsSUFENkI7QUFFbkNGLFlBQUFBLGNBQWMsQ0FBQ0UsSUFBRCxDQUFkO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUhtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSW5DLENBQUNKLDZEQUFELENBSm1DLENBQXRDO0FBTUFILEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWTSxJQUFBQSxrQkFBa0I7QUFDckIsR0FGUSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBT0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQStDLGFBQUssRUFBRTtBQUNsREksVUFBQUEsY0FBYyxFQUFDO0FBRG1DLFNBQXREO0FBQUEsK0JBR0E7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxvQkFDS04sV0FBVyxDQUFDTyxHQUFaLENBQWdCLFVBQUNDLEtBQUQsRUFBMkI7QUFDeEMsZ0NBQ0EsOERBQUMsc0VBQUQ7QUFFSSwwQkFBWSxFQUFFQSxLQUFLLENBQUNDLGFBRnhCO0FBR0ksbUJBQUssRUFBSUQsS0FBSyxDQUFDQTtBQUhuQixlQUNTQSxLQUFLLENBQUNFLEdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQVFILFdBVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBLGVBeUJJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUU7QUFBQ0osWUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCSyxZQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFlBQUFBLE9BQU8sRUFBQztBQUF2RCxXQUFaO0FBQUEsaUNBQ0o7QUFBSyxxQkFBUyxFQUFDLCtDQUFmO0FBQUEsbUNBR0E7QUFBRyx1QkFBUyxFQUFDLGdFQUFiO0FBQThFLGtCQUFJLEVBQUMsVUFBbkY7QUFDUSxrQkFBSSxFQUFDLFFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUF1Q0osOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDSTtBQUFBLGtCQURKO0FBMkNIOztHQXZEdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc2VydmF0aW9uUGFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyXCI7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkRldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVzZXJ2YXRpb25EZXRhaWxcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByaWNlRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljZURldGFpbFwiO1xyXG5pbXBvcnQgeyBnZXRQcmljZURldGFpbCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCI7XHJcbmltcG9ydCB7IFByaWNlRGV0YWlsVHlwZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YS10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpY2VEZXRhaWwoKSB7XHJcbiAgICBjb25zdFtwcmljZURldGFpbCxzZXRQcmljZURldGFpbF09dXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBnZXRQcmljZURldGFpbExpc3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcmljZURldGFpbCgpO1xyXG4gICAgICAgIHNldFByaWNlRGV0YWlsKGRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0sIFtnZXRQcmljZURldGFpbF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0UHJpY2VEZXRhaWxMaXN0KClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXJ2YXRpb25EZXRhaWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge3ByaWNlRGV0YWlsLm1hcCgocHJpY2U6UHJpY2VEZXRhaWxUeXBlcykgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cHJpY2UuX2lkfSBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lblR5cGU9e3ByaWNlLnRyZWF0bWVudFR5cGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0ge3ByaWNlLnByaWNlfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSl9ICBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtbiBteC1hdXRvIHB0LTUwXCIgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi11cCBmdy1tZWRpdW0gdGV4dC1sZyB0ZXh0LXdoaXRlIHJvdW5kZWQtcGlsbCBtYi0xNlwiXHJcbiAgICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH0+Q29udGludWU8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbi1pbiBmdy1tZWRpdW0gdGV4dC1sZyBjb2xvci1wYWxldHRlLTEgcm91bmRlZC1waWxsXCIgaHJlZj1cIi9zaWduLWluXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+UmVzZXJ2YXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiRm9vdGVyIiwiUmVzZXJ2YXRpb25EZXRhaWwiLCJOYXZiYXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJpY2VEZXRhaWwiLCJnZXRQcmljZURldGFpbCIsInByaWNlRGV0YWlsIiwic2V0UHJpY2VEZXRhaWwiLCJnZXRQcmljZURldGFpbExpc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImp1c3RpZnlDb250ZW50IiwibWFwIiwicHJpY2UiLCJ0cmVhdG1lbnRUeXBlIiwiX2lkIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9