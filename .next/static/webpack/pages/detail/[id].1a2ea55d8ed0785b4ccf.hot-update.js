"use strict";
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./components/organisms/TherapistDesc/index.tsx":
/*!******************************************************!*\
  !*** ./components/organisms/TherapistDesc/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TopUpItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TherapistDesc\\index.tsx";

function TopUpItem(props) {
  var type = props.type;

  if (type === 'desktop') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pb-50 d-md-block d-none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
        children: ["Mobile Legends:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 100
        }, this), "The New Battle 2021"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-lg color-palette-2 mb-0",
        children: "Category: Mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/img/Thumbnail-3.png",
        width: "280",
        height: "380",
        className: "img-fluid",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: ["Mobile Legends:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 93
        }, this), "The New Battle 2021"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: "Category: Mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
_c = TopUpItem;

var _c;

$RefreshReg$(_c, "TopUpItem");

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


/***/ }),

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
      lineNumber: 27,
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
            lineNumber: 31,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            className: "text-lg color-palette-1 mb-0",
            children: "Perkuat akun dan jadilah pemenang"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_4__.default, {
              type: "mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-xl-9 col-lg-8 col-md-7 ps-md-25",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_4__.default, {
              type: "desktop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_TopUpForm__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Detail, "1WCyfZSERaqkRWSgVBbrDZpQpv0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uMWEyZWE1NWQ4ZWQwNzg1YjRjY2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUFvQztBQUMvQyxNQUFNQyxJQUFOLEdBQWNELEtBQWQsQ0FBTUMsSUFBTjs7QUFDQSxNQUFHQSxJQUFJLEtBQUksU0FBWCxFQUFxQjtBQUNqQix3QkFDSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyx5REFBZDtBQUFBLG1EQUF1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUdBO0FBQUcsaUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBT0g7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDLHNCQUFUO0FBQWdDLGFBQUssRUFBQyxLQUF0QztBQUE0QyxjQUFNLEVBQUMsS0FBbkQ7QUFBeUQsaUJBQVMsRUFBQyxXQUFuRTtBQUErRSxXQUFHLEVBQUM7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlBO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLGtEQUFkO0FBQUEsbURBQWdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLHlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDtLQXZCdUJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU1csTUFBVCxHQUFrQjtBQUFBOztBQUM3QixtQkFBdUJKLGtFQUFTLEVBQWhDO0FBQUEsTUFBT0ssS0FBUCxjQUFPQSxLQUFQO0FBQUEsTUFBYUMsT0FBYixjQUFhQSxPQUFiOztBQUVBLE1BQU1DLHFCQUFxQixHQUFHTixrREFBVztBQUFBLDZVQUFDLGlCQUFNTyxFQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ25CTCxvRUFBaUIsQ0FBQ0ssRUFBRCxDQURFOztBQUFBO0FBQ2hDQyxjQUFBQSxJQURnQztBQUV0Q0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkYsSUFBdEI7O0FBRnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHdkMsRUFIdUMsQ0FBekM7QUFLQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR0ksT0FBSCxFQUFXO0FBQ1BJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQThCTixLQUFLLENBQUNHLEVBQXBDO0FBQ0FELE1BQUFBLHFCQUFxQixDQUFDRixLQUFLLENBQUNHLEVBQVAsQ0FBckI7QUFDSCxLQUhELE1BR0s7QUFDREUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSDtBQUNKLEdBUFEsRUFPUCxDQUFDTCxPQUFELENBUE8sQ0FBVDtBQVFBLHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBUyxlQUFTLEVBQUMsdUJBQW5CO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLG1EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGlFQUFmO0FBQUEsbUNBQ0csOERBQUMsd0VBQUQ7QUFBZSxrQkFBSSxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFDLHFDQUFmO0FBQUEsb0NBQ0ksOERBQUMsd0VBQUQ7QUFBZSxrQkFBSSxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0EsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQXFCSiw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJJO0FBQUEsa0JBREo7QUEyQkg7O0dBM0N1QkY7VUFDR0o7OztLQURISSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UaGVyYXBpc3REZXNjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUb3BVcEl0ZW0ge1xyXG4gICAgdHlwZTonZGVza3RvcCd8J21vYmlsZSc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wVXBJdGVtKHByb3BzOlRvcFVwSXRlbSkge1xyXG4gICAgY29uc3R7dHlwZX0gPSBwcm9wcztcclxuICAgIGlmKHR5cGUgPT09J2Rlc2t0b3AnKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNTAgZC1tZC1ibG9jayBkLW5vbmVcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTAgbXQtMTBcIj5Nb2JpbGUgTGVnZW5kczo8YnIvPlxyXG4gICAgICAgICAgICAgICAgVGhlIE5ldyBCYXR0bGUgMjAyMTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0yIG1iLTBcIj5DYXRlZ29yeTogTW9iaWxlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLTRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL1RodW1ibmFpbC0zLnBuZ1wiIHdpZHRoPVwiMjgwXCIgaGVpZ2h0PVwiMzgwXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC04IGQtbWQtbm9uZSBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTBcIj5Nb2JpbGUgTGVnZW5kczo8YnIvPlxyXG4gICAgICAgICAgICAgICAgVGhlIE5ldyBCYXR0bGUgMjAyMTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gY29sb3ItcGFsZXR0ZS0yIHRleHQtc3RhcnQgbWItMFwiPkNhdGVnb3J5OiBNb2JpbGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXJcIjtcclxuaW1wb3J0IFRvcFVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvVG9wVXBGb3JtXCI7XHJcbmltcG9ydCBUaGVyYXBpc3REZXNjIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UaGVyYXBpc3REZXNjXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXREZXRhaVRoZXJhcGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XHJcbiAgICBjb25zdCB7cXVlcnksaXNSZWFkeX0gPXVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGdldFRoZXJhcGlzdERldGFpbEFQSSA9IHVzZUNhbGxiYWNrKGFzeW5jKGlkKSA9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGV0YWlUaGVyYXBpc3QoaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgOiAnLGRhdGEpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlzUmVhZHkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm91dGVyIHRlcnNlZGlhJyxxdWVyeS5pZClcclxuICAgICAgICAgICAgZ2V0VGhlcmFwaXN0RGV0YWlsQVBJKHF1ZXJ5LmlkKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm91dGVyIHRpZGFrIGFkYScpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaXNSZWFkeV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbCBwdC1sZy02MCBwYi01MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXh4bCBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtaGVhZGVyIHBiLTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgdGV4dC1zdGFydCBtYi0xMFwiPlRvcCBVcDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0wXCI+UGVya3VhdCBha3VuIGRhbiBqYWRpbGFoIHBlbWVuYW5nPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTUgcGItMzAgcGItbWQtMCBwZS1tZC0yNSB0ZXh0LW1kLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8VGhlcmFwaXN0RGVzYyB0eXBlPSdtb2JpbGUnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtOSBjb2wtbGctOCBjb2wtbWQtNyBwcy1tZC0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaGVyYXBpc3REZXNjIHR5cGU9J2Rlc2t0b3AnLz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPFRvcFVwRm9ybSAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8Rm9vdGVyLz5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRvcFVwSXRlbSIsInByb3BzIiwidHlwZSIsIkZvb3RlciIsIlRvcFVwRm9ybSIsIlRoZXJhcGlzdERlc2MiLCJOYXZiYXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImdldERldGFpVGhlcmFwaXN0IiwiRGV0YWlsIiwicXVlcnkiLCJpc1JlYWR5IiwiZ2V0VGhlcmFwaXN0RGV0YWlsQVBJIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=