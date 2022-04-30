"use strict";
self["webpackHotUpdate_N_E"]("pages/member",{

/***/ "./components/organisms/OverviewContent/index.tsx":
/*!********************************************************!*\
  !*** ./components/organisms/OverviewContent/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OverviewContent; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.ts");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableRow */ "./components/organisms/OverviewContent/TableRow.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\index.tsx",
    _s = $RefreshSig$();








function OverviewContent() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      data = _useState2[0],
      setData = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_3__.getPatientOverview)();

          case 2:
            response = _context.sent;

            if (response.error) {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(response.message);
            } else {
              //   const { token } = response.data;
              //   // console.log('TOKEN : ',token)
              //   // const user = jwt_decode(token)
              //   // console.log('USER : ' ,user)
              //   const tokenBase64 = btoa(token);
              //   console.log('TOKEN BASE 64 : ' ,tokenBase64)
              //   Cookies.set('token', tokenBase64, { expires: 1 });
              //   // console.log(response)
              //   router.push('/');
              console.log('DATA:', response.data);
              setCount(response.data.count);
              setData(response.data.data);
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
    className: "main-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "ps-lg-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: "Overview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "top-up-categories mb-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Top Up Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "row",
            children: count.map(function (spend) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Category, {
                spending: spend.total,
                icon: "ic-desktop",
                children: spend.treatmentType
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Latest Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "main-content main-content-table overflow-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("table", {
            className: "table table-borderless",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                className: "color-palette-1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  className: "text-start",
                  scope: "col",
                  children: "Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  scope: "col",
                  children: "Item"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  scope: "col",
                  children: "Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  scope: "col",
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: "overview-1",
                title: "Mobile Legend",
                category: "Mobile",
                item: 200,
                price: 290000,
                status: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: "overview-2",
                title: "Call of Duty",
                category: "Desktop",
                item: 550,
                price: 740000,
                status: "Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: "overview-3",
                title: "Clash of Clans",
                category: "Mobile",
                item: 100,
                price: 120000,
                status: "Failed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: "overview-4",
                title: "Valorant",
                category: "Mobile",
                item: 225,
                price: 200000,
                status: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(OverviewContent, "4WLyF8dXxK3N1nH8HZfS5ru+rvE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = OverviewContent;

var _c;

$RefreshReg$(_c, "OverviewContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjgyOWJhODg3MjJjYzQ0MTRkMGFhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUllLFNBQVNNLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QlIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FYLEVBQUFBLGdEQUFTLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCRSxxRUFBa0IsRUFEbkM7O0FBQUE7QUFDQVUsWUFBQUEsUUFEQTs7QUFFTixnQkFBSUEsUUFBUSxDQUFDQyxLQUFiLEVBQW9CO0FBQ2xCVCxjQUFBQSx1REFBQSxDQUFZUSxRQUFRLENBQUNFLE9BQXJCO0FBQ0QsYUFGRCxNQUVLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JKLFFBQVEsQ0FBQ0YsSUFBN0I7QUFDQUQsY0FBQUEsUUFBUSxDQUFDRyxRQUFRLENBQUNGLElBQVQsQ0FBY0YsS0FBZixDQUFSO0FBQ0FHLGNBQUFBLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixJQUFULENBQWNBLElBQWYsQ0FBUDtBQUFxQzs7QUFoQi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFpQlAsRUFqQk8sQ0FBVDtBQWtCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxzQkFDS0YsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsS0FBRDtBQUFBLGtDQUNQLDhEQUFDLFFBQUQ7QUFBVSx3QkFBUSxFQUFFQSxLQUFLLENBQUNDLEtBQTFCO0FBQWlDLG9CQUFJLEVBQUUsWUFBdkM7QUFBQSwwQkFDQ0QsS0FBSyxDQUFDRTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRE87QUFBQSxhQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFnQkk7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLHlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLCtDQUFmO0FBQUEsaUNBQ0k7QUFBTyxxQkFBUyxFQUFDLHdCQUFqQjtBQUFBLG9DQUNJO0FBQUEscUNBQ0k7QUFBSSx5QkFBUyxFQUFDLGlCQUFkO0FBQUEsd0NBQ0k7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBMkIsdUJBQUssRUFBQyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUksdUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLGVBR0k7QUFBSSx1QkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEosZUFJSTtBQUFJLHVCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBU0k7QUFBQSxzQ0FDQSw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNEIscUJBQUssRUFBQyxlQUFsQztBQUFrRCx3QkFBUSxFQUFDLFFBQTNEO0FBQW9FLG9CQUFJLEVBQUUsR0FBMUU7QUFBK0UscUJBQUssRUFBRSxNQUF0RjtBQUE4RixzQkFBTSxFQUFDO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsZUFFQSw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNEIscUJBQUssRUFBQyxjQUFsQztBQUFpRCx3QkFBUSxFQUFDLFNBQTFEO0FBQW9FLG9CQUFJLEVBQUUsR0FBMUU7QUFBK0UscUJBQUssRUFBRSxNQUF0RjtBQUE4RixzQkFBTSxFQUFDO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkEsZUFHQSw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNEIscUJBQUssRUFBQyxnQkFBbEM7QUFBbUQsd0JBQVEsRUFBQyxRQUE1RDtBQUFxRSxvQkFBSSxFQUFFLEdBQTNFO0FBQWdGLHFCQUFLLEVBQUUsTUFBdkY7QUFBK0Ysc0JBQU0sRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhBLGVBSUEsOERBQUMsOENBQUQ7QUFBVSxxQkFBSyxFQUFDLFlBQWhCO0FBQTRCLHFCQUFLLEVBQUMsVUFBbEM7QUFBNkMsd0JBQVEsRUFBQyxRQUF0RDtBQUErRCxvQkFBSSxFQUFFLEdBQXJFO0FBQTBFLHFCQUFLLEVBQUUsTUFBakY7QUFBeUYsc0JBQU0sRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQ0g7O0dBakV1QmQ7VUFDTEQ7OztLQURLQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRQYXRpZW50T3ZlcnZpZXcgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcGF0aWVudFwiXHJcbmltcG9ydCBUcmVhdG1lbnQgZnJvbSBcIi4vdHJlYXRlbWVudE92ZXJ2aWV3XCJcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCIuL1RhYmxlUm93XCJcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdDb250ZW50KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFBhdGllbnRPdmVydmlldygpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZygnVE9LRU4gOiAnLHRva2VuKVxyXG4gICAgICAgIC8vICAgLy8gY29uc3QgdXNlciA9IGp3dF9kZWNvZGUodG9rZW4pXHJcbiAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZygnVVNFUiA6ICcgLHVzZXIpXHJcbiAgICAgICAgLy8gICBjb25zdCB0b2tlbkJhc2U2NCA9IGJ0b2EodG9rZW4pO1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ1RPS0VOIEJBU0UgNjQgOiAnICx0b2tlbkJhc2U2NClcclxuICAgICAgICAvLyAgIENvb2tpZXMuc2V0KCd0b2tlbicsIHRva2VuQmFzZTY0LCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAvLyAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RBVEE6JyxyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIHNldENvdW50KHJlc3BvbnNlLmRhdGEuY291bnQpO1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTsgICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSBtYi0zMFwiPk92ZXJ2aWV3PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXVwLWNhdGVnb3JpZXMgbWItMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTRcIj5Ub3AgVXAgQ2F0ZWdvcmllczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50Lm1hcCgoc3BlbmQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IHNwZW5kaW5nPXtzcGVuZC50b3RhbH0gaWNvbiA9J2ljLWRlc2t0b3AnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3BlbmQudHJlYXRtZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhdGVnb3J5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtdHJhbnNhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTRcIj5MYXRlc3QgVHJhbnNhY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IG1haW4tY29udGVudC10YWJsZSBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiIHNjb3BlPVwiY29sXCI+R2FtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy0xXCJ0aXRsZT1cIk1vYmlsZSBMZWdlbmRcIiBjYXRlZ29yeT1cIk1vYmlsZVwiIGl0ZW09ezIwMH0gcHJpY2U9ezI5MDAwMH0gc3RhdHVzPVwiUGVuZGluZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT1cIm92ZXJ2aWV3LTJcInRpdGxlPVwiQ2FsbCBvZiBEdXR5XCIgY2F0ZWdvcnk9XCJEZXNrdG9wXCIgaXRlbT17NTUwfSBwcmljZT17NzQwMDAwfSBzdGF0dXM9XCJTdWNjZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGltYWdlPVwib3ZlcnZpZXctM1widGl0bGU9XCJDbGFzaCBvZiBDbGFuc1wiIGNhdGVnb3J5PVwiTW9iaWxlXCIgaXRlbT17MTAwfSBwcmljZT17MTIwMDAwfSBzdGF0dXM9XCJGYWlsZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy00XCJ0aXRsZT1cIlZhbG9yYW50XCIgY2F0ZWdvcnk9XCJNb2JpbGVcIiBpdGVtPXsyMjV9IHByaWNlPXsyMDAwMDB9IHN0YXR1cz1cIlBlbmRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFBhdGllbnRPdmVydmlldyIsIlRhYmxlUm93IiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJPdmVydmlld0NvbnRlbnQiLCJyb3V0ZXIiLCJjb3VudCIsInNldENvdW50IiwiZGF0YSIsInNldERhdGEiLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcGVuZCIsInRvdGFsIiwidHJlYXRtZW50VHlwZSJdLCJzb3VyY2VSb290IjoiIn0=