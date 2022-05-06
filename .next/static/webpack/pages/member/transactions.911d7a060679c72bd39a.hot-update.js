"use strict";
self["webpackHotUpdate_N_E"]("pages/member/transactions",{

/***/ "./components/organisms/TransactionContent/index.tsx":
/*!***********************************************************!*\
  !*** ./components/organisms/TransactionContent/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TransactionContent; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableRow */ "./components/organisms/TransactionContent/TableRow.tsx");
/* harmony import */ var _ButtonTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonTab */ "./components/organisms/TransactionContent/ButtonTab.tsx");
/* harmony import */ var _services_member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/member */ "./services/member.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\TransactionContent\\index.tsx",
    _s = $RefreshSig$();









function TransactionContent() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      total = _useState3[0],
      setTotal = _useState3[1];

  var getMemberTransactionAPI = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_member__WEBPACK_IMPORTED_MODULE_5__.getMemberTransactions)();

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
              console.log('DATA history transaction:', response);
              setTotal(response.total); //   setCount(response.data.count);
              //   setData(response.data.data);    
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getMemberTransactionAPI();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    className: "main-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ps-lg-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: "My Transactions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "mb-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg color-palette-2 mb-12",
          children: "You\u2019ve spent"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
          className: "text-5xl fw-medium color-palette-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_7__.default, {
            value: total,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 72
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "row mt-30 mb-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "col-lg-12 col-12 main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            id: "list_status_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonTab__WEBPACK_IMPORTED_MODULE_4__.default, {
              title: "All Trx",
              active: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonTab__WEBPACK_IMPORTED_MODULE_4__.default, {
              title: "Success",
              active: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonTab__WEBPACK_IMPORTED_MODULE_4__.default, {
              title: "Pending",
              active: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonTab__WEBPACK_IMPORTED_MODULE_4__.default, {
              title: "Failed",
              active: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Latest Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "main-content main-content-table overflow-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
            className: "table table-borderless",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                className: "color-palette-1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  className: "",
                  scope: "col",
                  children: "Treatment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
              id: "list_status_item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: "overview-1",
                title: "Mobile Legends",
                category: "Desktop",
                item: 200,
                status: "Pending",
                price: 120000
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: "overview-2",
                title: "Call of\r Duty:Modern",
                category: "Desktop",
                item: 550,
                status: "Success",
                price: 740000
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: "overview-3",
                title: "Clash of\r Clans",
                category: "Mobile",
                item: 200,
                status: "Failed",
                price: 200000
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: "overview-4",
                title: "Valorant",
                category: "Desktop",
                item: 225,
                status: "Pending",
                price: 150000
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(TransactionContent, "6NAr+aVqsKZtenkBvPsOehsCCRw=");

_c = TransactionContent;

var _c;

$RefreshReg$(_c, "TransactionContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3RyYW5zYWN0aW9ucy45MTFkN2EwNjA2NzljNzJiZDM5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLGtCQUFULEdBQStCO0FBQUE7O0FBQzFDLGtCQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBeUJWLCtDQUFRLENBQUMsQ0FBRCxDQUFqQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFhQyxRQUFiOztBQUVBLE1BQU1DLHVCQUF1QixHQUFHZixrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVqQkssdUVBQXFCLEVBRko7O0FBQUE7QUFFbENXLFlBQUFBLFFBRmtDOztBQUd4QyxnQkFBSUEsUUFBUSxDQUFDQyxLQUFiLEVBQW9CO0FBQ2hCWCxjQUFBQSx1REFBQSxDQUFZVSxRQUFRLENBQUNFLE9BQXJCO0FBQ0QsYUFGSCxNQUVPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXdDSixRQUF4QztBQUNBRixjQUFBQSxRQUFRLENBQUNFLFFBQVEsQ0FBQ0gsS0FBVixDQUFSLENBWEssQ0FZUDtBQUNBO0FBQ0M7O0FBbkJ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBcUJ6QyxFQXJCeUMsQ0FBM0M7QUFzQkFaLEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWYyxJQUFBQSx1QkFBdUI7QUFDMUIsR0FGUSxF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QWhCO0FBQTZCLHFCQUFLLEVBQUUsdUJBQXBDO0FBQ2lDLHdCQUFRLEVBQUMsU0FEMUM7QUFDb0Qsb0JBQUksRUFBRSxHQUQxRDtBQUMrRCxzQkFBTSxFQUFDLFNBRHRFO0FBQ2dGLHFCQUFLLEVBQUU7QUFEdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIQSxlQUtDLDhEQUFDLDhDQUFEO0FBQVUscUJBQUssRUFBQyxZQUFoQjtBQUE2QixxQkFBSyxFQUFFLGtCQUFwQztBQUMwQix3QkFBUSxFQUFDLFFBRG5DO0FBQzRDLG9CQUFJLEVBQUUsR0FEbEQ7QUFDdUQsc0JBQU0sRUFBQyxRQUQ5RDtBQUN1RSxxQkFBSyxFQUFFO0FBRDlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEQsZUFPQyw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNkIscUJBQUssRUFBRSxVQUFwQztBQUErQyx3QkFBUSxFQUFDLFNBQXhEO0FBQWtFLG9CQUFJLEVBQUUsR0FBeEU7QUFBNkUsc0JBQU0sRUFBQyxTQUFwRjtBQUE4RixxQkFBSyxFQUFFO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0FuRnVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvVHJhbnNhY3Rpb25Db250ZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnXHJcbmltcG9ydCBCdXR0b25UYWIgZnJvbSAnLi9CdXR0b25UYWInXHJcbmltcG9ydCB7IGdldE1lbWJlclRyYW5zYWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lbWJlcidcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uQ29udGVudCAoKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbCxzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBnZXRNZW1iZXJUcmFuc2FjdGlvbkFQSSA9IHVzZUNhbGxiYWNrKGFzeW5jKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE1lbWJlclRyYW5zYWN0aW9ucygpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAvLyAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCdUT0tFTiA6ICcsdG9rZW4pXHJcbiAgICAgICAgICAvLyAgIC8vIGNvbnN0IHVzZXIgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZygnVVNFUiA6ICcgLHVzZXIpXHJcbiAgICAgICAgICAvLyAgIGNvbnN0IHRva2VuQmFzZTY0ID0gYnRvYSh0b2tlbik7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdUT0tFTiBCQVNFIDY0IDogJyAsdG9rZW5CYXNlNjQpXHJcbiAgICAgICAgICAvLyAgIENvb2tpZXMuc2V0KCd0b2tlbicsIHRva2VuQmFzZTY0LCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgLy8gICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RBVEEgaGlzdG9yeSB0cmFuc2FjdGlvbjonLHJlc3BvbnNlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzcG9uc2UudG90YWwpXHJcbiAgICAgICAgLy8gICBzZXRDb3VudChyZXNwb25zZS5kYXRhLmNvdW50KTtcclxuICAgICAgICAvLyAgIHNldERhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTsgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRNZW1iZXJUcmFuc2FjdGlvbkFQSSgpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMzBcIj5NeSBUcmFuc2FjdGlvbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0yIG1iLTEyXCI+WW914oCZdmUgc3BlbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNXhsIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTFcIj48TnVtYmVyRm9ybWF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIlJwIFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMwIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLTEyIG1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlzdF9zdGF0dXNfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25UYWIgdGl0bGU9XCJBbGwgVHJ4XCIgYWN0aXZlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGFiIHRpdGxlPVwiU3VjY2Vzc1wiIGFjdGl2ZT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGFiIHRpdGxlPVwiUGVuZGluZ1wiIGFjdGl2ZSA9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGFiIHRpdGxlPVwiRmFpbGVkXCIgYWN0aXZlID17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXRyYW5zYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLTE0XCI+TGF0ZXN0IFRyYW5zYWN0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBtYWluLWNvbnRlbnQtdGFibGUgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIlwiIHNjb3BlPVwiY29sXCI+VHJlYXRtZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGlkPVwibGlzdF9zdGF0dXNfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGltYWdlPSdvdmVydmlldy0xJyB0aXRsZSA9J01vYmlsZSBMZWdlbmRzJyBjYXRlZ29yeT0nRGVza3RvcCcgaXRlbT17MjAwfSBzdGF0dXM9XCJQZW5kaW5nXCIgcHJpY2U9ezEyMDAwMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9J292ZXJ2aWV3LTInIHRpdGxlID0nQ2FsbCBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEdXR5Ok1vZGVybicgY2F0ZWdvcnk9J0Rlc2t0b3AnIGl0ZW09ezU1MH0gc3RhdHVzPVwiU3VjY2Vzc1wiIHByaWNlPXs3NDAwMDB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9J292ZXJ2aWV3LTMnIHRpdGxlID0nQ2xhc2ggb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xhbnMnIGNhdGVnb3J5PSdNb2JpbGUnIGl0ZW09ezIwMH0gc3RhdHVzPVwiRmFpbGVkXCIgcHJpY2U9ezIwMDAwMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT0nb3ZlcnZpZXctNCcgdGl0bGUgPSdWYWxvcmFudCcgY2F0ZWdvcnk9J0Rlc2t0b3AnIGl0ZW09ezIyNX0gc3RhdHVzPVwiUGVuZGluZ1wiIHByaWNlPXsxNTAwMDB9Lz4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGVSb3ciLCJCdXR0b25UYWIiLCJnZXRNZW1iZXJUcmFuc2FjdGlvbnMiLCJ0b2FzdCIsIk51bWJlckZvcm1hdCIsIlRyYW5zYWN0aW9uQ29udGVudCIsImRhdGEiLCJzZXREYXRhIiwiY291bnQiLCJzZXRDb3VudCIsInRvdGFsIiwic2V0VG90YWwiLCJnZXRNZW1iZXJUcmFuc2FjdGlvbkFQSSIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=