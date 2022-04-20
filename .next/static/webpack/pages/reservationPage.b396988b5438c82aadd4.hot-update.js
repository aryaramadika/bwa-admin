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
        children: priceDetail.map(function (price) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_6__.default, {
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
              lineNumber: 51,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLmIzOTY5ODhiNTQzOGM4MmFhZGQ0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNRLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFDbEMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFNRyxXQUFOO0FBQUEsTUFBa0JDLGNBQWxCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHUCxrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNoQkksaUVBQWMsRUFERTs7QUFBQTtBQUM3QkksWUFBQUEsSUFENkI7QUFFbkNGLFlBQUFBLGNBQWMsQ0FBQ0UsSUFBRCxDQUFkO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUhtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSW5DLENBQUNKLDZEQUFELENBSm1DLENBQXRDO0FBTUFILEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWTSxJQUFBQSxrQkFBa0I7QUFDckIsR0FGUSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBT0E7QUFBQSxrQkFDQ0YsV0FBVyxDQUFDTSxHQUFaLENBQWdCLFVBQUNDLEtBQUQsRUFBMkI7QUFDcEMsOEJBQ0EsOERBQUMsc0VBQUQ7QUFFSSx3QkFBWSxFQUFFQSxLQUFLLENBQUNDLGFBRnhCO0FBR0ksaUJBQUssRUFBSUQsS0FBSyxDQUFDQTtBQUhuQixhQUNTQSxLQUFLLENBQUNFLEdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQTtBQVFILFNBVEo7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsZUFxQkk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBRTtBQUFDQyxZQUFBQSxjQUFjLEVBQUMsUUFBaEI7QUFBMEJDLFlBQUFBLFVBQVUsRUFBQyxRQUFyQztBQUErQ0MsWUFBQUEsT0FBTyxFQUFDO0FBQXZELFdBQVo7QUFBQSxpQ0FDSjtBQUFLLHFCQUFTLEVBQUMsK0NBQWY7QUFBQSxtQ0FHQTtBQUFHLHVCQUFTLEVBQUMsZ0VBQWI7QUFBOEUsa0JBQUksRUFBQyxVQUFuRjtBQUNRLGtCQUFJLEVBQUMsUUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQW1DSiw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNJO0FBQUEsa0JBREo7QUF1Q0g7O0dBbkR1QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb25QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXJcIjtcclxuaW1wb3J0IFJlc2VydmF0aW9uRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZXNlcnZhdGlvbkRldGFpbFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJpY2VEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNlRGV0YWlsXCI7XHJcbmltcG9ydCB7IGdldFByaWNlRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIjtcclxuaW1wb3J0IHsgUHJpY2VEZXRhaWxUeXBlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmljZURldGFpbCgpIHtcclxuICAgIGNvbnN0W3ByaWNlRGV0YWlsLHNldFByaWNlRGV0YWlsXT11c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGdldFByaWNlRGV0YWlsTGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFByaWNlRGV0YWlsKCk7XHJcbiAgICAgICAgc2V0UHJpY2VEZXRhaWwoZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSwgW2dldFByaWNlRGV0YWlsXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRQcmljZURldGFpbExpc3QoKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbCBwdC1sZy02MCBwYi01MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxSZXNlcnZhdGlvbkRldGFpbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICB7cHJpY2VEZXRhaWwubWFwKChwcmljZTpQcmljZURldGFpbFR5cGVzKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcmljZS5faWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVuVHlwZT17cHJpY2UudHJlYXRtZW50VHlwZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7cHJpY2UucHJpY2V9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KX0gIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgZC1mbGV4IGZsZXgtY29sdW1uIG14LWF1dG8gcHQtNTBcIiA+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLXVwIGZ3LW1lZGl1bSB0ZXh0LWxnIHRleHQtd2hpdGUgcm91bmRlZC1waWxsIG1iLTE2XCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fT5Db250aW51ZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLWluIGZ3LW1lZGl1bSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSByb3VuZGVkLXBpbGxcIiBocmVmPVwiL3NpZ24taW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIj5SZXNlcnZhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZXNlcnZhdGlvbkRldGFpbCIsIk5hdmJhciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZURldGFpbCIsImdldFByaWNlRGV0YWlsIiwicHJpY2VEZXRhaWwiLCJzZXRQcmljZURldGFpbCIsImdldFByaWNlRGV0YWlsTGlzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJpY2UiLCJ0cmVhdG1lbnRUeXBlIiwiX2lkIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=