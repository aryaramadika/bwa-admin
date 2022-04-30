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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
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
              console.log('DATA:', response);
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
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "top-up-categories mb-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Top Up Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 18500000,
              icon: "ic-desktop",
              children: ["Game", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this), "Desktop "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 8455000,
              icon: "ic-mobile",
              children: ["Game", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, this), "Mobile "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {
              nominal: 18500000,
              icon: "ic-desktop",
              children: ["Other", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 29
              }, this), "Categories "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Latest Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
                  lineNumber: 60,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Item"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                  scope: "col",
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
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
                lineNumber: 67,
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
                lineNumber: 68,
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
                lineNumber: 69,
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
                lineNumber: 70,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(OverviewContent, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjdjNzA3MDI3MjQ5ZjMzMDgyNTZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUllLFNBQVNNLGVBQVQsR0FBMkI7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4QjtBQUVBTCxFQUFBQSxnREFBUyw2VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQkMscUVBQWtCLEVBRG5DOztBQUFBO0FBQ0FPLFlBQUFBLFFBREE7O0FBRU4sZ0JBQUlBLFFBQVEsQ0FBQ0MsS0FBYixFQUFvQjtBQUNsQkwsY0FBQUEsdURBQUEsQ0FBWUksUUFBUSxDQUFDRSxPQUFyQjtBQUNELGFBRkQsTUFFSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CSixRQUFwQjtBQUNDOztBQWZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFnQlAsRUFoQk8sQ0FBVDtBQWlCQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSSw4REFBQyw4Q0FBRDtBQUFVLHFCQUFPLEVB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdESDs7R0FwRXVCRjtVQUNMRDs7O0tBREtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL092ZXJ2aWV3Q29udGVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZ2V0UGF0aWVudE92ZXJ2aWV3IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIlxyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIlxyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIi4vVGFibGVSb3dcIlxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQYXRpZW50T3ZlcnZpZXcoKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1RPS0VOIDogJyx0b2tlbilcclxuICAgICAgICAvLyAgIC8vIGNvbnN0IHVzZXIgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAgIC8vICAgY29uc3QgdG9rZW5CYXNlNjQgPSBidG9hKHRva2VuKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdUT0tFTiBCQVNFIDY0IDogJyAsdG9rZW5CYXNlNjQpXHJcbiAgICAgICAgLy8gICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgLy8gICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEQVRBOicscmVzcG9uc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTMwXCI+T3ZlcnZpZXc8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtdXAtY2F0ZWdvcmllcyBtYi0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xNFwiPlRvcCBVcCBDYXRlZ29yaWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbm9taW5hbD17MTg1MDAwMDB9IGljb24gPSdpYy1kZXNrdG9wJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVza3RvcCA8L0NhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IG5vbWluYWw9ezg0NTUwMDB9IGljb24gPSdpYy1tb2JpbGUnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2JpbGUgPC9DYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBub21pbmFsPXsxODUwMDAwMH0gaWNvbiA9J2ljLWRlc2t0b3AnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcmllcyA8L0NhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtdHJhbnNhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTRcIj5MYXRlc3QgVHJhbnNhY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IG1haW4tY29udGVudC10YWJsZSBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiIHNjb3BlPVwiY29sXCI+R2FtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy0xXCJ0aXRsZT1cIk1vYmlsZSBMZWdlbmRcIiBjYXRlZ29yeT1cIk1vYmlsZVwiIGl0ZW09ezIwMH0gcHJpY2U9ezI5MDAwMH0gc3RhdHVzPVwiUGVuZGluZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBpbWFnZT1cIm92ZXJ2aWV3LTJcInRpdGxlPVwiQ2FsbCBvZiBEdXR5XCIgY2F0ZWdvcnk9XCJEZXNrdG9wXCIgaXRlbT17NTUwfSBwcmljZT17NzQwMDAwfSBzdGF0dXM9XCJTdWNjZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGltYWdlPVwib3ZlcnZpZXctM1widGl0bGU9XCJDbGFzaCBvZiBDbGFuc1wiIGNhdGVnb3J5PVwiTW9iaWxlXCIgaXRlbT17MTAwfSBwcmljZT17MTIwMDAwfSBzdGF0dXM9XCJGYWlsZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaW1hZ2U9XCJvdmVydmlldy00XCJ0aXRsZT1cIlZhbG9yYW50XCIgY2F0ZWdvcnk9XCJNb2JpbGVcIiBpdGVtPXsyMjV9IHByaWNlPXsyMDAwMDB9IHN0YXR1cz1cIlBlbmRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJnZXRQYXRpZW50T3ZlcnZpZXciLCJDYXRlZ29yeSIsIlRhYmxlUm93IiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJPdmVydmlld0NvbnRlbnQiLCJyb3V0ZXIiLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9