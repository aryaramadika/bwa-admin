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
/* harmony import */ var _treatementOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treatementOverview */ "./components/organisms/OverviewContent/treatementOverview.tsx");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableRow */ "./components/organisms/OverviewContent/TableRow.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\index.tsx",
    _s = $RefreshSig$();









function OverviewContent() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

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
              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(response.message);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    className: "main-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ps-lg-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: "Overview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "top-up-categories mb-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Total Booking Spent"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "row",
            children: count.map(function (spend) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_treatementOverview__WEBPACK_IMPORTED_MODULE_4__.default, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Latest Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "main-content main-content-table overflow-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
            className: "table table-borderless",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                className: "color-palette-1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  className: "text-start",
                  scope: "col",
                  children: "Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Item"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
              children: data.map(function (historyBooking) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
                  image: "overview-1",
                  title: historyBooking.treatment.treatmentType,
                  price: historyBooking.total,
                  status: historyBooking.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
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
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjliOGQ0NDU2NmFhODY1NWUyOGUxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUllLFNBQVNPLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9RLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QlQsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1UsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FaLEVBQUFBLGdEQUFTLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCRSxxRUFBa0IsRUFEbkM7O0FBQUE7QUFDQVcsWUFBQUEsUUFEQTs7QUFFTixnQkFBSUEsUUFBUSxDQUFDQyxLQUFiLEVBQW9CO0FBQ2xCVCxjQUFBQSx1REFBQSxDQUFZUSxRQUFRLENBQUNFLE9BQXJCO0FBQ0QsYUFGRCxNQUVLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JKLFFBQVEsQ0FBQ0YsSUFBN0I7QUFDQUQsY0FBQUEsUUFBUSxDQUFDRyxRQUFRLENBQUNGLElBQVQsQ0FBY0YsS0FBZixDQUFSO0FBQ0FHLGNBQUFBLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixJQUFULENBQWNBLElBQWYsQ0FBUDtBQUFxQzs7QUFoQi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFpQlAsRUFqQk8sQ0FBVDtBQWtCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxzQkFDS0YsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsS0FBRDtBQUFBLGtDQUNQLDhEQUFDLHdEQUFEO0FBQVcsd0JBQVEsRUFBRUEsS0FBSyxDQUFDQyxLQUEzQjtBQUFrQyxvQkFBSSxFQUFFLFlBQXhDO0FBQUEsMEJBQ0NELEtBQUssQ0FBQ0U7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURPO0FBQUEsYUFBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBZ0JJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQywrQ0FBZjtBQUFBLGlDQUNJO0FBQU8scUJBQVMsRUFBQyx3QkFBakI7QUFBQSxvQ0FDSTtBQUFBLHFDQUNJO0FBQUkseUJBQVMsRUFBQyxpQkFBZDtBQUFBLHdDQUNJO0FBQUksMkJBQVMsRUFBQyxZQUFkO0FBQTJCLHVCQUFLLEVBQUMsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFJLHVCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixlQUdJO0FBQUksdUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKLGVBSUk7QUFBSSx1QkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQVNJO0FBQUEsd0JBQ0tWLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNJLGNBQUQ7QUFBQSxvQ0FDTiw4REFBQyw4Q0FBRDtBQUFVLHVCQUFLLEVBQUMsWUFBaEI7QUFBNEIsdUJBQUssRUFBRUEsY0FBYyxDQUFDQyxTQUFmLENBQXlCRixhQUE1RDtBQUNBLHVCQUFLLEVBQUVDLGNBQWMsQ0FBQ0YsS0FEdEI7QUFFQSx3QkFBTSxFQUFFRSxjQUFjLENBQUNFO0FBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRE07QUFBQSxlQUFUO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Q0g7O0dBbEV1QmpCO1VBQ0xEOzs7S0FES0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvT3ZlcnZpZXdDb250ZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZ2V0UGF0aWVudE92ZXJ2aWV3IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIlxyXG5pbXBvcnQgVHJlYXRtZW50IGZyb20gXCIuL3RyZWF0ZW1lbnRPdmVydmlld1wiXHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiLi9UYWJsZVJvd1wiXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3Q29udGVudCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQYXRpZW50T3ZlcnZpZXcoKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1RPS0VOIDogJyx0b2tlbilcclxuICAgICAgICAvLyAgIC8vIGNvbnN0IHVzZXIgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAgIC8vICAgY29uc3QgdG9rZW5CYXNlNjQgPSBidG9hKHRva2VuKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdUT0tFTiBCQVNFIDY0IDogJyAsdG9rZW5CYXNlNjQpXHJcbiAgICAgICAgLy8gICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgLy8gICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEQVRBOicscmVzcG9uc2UuZGF0YSlcclxuICAgICAgICBzZXRDb3VudChyZXNwb25zZS5kYXRhLmNvdW50KTtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7ICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMzBcIj5PdmVydmlldzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC11cC1jYXRlZ29yaWVzIG1iLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLTE0XCI+VG90YWwgQm9va2luZyBTcGVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50Lm1hcCgoc3BlbmQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWF0bWVudCBzcGVuZGluZz17c3BlbmQudG90YWx9IGljb24gPSdpYy1kZXNrdG9wJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NwZW5kLnRyZWF0bWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVhdG1lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC10cmFuc2FjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xNFwiPkxhdGVzdCBUcmFuc2FjdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgbWFpbi1jb250ZW50LXRhYmxlIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCIgc2NvcGU9XCJjb2xcIj5HYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGhpc3RvcnlCb29raW5nKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy0xXCJ0aXRsZT17aGlzdG9yeUJvb2tpbmcudHJlYXRtZW50LnRyZWF0bWVudFR5cGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aGlzdG9yeUJvb2tpbmcudG90YWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e2hpc3RvcnlCb29raW5nLnN0YXR1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRQYXRpZW50T3ZlcnZpZXciLCJUcmVhdG1lbnQiLCJUYWJsZVJvdyIsInRvYXN0IiwidXNlUm91dGVyIiwiT3ZlcnZpZXdDb250ZW50Iiwicm91dGVyIiwiY291bnQiLCJzZXRDb3VudCIsImRhdGEiLCJzZXREYXRhIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BlbmQiLCJ0b3RhbCIsInRyZWF0bWVudFR5cGUiLCJoaXN0b3J5Qm9va2luZyIsInRyZWF0bWVudCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=