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
              setTotal(response.data.totalTransaction); //   setCount(response.data.count);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3RyYW5zYWN0aW9ucy42Y2I5YjI2NDU4Y2NiNmE5MDE3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLGtCQUFULEdBQStCO0FBQUE7O0FBQzFDLGtCQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBeUJWLCtDQUFRLENBQUMsQ0FBRCxDQUFqQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFhQyxRQUFiOztBQUVBLE1BQU1DLHVCQUF1QixHQUFHZixrREFBVyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVqQkssdUVBQXFCLEVBRko7O0FBQUE7QUFFbENXLFlBQUFBLFFBRmtDOztBQUd4QyxnQkFBSUEsUUFBUSxDQUFDQyxLQUFiLEVBQW9CO0FBQ2hCWCxjQUFBQSx1REFBQSxDQUFZVSxRQUFRLENBQUNFLE9BQXJCO0FBQ0QsYUFGSCxNQUVPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXdDSixRQUF4QztBQUNBRixjQUFBQSxRQUFRLENBQUNFLFFBQVEsQ0FBQ1AsSUFBVCxDQUFjWSxnQkFBZixDQUFSLENBWEssQ0FZUDtBQUNBO0FBQ0M7O0FBbkJ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBcUJ6QyxFQXJCeUMsQ0FBM0M7QUFzQkFwQixFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVmMsSUFBQUEsdUJBQXVC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cUJBQUssRUFBQyxZQUFoQjtBQUE2QixxQkFBSyxFQUFFLHVCQUFwQztBQUNpQyx3QkFBUSxFQUFDLFNBRDFDO0FBQ29ELG9CQUFJLEVBQUUsR0FEMUQ7QUFDK0Qsc0JBQU0sRUFBQyxTQUR0RTtBQUNnRixxQkFBSyxFQUFFO0FBRHZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEEsZUFLQyw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNkIscUJBQUssRUFBRSxrQkFBcEM7QUFDMEIsd0JBQVEsRUFBQyxRQURuQztBQUM0QyxvQkFBSSxFQUFFLEdBRGxEO0FBQ3VELHNCQUFNLEVBQUMsUUFEOUQ7QUFDdUUscUJBQUssRUFBRTtBQUQ5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELGVBT0MsOERBQUMsOENBQUQ7QUFBVSxxQkFBSyxFQUFDLFlBQWhCO0FBQTZCLHFCQUFLLEVBQUUsVUFBcEM7QUFBK0Msd0JBQVEsRUFBQyxTQUF4RDtBQUFrRSxvQkFBSSxFQUFFLEdBQXhFO0FBQTZFLHNCQUFNLEVBQUMsU0FBcEY7QUFBOEYscUJBQUssRUFBRTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxREg7O0dBbkZ1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RyYW5zYWN0aW9uQ29udGVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuL1RhYmxlUm93J1xyXG5pbXBvcnQgQnV0dG9uVGFiIGZyb20gJy4vQnV0dG9uVGFiJ1xyXG5pbXBvcnQgeyBnZXRNZW1iZXJUcmFuc2FjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZW1iZXInXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvbkNvbnRlbnQgKCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWwsc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgZ2V0TWVtYmVyVHJhbnNhY3Rpb25BUEkgPSB1c2VDYWxsYmFjayhhc3luYygpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNZW1iZXJUcmFuc2FjdGlvbnMoKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgLy8gICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZygnVE9LRU4gOiAnLHRva2VuKVxyXG4gICAgICAgICAgLy8gICAvLyBjb25zdCB1c2VyID0gand0X2RlY29kZSh0b2tlbilcclxuICAgICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAgICAgLy8gICBjb25zdCB0b2tlbkJhc2U2NCA9IGJ0b2EodG9rZW4pO1xyXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnVE9LRU4gQkFTRSA2NCA6ICcgLHRva2VuQmFzZTY0KVxyXG4gICAgICAgICAgLy8gICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgIC8vICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEQVRBIGhpc3RvcnkgdHJhbnNhY3Rpb246JyxyZXNwb25zZSlcclxuICAgICAgICAgIHNldFRvdGFsKHJlc3BvbnNlLmRhdGEudG90YWxUcmFuc2FjdGlvbilcclxuICAgICAgICAvLyAgIHNldENvdW50KHJlc3BvbnNlLmRhdGEuY291bnQpO1xyXG4gICAgICAgIC8vICAgc2V0RGF0YShyZXNwb25zZS5kYXRhLmRhdGEpOyAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldE1lbWJlclRyYW5zYWN0aW9uQVBJKClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSBtYi0zMFwiPk15IFRyYW5zYWN0aW9uczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTIgbWItMTJcIj5Zb3XigJl2ZSBzcGVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC01eGwgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMVwiPjxOdW1iZXJGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMzAgbWItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtMTIgbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaXN0X3N0YXR1c190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblRhYiB0aXRsZT1cIkFsbCBUcnhcIiBhY3RpdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25UYWIgdGl0bGU9XCJTdWNjZXNzXCIgYWN0aXZlPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25UYWIgdGl0bGU9XCJQZW5kaW5nXCIgYWN0aXZlID17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25UYWIgdGl0bGU9XCJGYWlsZWRcIiBhY3RpdmUgPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtdHJhbnNhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTRcIj5MYXRlc3QgVHJhbnNhY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IG1haW4tY29udGVudC10YWJsZSBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiXCIgc2NvcGU9XCJjb2xcIj5UcmVhdG1lbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgaWQ9XCJsaXN0X3N0YXR1c19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9J292ZXJ2aWV3LTEnIHRpdGxlID0nTW9iaWxlIExlZ2VuZHMnIGNhdGVnb3J5PSdEZXNrdG9wJyBpdGVtPXsyMDB9IHN0YXR1cz1cIlBlbmRpbmdcIiBwcmljZT17MTIwMDAwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT0nb3ZlcnZpZXctMicgdGl0bGUgPSdDYWxsIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIER1dHk6TW9kZXJuJyBjYXRlZ29yeT0nRGVza3RvcCcgaXRlbT17NTUwfSBzdGF0dXM9XCJTdWNjZXNzXCIgcHJpY2U9ezc0MDAwMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT0nb3ZlcnZpZXctMycgdGl0bGUgPSdDbGFzaCBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFucycgY2F0ZWdvcnk9J01vYmlsZScgaXRlbT17MjAwfSBzdGF0dXM9XCJGYWlsZWRcIiBwcmljZT17MjAwMDAwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGltYWdlPSdvdmVydmlldy00JyB0aXRsZSA9J1ZhbG9yYW50JyBjYXRlZ29yeT0nRGVza3RvcCcgaXRlbT17MjI1fSBzdGF0dXM9XCJQZW5kaW5nXCIgcHJpY2U9ezE1MDAwMH0vPiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZVJvdyIsIkJ1dHRvblRhYiIsImdldE1lbWJlclRyYW5zYWN0aW9ucyIsInRvYXN0IiwiTnVtYmVyRm9ybWF0IiwiVHJhbnNhY3Rpb25Db250ZW50IiwiZGF0YSIsInNldERhdGEiLCJjb3VudCIsInNldENvdW50IiwidG90YWwiLCJzZXRUb3RhbCIsImdldE1lbWJlclRyYW5zYWN0aW9uQVBJIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidG90YWxUcmFuc2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=