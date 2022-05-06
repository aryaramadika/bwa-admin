"use strict";
self["webpackHotUpdate_N_E"]("pages/member/recommendationHistory",{

/***/ "./components/organisms/ReccomendationHistory/TableRow.tsx":
/*!*****************************************************************!*\
  !*** ./components/organisms/ReccomendationHistory/TableRow.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableRow; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReccomendationHistory\\TableRow.tsx";





function TableRow(props) {
  var title = props.title,
      treatmenType = props.treatmenType,
      price = props.price,
      status = props.status;
  var statusClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'float-start icon-status': true,
    'pending': status === 'pending',
    'success': status === 'success',
    'failed': status === 'failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "game-title-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: treatmenType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_1__.default, {
            value: price,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "btn btn-status rounded-pill text-sm",
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = TableRow;

var _c;

$RefreshReg$(_c, "TableRow");

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

/***/ "./components/organisms/ReccomendationHistory/index.tsx":
/*!**************************************************************!*\
  !*** ./components/organisms/ReccomendationHistory/index.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReccomendationHistory; }
/* harmony export */ });
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.ts");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableRow */ "./components/organisms/ReccomendationHistory/TableRow.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReccomendationHistory\\index.tsx",
    _s = $RefreshSig$();







function ReccomendationHistory() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      recommend = _useState[0],
      setRecommed = _useState[1];

  var getRecommendationAPI = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/(0,D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response;
    return D_campus_subject_Final_Project_1_TBSFisioterapi_front_end_tbs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_services_patient__WEBPACK_IMPORTED_MODULE_3__.getRecommendHistory)();

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
              console.log('DATA history recommendation:', response);
              setRecommed(response.data.data); //   setTotal(response.data.totalTransaction)
              //   setTransactions(response.data.data)
              //   setCount(response.data.count);
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
    getRecommendationAPI();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("main", {
    className: "main-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "ps-lg-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: "Recommendation History"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Recommendation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "main-content main-content-table overflow-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
            className: "table table-borderless",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                className: "color-palette-1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  className: "text-start",
                  scope: "col",
                  children: "Recommendation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "col",
                  children: "Diagnosis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "col",
                  children: "Next Treatment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "col",
                  children: "Detail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
              id: "list_status_item",
              children: recommend.map(function (recommends) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
                  recommendation: recommends.historyTreatment.treatmentType,
                  price: recommends.total,
                  status: recommends.status
                }, recommends._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
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
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(ReccomendationHistory, "k6mVu44v79qlgAh2FymDVroBNsg=");

_c = ReccomendationHistory;

var _c;

$RefreshReg$(_c, "ReccomendationHistory");

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

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.9.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2022 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



//     

                                                               

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

function repeat(str, count) {
  return Array(count + 1).join(str);
}

function toNumericString(num) {
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

  coefficient = coefficient.replace('.', '');

  /**
   * for scientific notation the current decimal index will be after first number (index 0)
   * So effective decimal index will always be 1 + exponent value
   */
  var decimalIndex = 1 + exponent;

  var coffiecientLn = coefficient.length;

  if (decimalIndex < 0) {
    // if decimal index is less then 0 add preceding 0s
    // add 1 as join will have
    coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
    // else add decimal point at proper index
    coefficient =
      (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
  }

  return sign + coefficient;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return (
    format ||
    (typeof navigator !== 'undefined' &&
      !(navigator.platform && /iPhone|iPod/.test(navigator.platform)))
  );
}

//     
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);
    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: focusedElm,
          source: 'prop',
          event: null,
        });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var customNumerals = ref.customNumerals;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '[0-9' +
        (customNumerals ? customNumerals.join('') : '') +
        ']' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

    if (thousandSeparator === true) {
      thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, '.'];
    }

    return {
      decimalSeparator: decimalSeparator,
      thousandSeparator: thousandSeparator,
      allowedDecimalSeparators: allowedDecimalSeparators,
    };
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(this.getNumberRegex(true)) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(this.getNumberRegex(true)) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var customNumerals = ref.customNumerals;
    var formattedValue = numStr;

    if (customNumerals && customNumerals.length === 10) {
      var customNumeralRegex = new RegExp('[' + customNumerals.join('') + ']', 'g');
      formattedValue = numStr.replace(customNumeralRegex, function (digit) { return customNumerals.indexOf(digit).toString(); }
      );
    }

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');

    // Check number has '-' value
    var hasNegation = negationRegex.test(value);

    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);

    //remove negation
    value = value.replace(/-/g, '');

    if (hasNegation && !removeNegation && allowNegative) {
      value = '-' + value;
    }

    return value;
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1.isCharacterAFormat(idx + start, lastValue); }
    );

    // if it has, only remove characters that are not part of the format
    if (formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if (this$1.isCharacterAFormat(idx + start, lastValue)) {
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if (resolvedPortion.length > idx) {
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }

    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                               
                   
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var source = params.source;
    var event = params.event;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //calculate caret position if not defined
      if (caretPos === undefined && setCaretPosition) {
        var inputValue = params.inputValue || input.value;

        var currentCaretPosition = getCurrentCaretPosition(input);

        /**
         * set the value imperatively, this is required for IE fix
         * This is also required as if new caret position is beyond the previous value.
         * Caret position will not be set correctly
         */
        input.value = formattedValue;

        //get the caret position
        caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
      }

      /**
       * set the value imperatively, as we set the caret position as well imperatively.
       * This is to keep value and caret position in sync
       */
      input.value = formattedValue;

      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString), { event: event, source: source });
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({
      formattedValue: formattedValue,
      numAsString: numAsString,
      inputValue: inputValue,
      input: el,
      event: e,
      source: 'event',
    });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
          event: e,
          source: 'event',
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
          event: e,
          source: 'event',
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var removeFormatting = ref.removeFormatting;
    var mask = ref.mask;
    var defaultValue = ref.defaultValue;
    var isNumericString = ref.isNumericString;
    var allowNegative = ref.allowNegative;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var allowLeadingZeros = ref.allowLeadingZeros;
    var onValueChange = ref.onValueChange;
    var isAllowed = ref.isAllowed;
    var customNumerals = ref.customNumerals;
    var onChange = ref.onChange;
    var onKeyDown = ref.onKeyDown;
    var onMouseUp = ref.onMouseUp;
    var onFocus = ref.onFocus;
    var onBlur = ref.onBlur;
    var propValue = ref.value;
    var rest = objectWithoutProperties( ref, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"] );
    var otherProps = rest;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)));

NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3JlY29tbWVuZGF0aW9uSGlzdG9yeS42NjFhYTcwNDJkYTg5YzIyNThjZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQU9lLFNBQVNHLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXVDO0FBQ2xELE1BQU1DLEtBQU4sR0FBdUNELEtBQXZDLENBQU1DLEtBQU47QUFBQSxNQUFZQyxZQUFaLEdBQXVDRixLQUF2QyxDQUFZRSxZQUFaO0FBQUEsTUFBeUJDLEtBQXpCLEdBQXVDSCxLQUF2QyxDQUF5QkcsS0FBekI7QUFBQSxNQUErQkMsTUFBL0IsR0FBdUNKLEtBQXZDLENBQStCSSxNQUEvQjtBQUNBLE1BQU1DLFdBQVcsR0FBQ1AsaURBQUUsQ0FBQztBQUNqQiwrQkFBMEIsSUFEVDtBQUVqQixlQUFVTSxNQUFNLEtBQUcsU0FGRjtBQUdqQixlQUFVQSxNQUFNLEtBQUcsU0FIRjtBQUlqQixjQUFTQSxNQUFNLEtBQUc7QUFKRCxHQUFELENBQXBCO0FBT0Esc0JBQ0k7QUFBQSwyQkFDQTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUMsS0FBVjtBQUFBLCtCQUdJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQyxxREFBYjtBQUFBLHNCQUFvRUg7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBLHNCQUFpRUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQywwQ0FBYjtBQUFBLGlDQUNBLDhEQUFDLHdEQUFEO0FBQ1ksaUJBQUssRUFBRUMsS0FEbkI7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QTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixpREFBaUQ7O0FBRXZFO0FBQ0Esd0VBQXdFLDhCQUE4QjtBQUN0RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQW1CLDBCQUEwQixnQkFBZ0Isa0JBQWtCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGFBQWEsMERBQW1CLCtCQUErQixnQkFBZ0Isa0JBQWtCO0FBQ2pHOztBQUVBLFdBQVcsMERBQW1CLDJCQUEyQixnQkFBZ0Isa0JBQWtCO0FBQzNGOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLHdEQUFlOztBQUVqQjs7QUFFQSwrREFBZSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjY29tZW5kYXRpb25IaXN0b3J5L1RhYmxlUm93LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjY29tZW5kYXRpb25IaXN0b3J5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW51bWJlci1mb3JtYXQvZGlzdC9yZWFjdC1udW1iZXItZm9ybWF0LmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCJcblxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbnRlcmZhY2UgVGFibGVSb3dQcm9wc3tcbiAgICB0aXRsZSA6IHN0cmluZztcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcbiAgICBwcmljZTpudW1iZXI7XG4gICAgc3RhdHVzOnN0cmluZztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlUm93KHByb3BzOlRhYmxlUm93UHJvcHMpIHtcbiAgICBjb25zdHt0aXRsZSx0cmVhdG1lblR5cGUscHJpY2Usc3RhdHVzfT1wcm9wcztcbiAgICBjb25zdCBzdGF0dXNDbGFzcz1jeCh7XG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcbiAgICAgICAgJ3BlbmRpbmcnOnN0YXR1cz09PSdwZW5kaW5nJyxcbiAgICAgICAgJ3N1Y2Nlc3MnOnN0YXR1cz09PSdzdWNjZXNzJyxcbiAgICAgICAgJ2ZhaWxlZCc6c3RhdHVzPT09J2ZhaWxlZCdcblxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LXN0YXJ0IG1lLTMgbWItbGctMCBtYi0zXCIgc3JjPXtgL2ltZy8ke2ltYWdlfS5wbmdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MH0gaGVpZ2h0PXs2MH0gYWx0PVwiZ2FtZSB0aHVtYlwiLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtdGl0bGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZSBmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZ3LW5vcm1hbCB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMiBtLTBcIj57dHJlYXRtZW5UeXBlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RoPlxuICAgICBcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPlxuICAgICAgICAgICAgPE51bWJlckZvcm1hdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIlJwIFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz48L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTAgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICA8TGluayBcbiAgICAgICAgaHJlZj17YC9gfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdGF0dXMgcm91bmRlZC1waWxsIHRleHQtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERldGFpbHNcblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZ2V0UmVjb21tZW5kSGlzdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCJcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCIuL1RhYmxlUm93XCJcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjY29tZW5kYXRpb25IaXN0b3J5KCkge1xyXG4gICBjb25zdCBbcmVjb21tZW5kLHNldFJlY29tbWVkXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcbiAgIGNvbnN0IGdldFJlY29tbWVuZGF0aW9uQVBJID0gdXNlQ2FsbGJhY2soYXN5bmMoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZWNvbW1lbmRIaXN0b3J5KClcclxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgLy8gICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCdUT0tFTiA6ICcsdG9rZW4pXHJcbiAgICAgIC8vICAgLy8gY29uc3QgdXNlciA9IGp3dF9kZWNvZGUodG9rZW4pXHJcbiAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAvLyAgIGNvbnN0IHRva2VuQmFzZTY0ID0gYnRvYSh0b2tlbik7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1RPS0VOIEJBU0UgNjQgOiAnICx0b2tlbkJhc2U2NClcclxuICAgICAgLy8gICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAvLyAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEQVRBIGhpc3RvcnkgcmVjb21tZW5kYXRpb246JyxyZXNwb25zZSlcclxuICAgICAgc2V0UmVjb21tZWQocmVzcG9uc2UuZGF0YS5kYXRhKVxyXG4gICAgLy8gICBzZXRUb3RhbChyZXNwb25zZS5kYXRhLnRvdGFsVHJhbnNhY3Rpb24pXHJcbiAgICAvLyAgIHNldFRyYW5zYWN0aW9ucyhyZXNwb25zZS5kYXRhLmRhdGEpXHJcbiAgICAvLyAgIHNldENvdW50KHJlc3BvbnNlLmRhdGEuY291bnQpO1xyXG4gICAgLy8gICBzZXREYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7ICAgIFxyXG4gICAgfVxyXG5cclxufSxbXSlcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXRSZWNvbW1lbmRhdGlvbkFQSSgpXHJcbn0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmdy1ib2xkIGNvbG9yLXBhbGV0dGUtMSBtYi0zMFwiPlJlY29tbWVuZGF0aW9uIEhpc3Rvcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtdHJhbnNhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItMTRcIj5SZWNvbW1lbmRhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBtYWluLWNvbnRlbnQtdGFibGUgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIiBzY29wZT1cImNvbFwiPlJlY29tbWVuZGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGlhZ25vc2lzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmV4dCBUcmVhdG1lbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EZXRhaWw8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBpZD1cImxpc3Rfc3RhdHVzX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb21tZW5kLm1hcChyZWNvbW1lbmRzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb21tZW5kcy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uPXtyZWNvbW1lbmRzLmhpc3RvcnlUcmVhdG1lbnQudHJlYXRtZW50VHlwZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtyZWNvbW1lbmRzLnRvdGFsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtyZWNvbW1lbmRzLnN0YXR1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtyZWNvbW1lbmQubWFwKChyZWNvbW1lbmRhdGlvbnMpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoaXN0b3J5Q2hlY2tVcC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtoaXN0b3J5Q2hlY2tVcC5wcmltYXJ5Q29tcGxhaW59IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zaXM9e2hpc3RvcnlDaGVja1VwLmRpYWdub3Npc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2hpc3RvcnlDaGVja1VwLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXR1cz17aGlzdG9yeUJvb2tpbmcuc3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG4iLCIvKipcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQgLSA0LjkuMVxuICogQXV0aG9yIDogU3VkaGFuc2h1IFlhZGF2XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIDIwMjIgdG8gU3VkaGFuc2h1IFlhZGF2LCByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gYmFzaWMgbm9vcCBmdW5jdGlvblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hhcklzTnVtYmVyKGNoYXIgICAgICAgICApIHtcbiAgcmV0dXJuICEhKGNoYXIgfHwgJycpLm1hdGNoKC9cXGQvKTtcbn1cblxuZnVuY3Rpb24gaXNOaWwodmFsICAgICApIHtcbiAgcmV0dXJuIHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0ciAgICAgICAgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaG91c2FuZHNHcm91cFJlZ2V4KHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgICkge1xuICBzd2l0Y2ggKHRob3VzYW5kc0dyb3VwU3R5bGUpIHtcbiAgICBjYXNlICdsYWtoJzpcbiAgICAgIHJldHVybiAvKFxcZCs/KSg/PShcXGRcXGQpKyhcXGQpKD8hXFxkKSkoXFwuXFxkKyk/L2c7XG4gICAgY2FzZSAnd2FuJzpcbiAgICAgIHJldHVybiAvKFxcZCkoPz0oXFxkezR9KSsoPyFcXGQpKS9nO1xuICAgIGNhc2UgJ3Rob3VzYW5kJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaG91c2FuZFNlcGFyYXRvcihcbiAgc3RyICAgICAgICAsXG4gIHRob3VzYW5kU2VwYXJhdG9yICAgICAgICAsXG4gIHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgIFxuKSB7XG4gIHZhciB0aG91c2FuZHNHcm91cFJlZ2V4ID0gZ2V0VGhvdXNhbmRzR3JvdXBSZWdleCh0aG91c2FuZHNHcm91cFN0eWxlKTtcbiAgdmFyIGluZGV4ID0gc3RyLnNlYXJjaCgvWzEtOV0vKTtcbiAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyBzdHIubGVuZ3RoIDogaW5kZXg7XG4gIHJldHVybiAoXG4gICAgc3RyLnN1YnN0cmluZygwLCBpbmRleCkgK1xuICAgIHN0ci5zdWJzdHJpbmcoaW5kZXgsIHN0ci5sZW5ndGgpLnJlcGxhY2UodGhvdXNhbmRzR3JvdXBSZWdleCwgJyQxJyArIHRob3VzYW5kU2VwYXJhdG9yKVxuICApO1xufVxuXG4vL3NwaWx0IGEgZmxvYXQgbnVtYmVyIGludG8gZGlmZmVyZW50IHBhcnRzIGJlZm9yZURlY2ltYWwsIGFmdGVyRGVjaW1hbCwgYW5kIG5lZ2F0aW9uXG5mdW5jdGlvbiBzcGxpdERlY2ltYWwobnVtU3RyICAgICAgICAsIGFsbG93TmVnYXRpdmUpIHtcbiAgaWYgKCBhbGxvd05lZ2F0aXZlID09PSB2b2lkIDAgKSBhbGxvd05lZ2F0aXZlICAgICAgICAgID0gdHJ1ZTtcblxuICB2YXIgaGFzTmFnYXRpb24gPSBudW1TdHJbMF0gPT09ICctJztcbiAgdmFyIGFkZE5lZ2F0aW9uID0gaGFzTmFnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZTtcbiAgbnVtU3RyID0gbnVtU3RyLnJlcGxhY2UoJy0nLCAnJyk7XG5cbiAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcGFydHNbMF07XG4gIHZhciBhZnRlckRlY2ltYWwgPSBwYXJ0c1sxXSB8fCAnJztcblxuICByZXR1cm4ge1xuICAgIGJlZm9yZURlY2ltYWw6IGJlZm9yZURlY2ltYWwsXG4gICAgYWZ0ZXJEZWNpbWFsOiBhZnRlckRlY2ltYWwsXG4gICAgaGFzTmFnYXRpb246IGhhc05hZ2F0aW9uLFxuICAgIGFkZE5lZ2F0aW9uOiBhZGROZWdhdGlvbixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZml4TGVhZGluZ1plcm8obnVtU3RyICAgICAgICAgKSB7XG4gIGlmICghbnVtU3RyKSB7IHJldHVybiBudW1TdHI7IH1cbiAgdmFyIGlzTmVnYXRpdmUgPSBudW1TdHJbMF0gPT09ICctJztcbiAgaWYgKGlzTmVnYXRpdmUpIHsgbnVtU3RyID0gbnVtU3RyLnN1YnN0cmluZygxLCBudW1TdHIubGVuZ3RoKTsgfVxuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXS5yZXBsYWNlKC9eMCsvLCAnJykgfHwgJzAnO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcGFydHNbMV0gfHwgJyc7XG5cbiAgcmV0dXJuIChcIlwiICsgKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBiZWZvcmVEZWNpbWFsICsgKGFmdGVyRGVjaW1hbCA/IChcIi5cIiArIGFmdGVyRGVjaW1hbCkgOiAnJykpO1xufVxuXG4vKipcbiAqIGxpbWl0IGRlY2ltYWwgbnVtYmVycyB0byBnaXZlbiBzY2FsZVxuICogTm90IHVzZWQgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiBsaW1pdFRvU2NhbGUobnVtU3RyICAgICAgICAsIHNjYWxlICAgICAgICAsIGZpeGVkRGVjaW1hbFNjYWxlICAgICAgICAgKSB7XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIGZpbGxlciA9IGZpeGVkRGVjaW1hbFNjYWxlID8gJzAnIDogJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHNjYWxlIC0gMTsgaSsrKSB7XG4gICAgc3RyICs9IG51bVN0cltpXSB8fCBmaWxsZXI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgY291bnQpIHtcbiAgcmV0dXJuIEFycmF5KGNvdW50ICsgMSkuam9pbihzdHIpO1xufVxuXG5mdW5jdGlvbiB0b051bWVyaWNTdHJpbmcobnVtKSB7XG4gIG51bSArPSAnJzsgLy8gdHlwZWNhc3QgbnVtYmVyIHRvIHN0cmluZ1xuXG4gIC8vIHN0b3JlIHRoZSBzaWduIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgbnVtYmVyLlxuICB2YXIgc2lnbiA9IG51bVswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gIGlmIChzaWduKSB7IG51bSA9IG51bS5zdWJzdHJpbmcoMSk7IH1cblxuICAvLyBzcGxpdCB0aGUgbnVtYmVyIGludG8gY29mZmljaWVudCBhbmQgZXhwb25lbnRcbiAgdmFyIHJlZiA9IG51bS5zcGxpdCgvW2VFXS9nKTtcbiAgdmFyIGNvZWZmaWNpZW50ID0gcmVmWzBdO1xuICB2YXIgZXhwb25lbnQgPSByZWZbMV07XG5cbiAgLy8gY292ZXJ0IGV4cG9uZW50IHRvIG51bWJlcjtcbiAgZXhwb25lbnQgPSBOdW1iZXIoZXhwb25lbnQpO1xuXG4gIC8vIGlmIHRoZXJlIGlzIG5vIGV4cG9uZW50IHBhcnQgb3IgaXRzIDAsIHJldHVybiB0aGUgY29mZmllY2llbnQgd2l0aCBzaWduXG4gIGlmICghZXhwb25lbnQpIHsgcmV0dXJuIHNpZ24gKyBjb2VmZmljaWVudDsgfVxuXG4gIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQucmVwbGFjZSgnLicsICcnKTtcblxuICAvKipcbiAgICogZm9yIHNjaWVudGlmaWMgbm90YXRpb24gdGhlIGN1cnJlbnQgZGVjaW1hbCBpbmRleCB3aWxsIGJlIGFmdGVyIGZpcnN0IG51bWJlciAoaW5kZXggMClcbiAgICogU28gZWZmZWN0aXZlIGRlY2ltYWwgaW5kZXggd2lsbCBhbHdheXMgYmUgMSArIGV4cG9uZW50IHZhbHVlXG4gICAqL1xuICB2YXIgZGVjaW1hbEluZGV4ID0gMSArIGV4cG9uZW50O1xuXG4gIHZhciBjb2ZmaWVjaWVudExuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuXG4gIGlmIChkZWNpbWFsSW5kZXggPCAwKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgcHJlY2VkaW5nIDBzXG4gICAgLy8gYWRkIDEgYXMgam9pbiB3aWxsIGhhdmVcbiAgICBjb2VmZmljaWVudCA9ICcwLicgKyByZXBlYXQoJzAnLCBNYXRoLmFicyhkZWNpbWFsSW5kZXgpKSArIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGRlY2ltYWxJbmRleCA+PSBjb2ZmaWVjaWVudExuKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgbGVhZGluZyAwc1xuICAgIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQgKyByZXBlYXQoJzAnLCBkZWNpbWFsSW5kZXggLSBjb2ZmaWVjaWVudExuKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGFkZCBkZWNpbWFsIHBvaW50IGF0IHByb3BlciBpbmRleFxuICAgIGNvZWZmaWNpZW50ID1cbiAgICAgIChjb2VmZmljaWVudC5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KSB8fCAnMCcpICsgJy4nICsgY29lZmZpY2llbnQuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCk7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIGNvZWZmaWNpZW50O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHJlcXVpcmVkIHRvIHJvdW5kIHByb3AgdmFsdWUgdG8gZ2l2ZW4gc2NhbGUuXG4gKiBOb3QgdXNlZCAucm91bmQgb3IgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiByb3VuZFRvUHJlY2lzaW9uKG51bVN0ciAgICAgICAgLCBzY2FsZSAgICAgICAgLCBmaXhlZERlY2ltYWxTY2FsZSAgICAgICAgICkge1xuICAvL2lmIG51bWJlciBpcyBlbXB0eSBkb24ndCBkbyBhbnl0aGluZyByZXR1cm4gZW1wdHkgc3RyaW5nXG4gIGlmIChbJycsICctJ10uaW5kZXhPZihudW1TdHIpICE9PSAtMSkgeyByZXR1cm4gbnVtU3RyOyB9XG5cbiAgdmFyIHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSAmJiBzY2FsZTtcbiAgdmFyIHJlZiA9IHNwbGl0RGVjaW1hbChudW1TdHIpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZi5iZWZvcmVEZWNpbWFsO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmLmFmdGVyRGVjaW1hbDtcbiAgdmFyIGhhc05hZ2F0aW9uID0gcmVmLmhhc05hZ2F0aW9uO1xuICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQoKFwiMC5cIiArIChhZnRlckRlY2ltYWwgfHwgJzAnKSkpO1xuICB2YXIgZmxvYXRWYWx1ZVN0ciA9XG4gICAgYWZ0ZXJEZWNpbWFsLmxlbmd0aCA8PSBzY2FsZSA/IChcIjAuXCIgKyBhZnRlckRlY2ltYWwpIDogZmxvYXRWYWx1ZS50b0ZpeGVkKHNjYWxlKTtcbiAgdmFyIHJvdW5kZWREZWNpbWFsUGFydHMgPSBmbG9hdFZhbHVlU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBpbnRQYXJ0ID0gYmVmb3JlRGVjaW1hbFxuICAgIC5zcGxpdCgnJylcbiAgICAucmV2ZXJzZSgpXG4gICAgLnJlZHVjZShmdW5jdGlvbiAocm91bmRlZFN0ciwgY3VycmVudCwgaWR4KSB7XG4gICAgICBpZiAocm91bmRlZFN0ci5sZW5ndGggPiBpZHgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoTnVtYmVyKHJvdW5kZWRTdHJbMF0pICsgTnVtYmVyKGN1cnJlbnQpKS50b1N0cmluZygpICtcbiAgICAgICAgICByb3VuZGVkU3RyLnN1YnN0cmluZygxLCByb3VuZGVkU3RyLmxlbmd0aClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50ICsgcm91bmRlZFN0cjtcbiAgICB9LCByb3VuZGVkRGVjaW1hbFBhcnRzWzBdKTtcblxuICB2YXIgZGVjaW1hbFBhcnQgPSBsaW1pdFRvU2NhbGUoXG4gICAgcm91bmRlZERlY2ltYWxQYXJ0c1sxXSB8fCAnJyxcbiAgICBNYXRoLm1pbihzY2FsZSwgYWZ0ZXJEZWNpbWFsLmxlbmd0aCksXG4gICAgZml4ZWREZWNpbWFsU2NhbGVcbiAgKTtcbiAgdmFyIG5lZ2F0aW9uID0gaGFzTmFnYXRpb24gPyAnLScgOiAnJztcbiAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID8gJy4nIDogJyc7XG4gIHJldHVybiAoXCJcIiArIG5lZ2F0aW9uICsgaW50UGFydCArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFsUGFydCk7XG59XG5cbi8qKiBzZXQgdGhlIGNhcmV0IHBvc2l0b24gaW4gYW4gaW5wdXQgZmllbGQgKiovXG5mdW5jdGlvbiBzZXRDYXJldFBvc2l0aW9uKGVsICAgICAgICAgICAgICAgICAgLCBjYXJldFBvcyAgICAgICAgKSB7XG4gIGVsLnZhbHVlID0gZWwudmFsdWU7XG4gIC8vIF4gdGhpcyBpcyB1c2VkIHRvIG5vdCBvbmx5IGdldCAnZm9jdXMnLCBidXRcbiAgLy8gdG8gbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgaXQgZXZlcnl0aGluZyAtc2VsZWN0ZWQtXG4gIC8vIChpdCBjYXVzZXMgYW4gaXNzdWUgaW4gY2hyb21lLCBhbmQgaGF2aW5nIGl0IGRvZXNuJ3QgaHVydCBhbnkgb3RoZXIgYnJvd3NlcilcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgaWYgKGVsLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgdmFyIHJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBjYXJldFBvcyk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyAoZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgYWRkZWQgZm9yIEZpcmVmb3ggYnVnKVxuICAgIGlmIChlbC5zZWxlY3Rpb25TdGFydCB8fCBlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKGNhcmV0UG9zLCBjYXJldFBvcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWlsIGNpdHksIGZvcnR1bmF0ZWx5IHRoaXMgbmV2ZXIgaGFwcGVucyAoYXMgZmFyIGFzIEkndmUgdGVzdGVkKSA6KVxuICAgIGVsLmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICBHaXZlbiBwcmV2aW91cyB2YWx1ZSBhbmQgbmV3VmFsdWUgaXQgcmV0dXJucyB0aGUgaW5kZXhcbiAgc3RhcnQgLSBlbmQgdG8gd2hpY2ggdmFsdWVzIGhhdmUgY2hhbmdlZC5cbiAgVGhpcyBmdW5jdGlvbiBtYWtlcyBhc3N1bXB0aW9uIGFib3V0IG9ubHkgY29uc2VjdXRpdmVcbiAgY2hhcmFjdGVycyBhcmUgY2hhbmdlZCB3aGljaCBpcyBjb3JyZWN0IGFzc3VtcHRpb24gZm9yIGNhcmV0IGlucHV0LlxuKi9cbmZ1bmN0aW9uIGZpbmRDaGFuZ2VkSW5kZXgocHJldlZhbHVlICAgICAgICAsIG5ld1ZhbHVlICAgICAgICApIHtcbiAgdmFyIGkgPSAwLFxuICAgIGogPSAwO1xuICB2YXIgcHJldkxlbmd0aCA9IHByZXZWYWx1ZS5sZW5ndGg7XG4gIHZhciBuZXdMZW5ndGggPSBuZXdWYWx1ZS5sZW5ndGg7XG4gIHdoaWxlIChwcmV2VmFsdWVbaV0gPT09IG5ld1ZhbHVlW2ldICYmIGkgPCBwcmV2TGVuZ3RoKSB7IGkrKzsgfVxuXG4gIC8vY2hlY2sgd2hhdCBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gbGFzdFxuICB3aGlsZSAoXG4gICAgcHJldlZhbHVlW3ByZXZMZW5ndGggLSAxIC0gal0gPT09IG5ld1ZhbHVlW25ld0xlbmd0aCAtIDEgLSBqXSAmJlxuICAgIG5ld0xlbmd0aCAtIGogPiBpICYmXG4gICAgcHJldkxlbmd0aCAtIGogPiBpXG4gICkge1xuICAgIGorKztcbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0OiBpLCBlbmQ6IHByZXZMZW5ndGggLSBqIH07XG59XG5cbi8qXG4gIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2VcbiovXG5mdW5jdGlvbiBjbGFtcChudW0gICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsICAgICAgICAgICAgICAgICAgKSB7XG4gIC8qTWF4IG9mIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgaXMgdGFrZW4gZm9yIHRoZSBwYXRjaCBvZiBwaXhlbCBhbmQgb3RoZXIgbW9iaWxlIGRldmljZSBjYXJldCBidWcqL1xuICByZXR1cm4gTWF0aC5tYXgoZWwuc2VsZWN0aW9uU3RhcnQsIGVsLnNlbGVjdGlvbkVuZCk7XG59XG5cbmZ1bmN0aW9uIGFkZElucHV0TW9kZShmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICByZXR1cm4gKFxuICAgIGZvcm1hdCB8fFxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgIShuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpKVxuICApO1xufVxuXG4vLyAgICAgXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheVR5cGU6ICdpbnB1dCcsXG4gIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgdGhvdXNhbmRzR3JvdXBTdHlsZTogJ3Rob3VzYW5kJyxcbiAgZml4ZWREZWNpbWFsU2NhbGU6IGZhbHNlLFxuICBwcmVmaXg6ICcnLFxuICBzdWZmaXg6ICcnLFxuICBhbGxvd05lZ2F0aXZlOiB0cnVlLFxuICBhbGxvd0VtcHR5Rm9ybWF0dGluZzogZmFsc2UsXG4gIGFsbG93TGVhZGluZ1plcm9zOiBmYWxzZSxcbiAgaXNOdW1lcmljU3RyaW5nOiBmYWxzZSxcbiAgdHlwZTogJ3RleHQnLFxuICBvblZhbHVlQ2hhbmdlOiBub29wLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25LZXlEb3duOiBub29wLFxuICBvbk1vdXNlVXA6IG5vb3AsXG4gIG9uRm9jdXM6IG5vb3AsXG4gIG9uQmx1cjogbm9vcCxcbiAgaXNBbGxvd2VkOiByZXR1cm5UcnVlLFxufTtcbnZhciBOdW1iZXJGb3JtYXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChzdXBlcmNsYXNzKSB7XG4gIGZ1bmN0aW9uIE51bWJlckZvcm1hdChwcm9wcyAgICAgICAgKSB7XG4gICAgc3VwZXJjbGFzcy5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZVByb3AoZGVmYXVsdFZhbHVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICBudW1Bc1N0cmluZzogdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKSxcbiAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0ID0ge1xuICAgICAgc2VsZWN0aW9uU3RhcnQ6IDAsXG4gICAgICBzZWxlY3Rpb25FbmQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBpZiAoIHN1cGVyY2xhc3MgKSBOdW1iZXJGb3JtYXQuX19wcm90b19fID0gc3VwZXJjbGFzcztcbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIHN1cGVyY2xhc3MgJiYgc3VwZXJjbGFzcy5wcm90b3R5cGUgKTtcbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlckZvcm1hdDtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIHNldCBtb3VudGVkIHN0YXRlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcyAgICAgICAgKSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUlmUmVxdWlyZWQocHJldlByb3BzKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FyZXRQb3NpdGlvblRpbWVvdXQpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudXBkYXRlVmFsdWVJZlJlcXVpcmVkID0gZnVuY3Rpb24gdXBkYXRlVmFsdWVJZlJlcXVpcmVkIChwcmV2UHJvcHMgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSByZWYuc3RhdGU7XG4gICAgdmFyIGZvY3VzZWRFbG0gPSByZWYuZm9jdXNlZEVsbTtcbiAgICB2YXIgc3RhdGVWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBsYXN0TnVtU3RyID0gc3RhdGUubnVtQXNTdHJpbmc7IGlmICggbGFzdE51bVN0ciA9PT0gdm9pZCAwICkgbGFzdE51bVN0ciA9ICcnO1xuXG4gICAgLy8gSWYgb25seSBzdGF0ZSBjaGFuZ2VkIG5vIG5lZWQgdG8gZG8gYW55IHRoaW5nXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gcHJvcHMpIHtcbiAgICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgICB2YXIgbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKGxhc3ROdW1TdHIpO1xuXG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpc05pbChwcm9wcy52YWx1ZSkgPyBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0IDogdGhpcy5mb3JtYXRWYWx1ZVByb3AoKTtcbiAgICAgIHZhciBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdChudW1Bc1N0cmluZyk7XG4gICAgICB2YXIgbGFzdEZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KGxhc3ROdW1TdHIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIC8vd2hpbGUgdHlwaW5nIHNldCBzdGF0ZSBvbmx5IHdoZW4gZmxvYXQgdmFsdWUgY2hhbmdlc1xuICAgICAgICAoKCFpc05hTihmbG9hdFZhbHVlKSB8fCAhaXNOYU4obGFzdEZsb2F0VmFsdWUpKSAmJiBmbG9hdFZhbHVlICE9PSBsYXN0RmxvYXRWYWx1ZSkgfHxcbiAgICAgICAgLy9jYW4gYWxzbyBzZXQgc3RhdGUgd2hlbiBmbG9hdCB2YWx1ZSBpcyBzYW1lIGFuZCB0aGUgZm9ybWF0IHByb3BzIGNoYW5nZXNcbiAgICAgICAgbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCAhPT0gc3RhdGVWYWx1ZSB8fFxuICAgICAgICAvL3NldCBzdGF0ZSBhbHdheXMgd2hlbiBub3QgaW4gZm9jdXMgYW5kIGZvcm1hdHRlZCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgICAgIChmb2N1c2VkRWxtID09PSBudWxsICYmIGZvcm1hdHRlZFZhbHVlICE9PSBzdGF0ZVZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcsXG4gICAgICAgICAgaW5wdXQ6IGZvY3VzZWRFbG0sXG4gICAgICAgICAgc291cmNlOiAncHJvcCcsXG4gICAgICAgICAgZXZlbnQ6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiogTWlzYyBtZXRob2RzICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldEZsb2F0U3RyaW5nID0gZnVuY3Rpb24gZ2V0RmxvYXRTdHJpbmcgKG51bSkge1xuICAgIGlmICggbnVtID09PSB2b2lkIDAgKSBudW0gICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7XG5cbiAgICAvL3JlbW92ZSBuZWdhdGlvbiBmb3IgcmVnZXggY2hlY2tcbiAgICB2YXIgaGFzTmVnYXRpb24gPSBudW1bMF0gPT09ICctJztcbiAgICBpZiAoaGFzTmVnYXRpb24pIHsgbnVtID0gbnVtLnJlcGxhY2UoJy0nLCAnJyk7IH1cblxuICAgIC8vaWYgZGVjaW1hbCBzY2FsZSBpcyB6ZXJvIHJlbW92ZSBkZWNpbWFsIGFuZCBudW1iZXIgYWZ0ZXIgZGVjaW1hbFNlcGFyYXRvclxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTY2FsZSA9PT0gMCkge1xuICAgICAgbnVtID0gbnVtLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpWzBdO1xuICAgIH1cblxuICAgIG51bSA9IChudW0ubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKS5yZXBsYWNlKGRlY2ltYWxTZXBhcmF0b3IsICcuJyk7XG5cbiAgICAvL3JlbW92ZSBleHRyYSBkZWNpbWFsc1xuICAgIHZhciBmaXJzdERlY2ltYWxJbmRleCA9IG51bS5pbmRleE9mKCcuJyk7XG5cbiAgICBpZiAoZmlyc3REZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICBudW0gPSAobnVtLnN1YnN0cmluZygwLCBmaXJzdERlY2ltYWxJbmRleCkpICsgXCIuXCIgKyAobnVtXG4gICAgICAgIC5zdWJzdHJpbmcoZmlyc3REZWNpbWFsSW5kZXggKyAxLCBudW0ubGVuZ3RoKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChkZWNpbWFsU2VwYXJhdG9yKSwgJ2cnKSwgJycpKTtcbiAgICB9XG5cbiAgICAvL2FkZCBuZWdhdGlvbiBiYWNrXG4gICAgaWYgKGhhc05lZ2F0aW9uKSB7IG51bSA9ICctJyArIG51bTsgfVxuXG4gICAgcmV0dXJuIG51bTtcbiAgfTtcblxuICAvL3JldHVybmVkIHJlZ2V4IGFzc3VtZXMgZGVjaW1hbFNlcGFyYXRvciBpcyBhcyBwZXIgcHJvcFxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldE51bWJlclJlZ2V4ID0gZnVuY3Rpb24gZ2V0TnVtYmVyUmVnZXggKGcgICAgICAgICAsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGN1c3RvbU51bWVyYWxzID0gcmVmLmN1c3RvbU51bWVyYWxzO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdbMC05JyArXG4gICAgICAgIChjdXN0b21OdW1lcmFscyA/IGN1c3RvbU51bWVyYWxzLmpvaW4oJycpIDogJycpICtcbiAgICAgICAgJ10nICtcbiAgICAgICAgKGRlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNjYWxlICE9PSAwICYmICFpZ25vcmVEZWNpbWFsU2VwYXJhdG9yICYmICFmb3JtYXRcbiAgICAgICAgICA/ICd8JyArIGVzY2FwZVJlZ0V4cChkZWNpbWFsU2VwYXJhdG9yKVxuICAgICAgICAgIDogJycpLFxuICAgICAgZyA/ICdnJyA6IHVuZGVmaW5lZFxuICAgICk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRTZXBhcmF0b3JzID0gZnVuY3Rpb24gZ2V0U2VwYXJhdG9ycyAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHJlZiQxLnRob3VzYW5kU2VwYXJhdG9yO1xuICAgIHZhciBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSByZWYkMS5hbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM7XG5cbiAgICBpZiAodGhvdXNhbmRTZXBhcmF0b3IgPT09IHRydWUpIHtcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yID0gJywnO1xuICAgIH1cbiAgICBpZiAoIWFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycykge1xuICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gW2RlY2ltYWxTZXBhcmF0b3IsICcuJ107XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlY2ltYWxTZXBhcmF0b3I6IGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgICB0aG91c2FuZFNlcGFyYXRvcjogdGhvdXNhbmRTZXBhcmF0b3IsXG4gICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM6IGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyxcbiAgICB9O1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0TWFza0F0SW5kZXggPSBmdW5jdGlvbiBnZXRNYXNrQXRJbmRleCAoaW5kZXggICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrID0gcmVmLm1hc2s7IGlmICggbWFzayA9PT0gdm9pZCAwICkgbWFzayA9ICcgJztcbiAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9XG5cbiAgICByZXR1cm4gbWFza1tpbmRleF0gfHwgJyAnO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0VmFsdWVPYmplY3QgPSBmdW5jdGlvbiBnZXRWYWx1ZU9iamVjdCAoZm9ybWF0dGVkVmFsdWUgICAgICAgICwgbnVtQXNTdHJpbmcgICAgICAgICkge1xuICAgIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdChudW1Bc1N0cmluZyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgdmFsdWU6IG51bUFzU3RyaW5nLFxuICAgICAgZmxvYXRWYWx1ZTogaXNOYU4oZmxvYXRWYWx1ZSkgPyB1bmRlZmluZWQgOiBmbG9hdFZhbHVlLFxuICAgIH07XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS52YWxpZGF0ZVByb3BzID0gZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1hc2sgPSByZWYubWFzaztcblxuICAgIC8vdmFsaWRhdGUgZGVjaW1hbFNlcGFyYXRvciBhbmQgdGhvdXNhbmRTZXBhcmF0b3JcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmJDEudGhvdXNhbmRTZXBhcmF0b3I7XG5cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciA9PT0gdGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigoXCJcXG4gICAgICAgICAgRGVjaW1hbCBzZXBhcmF0b3IgY2FuJ3QgYmUgc2FtZSBhcyB0aG91c2FuZCBzZXBhcmF0b3IuXFxuICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiBcIiArIHRob3VzYW5kU2VwYXJhdG9yICsgXCIgKHRob3VzYW5kU2VwYXJhdG9yID0ge3RydWV9IGlzIHNhbWUgYXMgdGhvdXNhbmRTZXBhcmF0b3IgPSBcXFwiLFxcXCIpXFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I6IFwiICsgZGVjaW1hbFNlcGFyYXRvciArIFwiIChkZWZhdWx0IHZhbHVlIGZvciBkZWNpbWFsU2VwYXJhdG9yIGlzIC4pXFxuICAgICAgIFwiKSk7XG4gICAgfVxuXG4gICAgLy92YWxpZGF0ZSBtYXNrXG4gICAgaWYgKG1hc2spIHtcbiAgICAgIHZhciBtYXNrQXNTdHIgPSBtYXNrID09PSAnc3RyaW5nJyA/IG1hc2sgOiBtYXNrLnRvU3RyaW5nKCk7XG4gICAgICBpZiAobWFza0FzU3RyLm1hdGNoKC9cXGQvZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcIlxcbiAgICAgICAgICBNYXNrIFwiICsgbWFzayArIFwiIHNob3VsZCBub3QgY29udGFpbiBudW1lcmljIGNoYXJhY3RlcjtcXG4gICAgICAgIFwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKiogTWlzYyBtZXRob2RzIGVuZCAqKi9cblxuICAvKiogY2FyZXQgc3BlY2lmaWMgbWV0aG9kcyAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIHNldFBhdGNoZWRDYXJldFBvc2l0aW9uIChlbCAgICAgICAgICAgICAgICAgICwgY2FyZXRQb3MgICAgICAgICwgY3VycmVudFZhbHVlICAgICAgICApIHtcbiAgICAvKiBzZXR0aW5nIGNhcmV0IHBvc2l0aW9uIHdpdGhpbiB0aW1lb3V0IG9mIDBtcyBpcyByZXF1aXJlZCBmb3IgbW9iaWxlIGNocm9tZSxcbiAgICBvdGhlcndpc2UgYnJvd3NlciByZXNldHMgdGhlIGNhcmV0IHBvc2l0aW9uIGFmdGVyIHdlIHNldCBpdFxuICAgIFdlIGFyZSBhbHNvIHNldHRpbmcgaXQgd2l0aG91dCB0aW1lb3V0IHNvIHRoYXQgaW4gbm9ybWFsIGJyb3dzZXIgd2UgZG9uJ3Qgc2VlIHRoZSBmbGlja2VyaW5nICovXG4gICAgc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpO1xuICAgIHRoaXMuY2FyZXRQb3NpdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbC52YWx1ZSA9PT0gY3VycmVudFZhbHVlKSB7IHNldENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zKTsgfVxuICAgIH0sIDApO1xuICB9O1xuXG4gIC8qIFRoaXMga2VlcHMgdGhlIGNhcmV0IHdpdGhpbiB0eXBpbmcgYXJlYSBzbyBwZW9wbGUgY2FuJ3QgdHlwZSBpbiBiZXR3ZWVuIHByZWZpeCBvciBzdWZmaXggKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb3JyZWN0Q2FyZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGNvcnJlY3RDYXJldFBvc2l0aW9uICh2YWx1ZSAgICAgICAgLCBjYXJldFBvcyAgICAgICAgLCBkaXJlY3Rpb24gICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcblxuICAgIC8vaWYgdmFsdWUgaXMgZW1wdHkgcmV0dXJuIDBcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7IHJldHVybiAwOyB9XG5cbiAgICAvL2NhcmV0IHBvc2l0aW9uIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kIHZhbHVlIGxlbmd0aFxuICAgIGNhcmV0UG9zID0gY2xhbXAoY2FyZXRQb3MsIDAsIHZhbHVlLmxlbmd0aCk7XG5cbiAgICAvL2luIGNhc2Ugb2YgZm9ybWF0IGFzIG51bWJlciBsaW1pdCBiZXR3ZWVuIHByZWZpeCBhbmQgc3VmZml4XG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhciBoYXNOZWdhdGlvbiA9IHZhbHVlWzBdID09PSAnLSc7XG4gICAgICByZXR1cm4gY2xhbXAoY2FyZXRQb3MsIHByZWZpeC5sZW5ndGggKyAoaGFzTmVnYXRpb24gPyAxIDogMCksIHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vaW4gY2FzZSBpZiBjdXN0b20gZm9ybWF0IG1ldGhvZCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7IHJldHVybiBjYXJldFBvczsgfVxuXG4gICAgLyogaW4gY2FzZSBmb3JtYXQgaXMgc3RyaW5nIGZpbmQgdGhlIGNsb3Nlc3QgIyBwb3NpdGlvbiBmcm9tIHRoZSBjYXJldCBwb3NpdGlvbiAqL1xuXG4gICAgLy9pbiBjYXNlIHRoZSBjYXJldFBvcyBoYXZlIGlucHV0IHZhbHVlIG9uIGl0IGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKGZvcm1hdFtjYXJldFBvc10gPT09ICcjJyAmJiBjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRQb3NdKSkge1xuICAgICAgcmV0dXJuIGNhcmV0UG9zO1xuICAgIH1cblxuICAgIC8vaWYgY2FyZXRQb3MgaXMganVzdCBhZnRlciBpbnB1dCB2YWx1ZSBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChmb3JtYXRbY2FyZXRQb3MgLSAxXSA9PT0gJyMnICYmIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldFBvcyAtIDFdKSkge1xuICAgICAgcmV0dXJuIGNhcmV0UG9zO1xuICAgIH1cblxuICAgIC8vZmluZCB0aGUgbmVhcmVzdCBjYXJldCBwb3NpdGlvblxuICAgIHZhciBmaXJzdEhhc2hQb3NpdGlvbiA9IGZvcm1hdC5pbmRleE9mKCcjJyk7XG4gICAgdmFyIGxhc3RIYXNoUG9zaXRpb24gPSBmb3JtYXQubGFzdEluZGV4T2YoJyMnKTtcblxuICAgIC8vbGltaXQgdGhlIGN1cnNvciBiZXR3ZWVuIHRoZSBmaXJzdCAjIHBvc2l0aW9uIGFuZCB0aGUgbGFzdCAjIHBvc2l0aW9uXG4gICAgY2FyZXRQb3MgPSBjbGFtcChjYXJldFBvcywgZmlyc3RIYXNoUG9zaXRpb24sIGxhc3RIYXNoUG9zaXRpb24gKyAxKTtcblxuICAgIHZhciBuZXh0UG9zID0gZm9ybWF0LnN1YnN0cmluZyhjYXJldFBvcywgZm9ybWF0Lmxlbmd0aCkuaW5kZXhPZignIycpO1xuICAgIHZhciBjYXJldExlZnRCb3VuZCA9IGNhcmV0UG9zO1xuICAgIHZhciBjYXJldFJpZ2h0Qm91bmQgPSBjYXJldFBvcyArIChuZXh0UG9zID09PSAtMSA/IDAgOiBuZXh0UG9zKTtcblxuICAgIC8vZ2V0IHRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgbGFzdCBudW1iZXIgaXMgcHJlc2VudFxuICAgIHdoaWxlIChcbiAgICAgIGNhcmV0TGVmdEJvdW5kID4gZmlyc3RIYXNoUG9zaXRpb24gJiZcbiAgICAgIChmb3JtYXRbY2FyZXRMZWZ0Qm91bmRdICE9PSAnIycgfHwgIWNoYXJJc051bWJlcih2YWx1ZVtjYXJldExlZnRCb3VuZF0pKVxuICAgICkge1xuICAgICAgY2FyZXRMZWZ0Qm91bmQgLT0gMTtcbiAgICB9XG5cbiAgICB2YXIgZ29Ub0xlZnQgPVxuICAgICAgIWNoYXJJc051bWJlcih2YWx1ZVtjYXJldFJpZ2h0Qm91bmRdKSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIGNhcmV0UG9zICE9PSBmaXJzdEhhc2hQb3NpdGlvbikgfHxcbiAgICAgIGNhcmV0UG9zIC0gY2FyZXRMZWZ0Qm91bmQgPCBjYXJldFJpZ2h0Qm91bmQgLSBjYXJldFBvcztcblxuICAgIGlmIChnb1RvTGVmdCkge1xuICAgICAgLy9jaGVjayBpZiBudW1iZXIgc2hvdWxkIGJlIHRha2VuIGFmdGVyIHRoZSBib3VuZCBvciBhZnRlciBpdFxuICAgICAgLy9pZiBudW1iZXIgcHJlY2VkaW5nIGEgdmFsaWQgbnVtYmVyIGtlZXAgaXQgYWZ0ZXJcbiAgICAgIHJldHVybiBjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRMZWZ0Qm91bmRdKSA/IGNhcmV0TGVmdEJvdW5kICsgMSA6IGNhcmV0TGVmdEJvdW5kO1xuICAgIH1cblxuICAgIHJldHVybiBjYXJldFJpZ2h0Qm91bmQ7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24gZ2V0Q2FyZXRQb3NpdGlvbiAoaW5wdXRWYWx1ZSAgICAgICAgLCBmb3JtYXR0ZWRWYWx1ZSAgICAgICAgLCBjYXJldFBvcyAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIHN0YXRlVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7XG4gICAgdmFyIGlucHV0TnVtYmVyID0gKGlucHV0VmFsdWUubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKTtcbiAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gKGZvcm1hdHRlZFZhbHVlLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJyk7XG4gICAgdmFyIGosIGk7XG5cbiAgICBqID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjYXJldFBvczsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudElucHV0Q2hhciA9IGlucHV0VmFsdWVbaV0gfHwgJyc7XG4gICAgICB2YXIgY3VycmVudEZvcm1hdENoYXIgPSBmb3JtYXR0ZWRWYWx1ZVtqXSB8fCAnJztcbiAgICAgIC8vbm8gbmVlZCB0byBpbmNyZWFzZSBuZXcgY3Vyc29yIHBvc2l0aW9uIGlmIGZvcm1hdHRlZCB2YWx1ZSBkb2VzIG5vdCBoYXZlIHRob3NlIGNoYXJhY3RlcnNcbiAgICAgIC8vY2FzZSBpbnB1dFZhbHVlID0gMWEyMyBhbmQgZm9ybWF0dGVkVmFsdWUgPSAgMTIzXG4gICAgICBpZiAoIWN1cnJlbnRJbnB1dENoYXIubWF0Y2gobnVtUmVnZXgpICYmIGN1cnJlbnRJbnB1dENoYXIgIT09IGN1cnJlbnRGb3JtYXRDaGFyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvL1doZW4gd2UgYXJlIHN0cmlwaW5nIG91dCBsZWFkaW5nIHplcm9zIG1haW50YWluIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAvL0Nhc2UgaW5wdXRWYWx1ZSA9IDAwMDIzIGFuZCBmb3JtYXR0ZWRWYWx1ZSA9IDIzO1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50SW5wdXRDaGFyID09PSAnMCcgJiZcbiAgICAgICAgY3VycmVudEZvcm1hdENoYXIubWF0Y2gobnVtUmVnZXgpICYmXG4gICAgICAgIGN1cnJlbnRGb3JtYXRDaGFyICE9PSAnMCcgJiZcbiAgICAgICAgaW5wdXROdW1iZXIubGVuZ3RoICE9PSBmb3JtYXR0ZWROdW1iZXIubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vd2UgYXJlIG5vdCB1c2luZyBjdXJyZW50Rm9ybWF0Q2hhciBiZWNhdXNlIGogY2FuIGNoYW5nZSBoZXJlXG4gICAgICB3aGlsZSAoY3VycmVudElucHV0Q2hhciAhPT0gZm9ybWF0dGVkVmFsdWVbal0gJiYgaiA8IGZvcm1hdHRlZFZhbHVlLmxlbmd0aCkge1xuICAgICAgICBqKys7XG4gICAgICB9XG4gICAgICBqKys7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnICYmICFzdGF0ZVZhbHVlKSB7XG4gICAgICAvL3NldCBpdCB0byB0aGUgbWF4aW11bSB2YWx1ZSBzbyBpdCBnb2VzIGFmdGVyIHRoZSBsYXN0IG51bWJlclxuICAgICAgaiA9IGZvcm1hdHRlZFZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvL2NvcnJlY3QgY2FyZXQgcG9zaXRpb24gaWYgaXRzIG91dHNpZGUgb2YgZWRpdGFibGUgYXJlYVxuICAgIGogPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKGZvcm1hdHRlZFZhbHVlLCBqKTtcblxuICAgIHJldHVybiBqO1xuICB9O1xuICAvKiogY2FyZXQgc3BlY2lmaWMgbWV0aG9kcyBlbmRzICoqL1xuXG4gIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW1vdmVQcmVmaXhBbmRTdWZmaXggPSBmdW5jdGlvbiByZW1vdmVQcmVmaXhBbmRTdWZmaXggKHZhbCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG5cbiAgICAvL3JlbW92ZSBwcmVmaXggYW5kIHN1ZmZpeFxuICAgIGlmICghZm9ybWF0ICYmIHZhbCkge1xuICAgICAgdmFyIGlzTmVnYXRpdmUgPSB2YWxbMF0gPT09ICctJztcblxuICAgICAgLy9yZW1vdmUgbmVnYXRpb24gc2lnblxuICAgICAgaWYgKGlzTmVnYXRpdmUpIHsgdmFsID0gdmFsLnN1YnN0cmluZygxLCB2YWwubGVuZ3RoKTsgfVxuXG4gICAgICAvL3JlbW92ZSBwcmVmaXhcbiAgICAgIHZhbCA9IHByZWZpeCAmJiB2YWwuaW5kZXhPZihwcmVmaXgpID09PSAwID8gdmFsLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoLCB2YWwubGVuZ3RoKSA6IHZhbDtcblxuICAgICAgLy9yZW1vdmUgc3VmZml4XG4gICAgICB2YXIgc3VmZml4TGFzdEluZGV4ID0gdmFsLmxhc3RJbmRleE9mKHN1ZmZpeCk7XG4gICAgICB2YWwgPVxuICAgICAgICBzdWZmaXggJiYgc3VmZml4TGFzdEluZGV4ICE9PSAtMSAmJiBzdWZmaXhMYXN0SW5kZXggPT09IHZhbC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICAgICAgPyB2YWwuc3Vic3RyaW5nKDAsIHN1ZmZpeExhc3RJbmRleClcbiAgICAgICAgICA6IHZhbDtcblxuICAgICAgLy9hZGQgbmVnYXRpb24gc2lnbiBiYWNrXG4gICAgICBpZiAoaXNOZWdhdGl2ZSkgeyB2YWwgPSAnLScgKyB2YWw7IH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUucmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcgPSBmdW5jdGlvbiByZW1vdmVQYXR0ZXJuRm9ybWF0dGluZyAodmFsICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgZm9ybWF0QXJyYXkgPSBmb3JtYXQuc3BsaXQoJyMnKS5maWx0ZXIoZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyICE9PSAnJzsgfSk7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgbnVtU3RyID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbG4gPSBmb3JtYXRBcnJheS5sZW5ndGg7IGkgPD0gbG47IGkrKykge1xuICAgICAgdmFyIHBhcnQgPSBmb3JtYXRBcnJheVtpXSB8fCAnJztcblxuICAgICAgLy9pZiBpIGlzIHRoZSBsYXN0IGZyYWdtZW50IHRha2UgdGhlIGluZGV4IG9mIGVuZCBvZiB0aGUgdmFsdWVcbiAgICAgIC8vRm9yIGNhc2UgbGlrZSArMSAoOTExKSA5MTEgOTEgOTEgaGF2aW5nIHBhdHRlcm4gKzEgKCMjIykgIyMjICMjICMjXG4gICAgICB2YXIgaW5kZXggPSBpID09PSBsbiA/IHZhbC5sZW5ndGggOiB2YWwuaW5kZXhPZihwYXJ0LCBzdGFydCk7XG5cbiAgICAgIC8qIGluIGFueSBjYXNlIGlmIHdlIGRvbid0IGZpbmQgdGhlIHBhdHRlcm4gcGFydCBpbiB0aGUgdmFsdWUgYXNzdW1lIHRoZSB2YWwgYXMgbnVtZXJpYyBzdHJpbmdcbiAgICAgIFRoaXMgd2lsbCBiZSBhbHNvIGluIGNhc2UgaWYgdXNlciBoYXMgc3RhcnRlZCB0eXBpbmcsIGluIGFueSBvdGhlciBjYXNlIGl0IHdpbGwgbm90IGJlIC0xXG4gICAgICB1bmxlc3Mgd3JvbmcgcHJvcCB2YWx1ZSBpcyBwcm92aWRlZCAqL1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBudW1TdHIgPSB2YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtU3RyICs9IHZhbC5zdWJzdHJpbmcoc3RhcnQsIGluZGV4KTtcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIHBhcnQubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAobnVtU3RyLm1hdGNoKHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSkpIHx8IFtdKS5qb2luKCcnKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZUZvcm1hdHRpbmcgPSBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciByZW1vdmVGb3JtYXR0aW5nID0gcmVmLnJlbW92ZUZvcm1hdHRpbmc7XG4gICAgaWYgKCF2YWwpIHsgcmV0dXJuIHZhbDsgfVxuXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUHJlZml4QW5kU3VmZml4KHZhbCk7XG4gICAgICB2YWwgPSB0aGlzLmdldEZsb2F0U3RyaW5nKHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsID0gdGhpcy5yZW1vdmVQYXR0ZXJuRm9ybWF0dGluZyh2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbW92ZUZvcm1hdHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vY29uZGl0aW9uIG5lZWQgdG8gYmUgaGFuZGxlZCBpZiBmb3JtYXQgbWV0aG9kIGlzIHByb3ZpZGUsXG4gICAgICB2YWwgPSByZW1vdmVGb3JtYXR0aW5nKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9ICh2YWwubWF0Y2godGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKSkgfHwgW10pLmpvaW4oJycpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9O1xuICAvKiogbWV0aG9kcyB0byByZW1vdmUgZm9ybWF0dHRpbmcgZW5kICoqL1xuXG4gIC8qKiogZm9ybWF0IHNwZWNpZmljIG1ldGhvZHMgc3RhcnQgKioqL1xuICAvKipcbiAgICogRm9ybWF0IHdoZW4gIyBiYXNlZCBzdHJpbmcgaXMgcHJvdmlkZWRcbiAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBTdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgZm9ybWF0dGVkIFZhbHVlXG4gICAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdFdpdGhQYXR0ZXJuID0gZnVuY3Rpb24gZm9ybWF0V2l0aFBhdHRlcm4gKG51bVN0ciAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGhhc2hDb3VudCA9IDA7XG4gICAgdmFyIGZvcm1hdHRlZE51bWJlckFyeSA9IGZvcm1hdC5zcGxpdCgnJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0Lmxlbmd0aDsgaSA8IGxuOyBpKyspIHtcbiAgICAgIGlmIChmb3JtYXRbaV0gPT09ICcjJykge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXJBcnlbaV0gPSBudW1TdHJbaGFzaENvdW50XSB8fCB0aGlzLmdldE1hc2tBdEluZGV4KGhhc2hDb3VudCk7XG4gICAgICAgIGhhc2hDb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyQXJ5LmpvaW4oJycpO1xuICB9O1xuICAvKipcbiAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBzdHJpbmcvZmxvYXRTdHJpbmddIEl0IGFsd2F5cyBoYXZlIGRlY2ltYWxTZXBhcmF0b3IgYXMgLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGZvcm1hdHRlZCBWYWx1ZVxuICAgKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRBc051bWJlciA9IGZ1bmN0aW9uIGZvcm1hdEFzTnVtYmVyIChudW1TdHIgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciB0aG91c2FuZHNHcm91cFN0eWxlID0gcmVmLnRob3VzYW5kc0dyb3VwU3R5bGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmJDEudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgdmFyIGhhc0RlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSB8fCAoZGVjaW1hbFNjYWxlICYmIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgICB2YXIgcmVmJDIgPSBzcGxpdERlY2ltYWwobnVtU3RyLCBhbGxvd05lZ2F0aXZlKTtcbiAgICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZiQyLmJlZm9yZURlY2ltYWw7XG4gICAgdmFyIGFmdGVyRGVjaW1hbCA9IHJlZiQyLmFmdGVyRGVjaW1hbDtcbiAgICB2YXIgYWRkTmVnYXRpb24gPSByZWYkMi5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgIC8vYXBwbHkgZGVjaW1hbCBwcmVjaXNpb24gaWYgaXRzIGRlZmluZWRcbiAgICBpZiAoZGVjaW1hbFNjYWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFmdGVyRGVjaW1hbCA9IGxpbWl0VG9TY2FsZShhZnRlckRlY2ltYWwsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIH1cblxuICAgIGlmICh0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgYmVmb3JlRGVjaW1hbCA9IGFwcGx5VGhvdXNhbmRTZXBhcmF0b3IoYmVmb3JlRGVjaW1hbCwgdGhvdXNhbmRTZXBhcmF0b3IsIHRob3VzYW5kc0dyb3VwU3R5bGUpO1xuICAgIH1cblxuICAgIC8vYWRkIHByZWZpeCBhbmQgc3VmZml4XG4gICAgaWYgKHByZWZpeCkgeyBiZWZvcmVEZWNpbWFsID0gcHJlZml4ICsgYmVmb3JlRGVjaW1hbDsgfVxuICAgIGlmIChzdWZmaXgpIHsgYWZ0ZXJEZWNpbWFsID0gYWZ0ZXJEZWNpbWFsICsgc3VmZml4OyB9XG5cbiAgICAvL3Jlc3RvcmUgbmVnYXRpb24gc2lnblxuICAgIGlmIChhZGROZWdhdGlvbikgeyBiZWZvcmVEZWNpbWFsID0gJy0nICsgYmVmb3JlRGVjaW1hbDsgfVxuXG4gICAgbnVtU3RyID0gYmVmb3JlRGVjaW1hbCArICgoaGFzRGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2VwYXJhdG9yKSB8fCAnJykgKyBhZnRlckRlY2ltYWw7XG5cbiAgICByZXR1cm4gbnVtU3RyO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0TnVtU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0TnVtU3RyaW5nIChudW1TdHIpIHtcbiAgICBpZiAoIG51bVN0ciA9PT0gdm9pZCAwICkgbnVtU3RyICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IHJlZi5hbGxvd0VtcHR5Rm9ybWF0dGluZztcbiAgICB2YXIgY3VzdG9tTnVtZXJhbHMgPSByZWYuY3VzdG9tTnVtZXJhbHM7XG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gbnVtU3RyO1xuXG4gICAgaWYgKGN1c3RvbU51bWVyYWxzICYmIGN1c3RvbU51bWVyYWxzLmxlbmd0aCA9PT0gMTApIHtcbiAgICAgIHZhciBjdXN0b21OdW1lcmFsUmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIGN1c3RvbU51bWVyYWxzLmpvaW4oJycpICsgJ10nLCAnZycpO1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBudW1TdHIucmVwbGFjZShjdXN0b21OdW1lcmFsUmVnZXgsIGZ1bmN0aW9uIChkaWdpdCkgeyByZXR1cm4gY3VzdG9tTnVtZXJhbHMuaW5kZXhPZihkaWdpdCkudG9TdHJpbmcoKTsgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobnVtU3RyID09PSAnJyAmJiAhYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgfSBlbHNlIGlmIChudW1TdHIgPT09ICctJyAmJiAhZm9ybWF0KSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9ICctJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0V2l0aFBhdHRlcm4oZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXQoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0QXNOdW1iZXIoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGZvcm1hdFZhbHVlUHJvcCAoZGVmYXVsdFZhbHVlICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gcmVmLmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgIHZhciByZWYkMSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHZhbHVlID0gcmVmJDEudmFsdWU7XG4gICAgdmFyIGlzTnVtZXJpY1N0cmluZyA9IHJlZiQxLmlzTnVtZXJpY1N0cmluZztcblxuICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB1c2UgZGVmYXVsdFZhbHVlIGluc3RlYWRcbiAgICB2YWx1ZSA9IGlzTmlsKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuXG4gICAgdmFyIGlzTm9uTnVtZXJpY0ZhbHN5ID0gIXZhbHVlICYmIHZhbHVlICE9PSAwO1xuXG4gICAgaWYgKGlzTm9uTnVtZXJpY0ZhbHN5ICYmIGFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIGlmIHZhbHVlIGlzIG5vdCBkZWZpbmVkIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoaXNOb25OdW1lcmljRmFsc3kgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSB7IHJldHVybiAnJzsgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdG9OdW1lcmljU3RyaW5nKHZhbHVlKTtcbiAgICAgIGlzTnVtZXJpY1N0cmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9jaGFuZ2UgaW5maW5pdHkgdmFsdWUgdG8gZW1wdHkgc3RyaW5nXG4gICAgaWYgKHZhbHVlID09PSAnSW5maW5pdHknICYmIGlzTnVtZXJpY1N0cmluZykge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvL3JvdW5kIHRoZSBudW1iZXIgYmFzZWQgb24gZGVjaW1hbFNjYWxlXG4gICAgLy9mb3JtYXQgb25seSBpZiBub24gZm9ybWF0dGVkIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAgaWYgKGlzTnVtZXJpY1N0cmluZyAmJiAhZm9ybWF0ICYmIHR5cGVvZiBkZWNpbWFsU2NhbGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHJvdW5kVG9QcmVjaXNpb24odmFsdWUsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGlzTnVtZXJpY1N0cmluZyA/IHRoaXMuZm9ybWF0TnVtU3RyaW5nKHZhbHVlKSA6IHRoaXMuZm9ybWF0SW5wdXQodmFsdWUpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0TmVnYXRpb24gPSBmdW5jdGlvbiBmb3JtYXROZWdhdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciBuZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pJyk7XG4gICAgdmFyIGRvdWJsZU5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSkoLikqKC0pJyk7XG5cbiAgICAvLyBDaGVjayBudW1iZXIgaGFzICctJyB2YWx1ZVxuICAgIHZhciBoYXNOZWdhdGlvbiA9IG5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7XG5cbiAgICAvLyBDaGVjayBudW1iZXIgaGFzIDIgb3IgbW9yZSAnLScgdmFsdWVzXG4gICAgdmFyIHJlbW92ZU5lZ2F0aW9uID0gZG91YmxlTmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgIC8vcmVtb3ZlIG5lZ2F0aW9uXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8tL2csICcnKTtcblxuICAgIGlmIChoYXNOZWdhdGlvbiAmJiAhcmVtb3ZlTmVnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgdmFsdWUgPSAnLScgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRJbnB1dCA9IGZ1bmN0aW9uIGZvcm1hdElucHV0ICh2YWx1ZSkge1xuICAgIGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuXG4gICAgLy9mb3JtYXQgbmVnYXRpb24gb25seSBpZiB3ZSBhcmUgZm9ybWF0dGluZyBhcyBudW1iZXJcbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWx1ZSk7XG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0TmVnYXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIC8vcmVtb3ZlIGZvcm1hdHRpbmcgZnJvbSBudW1iZXJcbiAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpO1xuICB9O1xuXG4gIC8qKiogZm9ybWF0IHNwZWNpZmljIG1ldGhvZHMgZW5kICoqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5pc0NoYXJhY3RlckFGb3JtYXQgPSBmdW5jdGlvbiBpc0NoYXJhY3RlckFGb3JtYXQgKGNhcmV0UG9zICAgICAgICAsIHZhbHVlICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgLy9jaGVjayB3aXRoaW4gZm9ybWF0IHBhdHRlcm5cbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycgJiYgZm9ybWF0W2NhcmV0UG9zXSAhPT0gJyMnKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAvL2NoZWNrIGluIG51bWJlciBmb3JtYXRcbiAgICBpZiAoXG4gICAgICAhZm9ybWF0ICYmXG4gICAgICAoY2FyZXRQb3MgPCBwcmVmaXgubGVuZ3RoIHx8XG4gICAgICAgIGNhcmV0UG9zID49IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGggfHxcbiAgICAgICAgKGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZSAmJiB2YWx1ZVtjYXJldFBvc10gPT09IGRlY2ltYWxTZXBhcmF0b3IpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2hlY2sgaWYgYW55IGZvcm1hdHRpbmcgZ290IHJlbW92ZWQgYnkgdGhlIGRlbGV0ZSBvciBiYWNrc3BhY2UgYW5kIHJlc2V0IHRoZSB2YWx1ZVxuICAgKiBJdCB3aWxsIGFsc28gd29yayBhcyBmYWxsYmFjayBpZiBhbmRyb2lkIGNob21lIGtleURvd24gaGFuZGxlciBkb2VzIG5vdCB3b3JrXG4gICAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb3JyZWN0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGNvcnJlY3RJbnB1dFZhbHVlIChjYXJldFBvcyAgICAgICAgLCBsYXN0VmFsdWUgICAgICAgICwgdmFsdWUgICAgICAgICkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmJDEuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgbGFzdE51bVN0ciA9IHRoaXMuc3RhdGUubnVtQXNTdHJpbmcgfHwgJyc7XG4gICAgdmFyIHJlZiQyID0gdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dDtcbiAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSByZWYkMi5zZWxlY3Rpb25TdGFydDtcbiAgICB2YXIgc2VsZWN0aW9uRW5kID0gcmVmJDIuc2VsZWN0aW9uRW5kO1xuICAgIHZhciByZWYkMyA9IGZpbmRDaGFuZ2VkSW5kZXgobGFzdFZhbHVlLCB2YWx1ZSk7XG4gICAgdmFyIHN0YXJ0ID0gcmVmJDMuc3RhcnQ7XG4gICAgdmFyIGVuZCA9IHJlZiQzLmVuZDtcblxuICAgIC8qKiBDaGVjayBmb3IgYW55IGFsbG93ZWQgZGVjaW1hbCBzZXBhcmF0b3IgaXMgYWRkZWQgaW4gdGhlIG51bWVyaWMgZm9ybWF0IGFuZCByZXBsYWNlIGl0IHdpdGggZGVjaW1hbCBzZXBhcmF0b3IgKi9cbiAgICBpZiAoXG4gICAgICAhZm9ybWF0ICYmXG4gICAgICBzdGFydCA9PT0gZW5kICYmXG4gICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMuaW5kZXhPZih2YWx1ZVtzZWxlY3Rpb25TdGFydF0pICE9PSAtMVxuICAgICkge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSA9PT0gMCA/ICcnIDogZGVjaW1hbFNlcGFyYXRvcjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb25TdGFydCkgKyBzZXBhcmF0b3IgKyB2YWx1ZS5zdWJzdHIoc2VsZWN0aW9uU3RhcnQgKyAxLCB2YWx1ZS5sZW5ndGgpXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBsZWZ0Qm91bmQgPSAhIWZvcm1hdCA/IDAgOiBwcmVmaXgubGVuZ3RoO1xuICAgIHZhciByaWdodEJvdW5kID0gbGFzdFZhbHVlLmxlbmd0aCAtICghIWZvcm1hdCA/IDAgOiBzdWZmaXgubGVuZ3RoKTtcblxuICAgIGlmIChcbiAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNvbWV0aGluZyBnb3QgYWRkZWRcbiAgICAgIHZhbHVlLmxlbmd0aCA+IGxhc3RWYWx1ZS5sZW5ndGggfHxcbiAgICAgIC8vIG9yIGlmIHRoZSBuZXcgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgICAhdmFsdWUubGVuZ3RoIHx8XG4gICAgICAvLyBvciBpZiBub3RoaW5nIGhhcyBjaGFuZ2VkLCBpbiB3aGljaCBjYXNlIHN0YXJ0IHdpbGwgYmUgc2FtZSBhcyBlbmRcbiAgICAgIHN0YXJ0ID09PSBlbmQgfHxcbiAgICAgIC8vIG9yIGluIGNhc2UgaWYgd2hvbGUgaW5wdXQgaXMgc2VsZWN0ZWQgYW5kIG5ldyB2YWx1ZSBpcyB0eXBlZFxuICAgICAgKHNlbGVjdGlvblN0YXJ0ID09PSAwICYmIHNlbGVjdGlvbkVuZCA9PT0gbGFzdFZhbHVlLmxlbmd0aCkgfHxcbiAgICAgIC8vIG9yIGluIGNhc2UgaWYgdGhlIHdob2xlIGNvbnRlbnQgaXMgcmVwbGFjZWQgYnkgYnJvd3NlciwgZXhhbXBsZSAoYXV0b2NvbXBsZXRlKVxuICAgICAgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdFZhbHVlLmxlbmd0aCkgfHxcbiAgICAgIC8vIG9yIGlmIGNoYXJjdGVycyBiZXR3ZWVuIHByZWZpeCBhbmQgc3VmZml4IGlzIHNlbGVjdGVkLlxuICAgICAgLy8gRm9yIG51bWVyaWMgaW5wdXRzIHdlIGFwcGx5IHRoZSBmb3JtYXQgc28sIHByZWZpeCBhbmQgc3VmZml4IGNhbiBiZSBpZ25vcmVkXG4gICAgICAoc2VsZWN0aW9uU3RhcnQgPT09IGxlZnRCb3VuZCAmJiBzZWxlY3Rpb25FbmQgPT09IHJpZ2h0Qm91bmQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgZGVsZXRlZCBwb3J0aW9uIGhhcyBhIGNoYXJhY3RlciB0aGF0IGlzIHBhcnQgb2YgYSBmb3JtYXRcbiAgICB2YXIgZGVsZXRlZFZhbHVlcyA9IGxhc3RWYWx1ZS5zdWJzdHIoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YXIgZm9ybWF0R290RGVsZXRlZCA9ICEhW10uY29uY2F0KCBkZWxldGVkVmFsdWVzICkuZmluZChmdW5jdGlvbiAoZGVsZXRlZFZhbCwgaWR4KSB7IHJldHVybiB0aGlzJDEuaXNDaGFyYWN0ZXJBRm9ybWF0KGlkeCArIHN0YXJ0LCBsYXN0VmFsdWUpOyB9XG4gICAgKTtcblxuICAgIC8vIGlmIGl0IGhhcywgb25seSByZW1vdmUgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgZm9ybWF0XG4gICAgaWYgKGZvcm1hdEdvdERlbGV0ZWQpIHtcbiAgICAgIHZhciBkZWxldGVkVmFsdWVQb3J0aW9uID0gbGFzdFZhbHVlLnN1YnN0cihzdGFydCk7XG4gICAgICB2YXIgcmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnMgPSB7fTtcbiAgICAgIHZhciByZXNvbHZlZFBvcnRpb24gPSBbXTtcbiAgICAgIFtdLmNvbmNhdCggZGVsZXRlZFZhbHVlUG9ydGlvbiApLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRQb3J0aW9uLCBpZHgpIHtcbiAgICAgICAgaWYgKHRoaXMkMS5pc0NoYXJhY3RlckFGb3JtYXQoaWR4ICsgc3RhcnQsIGxhc3RWYWx1ZSkpIHtcbiAgICAgICAgICByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdID0gY3VycmVudFBvcnRpb247XG4gICAgICAgIH0gZWxzZSBpZiAoaWR4ID4gZGVsZXRlZFZhbHVlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVzb2x2ZWRQb3J0aW9uLnB1c2goY3VycmVudFBvcnRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMocmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnMpLmZvckVhY2goZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICBpZiAocmVzb2x2ZWRQb3J0aW9uLmxlbmd0aCA+IGlkeCkge1xuICAgICAgICAgIHJlc29sdmVkUG9ydGlvbi5zcGxpY2UoaWR4LCAwLCByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24ucHVzaChyZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhbHVlID0gbGFzdFZhbHVlLnN1YnN0cigwLCBzdGFydCkgKyByZXNvbHZlZFBvcnRpb24uam9pbignJyk7XG4gICAgfVxuXG4gICAgLy9mb3IgbnVtYmVycyBjaGVjayBpZiBiZWZvcmVEZWNpbWFsIGdvdCBkZWxldGVkIGFuZCB0aGVyZSBpcyBub3RoaW5nIGFmdGVyIGRlY2ltYWwsXG4gICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhciBudW1lcmljU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICAgIHZhciByZWYkNCA9IHNwbGl0RGVjaW1hbChcbiAgICAgICAgbnVtZXJpY1N0cmluZyxcbiAgICAgICAgYWxsb3dOZWdhdGl2ZVxuICAgICAgKTtcbiAgICAgIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmJDQuYmVmb3JlRGVjaW1hbDtcbiAgICAgIHZhciBhZnRlckRlY2ltYWwgPSByZWYkNC5hZnRlckRlY2ltYWw7XG4gICAgICB2YXIgYWRkTmVnYXRpb24gPSByZWYkNC5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgICAgLy9jbGVhciBvbmx5IGlmIHNvbWV0aGluZyBnb3QgZGVsZXRlZFxuICAgICAgdmFyIGlzQmVmb3JlRGVjaW1hbFBvaW50ID0gY2FyZXRQb3MgPCB2YWx1ZS5pbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpICsgMTtcbiAgICAgIGlmIChcbiAgICAgICAgbnVtZXJpY1N0cmluZy5sZW5ndGggPCBsYXN0TnVtU3RyLmxlbmd0aCAmJlxuICAgICAgICBpc0JlZm9yZURlY2ltYWxQb2ludCAmJlxuICAgICAgICBiZWZvcmVEZWNpbWFsID09PSAnJyAmJlxuICAgICAgICAhcGFyc2VGbG9hdChhZnRlckRlY2ltYWwpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFkZE5lZ2F0aW9uID8gJy0nIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKiBVcGRhdGUgdmFsdWUgYW5kIGNhcmV0IHBvc2l0aW9uICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAocGFyYW1zICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICApIHtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBwYXJhbXMuZm9ybWF0dGVkVmFsdWU7XG4gICAgdmFyIGlucHV0ID0gcGFyYW1zLmlucHV0O1xuICAgIHZhciBzZXRDYXJldFBvc2l0aW9uID0gcGFyYW1zLnNldENhcmV0UG9zaXRpb247IGlmICggc2V0Q2FyZXRQb3NpdGlvbiA9PT0gdm9pZCAwICkgc2V0Q2FyZXRQb3NpdGlvbiA9IHRydWU7XG4gICAgdmFyIHNvdXJjZSA9IHBhcmFtcy5zb3VyY2U7XG4gICAgdmFyIGV2ZW50ID0gcGFyYW1zLmV2ZW50O1xuICAgIHZhciBudW1Bc1N0cmluZyA9IHBhcmFtcy5udW1Bc1N0cmluZztcbiAgICB2YXIgY2FyZXRQb3MgPSBwYXJhbXMuY2FyZXRQb3M7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uVmFsdWVDaGFuZ2UgPSByZWYub25WYWx1ZUNoYW5nZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBsYXN0VmFsdWUgPSByZWYkMS52YWx1ZTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy9jYWxjdWxhdGUgY2FyZXQgcG9zaXRpb24gaWYgbm90IGRlZmluZWRcbiAgICAgIGlmIChjYXJldFBvcyA9PT0gdW5kZWZpbmVkICYmIHNldENhcmV0UG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZSB8fCBpbnB1dC52YWx1ZTtcblxuICAgICAgICB2YXIgY3VycmVudENhcmV0UG9zaXRpb24gPSBnZXRDdXJyZW50Q2FyZXRQb3NpdGlvbihpbnB1dCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldCB0aGUgdmFsdWUgaW1wZXJhdGl2ZWx5LCB0aGlzIGlzIHJlcXVpcmVkIGZvciBJRSBmaXhcbiAgICAgICAgICogVGhpcyBpcyBhbHNvIHJlcXVpcmVkIGFzIGlmIG5ldyBjYXJldCBwb3NpdGlvbiBpcyBiZXlvbmQgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgICAgKiBDYXJldCBwb3NpdGlvbiB3aWxsIG5vdCBiZSBzZXQgY29ycmVjdGx5XG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBjYXJldCBwb3NpdGlvblxuICAgICAgICBjYXJldFBvcyA9IHRoaXMuZ2V0Q2FyZXRQb3NpdGlvbihpbnB1dFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSwgY3VycmVudENhcmV0UG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHNldCB0aGUgdmFsdWUgaW1wZXJhdGl2ZWx5LCBhcyB3ZSBzZXQgdGhlIGNhcmV0IHBvc2l0aW9uIGFzIHdlbGwgaW1wZXJhdGl2ZWx5LlxuICAgICAgICogVGhpcyBpcyB0byBrZWVwIHZhbHVlIGFuZCBjYXJldCBwb3NpdGlvbiBpbiBzeW5jXG4gICAgICAgKi9cbiAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG5cbiAgICAgIC8vc2V0IGNhcmV0IHBvc2l0aW9uLCBhbmQgdmFsdWUgaW1wZXJhdGl2ZWx5IHdoZW4gZWxlbWVudCBpcyBwcm92aWRlZFxuICAgICAgaWYgKHNldENhcmV0UG9zaXRpb24pIHtcbiAgICAgICAgLy9zZXQgY2FyZXQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihpbnB1dCwgY2FyZXRQb3MsIGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NhbGN1bGF0ZSBudW1lcmljIHN0cmluZyBpZiBub3QgcGFzc2VkXG4gICAgaWYgKG51bUFzU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvL3VwZGF0ZSBzdGF0ZSBpZiB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgaWYgKGZvcm1hdHRlZFZhbHVlICE9PSBsYXN0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyB9KTtcblxuICAgICAgLy8gdHJpZ2dlciBvblZhbHVlQ2hhbmdlIHN5bmNocm9ub3VzbHksIHNvIHBhcmVudCBpcyB1cGRhdGVkIGFsb25nIHdpdGggdGhlIG51bWJlciBmb3JtYXQuIEZpeCBmb3IgIzI3NywgIzI4N1xuICAgICAgb25WYWx1ZUNoYW5nZSh0aGlzLmdldFZhbHVlT2JqZWN0KGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZyksIHsgZXZlbnQ6IGV2ZW50LCBzb3VyY2U6IHNvdXJjZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlIChlICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBlbC52YWx1ZTtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3RhdGUgPSByZWYuc3RhdGU7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBpc0FsbG93ZWQgPSBwcm9wcy5pc0FsbG93ZWQ7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHN0YXRlLnZhbHVlIHx8ICcnO1xuXG4gICAgdmFyIGN1cnJlbnRDYXJldFBvc2l0aW9uID0gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oZWwpO1xuXG4gICAgaW5wdXRWYWx1ZSA9IHRoaXMuY29ycmVjdElucHV0VmFsdWUoY3VycmVudENhcmV0UG9zaXRpb24sIGxhc3RWYWx1ZSwgaW5wdXRWYWx1ZSk7XG5cbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdElucHV0KGlucHV0VmFsdWUpIHx8ICcnO1xuICAgIHZhciBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG5cbiAgICB2YXIgdmFsdWVPYmogPSB0aGlzLmdldFZhbHVlT2JqZWN0KGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZyk7XG4gICAgdmFyIGlzQ2hhbmdlQWxsb3dlZCA9IGlzQWxsb3dlZCh2YWx1ZU9iaik7XG5cbiAgICBpZiAoIWlzQ2hhbmdlQWxsb3dlZCkge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBsYXN0VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcsXG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgaW5wdXQ6IGVsLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBzb3VyY2U6ICdldmVudCcsXG4gICAgfSk7XG5cbiAgICBpZiAoaXNDaGFuZ2VBbGxvd2VkKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5vbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIgKGUgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBmb3JtYXQgPSBwcm9wcy5mb3JtYXQ7XG4gICAgdmFyIG9uQmx1ciA9IHByb3BzLm9uQmx1cjtcbiAgICB2YXIgYWxsb3dMZWFkaW5nWmVyb3MgPSBwcm9wcy5hbGxvd0xlYWRpbmdaZXJvcztcbiAgICB2YXIgbnVtQXNTdHJpbmcgPSBzdGF0ZS5udW1Bc1N0cmluZztcbiAgICB2YXIgbGFzdFZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdGhpcy5mb2N1c2VkRWxtID0gbnVsbDtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FyZXRQb3NpdGlvblRpbWVvdXQpO1xuXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHRoZSBudW1Bc1N0cmluZyBpcyBub3QgYSB2YWxpZCBudW1iZXIgcmVzZXQgaXQgdG8gZW1wdHlcbiAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KG51bUFzU3RyaW5nKSkpIHtcbiAgICAgICAgbnVtQXNTdHJpbmcgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCFhbGxvd0xlYWRpbmdaZXJvcykge1xuICAgICAgICBudW1Bc1N0cmluZyA9IGZpeExlYWRpbmdaZXJvKG51bUFzU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXROdW1TdHJpbmcobnVtQXNTdHJpbmcpO1xuXG4gICAgICAvL2NoYW5nZSB0aGUgc3RhdGVcbiAgICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgIC8vIHRoZSBldmVudCBuZWVkcyB0byBiZSBwZXJzaXN0ZWQgYmVjYXVzZSBpdHMgcHJvcGVydGllcyBjYW4gYmUgYWNjZXNzZWQgaW4gYW4gYXN5bmNocm9ub3VzIHdheVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nLFxuICAgICAgICAgIGlucHV0OiBlLnRhcmdldCxcbiAgICAgICAgICBzZXRDYXJldFBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICBzb3VyY2U6ICdldmVudCcsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkJsdXIoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgb25CbHVyKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25LZXlEb3duID0gZnVuY3Rpb24gb25LZXlEb3duIChlICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICB2YXIga2V5ID0gZS5rZXk7XG4gICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICB2YXIgdmFsdWUgPSBlbC52YWx1ZTsgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgPSAnJztcbiAgICB2YXIgZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgb25LZXlEb3duID0gcmVmLm9uS2V5RG93bjtcbiAgICB2YXIgaWdub3JlRGVjaW1hbFNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkICYmIGZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgoZmFsc2UsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IpO1xuICAgIHZhciBuZWdhdGl2ZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnLScpO1xuICAgIHZhciBpc1BhdHRlcm5Gb3JtYXQgPSB0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJztcblxuICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICBzZWxlY3Rpb25TdGFydDogc2VsZWN0aW9uU3RhcnQsXG4gICAgICBzZWxlY3Rpb25FbmQ6IHNlbGVjdGlvbkVuZCxcbiAgICB9O1xuXG4gICAgLy9IYW5kbGUgYmFja3NwYWNlIGFuZCBkZWxldGUgYWdhaW5zdCBub24gbnVtZXJpY2FsL2RlY2ltYWwgY2hhcmFjdGVycyBvciBhcnJvdyBrZXlzXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8vaWYgZXhwZWN0ZWRDYXJldFBvc2l0aW9uIGlzIG5vdCBzZXQgaXQgbWVhbnMgd2UgZG9uJ3Qgd2FudCB0byBIYW5kbGUga2V5RG93blxuICAgIC8vYWxzbyBpZiBtdWx0aXBsZSBjaGFyYWN0ZXJzIGFyZSBzZWxlY3RlZCBkb24ndCBoYW5kbGVcbiAgICBpZiAoZXhwZWN0ZWRDYXJldFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgc2VsZWN0aW9uU3RhcnQgIT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXdDYXJldFBvc2l0aW9uID0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciBsZWZ0Qm91bmQgPSBpc1BhdHRlcm5Gb3JtYXQgPyBmb3JtYXQuaW5kZXhPZignIycpIDogcHJlZml4Lmxlbmd0aDtcbiAgICB2YXIgcmlnaHRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5sYXN0SW5kZXhPZignIycpICsgMSA6IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGtleSA9PT0gJ0Fycm93TGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5ID09PSAnRGVsZXRlJyAmJlxuICAgICAgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkgJiZcbiAgICAgICFuZWdhdGl2ZVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSlcbiAgICApIHtcbiAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA8IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgLyogTk9URTogVGhpcyBpcyBzcGVjaWFsIGNhc2Ugd2hlbiBiYWNrc3BhY2UgaXMgcHJlc3NlZCBvbiBhXG4gICAgICBuZWdhdGl2ZSB2YWx1ZSB3aGlsZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIGFmdGVyIHByZWZpeC4gV2UgY2FuJ3QgaGFuZGxlIGl0IG9uIG9uQ2hhbmdlIGJlY2F1c2VcbiAgICAgIHdlIHdpbGwgbm90IGhhdmUgYW55IGluZm9ybWF0aW9uIG9mIGtleVByZXNzXG4gICAgICAqL1xuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IGxlZnRCb3VuZCArIDEgJiYgdmFsdWVbMF0gPT09ICctJyAmJiB0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBjYXJldFBvczogbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICBpbnB1dDogZWwsXG4gICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgc291cmNlOiAnZXZlbnQnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIW5lZ2F0aXZlUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICB3aGlsZSAoIW51bVJlZ2V4LnRlc3QodmFsdWVbbmV3Q2FyZXRQb3NpdGlvbiAtIDFdKSAmJiBuZXdDYXJldFBvc2l0aW9uID4gbGVmdEJvdW5kKSB7XG4gICAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbi0tO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBuZXdDYXJldFBvc2l0aW9uLCAnbGVmdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG5ld0NhcmV0UG9zaXRpb24gIT09IGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiB8fFxuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uIDwgbGVmdEJvdW5kIHx8XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPiByaWdodEJvdW5kXG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBuZXdDYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyogTk9URTogdGhpcyBpcyBqdXN0IHJlcXVpcmVkIGZvciB1bml0IHRlc3QgYXMgd2UgbmVlZCB0byBnZXQgdGhlIG5ld0NhcmV0UG9zaXRpb24sXG4gICAgICAgICAgICBSZW1vdmUgdGhpcyB3aGVuIHlvdSBmaW5kIGRpZmZlcmVudCBzb2x1dGlvbiAqL1xuICAgIGlmIChlLmlzVW5pdFRlc3RSdW4pIHtcbiAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZSk7XG4gIH07XG5cbiAgLyoqIHJlcXVpcmVkIHRvIGhhbmRsZSB0aGUgY2FyZXQgcG9zaXRpb24gd2hlbiBjbGljayBhbnl3aGVyZSB3aXRoaW4gdGhlIGlucHV0ICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLm9uTW91c2VVcCA9IGZ1bmN0aW9uIG9uTW91c2VVcCAoZSAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIGVsID0gZS50YXJnZXQ7XG5cbiAgICAvKipcbiAgICAgKiBOT1RFOiB3ZSBoYXZlIHRvIGdpdmUgZGVmYXVsdCB2YWx1ZSBmb3IgdmFsdWUgYXMgaW4gY2FzZSB3aGVuIGN1c3RvbSBpbnB1dCBpcyBwcm92aWRlZFxuICAgICAqIHZhbHVlIGNhbiBjb21lIGFzIHVuZGVmaW5lZCB3aGVuIG5vdGhpbmcgaXMgcHJvdmlkZWQgb24gdmFsdWUgcHJvcC5cbiAgICAgKi9cbiAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydDtcbiAgICB2YXIgc2VsZWN0aW9uRW5kID0gZWwuc2VsZWN0aW9uRW5kO1xuICAgIHZhciB2YWx1ZSA9IGVsLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9ICcnO1xuXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgIHZhciBjYXJldFBvc2l0aW9uID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgaWYgKGNhcmV0UG9zaXRpb24gIT09IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzIChlICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICAvLyBXb3JrYXJvdW5kIENocm9tZSBhbmQgU2FmYXJpIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NzkzMjhcbiAgICAvLyAob25Gb2N1cyBldmVudCB0YXJnZXQgc2VsZWN0aW9uU3RhcnQgaXMgYWx3YXlzIDAgYmVmb3JlIHNldFRpbWVvdXQpXG4gICAgZS5wZXJzaXN0KCk7XG5cbiAgICB0aGlzLmZvY3VzZWRFbG0gPSBlLnRhcmdldDtcbiAgICB0aGlzLmZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gICAgICB2YXIgdmFsdWUgPSBlbC52YWx1ZTsgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgPSAnJztcblxuICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSB0aGlzJDEuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcblxuICAgICAgLy9zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbiBvbmx5IHdoZW4gZXZlcnl0aGluZyBpcyBub3Qgc2VsZWN0ZWQgb24gZm9jdXMgKHdoaWxlIHRhYmJpbmcgaW50byB0aGUgZmllbGQpXG4gICAgICBpZiAoXG4gICAgICAgIGNhcmV0UG9zaXRpb24gIT09IHNlbGVjdGlvblN0YXJ0ICYmXG4gICAgICAgICEoc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uRW5kID09PSB2YWx1ZS5sZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgdGhpcyQxLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMkMS5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBkaXNwbGF5VHlwZSA9IHJlZi5kaXNwbGF5VHlwZTtcbiAgICB2YXIgY3VzdG9tSW5wdXQgPSByZWYuY3VzdG9tSW5wdXQ7XG4gICAgdmFyIHJlbmRlclRleHQgPSByZWYucmVuZGVyVGV4dDtcbiAgICB2YXIgZ2V0SW5wdXRSZWYgPSByZWYuZ2V0SW5wdXRSZWY7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmLnRob3VzYW5kU2VwYXJhdG9yO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IHJlZi5hbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM7XG4gICAgdmFyIHRob3VzYW5kc0dyb3VwU3R5bGUgPSByZWYudGhvdXNhbmRzR3JvdXBTdHlsZTtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIHJlbW92ZUZvcm1hdHRpbmcgPSByZWYucmVtb3ZlRm9ybWF0dGluZztcbiAgICB2YXIgbWFzayA9IHJlZi5tYXNrO1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSByZWYuZGVmYXVsdFZhbHVlO1xuICAgIHZhciBpc051bWVyaWNTdHJpbmcgPSByZWYuaXNOdW1lcmljU3RyaW5nO1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gcmVmLmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgIHZhciBhbGxvd0xlYWRpbmdaZXJvcyA9IHJlZi5hbGxvd0xlYWRpbmdaZXJvcztcbiAgICB2YXIgb25WYWx1ZUNoYW5nZSA9IHJlZi5vblZhbHVlQ2hhbmdlO1xuICAgIHZhciBpc0FsbG93ZWQgPSByZWYuaXNBbGxvd2VkO1xuICAgIHZhciBjdXN0b21OdW1lcmFscyA9IHJlZi5jdXN0b21OdW1lcmFscztcbiAgICB2YXIgb25DaGFuZ2UgPSByZWYub25DaGFuZ2U7XG4gICAgdmFyIG9uS2V5RG93biA9IHJlZi5vbktleURvd247XG4gICAgdmFyIG9uTW91c2VVcCA9IHJlZi5vbk1vdXNlVXA7XG4gICAgdmFyIG9uRm9jdXMgPSByZWYub25Gb2N1cztcbiAgICB2YXIgb25CbHVyID0gcmVmLm9uQmx1cjtcbiAgICB2YXIgcHJvcFZhbHVlID0gcmVmLnZhbHVlO1xuICAgIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoIHJlZiwgW1widHlwZVwiLCBcImRpc3BsYXlUeXBlXCIsIFwiY3VzdG9tSW5wdXRcIiwgXCJyZW5kZXJUZXh0XCIsIFwiZ2V0SW5wdXRSZWZcIiwgXCJmb3JtYXRcIiwgXCJ0aG91c2FuZFNlcGFyYXRvclwiLCBcImRlY2ltYWxTZXBhcmF0b3JcIiwgXCJhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnNcIiwgXCJ0aG91c2FuZHNHcm91cFN0eWxlXCIsIFwiZGVjaW1hbFNjYWxlXCIsIFwiZml4ZWREZWNpbWFsU2NhbGVcIiwgXCJwcmVmaXhcIiwgXCJzdWZmaXhcIiwgXCJyZW1vdmVGb3JtYXR0aW5nXCIsIFwibWFza1wiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImlzTnVtZXJpY1N0cmluZ1wiLCBcImFsbG93TmVnYXRpdmVcIiwgXCJhbGxvd0VtcHR5Rm9ybWF0dGluZ1wiLCBcImFsbG93TGVhZGluZ1plcm9zXCIsIFwib25WYWx1ZUNoYW5nZVwiLCBcImlzQWxsb3dlZFwiLCBcImN1c3RvbU51bWVyYWxzXCIsIFwib25DaGFuZ2VcIiwgXCJvbktleURvd25cIiwgXCJvbk1vdXNlVXBcIiwgXCJvbkZvY3VzXCIsIFwib25CbHVyXCIsIFwidmFsdWVcIl0gKTtcbiAgICB2YXIgb3RoZXJQcm9wcyA9IHJlc3Q7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgdmFsdWUgPSByZWYkMS52YWx1ZTtcbiAgICB2YXIgbW91bnRlZCA9IHJlZiQxLm1vdW50ZWQ7XG5cbiAgICAvLyBhZGQgaW5wdXQgbW9kZSBvbiBlbGVtZW50IGJhc2VkIG9uIGZvcm1hdCBwcm9wIGFuZCBkZXZpY2Ugb25jZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICB2YXIgaW5wdXRNb2RlID0gbW91bnRlZCAmJiBhZGRJbnB1dE1vZGUoZm9ybWF0KSA/ICdudW1lcmljJyA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBpbnB1dFByb3BzID0gT2JqZWN0LmFzc2lnbih7IGlucHV0TW9kZTogaW5wdXRNb2RlIH0sIG90aGVyUHJvcHMsIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICB9KTtcblxuICAgIGlmIChkaXNwbGF5VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICByZXR1cm4gcmVuZGVyVGV4dCA/IChcbiAgICAgICAgcmVuZGVyVGV4dCh2YWx1ZSwgb3RoZXJQcm9wcykgfHwgbnVsbFxuICAgICAgKSA6IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3NwYW4nLCBPYmplY3QuYXNzaWduKHt9LCBvdGhlclByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSksXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGN1c3RvbUlucHV0KSB7XG4gICAgICB2YXIgQ3VzdG9tSW5wdXQgPSBjdXN0b21JbnB1dDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBDdXN0b21JbnB1dCwgT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywgeyByZWY6IGdldElucHV0UmVmIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggJ2lucHV0JywgT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywgeyByZWY6IGdldElucHV0UmVmIH0pKTtcbiAgfTtcblxuICByZXR1cm4gTnVtYmVyRm9ybWF0O1xufShSZWFjdC5Db21wb25lbnQpKTtcblxuTnVtYmVyRm9ybWF0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRm9ybWF0O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJOdW1iZXJGb3JtYXQiLCJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJ0aXRsZSIsInRyZWF0bWVuVHlwZSIsInByaWNlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3MiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UmVjb21tZW5kSGlzdG9yeSIsInRvYXN0IiwiUmVjY29tZW5kYXRpb25IaXN0b3J5IiwicmVjb21tZW5kIiwic2V0UmVjb21tZWQiLCJnZXRSZWNvbW1lbmRhdGlvbkFQSSIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJyZWNvbW1lbmRzIiwiaGlzdG9yeVRyZWF0bWVudCIsInRyZWF0bWVudFR5cGUiLCJ0b3RhbCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=