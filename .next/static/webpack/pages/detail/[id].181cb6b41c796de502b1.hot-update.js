"use strict";
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./pages/detail/[id].tsx":
/*!*******************************!*\
  !*** ./pages/detail/[id].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Detail; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms/Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _components_organisms_TopUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/organisms/TopUpForm */ "./components/organisms/TopUpForm/index.tsx");
/* harmony import */ var _components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/organisms/TherapistDesc */ "./components/organisms/TherapistDesc/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/patient */ "./services/patient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\detail\\[id].tsx",
    _s = $RefreshSig$();











function Detail() {
  _s();

  var _useRouter = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      query = _useRouter.query,
      isReady = _useRouter.isReady;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    therapistName: '',
    therapistAge: 0,
    therapistGender: '',
    description: '',
    thumbnail: ''
  }),
      dataTherapist = _useState[0],
      setDataTherapist = _useState[1];

  var getTherapistDetailAPI = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
      var data;
      return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_services_patient__WEBPACK_IMPORTED_MODULE_8__.getDetaiTherapist)(id);

            case 2:
              data = _context.sent;
              console.log('data : ', data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (isReady) {
      console.log('router tersedia', query.id);
      getTherapistDetailAPI(query.id);
    } else {
      console.log('router tidak ada');
    }
  }, [isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "detail-header pb-50",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            className: "text-4xl fw-bold color-palette-1 text-start mb-10",
            children: "Top Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            className: "text-lg color-palette-1 mb-0",
            children: "Perkuat akun dan jadilah pemenang"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_4__.default, {
              data: dataTherapist,
              type: "mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-xl-9 col-lg-8 col-md-7 ps-md-25",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_4__.default, {
              data: dataTherapist,
              type: "desktop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TopUpForm__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Detail, "bT1iECa1QEFyhmr6oH07LG4VNMw=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Detail;

var _c;

$RefreshReg$(_c, "Detail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uMTgxY2I2YjQxYzc5NmRlNTAyYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0IsbUJBQXVCTCxrRUFBUyxFQUFoQztBQUFBLE1BQU9NLEtBQVAsY0FBT0EsS0FBUDtBQUFBLE1BQWFDLE9BQWIsY0FBYUEsT0FBYjs7QUFDQSxrQkFBc0NKLCtDQUFRLENBQUM7QUFDM0NLLElBQUFBLGFBQWEsRUFBQyxFQUQ2QjtBQUUzQ0MsSUFBQUEsWUFBWSxFQUFFLENBRjZCO0FBRzNDQyxJQUFBQSxlQUFlLEVBQUMsRUFIMkI7QUFJM0NDLElBQUFBLFdBQVcsRUFBQyxFQUorQjtBQUszQ0MsSUFBQUEsU0FBUyxFQUFDO0FBTGlDLEdBQUQsQ0FBOUM7QUFBQSxNQUFNQyxhQUFOO0FBQUEsTUFBb0JDLGdCQUFwQjs7QUFPQSxNQUFNQyxxQkFBcUIsR0FBR2Qsa0RBQVc7QUFBQSw2VUFBQyxpQkFBTWUsRUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNuQlosb0VBQWlCLENBQUNZLEVBQUQsQ0FERTs7QUFBQTtBQUNoQ0MsY0FBQUEsSUFEZ0M7QUFFdENDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JGLElBQXRCOztBQUZzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR3ZDLEVBSHVDLENBQXpDO0FBS0FmLEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdLLE9BQUgsRUFBVztBQUNQVyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUE4QmIsS0FBSyxDQUFDVSxFQUFwQztBQUNBRCxNQUFBQSxxQkFBcUIsQ0FBQ1QsS0FBSyxDQUFDVSxFQUFQLENBQXJCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0g7QUFDSixHQVBRLEVBT1AsQ0FBQ1osT0FBRCxDQVBPLENBQVQ7QUFRQSxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQVMsZUFBUyxFQUFDLHVCQUFuQjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxpRUFBZjtBQUFBLG1DQUNHLDhEQUFDLHdFQUFEO0FBQWUsa0JBQUksRUFBRU0sYUFBckI7QUFBb0Msa0JBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUsscUJBQVMsRUFBQyxxQ0FBZjtBQUFBLG9DQUNJLDhEQUFDLHdFQUFEO0FBQWUsa0JBQUksRUFBRUEsYUFBckI7QUFBb0Msa0JBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdBLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFxQkosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSTtBQUFBLGtCQURKO0FBMkJIOztHQWpEdUJSO1VBQ0dMOzs7S0FESEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xyXG5pbXBvcnQgVG9wVXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ub3BVcEZvcm1cIjtcclxuaW1wb3J0IFRoZXJhcGlzdERlc2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RoZXJhcGlzdERlc2NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXREZXRhaVRoZXJhcGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XHJcbiAgICBjb25zdCB7cXVlcnksaXNSZWFkeX0gPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3RbZGF0YVRoZXJhcGlzdCxzZXREYXRhVGhlcmFwaXN0XT11c2VTdGF0ZSh7XHJcbiAgICAgICAgdGhlcmFwaXN0TmFtZTonJyxcclxuICAgICAgICB0aGVyYXBpc3RBZ2U6IDAgLFxyXG4gICAgICAgIHRoZXJhcGlzdEdlbmRlcjonJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonJyxcclxuICAgICAgICB0aHVtYm5haWw6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBnZXRUaGVyYXBpc3REZXRhaWxBUEkgPSB1c2VDYWxsYmFjayhhc3luYyhpZCkgPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERldGFpVGhlcmFwaXN0KGlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIDogJyxkYXRhKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpc1JlYWR5KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlciB0ZXJzZWRpYScscXVlcnkuaWQpXHJcbiAgICAgICAgICAgIGdldFRoZXJhcGlzdERldGFpbEFQSShxdWVyeS5pZClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlciB0aWRhayBhZGEnKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lzUmVhZHldKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwgcHQtbGctNjAgcGItNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14eGwgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWhlYWRlciBwYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTBcIj5Ub3AgVXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMFwiPlBlcmt1YXQgYWt1biBkYW4gamFkaWxhaCBwZW1lbmFuZzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC01IHBiLTMwIHBiLW1kLTAgcGUtbWQtMjUgdGV4dC1tZC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPFRoZXJhcGlzdERlc2MgZGF0YT17ZGF0YVRoZXJhcGlzdH0gdHlwZT0nbW9iaWxlJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTkgY29sLWxnLTggY29sLW1kLTcgcHMtbWQtMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGhlcmFwaXN0RGVzYyBkYXRhPXtkYXRhVGhlcmFwaXN0fSB0eXBlPSdkZXNrdG9wJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxUb3BVcEZvcm0gLz5cclxuIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJUb3BVcEZvcm0iLCJUaGVyYXBpc3REZXNjIiwiTmF2YmFyIiwidXNlUm91dGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldERldGFpVGhlcmFwaXN0IiwiRGV0YWlsIiwicXVlcnkiLCJpc1JlYWR5IiwidGhlcmFwaXN0TmFtZSIsInRoZXJhcGlzdEFnZSIsInRoZXJhcGlzdEdlbmRlciIsImRlc2NyaXB0aW9uIiwidGh1bWJuYWlsIiwiZGF0YVRoZXJhcGlzdCIsInNldERhdGFUaGVyYXBpc3QiLCJnZXRUaGVyYXBpc3REZXRhaWxBUEkiLCJpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==