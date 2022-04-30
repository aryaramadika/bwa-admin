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
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ "./components/organisms/OverviewContent/Category.tsx");
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
          children: "Top Up Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "row",
            children: [count.map(function (spend) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
                spending: spend.total,
                icon: "ic-desktop",
                children: spend.treatmentType
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 18500000,
              icon: "ic-desktop",
              children: ["Game", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 29
              }, this), "Desktop "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 8455000,
              icon: "ic-mobile",
              children: ["Game", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 29
              }, this), "Mobile "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 18500000,
              icon: "ic-desktop",
              children: ["Other", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 29
              }, this), "Categories "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
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
          lineNumber: 63,
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
                  lineNumber: 68,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Item"
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
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
                image: "overview-1",
                title: "Mobile Legend",
                category: "Mobile",
                item: 200,
                price: 290000,
                status: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
                image: "overview-2",
                title: "Call of Duty",
                category: "Desktop",
                item: 550,
                price: 740000,
                status: "Success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
                image: "overview-3",
                title: "Clash of Clans",
                category: "Mobile",
                item: 100,
                price: 120000,
                status: "Failed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
                image: "overview-4",
                title: "Valorant",
                category: "Mobile",
                item: 225,
                price: 200000,
                status: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjU3ZWZhNjRkNGViMWQ0ZTQ2YjFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUllLFNBQVNPLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9RLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QlQsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1UsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FaLEVBQUFBLGdEQUFTLDZVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCRSxxRUFBa0IsRUFEbkM7O0FBQUE7QUFDQVcsWUFBQUEsUUFEQTs7QUFFTixnQkFBSUEsUUFBUSxDQUFDQyxLQUFiLEVBQW9CO0FBQ2xCVCxjQUFBQSx1REFBQSxDQUFZUSxRQUFRLENBQUNFLE9BQXJCO0FBQ0QsYUFGRCxNQUVLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JKLFFBQVEsQ0FBQ0YsSUFBN0I7QUFDQUQsY0FBQUEsUUFBUSxDQUFDRyxRQUFRLENBQUNGLElBQVQsQ0FBY0YsS0FBZixDQUFSO0FBQ0FHLGNBQUFBLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixJQUFULENBQWNBLElBQWYsQ0FBUDtBQUFxQzs7QUFoQi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFpQlAsRUFqQk8sQ0FBVDtBQWtCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxF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c0JBRkEsZUFHQSw4REFBQyw4Q0FBRDtBQUFVLHFCQUFLLEVBQUMsWUFBaEI7QUFBNEIscUJBQUssRUFBQyxnQkFBbEM7QUFBbUQsd0JBQVEsRUFBQyxRQUE1RDtBQUFxRSxvQkFBSSxFQUFFLEdBQTNFO0FBQWdGLHFCQUFLLEVBQUUsTUFBdkY7QUFBK0Ysc0JBQU0sRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhBLGVBSUEsOERBQUMsOENBQUQ7QUFBVSxxQkFBSyxFQUFDLFlBQWhCO0FBQTRCLHFCQUFLLEVBQUMsVUFBbEM7QUFBNkMsd0JBQVEsRUFBQyxRQUF0RDtBQUErRCxvQkFBSSxFQUFFLEdBQXJFO0FBQTBFLHFCQUFLLEVBQUUsTUFBakY7QUFBeUYsc0JBQU0sRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzREg7O0dBNUV1QmQ7VUFDTEQ7OztLQURLQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRQYXRpZW50T3ZlcnZpZXcgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcGF0aWVudFwiXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9DYXRlZ29yeVwiXHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiLi9UYWJsZVJvd1wiXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3Q29udGVudCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQYXRpZW50T3ZlcnZpZXcoKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1RPS0VOIDogJyx0b2tlbilcclxuICAgICAgICAvLyAgIC8vIGNvbnN0IHVzZXIgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAgIC8vICAgY29uc3QgdG9rZW5CYXNlNjQgPSBidG9hKHRva2VuKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdUT0tFTiBCQVNFIDY0IDogJyAsdG9rZW5CYXNlNjQpXHJcbiAgICAgICAgLy8gICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgLy8gICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEQVRBOicscmVzcG9uc2UuZGF0YSlcclxuICAgICAgICBzZXRDb3VudChyZXNwb25zZS5kYXRhLmNvdW50KTtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7ICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMzBcIj5PdmVydmlldzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC11cC1jYXRlZ29yaWVzIG1iLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLTE0XCI+VG9wIFVwIENhdGVnb3JpZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudC5tYXAoKHNwZW5kKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBzcGVuZGluZz17c3BlbmQudG90YWx9IGljb24gPSdpYy1kZXNrdG9wJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NwZW5kLnRyZWF0bWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXRlZ29yeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBub21pbmFsPXsxODUwMDAwMH0gaWNvbiA9J2ljLWRlc2t0b3AnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNrdG9wIDwvQ2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbm9taW5hbD17ODQ1NTAwMH0gaWNvbiA9J2ljLW1vYmlsZScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vYmlsZSA8L0NhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IG5vbWluYWw9ezE4NTAwMDAwfSBpY29uID0naWMtZGVza3RvcCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RoZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzIDwvQ2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC10cmFuc2FjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xNFwiPkxhdGVzdCBUcmFuc2FjdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgbWFpbi1jb250ZW50LXRhYmxlIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCIgc2NvcGU9XCJjb2xcIj5HYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT1cIm92ZXJ2aWV3LTFcInRpdGxlPVwiTW9iaWxlIExlZ2VuZFwiIGNhdGVnb3J5PVwiTW9iaWxlXCIgaXRlbT17MjAwfSBwcmljZT17MjkwMDAwfSBzdGF0dXM9XCJQZW5kaW5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGltYWdlPVwib3ZlcnZpZXctMlwidGl0bGU9XCJDYWxsIG9mIER1dHlcIiBjYXRlZ29yeT1cIkRlc2t0b3BcIiBpdGVtPXs1NTB9IHByaWNlPXs3NDAwMDB9IHN0YXR1cz1cIlN1Y2Nlc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy0zXCJ0aXRsZT1cIkNsYXNoIG9mIENsYW5zXCIgY2F0ZWdvcnk9XCJNb2JpbGVcIiBpdGVtPXsxMDB9IHByaWNlPXsxMjAwMDB9IHN0YXR1cz1cIkZhaWxlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT1cIm92ZXJ2aWV3LTRcInRpdGxlPVwiVmFsb3JhbnRcIiBjYXRlZ29yeT1cIk1vYmlsZVwiIGl0ZW09ezIyNX0gcHJpY2U9ezIwMDAwMH0gc3RhdHVzPVwiUGVuZGluZ1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UGF0aWVudE92ZXJ2aWV3IiwiQ2F0ZWdvcnkiLCJUYWJsZVJvdyIsInRvYXN0IiwidXNlUm91dGVyIiwiT3ZlcnZpZXdDb250ZW50Iiwicm91dGVyIiwiY291bnQiLCJzZXRDb3VudCIsImRhdGEiLCJzZXREYXRhIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BlbmQiLCJ0b3RhbCIsInRyZWF0bWVudFR5cGUiXSwic291cmNlUm9vdCI6IiJ9