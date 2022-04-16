"use strict";
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./components/organisms/TherapistDesc/index.tsx":
/*!******************************************************!*\
  !*** ./components/organisms/TherapistDesc/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TherapistDesc; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TherapistDesc\\index.tsx";

function TherapistDesc(props) {
  var type = props.type,
      data = props.data;
  var ROOT_IMG = "https://admintbs5.herokuapp.com/uploads";

  if (type === 'desktop') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pb-50 d-md-block d-none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-lg color-palette-2 mb-0",
        children: ["Umur: ", '', data.therapistAge]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mt-10 mb-20 text-lg color-palette-1",
        children: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "".concat(ROOT_IMG, "/").concat(data.thumbnail),
        width: "280",
        height: "380",
        className: "img-fluid",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-md-12 col-8 d-md-none d-block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl fw-bold color-palette-1 text-start mb-10",
        children: data.therapistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm color-palette-2 text-start mb-0",
        children: ["Umur: ", '', data.therapistAge]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}
_c = TherapistDesc;

var _c;

$RefreshReg$(_c, "TherapistDesc");

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
/* harmony import */ var _components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/organisms/TherapistDesc */ "./components/organisms/TherapistDesc/index.tsx");
/* harmony import */ var _components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/organisms/Navbar */ "./components/organisms/Navbar/index.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/patient */ "./services/patient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\detail\\[id].tsx",
    _s = $RefreshSig$();










function Detail() {
  _s();

  var _useRouter = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),
      query = _useRouter.query,
      isReady = _useRouter.isReady;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    therapistName: '',
    therapistAge: 0,
    therapistGender: '',
    description: '',
    thumbnail: ''
  }),
      dataTherapist = _useState[0],
      setDataTherapist = _useState[1];

  var getTherapistDetailAPI = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
      var data;
      return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_services_patient__WEBPACK_IMPORTED_MODULE_7__.getDetaiTherapist)(id);

            case 2:
              data = _context.sent;
              console.log('data : ', data);
              setDataTherapist(data);

            case 5:
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
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (isReady) {
      console.log('router tersedia', query.id);
      getTherapistDetailAPI(query.id);
    } else {
      console.log('router tidak ada');
    }
  }, [isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "detail pt-lg-60 pb-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "container-xxl container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "detail-header pb-50",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            className: "text-4xl fw-bold color-palette-1 text-start mb-10",
            children: "OUR THERAPIST STAFF "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "text-lg color-palette-1 mb-0",
            children: "GET WELL SOON"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_3__.default, {
              data: dataTherapist,
              type: "mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-xl-9 col-lg-8 col-md-7 ps-md-25",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_TherapistDesc__WEBPACK_IMPORTED_MODULE_3__.default, {
              data: dataTherapist,
              type: "desktop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Detail, "bT1iECa1QEFyhmr6oH07LG4VNMw=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1tpZF0uNzdkMTcxNjQ4M2RhMTUzOGFlM2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFpRDtBQUM1RCxNQUFPQyxJQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxJQUFQO0FBQUEsTUFBYUMsSUFBYixHQUFxQkYsS0FBckIsQ0FBYUUsSUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUNBQWpCOztBQUNBLE1BQUdILElBQUksS0FBSSxTQUFYLEVBQXFCO0FBQ2pCLHdCQUNJO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLHlEQUFkO0FBQUEsa0JBQ0tDLElBQUksQ0FBQ0s7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQSw2QkFBbUQsRUFBbkQsRUFBdURMLElBQUksQ0FBQ00sWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQTtBQUFHLGlCQUFTLEVBQUMscUNBQWI7QUFBQSxrQkFDS04sSUFBSSxDQUFDTztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVdIOztBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsWUFBS04sUUFBTCxjQUFpQkQsSUFBSSxDQUFDUSxTQUF0QixDQUFSO0FBQTJDLGFBQUssRUFBQyxLQUFqRDtBQUF1RCxjQUFNLEVBQUMsS0FBOUQ7QUFBb0UsaUJBQVMsRUFBQyxXQUE5RTtBQUEwRixXQUFHLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlBO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLGtEQUFkO0FBQUEsa0JBQWtFUixJQUFJLENBQUNLO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUFBLDZCQUE4RCxFQUE5RCxFQUFrRUwsSUFBSSxDQUFDTSxZQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIO0tBM0J1QlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWeEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTbUIsTUFBVCxHQUFrQjtBQUFBOztBQUM3QixtQkFBdUJMLGtFQUFTLEVBQWhDO0FBQUEsTUFBT00sS0FBUCxjQUFPQSxLQUFQO0FBQUEsTUFBYUMsT0FBYixjQUFhQSxPQUFiOztBQUNBLGtCQUFzQ0osK0NBQVEsQ0FBQztBQUMzQ1QsSUFBQUEsYUFBYSxFQUFDLEVBRDZCO0FBRTNDQyxJQUFBQSxZQUFZLEVBQUUsQ0FGNkI7QUFHM0NhLElBQUFBLGVBQWUsRUFBQyxFQUgyQjtBQUkzQ1osSUFBQUEsV0FBVyxFQUFDLEVBSitCO0FBSzNDQyxJQUFBQSxTQUFTLEVBQUM7QUFMaUMsR0FBRCxDQUE5QztBQUFBLE1BQU1ZLGFBQU47QUFBQSxNQUFvQkMsZ0JBQXBCOztBQU9BLE1BQU1DLHFCQUFxQixHQUFHVixrREFBVztBQUFBLDZVQUFDLGlCQUFNVyxFQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ25CUixvRUFBaUIsQ0FBQ1EsRUFBRCxDQURFOztBQUFBO0FBQ2hDdkIsY0FBQUEsSUFEZ0M7QUFFdEN3QixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCekIsSUFBdEI7QUFDQXFCLGNBQUFBLGdCQUFnQixDQUFDckIsSUFBRCxDQUFoQjs7QUFIc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUl2QyxFQUp1QyxDQUF6QztBQU1BYSxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFHSyxPQUFILEVBQVc7QUFDUE0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBOEJSLEtBQUssQ0FBQ00sRUFBcEM7QUFDQUQsTUFBQUEscUJBQXFCLENBQUNMLEtBQUssQ0FBQ00sRUFBUCxDQUFyQjtBQUNILEtBSEQsTUFHSztBQUNEQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNIO0FBQ0osR0FQUSxFQU9QLENBQUNQLE9BQUQsQ0FQTyxDQUFUO0FBUUEsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFTLGVBQVMsRUFBQyx1QkFBbkI7QUFBQSw2QkFDQTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUVBQWY7QUFBQSxtQ0FDRyw4REFBQyx3RUFBRDtBQUFlLGtCQUFJLEVBQUVFLGFBQXJCO0FBQW9DLGtCQUFJLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMscUNBQWY7QUFBQSxvQ0FDSSw4REFBQyx3RUFBRDtBQUFlLGtCQUFJLEVBQUVBLGFBQXJCO0FBQW9DLGtCQUFJLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFxQkosOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSTtBQUFBLGtCQURKO0FBMkJIOztHQWxEdUJKO1VBQ0dMOzs7S0FESEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvVGhlcmFwaXN0RGVzYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGhlcmFwaXN0RGVzY1Byb3BzIHtcclxuICAgIHR5cGU6J2Rlc2t0b3AnfCdtb2JpbGUnO1xyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdGhlcmFwaXN0TmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRoZXJhcGlzdEFnZTpudW1iZXIsXHJcbiAgICAgICAgdGhlcmFwaXN0R2VuZGVyOnN0cmluZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpzdHJpbmcsXHJcbiAgICAgICAgdGh1bWJuYWlsOnN0cmluZ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZXJhcGlzdERlc2MocHJvcHM6VGhlcmFwaXN0RGVzY1Byb3BzKSB7XHJcbiAgICBjb25zdCB7dHlwZSwgZGF0YX0gPSBwcm9wcztcclxuICAgIGNvbnN0IFJPT1RfSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgIGlmKHR5cGUgPT09J2Rlc2t0b3AnKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNTAgZC1tZC1ibG9jayBkLW5vbmVcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIHRleHQtc3RhcnQgbWItMTAgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnRoZXJhcGlzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMiBtYi0wXCI+VW11cjogeycnfXtkYXRhLnRoZXJhcGlzdEFnZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEwIG1iLTIwIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0xXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC00XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtST09UX0lNR30vJHtkYXRhLnRodW1ibmFpbH1gfSB3aWR0aD1cIjI4MFwiIGhlaWdodD1cIjM4MFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtOCBkLW1kLW5vbmUgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwXCI+e2RhdGEudGhlcmFwaXN0TmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGNvbG9yLXBhbGV0dGUtMiB0ZXh0LXN0YXJ0IG1iLTBcIj5VbXVyOiB7Jyd9e2RhdGEudGhlcmFwaXN0QWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3RlclwiO1xyXG5pbXBvcnQgVG9wVXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ub3BVcEZvcm1cIjtcclxuaW1wb3J0IFRoZXJhcGlzdERlc2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RoZXJhcGlzdERlc2NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXREZXRhaVRoZXJhcGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XHJcbiAgICBjb25zdCB7cXVlcnksaXNSZWFkeX0gPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3RbZGF0YVRoZXJhcGlzdCxzZXREYXRhVGhlcmFwaXN0XT11c2VTdGF0ZSh7XHJcbiAgICAgICAgdGhlcmFwaXN0TmFtZTonJyxcclxuICAgICAgICB0aGVyYXBpc3RBZ2U6IDAgLFxyXG4gICAgICAgIHRoZXJhcGlzdEdlbmRlcjonJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonJyxcclxuICAgICAgICB0aHVtYm5haWw6JydcclxuICAgIH0pXHJcbiAgICBjb25zdCBnZXRUaGVyYXBpc3REZXRhaWxBUEkgPSB1c2VDYWxsYmFjayhhc3luYyhpZCkgPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERldGFpVGhlcmFwaXN0KGlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIDogJyxkYXRhKVxyXG4gICAgICAgIHNldERhdGFUaGVyYXBpc3QoZGF0YSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaXNSZWFkeSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgdGVyc2VkaWEnLHF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICBnZXRUaGVyYXBpc3REZXRhaWxBUEkocXVlcnkuaWQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgdGlkYWsgYWRhJylcclxuICAgICAgICB9XHJcbiAgICB9LFtpc1JlYWR5XSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsIHB0LWxnLTYwIHBiLTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteHhsIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1oZWFkZXIgcGItNTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSB0ZXh0LXN0YXJ0IG1iLTEwXCI+T1VSIFRIRVJBUElTVCBTVEFGRiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMFwiPkdFVCBXRUxMIFNPT048L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNSBwYi0zMCBwYi1tZC0wIHBlLW1kLTI1IHRleHQtbWQtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgIDxUaGVyYXBpc3REZXNjIGRhdGE9e2RhdGFUaGVyYXBpc3R9IHR5cGU9J21vYmlsZScvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC05IGNvbC1sZy04IGNvbC1tZC03IHBzLW1kLTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoZXJhcGlzdERlc2MgZGF0YT17ZGF0YVRoZXJhcGlzdH0gdHlwZT0nZGVza3RvcCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRvcFVwRm9ybSAvPiAqL31cclxuIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPEZvb3Rlci8+XHJcbiAgICA8Lz5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUaGVyYXBpc3REZXNjIiwicHJvcHMiLCJ0eXBlIiwiZGF0YSIsIlJPT1RfSU1HIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lNQUdFIiwidGhlcmFwaXN0TmFtZSIsInRoZXJhcGlzdEFnZSIsImRlc2NyaXB0aW9uIiwidGh1bWJuYWlsIiwiRm9vdGVyIiwiTmF2YmFyIiwidXNlUm91dGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldERldGFpVGhlcmFwaXN0IiwiRGV0YWlsIiwicXVlcnkiLCJpc1JlYWR5IiwidGhlcmFwaXN0R2VuZGVyIiwiZGF0YVRoZXJhcGlzdCIsInNldERhdGFUaGVyYXBpc3QiLCJnZXRUaGVyYXBpc3REZXRhaWxBUEkiLCJpZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9