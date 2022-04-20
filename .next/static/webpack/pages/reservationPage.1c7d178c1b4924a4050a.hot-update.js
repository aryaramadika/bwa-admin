"use strict";
self["webpackHotUpdate_N_E"]("pages/reservationPage",{

/***/ "./components/molecules/PriceDetail/index.tsx":
/*!****************************************************!*\
  !*** ./components/molecules/PriceDetail/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PriceDetail; }
/* harmony export */ });
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\molecules\\PriceDetail\\index.tsx";


function PriceDetail(props) {
  var treatmenType = props.treatmenType,
      price = props.price,
      id = props.id;
  console.log(treatmenType, price, id);
  return (
    /*#__PURE__*/
    // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
    //         <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Price Information</p>
    //         {/* <div className="row justify-content-between">
    //             <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
    //                 >
    //                 <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
    //                 <div className="detail-card">
    //                     <div className="d-flex justify-content-between">
    //                         <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{treatmenType}  </span>
    //                         </p>
    //                         <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
    //                             xmlns="http://www.w3.org/2000/svg">
    //                             <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
    //                             <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
    //                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                     <p className="text-lg color-palette-1 m-0">{price}</p>
    //                 </div>
    //             </label>
    //         </div> */}
    //     <div className="d-sm-block d-flex flex-column w-100">
    //         <a href="./" type="submit"
    //             className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Back to Homepage</a>
    //     </div>
    // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
    // <div className="row justify-content-between">
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
      className: "col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: "d-none",
        type: "radio",
        id: "topup1",
        name: "topup",
        value: "topup1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "detail-card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-3xl color-palette-1 m-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "fw-medium",
              children: [treatmenType, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 69
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
            id: "icon-check",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
              cx: "10",
              cy: "10",
              r: "10",
              fill: "#CDF1FF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
              d: "M5.83301 10L8.46459 12.5L14.1663 7.5",
              stroke: "#00BAFF",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "text-lg color-palette-1 m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_0__.default, {
            value: price,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this) // <div className="col-lg-4 col-sm-6">
    // </div>
    //     </div>
    // </div>

  );
}
_c = PriceDetail;

var _c;

$RefreshReg$(_c, "PriceDetail");

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

/***/ "./components/organisms/ReservationDetail/index.tsx":
/*!**********************************************************!*\
  !*** ./components/organisms/ReservationDetail/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReservationDetail; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/PriceDetail */ "./components/molecules/PriceDetail/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\ReservationDetail\\index.tsx",
    _s = $RefreshSig$();







function ReservationDetail() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      treatment = _useState4[0],
      setTreatment = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var className = {
    label: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-label text-lg fw-medium color-palette-1 mb-10')
  }; // const onSubmit = () => {
  //     const userForm = {
  //         email,
  //         name, 
  //         password,
  //         treatment
  //     }
  //     localStorage.setItem('user-form', JSON.stringify(userForm));
  //     router.push('/sign-up-photo');
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-10",
        children: "Reservation Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "pt-50",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          className: className.label,
          children: "Full Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "name",
          placeholder: "Enter your name",
          value: name,
          onChange: function onChange(event) {
            return setName(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "pt-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          className: className.label,
          children: "Phone Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "email",
          placeholder: "Enter your phone number",
          value: email,
          onChange: function onChange(event) {
            return setEmail(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "pt-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          className: className.label,
          children: "Lementation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "form-control rounded-pill text-lg",
          "aria-describedby": "password",
          placeholder: "Presenting complaint",
          value: password,
          onChange: function onChange(event) {
            return setPassword(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_molecules_PriceDetail__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "button-group d-flex flex-column mx-auto pt-50",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill",
          href: "/sign-in",
          role: "button",
          children: "Reservation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(ReservationDetail, "yr8z8JfDpgsfZ79djpKB38A0CUM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ReservationDetail;

var _c;

$RefreshReg$(_c, "ReservationDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb25QYWdlLjFjN2QxNzhjMWI0OTI0YTQwNTBhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT2UsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEM7QUFDdkQsTUFBTUMsWUFBTixHQUE4QkQsS0FBOUIsQ0FBTUMsWUFBTjtBQUFBLE1BQW1CQyxLQUFuQixHQUE4QkYsS0FBOUIsQ0FBbUJFLEtBQW5CO0FBQUEsTUFBeUJDLEVBQXpCLEdBQThCSCxLQUE5QixDQUF5QkcsRUFBekI7QUFHQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVosRUFBeUJDLEtBQXpCLEVBQStCQyxFQUEvQjtBQUNBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDSTtBQUFPLGVBQVMsRUFBQyxtRUFBakI7QUFBQSw4QkFFSTtBQUFPLGlCQUFTLEVBQUMsUUFBakI7QUFBMEIsWUFBSSxFQUFDLE9BQS9CO0FBQXVDLFVBQUUsRUFBQyxRQUExQztBQUFtRCxZQUFJLEVBQUMsT0FBeEQ7QUFBZ0UsYUFBSyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLDhCQUFiO0FBQUEsbUNBQTRDO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHlCQUE2QkYsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLGNBQUUsRUFBQyxZQUFSO0FBQXFCLGlCQUFLLEVBQUMsSUFBM0I7QUFBZ0Msa0JBQU0sRUFBQyxJQUF2QztBQUE0QyxtQkFBTyxFQUFDLFdBQXBEO0FBQWdFLGdCQUFJLEVBQUMsTUFBckU7QUFDSSxpQkFBSyxFQUFDLDRCQURWO0FBQUEsb0NBRUk7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBZ0IsZ0JBQUUsRUFBQyxJQUFuQjtBQUF3QixlQUFDLEVBQUMsSUFBMUI7QUFBK0Isa0JBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBTSxlQUFDLEVBQUMsc0NBQVI7QUFBK0Msb0JBQU0sRUFBQyxTQUF0RDtBQUNJLDhCQUFhLEdBRGpCO0FBQ3FCLGdDQUFlLE9BRHBDO0FBQzRDLGlDQUFnQjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFZSTtBQUFHLG1CQUFTLEVBQUMsNkJBQWI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUNBLGlCQUFLLEVBQUVDLEtBRFA7QUFFQSxrQkFBTSxFQUFDLEtBRlA7QUFHQSx1QkFBVyxFQUFDLE1BSFo7QUFJQSw2QkFBaUIsRUFBQyxHQUpsQjtBQUtBLDRCQUFnQixFQUFDO0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCUixDQTBEUTtBQUNBO0FBQ1I7QUFDQTs7QUE3REE7QUFnRUg7S0FyRXVCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTVSxpQkFBVCxHQUE2QjtBQUFBOztBQUN4QyxrQkFBd0JILCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQkwsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT00sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFrQ1QsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdWLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTVcsU0FBUyxHQUFHO0FBQ2RDLElBQUFBLEtBQUssRUFBRWIsaURBQUUsQ0FBQyxvREFBRDtBQURLLEdBQWxCLENBUHdDLENBVXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUVJO0FBQUEsNEJBQ0E7QUFBSyxXQUFLLEVBQUU7QUFBQ2MsUUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCQyxRQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFFBQUFBLE9BQU8sRUFBQztBQUF2RCxPQUFaO0FBQUEsNkJBQ0E7QUFBSSxpQkFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBSUE7QUFBSyxXQUFLLEVBQUU7QUFBQ0YsUUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCQyxRQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFFBQUFBLE9BQU8sRUFBQztBQUF2RCxPQUFaO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUVKLFNBQVMsQ0FBQ0MsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQ0EsbUJBQVMsRUFBQyxtQ0FEVjtBQUVBLDhCQUFpQixNQUZqQjtBQUdBLHFCQUFXLEVBQUMsaUJBSFo7QUFJQSxlQUFLLEVBQUVWLElBSlA7QUFLQSxrQkFBUSxFQUFFLGtCQUFDYyxLQUFEO0FBQUEsbUJBQVdiLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBLGVBZ0JBO0FBQUssV0FBSyxFQUFFO0FBQUNMLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUM7QUFBdkQsT0FBWjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFFSixTQUFTLENBQUNDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUNBLG1CQUFTLEVBQUMsbUNBRFY7QUFFQSw4QkFBaUIsT0FGakI7QUFHQSxxQkFBVyxFQUFDLHlCQUhaO0FBSUEsZUFBSyxFQUFFUixLQUpQO0FBS0Esa0JBQVEsRUFBRSxrQkFBQ1ksS0FBRDtBQUFBLG1CQUFXWCxRQUFRLENBQUNXLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQW5CO0FBQUE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkEsZUE0QkE7QUFBSyxXQUFLLEVBQUU7QUFBQ0wsUUFBQUEsY0FBYyxFQUFDLFFBQWhCO0FBQTBCQyxRQUFBQSxVQUFVLEVBQUMsUUFBckM7QUFBK0NDLFFBQUFBLE9BQU8sRUFBQztBQUF2RCxPQUFaO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUVKLFNBQVMsQ0FBQ0MsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQ0EsbUJBQVMsRUFBQyxtQ0FEVjtBQUVBLDhCQUFpQixVQUZqQjtBQUdBLHFCQUFXLEVBQUMsc0JBSFo7QUFJQSxlQUFLLEVBQUVOLFFBSlA7QUFLQSxrQkFBUSxFQUFFLGtCQUFDVSxLQUFEO0FBQUEsbUJBQVdULFdBQVcsQ0FBQ1MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBdEI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCQSxlQXdDQSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENBLGVBeUNBO0FBQUssV0FBSyxFQUFFO0FBQUNMLFFBQUFBLGNBQWMsRUFBQyxRQUFoQjtBQUEwQkMsUUFBQUEsVUFBVSxFQUFDLFFBQXJDO0FBQStDQyxRQUFBQSxPQUFPLEVBQUM7QUFBdkQsT0FBWjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQywrQ0FBZjtBQUFBLCtCQUdBO0FBQUcsbUJBQVMsRUFBQyxnRUFBYjtBQUE4RSxjQUFJLEVBQUMsVUFBbkY7QUFDUSxjQUFJLEVBQUMsUUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekNBO0FBQUEsa0JBRko7QUFzREg7O0dBMUV1QmQ7VUFNTEQ7OztLQU5LQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOztBQUUxQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQixzSEFBc0g7O0FBRXpMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUtBQXlLLE1BQU07QUFDL0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLG9CQUFvQjtBQUNwRjtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFpRDs7QUFFdkU7QUFDQSx3RUFBd0UsOEJBQThCO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBbUIsMEJBQTBCLGdCQUFnQixrQkFBa0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSwwREFBbUIsK0JBQStCLGdCQUFnQixrQkFBa0I7QUFDakc7O0FBRUEsV0FBVywwREFBbUIsMkJBQTJCLGdCQUFnQixrQkFBa0I7QUFDM0Y7O0FBRUE7QUFDQSxDQUFDLENBQUMsd0RBQWU7O0FBRWpCOztBQUVBLCtEQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljZURldGFpbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Jlc2VydmF0aW9uRGV0YWlsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW51bWJlci1mb3JtYXQvZGlzdC9yZWFjdC1udW1iZXItZm9ybWF0LmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2VEZXRhaVByb3Bze1xyXG4gICAgdHJlYXRtZW5UeXBlOiBzdHJpbmc7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBpZDpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VEZXRhaWwocHJvcHM6UHJpY2VEZXRhaVByb3BzKSB7XHJcbiAgICBjb25zdHt0cmVhdG1lblR5cGUscHJpY2UsaWR9PSBwcm9wcztcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2codHJlYXRtZW5UeXBlLHByaWNlLGlkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB0LW1kLTUwIHBiLW1kLTUwIHB0LTMwIHBiLTIwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZ3LW1lZGl1bSBjb2xvci1wYWxldHRlLTEgbWItbWQtMTAgbWItMFwiPlByaWNlIEluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IHBzLW1kLTE1IHBlLW1kLTE1IHB0LW1kLTE1IHBiLW1kLTE1IHB0LTEwIHBiLTEwXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0b3B1cDFcIiBuYW1lPVwidG9wdXBcIiB2YWx1ZT1cInRvcHVwMVwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctbWVkaXVtXCI+e3RyZWF0bWVuVHlwZX0gIDwvc3Bhbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD1cImljb24tY2hlY2tcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPVwiI0NERjFGRlwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS44MzMwMSAxMEw4LjQ2NDU5IDEyLjVMMTQuMTY2MyA3LjVcIiBzdHJva2U9XCIjMDBCQUZGXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57cHJpY2V9PC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxhIGhyZWY9XCIuL1wiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VibWl0IHJvdW5kZWQtcGlsbCBmdy1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXItMCB0ZXh0LWxnXCI+QmFjayB0byBIb21lcGFnZTwvYT5cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwdC1tZC01MCBwYi1tZC01MCBwdC0zMCBwYi0yMFwiPlxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBwcy1tZC0xNSBwZS1tZC0xNSBwdC1tZC0xNSBwYi1tZC0xNSBwdC0xMCBwYi0xMFwiXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkLW5vbmVcIiB0eXBlPVwicmFkaW9cIiBpZD1cInRvcHVwMVwiIG5hbWU9XCJ0b3B1cFwiIHZhbHVlPVwidG9wdXAxXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy1tZWRpdW1cIj57dHJlYXRtZW5UeXBlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaWNvbi1jaGVja1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD1cIiNDREYxRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjgzMzAxIDEwTDguNDY0NTkgMTIuNUwxNC4xNjYzIDcuNVwiIHN0cm9rZT1cIiMwMEJBRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFByaWNlRGV0YWlsIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvUHJpY2VEZXRhaWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmF0aW9uRGV0YWlsKCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnQsIHNldFRyZWF0bWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB7XHJcbiAgICAgICAgbGFiZWw6IGN4KCdmb3JtLWxhYmVsIHRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xMCcpLFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHVzZXJGb3JtID0ge1xyXG4gICAgLy8gICAgICAgICBlbWFpbCxcclxuICAgIC8vICAgICAgICAgbmFtZSwgXHJcbiAgICAvLyAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICB0cmVhdG1lbnRcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItZm9ybScsIEpTT04uc3RyaW5naWZ5KHVzZXJGb3JtKSk7XHJcbiAgICAvLyAgICAgcm91dGVyLnB1c2goJy9zaWduLXVwLXBob3RvJyk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBkaXNwbGF5OidmbGV4JyB9fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCBjb2xvci1wYWxldHRlLTEgbWItMTBcIj5SZXNlcnZhdGlvbiBGb3JtPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01MFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWUubGFiZWx9PkZ1bGwgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC1waWxsIHRleHQtbGdcIiBcclxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJywgZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZS5sYWJlbH0+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBob25lIG51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWUubGFiZWx9PkxlbWVudGF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVzZW50aW5nIGNvbXBsYWludFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJpY2VEZXRhaWwgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGRpc3BsYXk6J2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBkLWZsZXggZmxleC1jb2x1bW4gbXgtYXV0byBwdC01MFwiID5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24tdXAgZnctbWVkaXVtIHRleHQtbGcgdGV4dC13aGl0ZSByb3VuZGVkLXBpbGwgbWItMTZcIlxyXG4gICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9PkNvbnRpbnVlPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24taW4gZnctbWVkaXVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIHJvdW5kZWQtcGlsbFwiIGhyZWY9XCIvc2lnbi1pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiPlJlc2VydmF0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8Lz5cclxuICAgIClcclxufSIsIi8qKlxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCAtIDQuOS4xXG4gKiBBdXRob3IgOiBTdWRoYW5zaHUgWWFkYXZcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgMjAyMiB0byBTdWRoYW5zaHUgWWFkYXYsIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vLyBiYXNpYyBub29wIGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGFySXNOdW1iZXIoY2hhciAgICAgICAgICkge1xuICByZXR1cm4gISEoY2hhciB8fCAnJykubWF0Y2goL1xcZC8pO1xufVxuXG5mdW5jdGlvbiBpc05pbCh2YWwgICAgICkge1xuICByZXR1cm4gdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyICAgICAgICApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVtcXF0ve30oKSorPy5cXFxcXiR8XS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRob3VzYW5kc0dyb3VwUmVnZXgodGhvdXNhbmRzR3JvdXBTdHlsZSAgICAgICAgKSB7XG4gIHN3aXRjaCAodGhvdXNhbmRzR3JvdXBTdHlsZSkge1xuICAgIGNhc2UgJ2xha2gnOlxuICAgICAgcmV0dXJuIC8oXFxkKz8pKD89KFxcZFxcZCkrKFxcZCkoPyFcXGQpKShcXC5cXGQrKT8vZztcbiAgICBjYXNlICd3YW4nOlxuICAgICAgcmV0dXJuIC8oXFxkKSg/PShcXGR7NH0pKyg/IVxcZCkpL2c7XG4gICAgY2FzZSAndGhvdXNhbmQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRob3VzYW5kU2VwYXJhdG9yKFxuICBzdHIgICAgICAgICxcbiAgdGhvdXNhbmRTZXBhcmF0b3IgICAgICAgICxcbiAgdGhvdXNhbmRzR3JvdXBTdHlsZSAgICAgICAgXG4pIHtcbiAgdmFyIHRob3VzYW5kc0dyb3VwUmVnZXggPSBnZXRUaG91c2FuZHNHcm91cFJlZ2V4KHRob3VzYW5kc0dyb3VwU3R5bGUpO1xuICB2YXIgaW5kZXggPSBzdHIuc2VhcmNoKC9bMS05XS8pO1xuICBpbmRleCA9IGluZGV4ID09PSAtMSA/IHN0ci5sZW5ndGggOiBpbmRleDtcbiAgcmV0dXJuIChcbiAgICBzdHIuc3Vic3RyaW5nKDAsIGluZGV4KSArXG4gICAgc3RyLnN1YnN0cmluZyhpbmRleCwgc3RyLmxlbmd0aCkucmVwbGFjZSh0aG91c2FuZHNHcm91cFJlZ2V4LCAnJDEnICsgdGhvdXNhbmRTZXBhcmF0b3IpXG4gICk7XG59XG5cbi8vc3BpbHQgYSBmbG9hdCBudW1iZXIgaW50byBkaWZmZXJlbnQgcGFydHMgYmVmb3JlRGVjaW1hbCwgYWZ0ZXJEZWNpbWFsLCBhbmQgbmVnYXRpb25cbmZ1bmN0aW9uIHNwbGl0RGVjaW1hbChudW1TdHIgICAgICAgICwgYWxsb3dOZWdhdGl2ZSkge1xuICBpZiAoIGFsbG93TmVnYXRpdmUgPT09IHZvaWQgMCApIGFsbG93TmVnYXRpdmUgICAgICAgICAgPSB0cnVlO1xuXG4gIHZhciBoYXNOYWdhdGlvbiA9IG51bVN0clswXSA9PT0gJy0nO1xuICB2YXIgYWRkTmVnYXRpb24gPSBoYXNOYWdhdGlvbiAmJiBhbGxvd05lZ2F0aXZlO1xuICBudW1TdHIgPSBudW1TdHIucmVwbGFjZSgnLScsICcnKTtcblxuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXTtcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuXG4gIHJldHVybiB7XG4gICAgYmVmb3JlRGVjaW1hbDogYmVmb3JlRGVjaW1hbCxcbiAgICBhZnRlckRlY2ltYWw6IGFmdGVyRGVjaW1hbCxcbiAgICBoYXNOYWdhdGlvbjogaGFzTmFnYXRpb24sXG4gICAgYWRkTmVnYXRpb246IGFkZE5lZ2F0aW9uLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmaXhMZWFkaW5nWmVybyhudW1TdHIgICAgICAgICApIHtcbiAgaWYgKCFudW1TdHIpIHsgcmV0dXJuIG51bVN0cjsgfVxuICB2YXIgaXNOZWdhdGl2ZSA9IG51bVN0clswXSA9PT0gJy0nO1xuICBpZiAoaXNOZWdhdGl2ZSkgeyBudW1TdHIgPSBudW1TdHIuc3Vic3RyaW5nKDEsIG51bVN0ci5sZW5ndGgpOyB9XG4gIHZhciBwYXJ0cyA9IG51bVN0ci5zcGxpdCgnLicpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHBhcnRzWzBdLnJlcGxhY2UoL14wKy8sICcnKSB8fCAnMCc7XG4gIHZhciBhZnRlckRlY2ltYWwgPSBwYXJ0c1sxXSB8fCAnJztcblxuICByZXR1cm4gKFwiXCIgKyAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGJlZm9yZURlY2ltYWwgKyAoYWZ0ZXJEZWNpbWFsID8gKFwiLlwiICsgYWZ0ZXJEZWNpbWFsKSA6ICcnKSk7XG59XG5cbi8qKlxuICogbGltaXQgZGVjaW1hbCBudW1iZXJzIHRvIGdpdmVuIHNjYWxlXG4gKiBOb3QgdXNlZCAuZml4ZWRUbyBiZWNhdXNlIHRoYXQgd2lsbCBicmVhayB3aXRoIGJpZyBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIGxpbWl0VG9TY2FsZShudW1TdHIgICAgICAgICwgc2NhbGUgICAgICAgICwgZml4ZWREZWNpbWFsU2NhbGUgICAgICAgICApIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgZmlsbGVyID0gZml4ZWREZWNpbWFsU2NhbGUgPyAnMCcgOiAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2NhbGUgLSAxOyBpKyspIHtcbiAgICBzdHIgKz0gbnVtU3RyW2ldIHx8IGZpbGxlcjtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBjb3VudCkge1xuICByZXR1cm4gQXJyYXkoY291bnQgKyAxKS5qb2luKHN0cik7XG59XG5cbmZ1bmN0aW9uIHRvTnVtZXJpY1N0cmluZyhudW0pIHtcbiAgbnVtICs9ICcnOyAvLyB0eXBlY2FzdCBudW1iZXIgdG8gc3RyaW5nXG5cbiAgLy8gc3RvcmUgdGhlIHNpZ24gYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBudW1iZXIuXG4gIHZhciBzaWduID0gbnVtWzBdID09PSAnLScgPyAnLScgOiAnJztcbiAgaWYgKHNpZ24pIHsgbnVtID0gbnVtLnN1YnN0cmluZygxKTsgfVxuXG4gIC8vIHNwbGl0IHRoZSBudW1iZXIgaW50byBjb2ZmaWNpZW50IGFuZCBleHBvbmVudFxuICB2YXIgcmVmID0gbnVtLnNwbGl0KC9bZUVdL2cpO1xuICB2YXIgY29lZmZpY2llbnQgPSByZWZbMF07XG4gIHZhciBleHBvbmVudCA9IHJlZlsxXTtcblxuICAvLyBjb3ZlcnQgZXhwb25lbnQgdG8gbnVtYmVyO1xuICBleHBvbmVudCA9IE51bWJlcihleHBvbmVudCk7XG5cbiAgLy8gaWYgdGhlcmUgaXMgbm8gZXhwb25lbnQgcGFydCBvciBpdHMgMCwgcmV0dXJuIHRoZSBjb2ZmaWVjaWVudCB3aXRoIHNpZ25cbiAgaWYgKCFleHBvbmVudCkgeyByZXR1cm4gc2lnbiArIGNvZWZmaWNpZW50OyB9XG5cbiAgY29lZmZpY2llbnQgPSBjb2VmZmljaWVudC5yZXBsYWNlKCcuJywgJycpO1xuXG4gIC8qKlxuICAgKiBmb3Igc2NpZW50aWZpYyBub3RhdGlvbiB0aGUgY3VycmVudCBkZWNpbWFsIGluZGV4IHdpbGwgYmUgYWZ0ZXIgZmlyc3QgbnVtYmVyIChpbmRleCAwKVxuICAgKiBTbyBlZmZlY3RpdmUgZGVjaW1hbCBpbmRleCB3aWxsIGFsd2F5cyBiZSAxICsgZXhwb25lbnQgdmFsdWVcbiAgICovXG4gIHZhciBkZWNpbWFsSW5kZXggPSAxICsgZXhwb25lbnQ7XG5cbiAgdmFyIGNvZmZpZWNpZW50TG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG5cbiAgaWYgKGRlY2ltYWxJbmRleCA8IDApIHtcbiAgICAvLyBpZiBkZWNpbWFsIGluZGV4IGlzIGxlc3MgdGhlbiAwIGFkZCBwcmVjZWRpbmcgMHNcbiAgICAvLyBhZGQgMSBhcyBqb2luIHdpbGwgaGF2ZVxuICAgIGNvZWZmaWNpZW50ID0gJzAuJyArIHJlcGVhdCgnMCcsIE1hdGguYWJzKGRlY2ltYWxJbmRleCkpICsgY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoZGVjaW1hbEluZGV4ID49IGNvZmZpZWNpZW50TG4pIHtcbiAgICAvLyBpZiBkZWNpbWFsIGluZGV4IGlzIGxlc3MgdGhlbiAwIGFkZCBsZWFkaW5nIDBzXG4gICAgY29lZmZpY2llbnQgPSBjb2VmZmljaWVudCArIHJlcGVhdCgnMCcsIGRlY2ltYWxJbmRleCAtIGNvZmZpZWNpZW50TG4pO1xuICB9IGVsc2Uge1xuICAgIC8vIGVsc2UgYWRkIGRlY2ltYWwgcG9pbnQgYXQgcHJvcGVyIGluZGV4XG4gICAgY29lZmZpY2llbnQgPVxuICAgICAgKGNvZWZmaWNpZW50LnN1YnN0cmluZygwLCBkZWNpbWFsSW5kZXgpIHx8ICcwJykgKyAnLicgKyBjb2VmZmljaWVudC5zdWJzdHJpbmcoZGVjaW1hbEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgY29lZmZpY2llbnQ7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgcmVxdWlyZWQgdG8gcm91bmQgcHJvcCB2YWx1ZSB0byBnaXZlbiBzY2FsZS5cbiAqIE5vdCB1c2VkIC5yb3VuZCBvciAuZml4ZWRUbyBiZWNhdXNlIHRoYXQgd2lsbCBicmVhayB3aXRoIGJpZyBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHJvdW5kVG9QcmVjaXNpb24obnVtU3RyICAgICAgICAsIHNjYWxlICAgICAgICAsIGZpeGVkRGVjaW1hbFNjYWxlICAgICAgICAgKSB7XG4gIC8vaWYgbnVtYmVyIGlzIGVtcHR5IGRvbid0IGRvIGFueXRoaW5nIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgaWYgKFsnJywgJy0nXS5pbmRleE9mKG51bVN0cikgIT09IC0xKSB7IHJldHVybiBudW1TdHI7IH1cblxuICB2YXIgc2hvdWRIYXZlRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xICYmIHNjYWxlO1xuICB2YXIgcmVmID0gc3BsaXREZWNpbWFsKG51bVN0cik7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmLmJlZm9yZURlY2ltYWw7XG4gIHZhciBhZnRlckRlY2ltYWwgPSByZWYuYWZ0ZXJEZWNpbWFsO1xuICB2YXIgaGFzTmFnYXRpb24gPSByZWYuaGFzTmFnYXRpb247XG4gIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdCgoXCIwLlwiICsgKGFmdGVyRGVjaW1hbCB8fCAnMCcpKSk7XG4gIHZhciBmbG9hdFZhbHVlU3RyID1cbiAgICBhZnRlckRlY2ltYWwubGVuZ3RoIDw9IHNjYWxlID8gKFwiMC5cIiArIGFmdGVyRGVjaW1hbCkgOiBmbG9hdFZhbHVlLnRvRml4ZWQoc2NhbGUpO1xuICB2YXIgcm91bmRlZERlY2ltYWxQYXJ0cyA9IGZsb2F0VmFsdWVTdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGludFBhcnQgPSBiZWZvcmVEZWNpbWFsXG4gICAgLnNwbGl0KCcnKVxuICAgIC5yZXZlcnNlKClcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChyb3VuZGVkU3RyLCBjdXJyZW50LCBpZHgpIHtcbiAgICAgIGlmIChyb3VuZGVkU3RyLmxlbmd0aCA+IGlkeCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChOdW1iZXIocm91bmRlZFN0clswXSkgKyBOdW1iZXIoY3VycmVudCkpLnRvU3RyaW5nKCkgK1xuICAgICAgICAgIHJvdW5kZWRTdHIuc3Vic3RyaW5nKDEsIHJvdW5kZWRTdHIubGVuZ3RoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQgKyByb3VuZGVkU3RyO1xuICAgIH0sIHJvdW5kZWREZWNpbWFsUGFydHNbMF0pO1xuXG4gIHZhciBkZWNpbWFsUGFydCA9IGxpbWl0VG9TY2FsZShcbiAgICByb3VuZGVkRGVjaW1hbFBhcnRzWzFdIHx8ICcnLFxuICAgIE1hdGgubWluKHNjYWxlLCBhZnRlckRlY2ltYWwubGVuZ3RoKSxcbiAgICBmaXhlZERlY2ltYWxTY2FsZVxuICApO1xuICB2YXIgbmVnYXRpb24gPSBoYXNOYWdhdGlvbiA/ICctJyA6ICcnO1xuICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPyAnLicgOiAnJztcbiAgcmV0dXJuIChcIlwiICsgbmVnYXRpb24gKyBpbnRQYXJ0ICsgZGVjaW1hbFNlcGFyYXRvciArIGRlY2ltYWxQYXJ0KTtcbn1cblxuLyoqIHNldCB0aGUgY2FyZXQgcG9zaXRvbiBpbiBhbiBpbnB1dCBmaWVsZCAqKi9cbmZ1bmN0aW9uIHNldENhcmV0UG9zaXRpb24oZWwgICAgICAgICAgICAgICAgICAsIGNhcmV0UG9zICAgICAgICApIHtcbiAgZWwudmFsdWUgPSBlbC52YWx1ZTtcbiAgLy8gXiB0aGlzIGlzIHVzZWQgdG8gbm90IG9ubHkgZ2V0ICdmb2N1cycsIGJ1dFxuICAvLyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBpdCBldmVyeXRoaW5nIC1zZWxlY3RlZC1cbiAgLy8gKGl0IGNhdXNlcyBhbiBpc3N1ZSBpbiBjaHJvbWUsIGFuZCBoYXZpbmcgaXQgZG9lc24ndCBodXJ0IGFueSBvdGhlciBicm93c2VyKVxuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBpZiAoZWwuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIGNhcmV0UG9zKTtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIChlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCBhZGRlZCBmb3IgRmlyZWZveCBidWcpXG4gICAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0IHx8IGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhaWwgY2l0eSwgZm9ydHVuYXRlbHkgdGhpcyBuZXZlciBoYXBwZW5zIChhcyBmYXIgYXMgSSd2ZSB0ZXN0ZWQpIDopXG4gICAgZWwuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gIEdpdmVuIHByZXZpb3VzIHZhbHVlIGFuZCBuZXdWYWx1ZSBpdCByZXR1cm5zIHRoZSBpbmRleFxuICBzdGFydCAtIGVuZCB0byB3aGljaCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLlxuICBUaGlzIGZ1bmN0aW9uIG1ha2VzIGFzc3VtcHRpb24gYWJvdXQgb25seSBjb25zZWN1dGl2ZVxuICBjaGFyYWN0ZXJzIGFyZSBjaGFuZ2VkIHdoaWNoIGlzIGNvcnJlY3QgYXNzdW1wdGlvbiBmb3IgY2FyZXQgaW5wdXQuXG4qL1xuZnVuY3Rpb24gZmluZENoYW5nZWRJbmRleChwcmV2VmFsdWUgICAgICAgICwgbmV3VmFsdWUgICAgICAgICkge1xuICB2YXIgaSA9IDAsXG4gICAgaiA9IDA7XG4gIHZhciBwcmV2TGVuZ3RoID0gcHJldlZhbHVlLmxlbmd0aDtcbiAgdmFyIG5ld0xlbmd0aCA9IG5ld1ZhbHVlLmxlbmd0aDtcbiAgd2hpbGUgKHByZXZWYWx1ZVtpXSA9PT0gbmV3VmFsdWVbaV0gJiYgaSA8IHByZXZMZW5ndGgpIHsgaSsrOyB9XG5cbiAgLy9jaGVjayB3aGF0IGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBsYXN0XG4gIHdoaWxlIChcbiAgICBwcmV2VmFsdWVbcHJldkxlbmd0aCAtIDEgLSBqXSA9PT0gbmV3VmFsdWVbbmV3TGVuZ3RoIC0gMSAtIGpdICYmXG4gICAgbmV3TGVuZ3RoIC0gaiA+IGkgJiZcbiAgICBwcmV2TGVuZ3RoIC0gaiA+IGlcbiAgKSB7XG4gICAgaisrO1xuICB9XG5cbiAgcmV0dXJuIHsgc3RhcnQ6IGksIGVuZDogcHJldkxlbmd0aCAtIGogfTtcbn1cblxuLypcbiAgUmV0dXJucyBhIG51bWJlciB3aG9zZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIHRoZSBnaXZlbiByYW5nZVxuKi9cbmZ1bmN0aW9uIGNsYW1wKG51bSAgICAgICAgLCBtaW4gICAgICAgICwgbWF4ICAgICAgICApIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oZWwgICAgICAgICAgICAgICAgICApIHtcbiAgLypNYXggb2Ygc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBpcyB0YWtlbiBmb3IgdGhlIHBhdGNoIG9mIHBpeGVsIGFuZCBvdGhlciBtb2JpbGUgZGV2aWNlIGNhcmV0IGJ1ZyovXG4gIHJldHVybiBNYXRoLm1heChlbC5zZWxlY3Rpb25TdGFydCwgZWwuc2VsZWN0aW9uRW5kKTtcbn1cblxuZnVuY3Rpb24gYWRkSW5wdXRNb2RlKGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gIHJldHVybiAoXG4gICAgZm9ybWF0IHx8XG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAhKG5hdmlnYXRvci5wbGF0Zm9ybSAmJiAvaVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSkpXG4gICk7XG59XG5cbi8vICAgICBcbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5VHlwZTogJ2lucHV0JyxcbiAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICB0aG91c2FuZHNHcm91cFN0eWxlOiAndGhvdXNhbmQnLFxuICBmaXhlZERlY2ltYWxTY2FsZTogZmFsc2UsXG4gIHByZWZpeDogJycsXG4gIHN1ZmZpeDogJycsXG4gIGFsbG93TmVnYXRpdmU6IHRydWUsXG4gIGFsbG93RW1wdHlGb3JtYXR0aW5nOiBmYWxzZSxcbiAgYWxsb3dMZWFkaW5nWmVyb3M6IGZhbHNlLFxuICBpc051bWVyaWNTdHJpbmc6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbktleURvd246IG5vb3AsXG4gIG9uTW91c2VVcDogbm9vcCxcbiAgb25Gb2N1czogbm9vcCxcbiAgb25CbHVyOiBub29wLFxuICBpc0FsbG93ZWQ6IHJldHVyblRydWUsXG59O1xudmFyIE51bWJlckZvcm1hdCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKHN1cGVyY2xhc3MpIHtcbiAgZnVuY3Rpb24gTnVtYmVyRm9ybWF0KHByb3BzICAgICAgICApIHtcbiAgICBzdXBlcmNsYXNzLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICAvL3ZhbGlkYXRlIHByb3BzXG4gICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG5cbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlUHJvcChkZWZhdWx0VmFsdWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIG51bUFzU3RyaW5nOiB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpLFxuICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICBzZWxlY3Rpb25TdGFydDogMCxcbiAgICAgIHNlbGVjdGlvbkVuZDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGlmICggc3VwZXJjbGFzcyApIE51bWJlckZvcm1hdC5fX3Byb3RvX18gPSBzdXBlcmNsYXNzO1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggc3VwZXJjbGFzcyAmJiBzdXBlcmNsYXNzLnByb3RvdHlwZSApO1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyRm9ybWF0O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gc2V0IG1vdW50ZWQgc3RhdGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzICAgICAgICApIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlSWZSZXF1aXJlZChwcmV2UHJvcHMpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jYXJldFBvc2l0aW9uVGltZW91dCk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS51cGRhdGVWYWx1ZUlmUmVxdWlyZWQgPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZUlmUmVxdWlyZWQgKHByZXZQcm9wcyAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZTtcbiAgICB2YXIgZm9jdXNlZEVsbSA9IHJlZi5mb2N1c2VkRWxtO1xuICAgIHZhciBzdGF0ZVZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIGxhc3ROdW1TdHIgPSBzdGF0ZS5udW1Bc1N0cmluZzsgaWYgKCBsYXN0TnVtU3RyID09PSB2b2lkIDAgKSBsYXN0TnVtU3RyID0gJyc7XG5cbiAgICAvLyBJZiBvbmx5IHN0YXRlIGNoYW5nZWQgbm8gbmVlZCB0byBkbyBhbnkgdGhpbmdcbiAgICBpZiAocHJldlByb3BzICE9PSBwcm9wcykge1xuICAgICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG5cbiAgICAgIHZhciBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0ID0gdGhpcy5mb3JtYXROdW1TdHJpbmcobGFzdE51bVN0cik7XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGlzTmlsKHByb3BzLnZhbHVlKSA/IGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgOiB0aGlzLmZvcm1hdFZhbHVlUHJvcCgpO1xuICAgICAgdmFyIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcblxuICAgICAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KG51bUFzU3RyaW5nKTtcbiAgICAgIHZhciBsYXN0RmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobGFzdE51bVN0cik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgLy93aGlsZSB0eXBpbmcgc2V0IHN0YXRlIG9ubHkgd2hlbiBmbG9hdCB2YWx1ZSBjaGFuZ2VzXG4gICAgICAgICgoIWlzTmFOKGZsb2F0VmFsdWUpIHx8ICFpc05hTihsYXN0RmxvYXRWYWx1ZSkpICYmIGZsb2F0VmFsdWUgIT09IGxhc3RGbG9hdFZhbHVlKSB8fFxuICAgICAgICAvL2NhbiBhbHNvIHNldCBzdGF0ZSB3aGVuIGZsb2F0IHZhbHVlIGlzIHNhbWUgYW5kIHRoZSBmb3JtYXQgcHJvcHMgY2hhbmdlc1xuICAgICAgICBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0ICE9PSBzdGF0ZVZhbHVlIHx8XG4gICAgICAgIC8vc2V0IHN0YXRlIGFsd2F5cyB3aGVuIG5vdCBpbiBmb2N1cyBhbmQgZm9ybWF0dGVkIHZhbHVlIGlzIGNoYW5nZWRcbiAgICAgICAgKGZvY3VzZWRFbG0gPT09IG51bGwgJiYgZm9ybWF0dGVkVmFsdWUgIT09IHN0YXRlVmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgICAgICBpbnB1dDogZm9jdXNlZEVsbSxcbiAgICAgICAgICBzb3VyY2U6ICdwcm9wJyxcbiAgICAgICAgICBldmVudDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBNaXNjIG1ldGhvZHMgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0RmxvYXRTdHJpbmcgPSBmdW5jdGlvbiBnZXRGbG9hdFN0cmluZyAobnVtKSB7XG4gICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bSAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcblxuICAgIC8vcmVtb3ZlIG5lZ2F0aW9uIGZvciByZWdleCBjaGVja1xuICAgIHZhciBoYXNOZWdhdGlvbiA9IG51bVswXSA9PT0gJy0nO1xuICAgIGlmIChoYXNOZWdhdGlvbikgeyBudW0gPSBudW0ucmVwbGFjZSgnLScsICcnKTsgfVxuXG4gICAgLy9pZiBkZWNpbWFsIHNjYWxlIGlzIHplcm8gcmVtb3ZlIGRlY2ltYWwgYW5kIG51bWJlciBhZnRlciBkZWNpbWFsU2VwYXJhdG9yXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNjYWxlID09PSAwKSB7XG4gICAgICBudW0gPSBudW0uc3BsaXQoZGVjaW1hbFNlcGFyYXRvcilbMF07XG4gICAgfVxuXG4gICAgbnVtID0gKG51bS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpLnJlcGxhY2UoZGVjaW1hbFNlcGFyYXRvciwgJy4nKTtcblxuICAgIC8vcmVtb3ZlIGV4dHJhIGRlY2ltYWxzXG4gICAgdmFyIGZpcnN0RGVjaW1hbEluZGV4ID0gbnVtLmluZGV4T2YoJy4nKTtcblxuICAgIGlmIChmaXJzdERlY2ltYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIG51bSA9IChudW0uc3Vic3RyaW5nKDAsIGZpcnN0RGVjaW1hbEluZGV4KSkgKyBcIi5cIiArIChudW1cbiAgICAgICAgLnN1YnN0cmluZyhmaXJzdERlY2ltYWxJbmRleCArIDEsIG51bS5sZW5ndGgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpLCAnZycpLCAnJykpO1xuICAgIH1cblxuICAgIC8vYWRkIG5lZ2F0aW9uIGJhY2tcbiAgICBpZiAoaGFzTmVnYXRpb24pIHsgbnVtID0gJy0nICsgbnVtOyB9XG5cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIC8vcmV0dXJuZWQgcmVnZXggYXNzdW1lcyBkZWNpbWFsU2VwYXJhdG9yIGlzIGFzIHBlciBwcm9wXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0TnVtYmVyUmVnZXggPSBmdW5jdGlvbiBnZXROdW1iZXJSZWdleCAoZyAgICAgICAgICwgaWdub3JlRGVjaW1hbFNlcGFyYXRvciAgICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgY3VzdG9tTnVtZXJhbHMgPSByZWYuY3VzdG9tTnVtZXJhbHM7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ1swLTknICtcbiAgICAgICAgKGN1c3RvbU51bWVyYWxzID8gY3VzdG9tTnVtZXJhbHMuam9pbignJykgOiAnJykgK1xuICAgICAgICAnXScgK1xuICAgICAgICAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgIT09IDAgJiYgIWlnbm9yZURlY2ltYWxTZXBhcmF0b3IgJiYgIWZvcm1hdFxuICAgICAgICAgID8gJ3wnICsgZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpXG4gICAgICAgICAgOiAnJyksXG4gICAgICBnID8gJ2cnIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldFNlcGFyYXRvcnMgPSBmdW5jdGlvbiBnZXRTZXBhcmF0b3JzICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZi5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciByZWYkMSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmJDEudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IHJlZiQxLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcblxuICAgIGlmICh0aG91c2FuZFNlcGFyYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgdGhvdXNhbmRTZXBhcmF0b3IgPSAnLCc7XG4gICAgfVxuICAgIGlmICghYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzKSB7XG4gICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSBbZGVjaW1hbFNlcGFyYXRvciwgJy4nXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiB0aG91c2FuZFNlcGFyYXRvcixcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9yczogYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzLFxuICAgIH07XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRNYXNrQXRJbmRleCA9IGZ1bmN0aW9uIGdldE1hc2tBdEluZGV4IChpbmRleCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1hc2sgPSByZWYubWFzazsgaWYgKCBtYXNrID09PSB2b2lkIDAgKSBtYXNrID0gJyAnO1xuICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBtYXNrW2luZGV4XSB8fCAnICc7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRWYWx1ZU9iamVjdCA9IGZ1bmN0aW9uIGdldFZhbHVlT2JqZWN0IChmb3JtYXR0ZWRWYWx1ZSAgICAgICAgLCBudW1Bc1N0cmluZyAgICAgICAgKSB7XG4gICAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KG51bUFzU3RyaW5nKTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICB2YWx1ZTogbnVtQXNTdHJpbmcsXG4gICAgICBmbG9hdFZhbHVlOiBpc05hTihmbG9hdFZhbHVlKSA/IHVuZGVmaW5lZCA6IGZsb2F0VmFsdWUsXG4gICAgfTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnZhbGlkYXRlUHJvcHMgPSBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgbWFzayA9IHJlZi5tYXNrO1xuXG4gICAgLy92YWxpZGF0ZSBkZWNpbWFsU2VwYXJhdG9yIGFuZCB0aG91c2FuZFNlcGFyYXRvclxuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcblxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yID09PSB0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKChcIlxcbiAgICAgICAgICBEZWNpbWFsIHNlcGFyYXRvciBjYW4ndCBiZSBzYW1lIGFzIHRob3VzYW5kIHNlcGFyYXRvci5cXG4gICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IFwiICsgdGhvdXNhbmRTZXBhcmF0b3IgKyBcIiAodGhvdXNhbmRTZXBhcmF0b3IgPSB7dHJ1ZX0gaXMgc2FtZSBhcyB0aG91c2FuZFNlcGFyYXRvciA9IFxcXCIsXFxcIilcXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogXCIgKyBkZWNpbWFsU2VwYXJhdG9yICsgXCIgKGRlZmF1bHQgdmFsdWUgZm9yIGRlY2ltYWxTZXBhcmF0b3IgaXMgLilcXG4gICAgICAgXCIpKTtcbiAgICB9XG5cbiAgICAvL3ZhbGlkYXRlIG1hc2tcbiAgICBpZiAobWFzaykge1xuICAgICAgdmFyIG1hc2tBc1N0ciA9IG1hc2sgPT09ICdzdHJpbmcnID8gbWFzayA6IG1hc2sudG9TdHJpbmcoKTtcbiAgICAgIGlmIChtYXNrQXNTdHIubWF0Y2goL1xcZC9nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiXFxuICAgICAgICAgIE1hc2sgXCIgKyBtYXNrICsgXCIgc2hvdWxkIG5vdCBjb250YWluIG51bWVyaWMgY2hhcmFjdGVyO1xcbiAgICAgICAgXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKiBNaXNjIG1ldGhvZHMgZW5kICoqL1xuXG4gIC8qKiBjYXJldCBzcGVjaWZpYyBtZXRob2RzICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24gc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24gKGVsICAgICAgICAgICAgICAgICAgLCBjYXJldFBvcyAgICAgICAgLCBjdXJyZW50VmFsdWUgICAgICAgICkge1xuICAgIC8qIHNldHRpbmcgY2FyZXQgcG9zaXRpb24gd2l0aGluIHRpbWVvdXQgb2YgMG1zIGlzIHJlcXVpcmVkIGZvciBtb2JpbGUgY2hyb21lLFxuICAgIG90aGVyd2lzZSBicm93c2VyIHJlc2V0cyB0aGUgY2FyZXQgcG9zaXRpb24gYWZ0ZXIgd2Ugc2V0IGl0XG4gICAgV2UgYXJlIGFsc28gc2V0dGluZyBpdCB3aXRob3V0IHRpbWVvdXQgc28gdGhhdCBpbiBub3JtYWwgYnJvd3NlciB3ZSBkb24ndCBzZWUgdGhlIGZsaWNrZXJpbmcgKi9cbiAgICBzZXRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcyk7XG4gICAgdGhpcy5jYXJldFBvc2l0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsLnZhbHVlID09PSBjdXJyZW50VmFsdWUpIHsgc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpOyB9XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLyogVGhpcyBrZWVwcyB0aGUgY2FyZXQgd2l0aGluIHR5cGluZyBhcmVhIHNvIHBlb3BsZSBjYW4ndCB0eXBlIGluIGJldHdlZW4gcHJlZml4IG9yIHN1ZmZpeCAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvcnJlY3RDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24gY29ycmVjdENhcmV0UG9zaXRpb24gKHZhbHVlICAgICAgICAsIGNhcmV0UG9zICAgICAgICAsIGRpcmVjdGlvbiAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuXG4gICAgLy9pZiB2YWx1ZSBpcyBlbXB0eSByZXR1cm4gMFxuICAgIGlmICh2YWx1ZSA9PT0gJycpIHsgcmV0dXJuIDA7IH1cblxuICAgIC8vY2FyZXQgcG9zaXRpb24gc2hvdWxkIGJlIGJldHdlZW4gMCBhbmQgdmFsdWUgbGVuZ3RoXG4gICAgY2FyZXRQb3MgPSBjbGFtcChjYXJldFBvcywgMCwgdmFsdWUubGVuZ3RoKTtcblxuICAgIC8vaW4gY2FzZSBvZiBmb3JtYXQgYXMgbnVtYmVyIGxpbWl0IGJldHdlZW4gcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFyIGhhc05lZ2F0aW9uID0gdmFsdWVbMF0gPT09ICctJztcbiAgICAgIHJldHVybiBjbGFtcChjYXJldFBvcywgcHJlZml4Lmxlbmd0aCArIChoYXNOZWdhdGlvbiA/IDEgOiAwKSwgdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy9pbiBjYXNlIGlmIGN1c3RvbSBmb3JtYXQgbWV0aG9kIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGNhcmV0UG9zOyB9XG5cbiAgICAvKiBpbiBjYXNlIGZvcm1hdCBpcyBzdHJpbmcgZmluZCB0aGUgY2xvc2VzdCAjIHBvc2l0aW9uIGZyb20gdGhlIGNhcmV0IHBvc2l0aW9uICovXG5cbiAgICAvL2luIGNhc2UgdGhlIGNhcmV0UG9zIGhhdmUgaW5wdXQgdmFsdWUgb24gaXQgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoZm9ybWF0W2NhcmV0UG9zXSA9PT0gJyMnICYmIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldFBvc10pKSB7XG4gICAgICByZXR1cm4gY2FyZXRQb3M7XG4gICAgfVxuXG4gICAgLy9pZiBjYXJldFBvcyBpcyBqdXN0IGFmdGVyIGlucHV0IHZhbHVlIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKGZvcm1hdFtjYXJldFBvcyAtIDFdID09PSAnIycgJiYgY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UG9zIC0gMV0pKSB7XG4gICAgICByZXR1cm4gY2FyZXRQb3M7XG4gICAgfVxuXG4gICAgLy9maW5kIHRoZSBuZWFyZXN0IGNhcmV0IHBvc2l0aW9uXG4gICAgdmFyIGZpcnN0SGFzaFBvc2l0aW9uID0gZm9ybWF0LmluZGV4T2YoJyMnKTtcbiAgICB2YXIgbGFzdEhhc2hQb3NpdGlvbiA9IGZvcm1hdC5sYXN0SW5kZXhPZignIycpO1xuXG4gICAgLy9saW1pdCB0aGUgY3Vyc29yIGJldHdlZW4gdGhlIGZpcnN0ICMgcG9zaXRpb24gYW5kIHRoZSBsYXN0ICMgcG9zaXRpb25cbiAgICBjYXJldFBvcyA9IGNsYW1wKGNhcmV0UG9zLCBmaXJzdEhhc2hQb3NpdGlvbiwgbGFzdEhhc2hQb3NpdGlvbiArIDEpO1xuXG4gICAgdmFyIG5leHRQb3MgPSBmb3JtYXQuc3Vic3RyaW5nKGNhcmV0UG9zLCBmb3JtYXQubGVuZ3RoKS5pbmRleE9mKCcjJyk7XG4gICAgdmFyIGNhcmV0TGVmdEJvdW5kID0gY2FyZXRQb3M7XG4gICAgdmFyIGNhcmV0UmlnaHRCb3VuZCA9IGNhcmV0UG9zICsgKG5leHRQb3MgPT09IC0xID8gMCA6IG5leHRQb3MpO1xuXG4gICAgLy9nZXQgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBsYXN0IG51bWJlciBpcyBwcmVzZW50XG4gICAgd2hpbGUgKFxuICAgICAgY2FyZXRMZWZ0Qm91bmQgPiBmaXJzdEhhc2hQb3NpdGlvbiAmJlxuICAgICAgKGZvcm1hdFtjYXJldExlZnRCb3VuZF0gIT09ICcjJyB8fCAhY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkpXG4gICAgKSB7XG4gICAgICBjYXJldExlZnRCb3VuZCAtPSAxO1xuICAgIH1cblxuICAgIHZhciBnb1RvTGVmdCA9XG4gICAgICAhY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UmlnaHRCb3VuZF0pIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY2FyZXRQb3MgIT09IGZpcnN0SGFzaFBvc2l0aW9uKSB8fFxuICAgICAgY2FyZXRQb3MgLSBjYXJldExlZnRCb3VuZCA8IGNhcmV0UmlnaHRCb3VuZCAtIGNhcmV0UG9zO1xuXG4gICAgaWYgKGdvVG9MZWZ0KSB7XG4gICAgICAvL2NoZWNrIGlmIG51bWJlciBzaG91bGQgYmUgdGFrZW4gYWZ0ZXIgdGhlIGJvdW5kIG9yIGFmdGVyIGl0XG4gICAgICAvL2lmIG51bWJlciBwcmVjZWRpbmcgYSB2YWxpZCBudW1iZXIga2VlcCBpdCBhZnRlclxuICAgICAgcmV0dXJuIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldExlZnRCb3VuZF0pID8gY2FyZXRMZWZ0Qm91bmQgKyAxIDogY2FyZXRMZWZ0Qm91bmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmV0UmlnaHRCb3VuZDtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRDYXJldFBvc2l0aW9uIChpbnB1dFZhbHVlICAgICAgICAsIGZvcm1hdHRlZFZhbHVlICAgICAgICAsIGNhcmV0UG9zICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgc3RhdGVWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcbiAgICB2YXIgaW5wdXROdW1iZXIgPSAoaW5wdXRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSAoZm9ybWF0dGVkVmFsdWUubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKTtcbiAgICB2YXIgaiwgaTtcblxuICAgIGogPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNhcmV0UG9zOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50SW5wdXRDaGFyID0gaW5wdXRWYWx1ZVtpXSB8fCAnJztcbiAgICAgIHZhciBjdXJyZW50Rm9ybWF0Q2hhciA9IGZvcm1hdHRlZFZhbHVlW2pdIHx8ICcnO1xuICAgICAgLy9ubyBuZWVkIHRvIGluY3JlYXNlIG5ldyBjdXJzb3IgcG9zaXRpb24gaWYgZm9ybWF0dGVkIHZhbHVlIGRvZXMgbm90IGhhdmUgdGhvc2UgY2hhcmFjdGVyc1xuICAgICAgLy9jYXNlIGlucHV0VmFsdWUgPSAxYTIzIGFuZCBmb3JtYXR0ZWRWYWx1ZSA9ICAxMjNcbiAgICAgIGlmICghY3VycmVudElucHV0Q2hhci5tYXRjaChudW1SZWdleCkgJiYgY3VycmVudElucHV0Q2hhciAhPT0gY3VycmVudEZvcm1hdENoYXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vV2hlbiB3ZSBhcmUgc3RyaXBpbmcgb3V0IGxlYWRpbmcgemVyb3MgbWFpbnRhaW4gdGhlIG5ldyBjdXJzb3IgcG9zaXRpb25cbiAgICAgIC8vQ2FzZSBpbnB1dFZhbHVlID0gMDAwMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gMjM7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRJbnB1dENoYXIgPT09ICcwJyAmJlxuICAgICAgICBjdXJyZW50Rm9ybWF0Q2hhci5tYXRjaChudW1SZWdleCkgJiZcbiAgICAgICAgY3VycmVudEZvcm1hdENoYXIgIT09ICcwJyAmJlxuICAgICAgICBpbnB1dE51bWJlci5sZW5ndGggIT09IGZvcm1hdHRlZE51bWJlci5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy93ZSBhcmUgbm90IHVzaW5nIGN1cnJlbnRGb3JtYXRDaGFyIGJlY2F1c2UgaiBjYW4gY2hhbmdlIGhlcmVcbiAgICAgIHdoaWxlIChjdXJyZW50SW5wdXRDaGFyICE9PSBmb3JtYXR0ZWRWYWx1ZVtqXSAmJiBqIDwgZm9ybWF0dGVkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGorKztcbiAgICAgIH1cbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycgJiYgIXN0YXRlVmFsdWUpIHtcbiAgICAgIC8vc2V0IGl0IHRvIHRoZSBtYXhpbXVtIHZhbHVlIHNvIGl0IGdvZXMgYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyXG4gICAgICBqID0gZm9ybWF0dGVkVmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vY29ycmVjdCBjYXJldCBwb3NpdGlvbiBpZiBpdHMgb3V0c2lkZSBvZiBlZGl0YWJsZSBhcmVhXG4gICAgaiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24oZm9ybWF0dGVkVmFsdWUsIGopO1xuXG4gICAgcmV0dXJuIGo7XG4gIH07XG4gIC8qKiBjYXJldCBzcGVjaWZpYyBtZXRob2RzIGVuZHMgKiovXG5cbiAgLyoqIG1ldGhvZHMgdG8gcmVtb3ZlIGZvcm1hdHR0aW5nICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCA9IGZ1bmN0aW9uIHJlbW92ZVByZWZpeEFuZFN1ZmZpeCAodmFsICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcblxuICAgIC8vcmVtb3ZlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgaWYgKCFmb3JtYXQgJiYgdmFsKSB7XG4gICAgICB2YXIgaXNOZWdhdGl2ZSA9IHZhbFswXSA9PT0gJy0nO1xuXG4gICAgICAvL3JlbW92ZSBuZWdhdGlvbiBzaWduXG4gICAgICBpZiAoaXNOZWdhdGl2ZSkgeyB2YWwgPSB2YWwuc3Vic3RyaW5nKDEsIHZhbC5sZW5ndGgpOyB9XG5cbiAgICAgIC8vcmVtb3ZlIHByZWZpeFxuICAgICAgdmFsID0gcHJlZml4ICYmIHZhbC5pbmRleE9mKHByZWZpeCkgPT09IDAgPyB2YWwuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgsIHZhbC5sZW5ndGgpIDogdmFsO1xuXG4gICAgICAvL3JlbW92ZSBzdWZmaXhcbiAgICAgIHZhciBzdWZmaXhMYXN0SW5kZXggPSB2YWwubGFzdEluZGV4T2Yoc3VmZml4KTtcbiAgICAgIHZhbCA9XG4gICAgICAgIHN1ZmZpeCAmJiBzdWZmaXhMYXN0SW5kZXggIT09IC0xICYmIHN1ZmZpeExhc3RJbmRleCA9PT0gdmFsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgICAgICA/IHZhbC5zdWJzdHJpbmcoMCwgc3VmZml4TGFzdEluZGV4KVxuICAgICAgICAgIDogdmFsO1xuXG4gICAgICAvL2FkZCBuZWdhdGlvbiBzaWduIGJhY2tcbiAgICAgIGlmIChpc05lZ2F0aXZlKSB7IHZhbCA9ICctJyArIHZhbDsgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW1vdmVQYXR0ZXJuRm9ybWF0dGluZyA9IGZ1bmN0aW9uIHJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBmb3JtYXRBcnJheSA9IGZvcm1hdC5zcGxpdCgnIycpLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIgIT09ICcnOyB9KTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBudW1TdHIgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsbiA9IGZvcm1hdEFycmF5Lmxlbmd0aDsgaSA8PSBsbjsgaSsrKSB7XG4gICAgICB2YXIgcGFydCA9IGZvcm1hdEFycmF5W2ldIHx8ICcnO1xuXG4gICAgICAvL2lmIGkgaXMgdGhlIGxhc3QgZnJhZ21lbnQgdGFrZSB0aGUgaW5kZXggb2YgZW5kIG9mIHRoZSB2YWx1ZVxuICAgICAgLy9Gb3IgY2FzZSBsaWtlICsxICg5MTEpIDkxMSA5MSA5MSBoYXZpbmcgcGF0dGVybiArMSAoIyMjKSAjIyMgIyMgIyNcbiAgICAgIHZhciBpbmRleCA9IGkgPT09IGxuID8gdmFsLmxlbmd0aCA6IHZhbC5pbmRleE9mKHBhcnQsIHN0YXJ0KTtcblxuICAgICAgLyogaW4gYW55IGNhc2UgaWYgd2UgZG9uJ3QgZmluZCB0aGUgcGF0dGVybiBwYXJ0IGluIHRoZSB2YWx1ZSBhc3N1bWUgdGhlIHZhbCBhcyBudW1lcmljIHN0cmluZ1xuICAgICAgVGhpcyB3aWxsIGJlIGFsc28gaW4gY2FzZSBpZiB1c2VyIGhhcyBzdGFydGVkIHR5cGluZywgaW4gYW55IG90aGVyIGNhc2UgaXQgd2lsbCBub3QgYmUgLTFcbiAgICAgIHVubGVzcyB3cm9uZyBwcm9wIHZhbHVlIGlzIHByb3ZpZGVkICovXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIG51bVN0ciA9IHZhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1TdHIgKz0gdmFsLnN1YnN0cmluZyhzdGFydCwgaW5kZXgpO1xuICAgICAgICBzdGFydCA9IGluZGV4ICsgcGFydC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChudW1TdHIubWF0Y2godGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKSkgfHwgW10pLmpvaW4oJycpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUucmVtb3ZlRm9ybWF0dGluZyA9IGZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmcgKHZhbCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIHJlbW92ZUZvcm1hdHRpbmcgPSByZWYucmVtb3ZlRm9ybWF0dGluZztcbiAgICBpZiAoIXZhbCkgeyByZXR1cm4gdmFsOyB9XG5cbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFsID0gdGhpcy5yZW1vdmVQcmVmaXhBbmRTdWZmaXgodmFsKTtcbiAgICAgIHZhbCA9IHRoaXMuZ2V0RmxvYXRTdHJpbmcodmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWwgPSB0aGlzLnJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nKHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVtb3ZlRm9ybWF0dGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy9jb25kaXRpb24gbmVlZCB0byBiZSBoYW5kbGVkIGlmIGZvcm1hdCBtZXRob2QgaXMgcHJvdmlkZSxcbiAgICAgIHZhbCA9IHJlbW92ZUZvcm1hdHRpbmcodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gKHZhbC5tYXRjaCh0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpKSB8fCBbXSkuam9pbignJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG4gIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyBlbmQgKiovXG5cbiAgLyoqKiBmb3JtYXQgc3BlY2lmaWMgbWV0aG9kcyBzdGFydCAqKiovXG4gIC8qKlxuICAgKiBGb3JtYXQgd2hlbiAjIGJhc2VkIHN0cmluZyBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bVN0ciBOdW1lcmljIFN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICBmb3JtYXR0ZWQgVmFsdWVcbiAgICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0V2l0aFBhdHRlcm4gPSBmdW5jdGlvbiBmb3JtYXRXaXRoUGF0dGVybiAobnVtU3RyICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgaGFzaENvdW50ID0gMDtcbiAgICB2YXIgZm9ybWF0dGVkTnVtYmVyQXJ5ID0gZm9ybWF0LnNwbGl0KCcnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbG4gPSBmb3JtYXQubGVuZ3RoOyBpIDwgbG47IGkrKykge1xuICAgICAgaWYgKGZvcm1hdFtpXSA9PT0gJyMnKSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlckFyeVtpXSA9IG51bVN0cltoYXNoQ291bnRdIHx8IHRoaXMuZ2V0TWFza0F0SW5kZXgoaGFzaENvdW50KTtcbiAgICAgICAgaGFzaENvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXJBcnkuam9pbignJyk7XG4gIH07XG4gIC8qKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bVN0ciBOdW1lcmljIHN0cmluZy9mbG9hdFN0cmluZ10gSXQgYWx3YXlzIGhhdmUgZGVjaW1hbFNlcGFyYXRvciBhcyAuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gZm9ybWF0dGVkIFZhbHVlXG4gICAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdEFzTnVtYmVyID0gZnVuY3Rpb24gZm9ybWF0QXNOdW1iZXIgKG51bVN0ciAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIHRob3VzYW5kc0dyb3VwU3R5bGUgPSByZWYudGhvdXNhbmRzR3JvdXBTdHlsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICB2YXIgaGFzRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xIHx8IChkZWNpbWFsU2NhbGUgJiYgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIHZhciByZWYkMiA9IHNwbGl0RGVjaW1hbChudW1TdHIsIGFsbG93TmVnYXRpdmUpO1xuICAgIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmJDIuYmVmb3JlRGVjaW1hbDtcbiAgICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmJDIuYWZ0ZXJEZWNpbWFsO1xuICAgIHZhciBhZGROZWdhdGlvbiA9IHJlZiQyLmFkZE5lZ2F0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXG4gICAgLy9hcHBseSBkZWNpbWFsIHByZWNpc2lvbiBpZiBpdHMgZGVmaW5lZFxuICAgIGlmIChkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWZ0ZXJEZWNpbWFsID0gbGltaXRUb1NjYWxlKGFmdGVyRGVjaW1hbCwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICBiZWZvcmVEZWNpbWFsID0gYXBwbHlUaG91c2FuZFNlcGFyYXRvcihiZWZvcmVEZWNpbWFsLCB0aG91c2FuZFNlcGFyYXRvciwgdGhvdXNhbmRzR3JvdXBTdHlsZSk7XG4gICAgfVxuXG4gICAgLy9hZGQgcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAocHJlZml4KSB7IGJlZm9yZURlY2ltYWwgPSBwcmVmaXggKyBiZWZvcmVEZWNpbWFsOyB9XG4gICAgaWYgKHN1ZmZpeCkgeyBhZnRlckRlY2ltYWwgPSBhZnRlckRlY2ltYWwgKyBzdWZmaXg7IH1cblxuICAgIC8vcmVzdG9yZSBuZWdhdGlvbiBzaWduXG4gICAgaWYgKGFkZE5lZ2F0aW9uKSB7IGJlZm9yZURlY2ltYWwgPSAnLScgKyBiZWZvcmVEZWNpbWFsOyB9XG5cbiAgICBudW1TdHIgPSBiZWZvcmVEZWNpbWFsICsgKChoYXNEZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTZXBhcmF0b3IpIHx8ICcnKSArIGFmdGVyRGVjaW1hbDtcblxuICAgIHJldHVybiBudW1TdHI7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXROdW1TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXROdW1TdHJpbmcgKG51bVN0cikge1xuICAgIGlmICggbnVtU3RyID09PSB2b2lkIDAgKSBudW1TdHIgICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gcmVmLmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgIHZhciBjdXN0b21OdW1lcmFscyA9IHJlZi5jdXN0b21OdW1lcmFscztcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBudW1TdHI7XG5cbiAgICBpZiAoY3VzdG9tTnVtZXJhbHMgJiYgY3VzdG9tTnVtZXJhbHMubGVuZ3RoID09PSAxMCkge1xuICAgICAgdmFyIGN1c3RvbU51bWVyYWxSZWdleCA9IG5ldyBSZWdFeHAoJ1snICsgY3VzdG9tTnVtZXJhbHMuam9pbignJykgKyAnXScsICdnJyk7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG51bVN0ci5yZXBsYWNlKGN1c3RvbU51bWVyYWxSZWdleCwgZnVuY3Rpb24gKGRpZ2l0KSB7IHJldHVybiBjdXN0b21OdW1lcmFscy5pbmRleE9mKGRpZ2l0KS50b1N0cmluZygpOyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChudW1TdHIgPT09ICcnICYmICFhbGxvd0VtcHR5Rm9ybWF0dGluZykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICB9IGVsc2UgaWYgKG51bVN0ciA9PT0gJy0nICYmICFmb3JtYXQpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gJy0nO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRXaXRoUGF0dGVybihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRBc051bWJlcihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VmFsdWVQcm9wID0gZnVuY3Rpb24gZm9ybWF0VmFsdWVQcm9wIChkZWZhdWx0VmFsdWUgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgYWxsb3dFbXB0eUZvcm1hdHRpbmcgPSByZWYuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdmFsdWUgPSByZWYkMS52YWx1ZTtcbiAgICB2YXIgaXNOdW1lcmljU3RyaW5nID0gcmVmJDEuaXNOdW1lcmljU3RyaW5nO1xuXG4gICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHVzZSBkZWZhdWx0VmFsdWUgaW5zdGVhZFxuICAgIHZhbHVlID0gaXNOaWwodmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG5cbiAgICB2YXIgaXNOb25OdW1lcmljRmFsc3kgPSAhdmFsdWUgJiYgdmFsdWUgIT09IDA7XG5cbiAgICBpZiAoaXNOb25OdW1lcmljRmFsc3kgJiYgYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gaWYgdmFsdWUgaXMgbm90IGRlZmluZWQgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICAgIGlmIChpc05vbk51bWVyaWNGYWxzeSAmJiAhYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHsgcmV0dXJuICcnOyB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB0b051bWVyaWNTdHJpbmcodmFsdWUpO1xuICAgICAgaXNOdW1lcmljU3RyaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2NoYW5nZSBpbmZpbml0eSB2YWx1ZSB0byBlbXB0eSBzdHJpbmdcbiAgICBpZiAodmFsdWUgPT09ICdJbmZpbml0eScgJiYgaXNOdW1lcmljU3RyaW5nKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vcm91bmQgdGhlIG51bWJlciBiYXNlZCBvbiBkZWNpbWFsU2NhbGVcbiAgICAvL2Zvcm1hdCBvbmx5IGlmIG5vbiBmb3JtYXR0ZWQgdmFsdWUgaXMgcHJvdmlkZWRcbiAgICBpZiAoaXNOdW1lcmljU3RyaW5nICYmICFmb3JtYXQgJiYgdHlwZW9mIGRlY2ltYWxTY2FsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gcm91bmRUb1ByZWNpc2lvbih2YWx1ZSwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gaXNOdW1lcmljU3RyaW5nID8gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpIDogdGhpcy5mb3JtYXRJbnB1dCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXROZWdhdGlvbiA9IGZ1bmN0aW9uIGZvcm1hdE5lZ2F0aW9uICh2YWx1ZSkge1xuICAgIGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIG5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSknKTtcbiAgICB2YXIgZG91YmxlTmVnYXRpb25SZWdleCA9IG5ldyBSZWdFeHAoJygtKSguKSooLSknKTtcblxuICAgIC8vIENoZWNrIG51bWJlciBoYXMgJy0nIHZhbHVlXG4gICAgdmFyIGhhc05lZ2F0aW9uID0gbmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgIC8vIENoZWNrIG51bWJlciBoYXMgMiBvciBtb3JlICctJyB2YWx1ZXNcbiAgICB2YXIgcmVtb3ZlTmVnYXRpb24gPSBkb3VibGVOZWdhdGlvblJlZ2V4LnRlc3QodmFsdWUpO1xuXG4gICAgLy9yZW1vdmUgbmVnYXRpb25cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuXG4gICAgaWYgKGhhc05lZ2F0aW9uICYmICFyZW1vdmVOZWdhdGlvbiAmJiBhbGxvd05lZ2F0aXZlKSB7XG4gICAgICB2YWx1ZSA9ICctJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdElucHV0ID0gZnVuY3Rpb24gZm9ybWF0SW5wdXQgKHZhbHVlKSB7XG4gICAgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG5cbiAgICAvL2Zvcm1hdCBuZWdhdGlvbiBvbmx5IGlmIHdlIGFyZSBmb3JtYXR0aW5nIGFzIG51bWJlclxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlUHJlZml4QW5kU3VmZml4KHZhbHVlKTtcbiAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXROZWdhdGlvbih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgZm9ybWF0dGluZyBmcm9tIG51bWJlclxuICAgIHZhbHVlID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdE51bVN0cmluZyh2YWx1ZSk7XG4gIH07XG5cbiAgLyoqKiBmb3JtYXQgc3BlY2lmaWMgbWV0aG9kcyBlbmQgKioqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmlzQ2hhcmFjdGVyQUZvcm1hdCA9IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyQUZvcm1hdCAoY2FyZXRQb3MgICAgICAgICwgdmFsdWUgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAvL2NoZWNrIHdpdGhpbiBmb3JtYXQgcGF0dGVyblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiBmb3JtYXRbY2FyZXRQb3NdICE9PSAnIycpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIC8vY2hlY2sgaW4gbnVtYmVyIGZvcm1hdFxuICAgIGlmIChcbiAgICAgICFmb3JtYXQgJiZcbiAgICAgIChjYXJldFBvcyA8IHByZWZpeC5sZW5ndGggfHxcbiAgICAgICAgY2FyZXRQb3MgPj0gdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCB8fFxuICAgICAgICAoZGVjaW1hbFNjYWxlICYmIGZpeGVkRGVjaW1hbFNjYWxlICYmIHZhbHVlW2NhcmV0UG9zXSA9PT0gZGVjaW1hbFNlcGFyYXRvcikpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjaGVjayBpZiBhbnkgZm9ybWF0dGluZyBnb3QgcmVtb3ZlZCBieSB0aGUgZGVsZXRlIG9yIGJhY2tzcGFjZSBhbmQgcmVzZXQgdGhlIHZhbHVlXG4gICAqIEl0IHdpbGwgYWxzbyB3b3JrIGFzIGZhbGxiYWNrIGlmIGFuZHJvaWQgY2hvbWUga2V5RG93biBoYW5kbGVyIGRvZXMgbm90IHdvcmtcbiAgICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvcnJlY3RJbnB1dFZhbHVlID0gZnVuY3Rpb24gY29ycmVjdElucHV0VmFsdWUgKGNhcmV0UG9zICAgICAgICAsIGxhc3RWYWx1ZSAgICAgICAgLCB2YWx1ZSAgICAgICAgKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSByZWYkMS5hbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciBsYXN0TnVtU3RyID0gdGhpcy5zdGF0ZS5udW1Bc1N0cmluZyB8fCAnJztcbiAgICB2YXIgcmVmJDIgPSB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0O1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IHJlZiQyLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSByZWYkMi5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHJlZiQzID0gZmluZENoYW5nZWRJbmRleChsYXN0VmFsdWUsIHZhbHVlKTtcbiAgICB2YXIgc3RhcnQgPSByZWYkMy5zdGFydDtcbiAgICB2YXIgZW5kID0gcmVmJDMuZW5kO1xuXG4gICAgLyoqIENoZWNrIGZvciBhbnkgYWxsb3dlZCBkZWNpbWFsIHNlcGFyYXRvciBpcyBhZGRlZCBpbiB0aGUgbnVtZXJpYyBmb3JtYXQgYW5kIHJlcGxhY2UgaXQgd2l0aCBkZWNpbWFsIHNlcGFyYXRvciAqL1xuICAgIGlmIChcbiAgICAgICFmb3JtYXQgJiZcbiAgICAgIHN0YXJ0ID09PSBlbmQgJiZcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycy5pbmRleE9mKHZhbHVlW3NlbGVjdGlvblN0YXJ0XSkgIT09IC0xXG4gICAgKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gZGVjaW1hbFNjYWxlID09PSAwID8gJycgOiBkZWNpbWFsU2VwYXJhdG9yO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvblN0YXJ0KSArIHNlcGFyYXRvciArIHZhbHVlLnN1YnN0cihzZWxlY3Rpb25TdGFydCArIDEsIHZhbHVlLmxlbmd0aClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGxlZnRCb3VuZCA9ICEhZm9ybWF0ID8gMCA6IHByZWZpeC5sZW5ndGg7XG4gICAgdmFyIHJpZ2h0Qm91bmQgPSBsYXN0VmFsdWUubGVuZ3RoIC0gKCEhZm9ybWF0ID8gMCA6IHN1ZmZpeC5sZW5ndGgpO1xuXG4gICAgaWYgKFxuICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc29tZXRoaW5nIGdvdCBhZGRlZFxuICAgICAgdmFsdWUubGVuZ3RoID4gbGFzdFZhbHVlLmxlbmd0aCB8fFxuICAgICAgLy8gb3IgaWYgdGhlIG5ldyB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICF2YWx1ZS5sZW5ndGggfHxcbiAgICAgIC8vIG9yIGlmIG5vdGhpbmcgaGFzIGNoYW5nZWQsIGluIHdoaWNoIGNhc2Ugc3RhcnQgd2lsbCBiZSBzYW1lIGFzIGVuZFxuICAgICAgc3RhcnQgPT09IGVuZCB8fFxuICAgICAgLy8gb3IgaW4gY2FzZSBpZiB3aG9sZSBpbnB1dCBpcyBzZWxlY3RlZCBhbmQgbmV3IHZhbHVlIGlzIHR5cGVkXG4gICAgICAoc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uRW5kID09PSBsYXN0VmFsdWUubGVuZ3RoKSB8fFxuICAgICAgLy8gb3IgaW4gY2FzZSBpZiB0aGUgd2hvbGUgY29udGVudCBpcyByZXBsYWNlZCBieSBicm93c2VyLCBleGFtcGxlIChhdXRvY29tcGxldGUpXG4gICAgICAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBsYXN0VmFsdWUubGVuZ3RoKSB8fFxuICAgICAgLy8gb3IgaWYgY2hhcmN0ZXJzIGJldHdlZW4gcHJlZml4IGFuZCBzdWZmaXggaXMgc2VsZWN0ZWQuXG4gICAgICAvLyBGb3IgbnVtZXJpYyBpbnB1dHMgd2UgYXBwbHkgdGhlIGZvcm1hdCBzbywgcHJlZml4IGFuZCBzdWZmaXggY2FuIGJlIGlnbm9yZWRcbiAgICAgIChzZWxlY3Rpb25TdGFydCA9PT0gbGVmdEJvdW5kICYmIHNlbGVjdGlvbkVuZCA9PT0gcmlnaHRCb3VuZClcbiAgICApIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBkZWxldGVkIHBvcnRpb24gaGFzIGEgY2hhcmFjdGVyIHRoYXQgaXMgcGFydCBvZiBhIGZvcm1hdFxuICAgIHZhciBkZWxldGVkVmFsdWVzID0gbGFzdFZhbHVlLnN1YnN0cihzdGFydCwgZW5kIC0gc3RhcnQpO1xuICAgIHZhciBmb3JtYXRHb3REZWxldGVkID0gISFbXS5jb25jYXQoIGRlbGV0ZWRWYWx1ZXMgKS5maW5kKGZ1bmN0aW9uIChkZWxldGVkVmFsLCBpZHgpIHsgcmV0dXJuIHRoaXMkMS5pc0NoYXJhY3RlckFGb3JtYXQoaWR4ICsgc3RhcnQsIGxhc3RWYWx1ZSk7IH1cbiAgICApO1xuXG4gICAgLy8gaWYgaXQgaGFzLCBvbmx5IHJlbW92ZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBmb3JtYXRcbiAgICBpZiAoZm9ybWF0R290RGVsZXRlZCkge1xuICAgICAgdmFyIGRlbGV0ZWRWYWx1ZVBvcnRpb24gPSBsYXN0VmFsdWUuc3Vic3RyKHN0YXJ0KTtcbiAgICAgIHZhciByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVycyA9IHt9O1xuICAgICAgdmFyIHJlc29sdmVkUG9ydGlvbiA9IFtdO1xuICAgICAgW10uY29uY2F0KCBkZWxldGVkVmFsdWVQb3J0aW9uICkuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudFBvcnRpb24sIGlkeCkge1xuICAgICAgICBpZiAodGhpcyQxLmlzQ2hhcmFjdGVyQUZvcm1hdChpZHggKyBzdGFydCwgbGFzdFZhbHVlKSkge1xuICAgICAgICAgIHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzW2lkeF0gPSBjdXJyZW50UG9ydGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPiBkZWxldGVkVmFsdWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24ucHVzaChjdXJyZW50UG9ydGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVycykuZm9yRWFjaChmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFBvcnRpb24ubGVuZ3RoID4gaWR4KSB7XG4gICAgICAgICAgcmVzb2x2ZWRQb3J0aW9uLnNwbGljZShpZHgsIDAsIHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzW2lkeF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmVkUG9ydGlvbi5wdXNoKHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzW2lkeF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFsdWUgPSBsYXN0VmFsdWUuc3Vic3RyKDAsIHN0YXJ0KSArIHJlc29sdmVkUG9ydGlvbi5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvL2ZvciBudW1iZXJzIGNoZWNrIGlmIGJlZm9yZURlY2ltYWwgZ290IGRlbGV0ZWQgYW5kIHRoZXJlIGlzIG5vdGhpbmcgYWZ0ZXIgZGVjaW1hbCxcbiAgICAvL2NsZWFyIGFsbCBudW1iZXJzIGluIHN1Y2ggY2FzZSB3aGlsZSBrZWVwaW5nIHRoZSAtIHNpZ25cbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFyIG51bWVyaWNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcodmFsdWUpO1xuICAgICAgdmFyIHJlZiQ0ID0gc3BsaXREZWNpbWFsKFxuICAgICAgICBudW1lcmljU3RyaW5nLFxuICAgICAgICBhbGxvd05lZ2F0aXZlXG4gICAgICApO1xuICAgICAgdmFyIGJlZm9yZURlY2ltYWwgPSByZWYkNC5iZWZvcmVEZWNpbWFsO1xuICAgICAgdmFyIGFmdGVyRGVjaW1hbCA9IHJlZiQ0LmFmdGVyRGVjaW1hbDtcbiAgICAgIHZhciBhZGROZWdhdGlvbiA9IHJlZiQ0LmFkZE5lZ2F0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXG4gICAgICAvL2NsZWFyIG9ubHkgaWYgc29tZXRoaW5nIGdvdCBkZWxldGVkXG4gICAgICB2YXIgaXNCZWZvcmVEZWNpbWFsUG9pbnQgPSBjYXJldFBvcyA8IHZhbHVlLmluZGV4T2YoZGVjaW1hbFNlcGFyYXRvcikgKyAxO1xuICAgICAgaWYgKFxuICAgICAgICBudW1lcmljU3RyaW5nLmxlbmd0aCA8IGxhc3ROdW1TdHIubGVuZ3RoICYmXG4gICAgICAgIGlzQmVmb3JlRGVjaW1hbFBvaW50ICYmXG4gICAgICAgIGJlZm9yZURlY2ltYWwgPT09ICcnICYmXG4gICAgICAgICFwYXJzZUZsb2F0KGFmdGVyRGVjaW1hbClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYWRkTmVnYXRpb24gPyAnLScgOiAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLyoqIFVwZGF0ZSB2YWx1ZSBhbmQgY2FyZXQgcG9zaXRpb24gKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChwYXJhbXMgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICkge1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHBhcmFtcy5mb3JtYXR0ZWRWYWx1ZTtcbiAgICB2YXIgaW5wdXQgPSBwYXJhbXMuaW5wdXQ7XG4gICAgdmFyIHNldENhcmV0UG9zaXRpb24gPSBwYXJhbXMuc2V0Q2FyZXRQb3NpdGlvbjsgaWYgKCBzZXRDYXJldFBvc2l0aW9uID09PSB2b2lkIDAgKSBzZXRDYXJldFBvc2l0aW9uID0gdHJ1ZTtcbiAgICB2YXIgc291cmNlID0gcGFyYW1zLnNvdXJjZTtcbiAgICB2YXIgZXZlbnQgPSBwYXJhbXMuZXZlbnQ7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gcGFyYW1zLm51bUFzU3RyaW5nO1xuICAgIHZhciBjYXJldFBvcyA9IHBhcmFtcy5jYXJldFBvcztcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25WYWx1ZUNoYW5nZSA9IHJlZi5vblZhbHVlQ2hhbmdlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHJlZiQxLnZhbHVlO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvL2NhbGN1bGF0ZSBjYXJldCBwb3NpdGlvbiBpZiBub3QgZGVmaW5lZFxuICAgICAgaWYgKGNhcmV0UG9zID09PSB1bmRlZmluZWQgJiYgc2V0Q2FyZXRQb3NpdGlvbikge1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlIHx8IGlucHV0LnZhbHVlO1xuXG4gICAgICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGlucHV0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IHRoZSB2YWx1ZSBpbXBlcmF0aXZlbHksIHRoaXMgaXMgcmVxdWlyZWQgZm9yIElFIGZpeFxuICAgICAgICAgKiBUaGlzIGlzIGFsc28gcmVxdWlyZWQgYXMgaWYgbmV3IGNhcmV0IHBvc2l0aW9uIGlzIGJleW9uZCB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAgICAgICAqIENhcmV0IHBvc2l0aW9uIHdpbGwgbm90IGJlIHNldCBjb3JyZWN0bHlcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG5cbiAgICAgICAgLy9nZXQgdGhlIGNhcmV0IHBvc2l0aW9uXG4gICAgICAgIGNhcmV0UG9zID0gdGhpcy5nZXRDYXJldFBvc2l0aW9uKGlucHV0VmFsdWUsIGZvcm1hdHRlZFZhbHVlLCBjdXJyZW50Q2FyZXRQb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogc2V0IHRoZSB2YWx1ZSBpbXBlcmF0aXZlbHksIGFzIHdlIHNldCB0aGUgY2FyZXQgcG9zaXRpb24gYXMgd2VsbCBpbXBlcmF0aXZlbHkuXG4gICAgICAgKiBUaGlzIGlzIHRvIGtlZXAgdmFsdWUgYW5kIGNhcmV0IHBvc2l0aW9uIGluIHN5bmNcbiAgICAgICAqL1xuICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcblxuICAgICAgLy9zZXQgY2FyZXQgcG9zaXRpb24sIGFuZCB2YWx1ZSBpbXBlcmF0aXZlbHkgd2hlbiBlbGVtZW50IGlzIHByb3ZpZGVkXG4gICAgICBpZiAoc2V0Q2FyZXRQb3NpdGlvbikge1xuICAgICAgICAvL3NldCBjYXJldCBwb3NpdGlvblxuICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGlucHV0LCBjYXJldFBvcywgZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIG51bWVyaWMgc3RyaW5nIGlmIG5vdCBwYXNzZWRcbiAgICBpZiAobnVtQXNTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH1cblxuICAgIC8vdXBkYXRlIHN0YXRlIGlmIHZhbHVlIGlzIGNoYW5nZWRcbiAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nIH0pO1xuXG4gICAgICAvLyB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2Ugc3luY2hyb25vdXNseSwgc28gcGFyZW50IGlzIHVwZGF0ZWQgYWxvbmcgd2l0aCB0aGUgbnVtYmVyIGZvcm1hdC4gRml4IGZvciAjMjc3LCAjMjg3XG4gICAgICBvblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKSwgeyBldmVudDogZXZlbnQsIHNvdXJjZTogc291cmNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24gb25DaGFuZ2UgKGUgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IGVsLnZhbHVlO1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZTtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGlzQWxsb3dlZCA9IHByb3BzLmlzQWxsb3dlZDtcbiAgICB2YXIgbGFzdFZhbHVlID0gc3RhdGUudmFsdWUgfHwgJyc7XG5cbiAgICB2YXIgY3VycmVudENhcmV0UG9zaXRpb24gPSBnZXRDdXJyZW50Q2FyZXRQb3NpdGlvbihlbCk7XG5cbiAgICBpbnB1dFZhbHVlID0gdGhpcy5jb3JyZWN0SW5wdXRWYWx1ZShjdXJyZW50Q2FyZXRQb3NpdGlvbiwgbGFzdFZhbHVlLCBpbnB1dFZhbHVlKTtcblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0SW5wdXQoaW5wdXRWYWx1ZSkgfHwgJyc7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcblxuICAgIHZhciB2YWx1ZU9iaiA9IHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKTtcbiAgICB2YXIgaXNDaGFuZ2VBbGxvd2VkID0gaXNBbGxvd2VkKHZhbHVlT2JqKTtcblxuICAgIGlmICghaXNDaGFuZ2VBbGxvd2VkKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGxhc3RWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICBpbnB1dDogZWwsXG4gICAgICBldmVudDogZSxcbiAgICAgIHNvdXJjZTogJ2V2ZW50JyxcbiAgICB9KTtcblxuICAgIGlmIChpc0NoYW5nZUFsbG93ZWQpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLm9uQmx1ciA9IGZ1bmN0aW9uIG9uQmx1ciAoZSAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSByZWYuc3RhdGU7XG4gICAgdmFyIGZvcm1hdCA9IHByb3BzLmZvcm1hdDtcbiAgICB2YXIgb25CbHVyID0gcHJvcHMub25CbHVyO1xuICAgIHZhciBhbGxvd0xlYWRpbmdaZXJvcyA9IHByb3BzLmFsbG93TGVhZGluZ1plcm9zO1xuICAgIHZhciBudW1Bc1N0cmluZyA9IHN0YXRlLm51bUFzU3RyaW5nO1xuICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB0aGlzLmZvY3VzZWRFbG0gPSBudWxsO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jYXJldFBvc2l0aW9uVGltZW91dCk7XG5cbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgLy8gaWYgdGhlIG51bUFzU3RyaW5nIGlzIG5vdCBhIHZhbGlkIG51bWJlciByZXNldCBpdCB0byBlbXB0eVxuICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpKSkge1xuICAgICAgICBudW1Bc1N0cmluZyA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbG93TGVhZGluZ1plcm9zKSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gZml4TGVhZGluZ1plcm8obnVtQXNTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdE51bVN0cmluZyhudW1Bc1N0cmluZyk7XG5cbiAgICAgIC8vY2hhbmdlIHRoZSBzdGF0ZVxuICAgICAgaWYgKGZvcm1hdHRlZFZhbHVlICE9PSBsYXN0VmFsdWUpIHtcbiAgICAgICAgLy8gdGhlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcnNpc3RlZCBiZWNhdXNlIGl0cyBwcm9wZXJ0aWVzIGNhbiBiZSBhY2Nlc3NlZCBpbiBhbiBhc3luY2hyb25vdXMgd2F5XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcsXG4gICAgICAgICAgaW5wdXQ6IGUudGFyZ2V0LFxuICAgICAgICAgIHNldENhcmV0UG9zaXRpb246IGZhbHNlLFxuICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgIHNvdXJjZTogJ2V2ZW50JyxcbiAgICAgICAgfSk7XG4gICAgICAgIG9uQmx1cihlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkJsdXIoZSk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5vbktleURvd24gPSBmdW5jdGlvbiBvbktleURvd24gKGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBrZXkgPSBlLmtleTtcbiAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydDtcbiAgICB2YXIgc2VsZWN0aW9uRW5kID0gZWwuc2VsZWN0aW9uRW5kO1xuICAgIHZhciB2YWx1ZSA9IGVsLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9ICcnO1xuICAgIHZhciBleHBlY3RlZENhcmV0UG9zaXRpb247XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBvbktleURvd24gPSByZWYub25LZXlEb3duO1xuICAgIHZhciBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yID0gZGVjaW1hbFNjYWxlICE9PSB1bmRlZmluZWQgJiYgZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleChmYWxzZSwgaWdub3JlRGVjaW1hbFNlcGFyYXRvcik7XG4gICAgdmFyIG5lZ2F0aXZlUmVnZXggPSBuZXcgUmVnRXhwKCctJyk7XG4gICAgdmFyIGlzUGF0dGVybkZvcm1hdCA9IHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnO1xuXG4gICAgdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dCA9IHtcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiBzZWxlY3Rpb25TdGFydCxcbiAgICAgIHNlbGVjdGlvbkVuZDogc2VsZWN0aW9uRW5kLFxuICAgIH07XG5cbiAgICAvL0hhbmRsZSBiYWNrc3BhY2UgYW5kIGRlbGV0ZSBhZ2FpbnN0IG5vbiBudW1lcmljYWwvZGVjaW1hbCBjaGFyYWN0ZXJzIG9yIGFycm93IGtleXNcbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydCAtIDE7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgKyAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgLy9pZiBleHBlY3RlZENhcmV0UG9zaXRpb24gaXMgbm90IHNldCBpdCBtZWFucyB3ZSBkb24ndCB3YW50IHRvIEhhbmRsZSBrZXlEb3duXG4gICAgLy9hbHNvIGlmIG11bHRpcGxlIGNoYXJhY3RlcnMgYXJlIHNlbGVjdGVkIGRvbid0IGhhbmRsZVxuICAgIGlmIChleHBlY3RlZENhcmV0UG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBzZWxlY3Rpb25TdGFydCAhPT0gc2VsZWN0aW9uRW5kKSB7XG4gICAgICBvbktleURvd24oZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5ld0NhcmV0UG9zaXRpb24gPSBleHBlY3RlZENhcmV0UG9zaXRpb247XG4gICAgdmFyIGxlZnRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5pbmRleE9mKCcjJykgOiBwcmVmaXgubGVuZ3RoO1xuICAgIHZhciByaWdodEJvdW5kID0gaXNQYXR0ZXJuRm9ybWF0ID8gZm9ybWF0Lmxhc3RJbmRleE9mKCcjJykgKyAxIDogdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aDtcblxuICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0ga2V5ID09PSAnQXJyb3dMZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICBuZXdDYXJldFBvc2l0aW9uID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgZXhwZWN0ZWRDYXJldFBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgPT09ICdEZWxldGUnICYmXG4gICAgICAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSAmJlxuICAgICAgIW5lZ2F0aXZlUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKVxuICAgICkge1xuICAgICAgd2hpbGUgKCFudW1SZWdleC50ZXN0KHZhbHVlW25ld0NhcmV0UG9zaXRpb25dKSAmJiBuZXdDYXJldFBvc2l0aW9uIDwgcmlnaHRCb3VuZCkge1xuICAgICAgICBuZXdDYXJldFBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdCYWNrc3BhY2UnICYmICFudW1SZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAvKiBOT1RFOiBUaGlzIGlzIHNwZWNpYWwgY2FzZSB3aGVuIGJhY2tzcGFjZSBpcyBwcmVzc2VkIG9uIGFcbiAgICAgIG5lZ2F0aXZlIHZhbHVlIHdoaWxlIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgYWZ0ZXIgcHJlZml4LiBXZSBjYW4ndCBoYW5kbGUgaXQgb24gb25DaGFuZ2UgYmVjYXVzZVxuICAgICAgd2Ugd2lsbCBub3QgaGF2ZSBhbnkgaW5mb3JtYXRpb24gb2Yga2V5UHJlc3NcbiAgICAgICovXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPD0gbGVmdEJvdW5kICsgMSAmJiB2YWx1ZVswXSA9PT0gJy0nICYmIHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIGNhcmV0UG9zOiBuZXdDYXJldFBvc2l0aW9uLFxuICAgICAgICAgIGlucHV0OiBlbCxcbiAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICBzb3VyY2U6ICdldmVudCcsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uIC0gMV0pICYmIG5ld0NhcmV0UG9zaXRpb24gPiBsZWZ0Qm91bmQpIHtcbiAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uLS07XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIG5ld0NhcmV0UG9zaXRpb24sICdsZWZ0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiAhPT0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uIHx8XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPCBsZWZ0Qm91bmQgfHxcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA+IHJpZ2h0Qm91bmRcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiB0aGlzIGlzIGp1c3QgcmVxdWlyZWQgZm9yIHVuaXQgdGVzdCBhcyB3ZSBuZWVkIHRvIGdldCB0aGUgbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICAgIFJlbW92ZSB0aGlzIHdoZW4geW91IGZpbmQgZGlmZmVyZW50IHNvbHV0aW9uICovXG4gICAgaWYgKGUuaXNVbml0VGVzdFJ1bikge1xuICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKTtcbiAgfTtcblxuICAvKiogcmVxdWlyZWQgdG8gaGFuZGxlIHRoZSBjYXJldCBwb3NpdGlvbiB3aGVuIGNsaWNrIGFueXdoZXJlIHdpdGhpbiB0aGUgaW5wdXQgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24gb25Nb3VzZVVwIChlICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIE5PVEU6IHdlIGhhdmUgdG8gZ2l2ZSBkZWZhdWx0IHZhbHVlIGZvciB2YWx1ZSBhcyBpbiBjYXNlIHdoZW4gY3VzdG9tIGlucHV0IGlzIHByb3ZpZGVkXG4gICAgICogdmFsdWUgY2FuIGNvbWUgYXMgdW5kZWZpbmVkIHdoZW4gbm90aGluZyBpcyBwcm92aWRlZCBvbiB2YWx1ZSBwcm9wLlxuICAgICAqL1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gJyc7XG5cbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBpZiAoY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMgKGUgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIC8vIFdvcmthcm91bmQgQ2hyb21lIGFuZCBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3OTMyOFxuICAgIC8vIChvbkZvY3VzIGV2ZW50IHRhcmdldCBzZWxlY3Rpb25TdGFydCBpcyBhbHdheXMgMCBiZWZvcmUgc2V0VGltZW91dClcbiAgICBlLnBlcnNpc3QoKTtcblxuICAgIHRoaXMuZm9jdXNlZEVsbSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICAgIHZhciB2YWx1ZSA9IGVsLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9ICcnO1xuXG4gICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IHRoaXMkMS5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgc2VsZWN0aW9uU3RhcnQpO1xuXG4gICAgICAvL3NldFBhdGNoZWRDYXJldFBvc2l0aW9uIG9ubHkgd2hlbiBldmVyeXRoaW5nIGlzIG5vdCBzZWxlY3RlZCBvbiBmb2N1cyAod2hpbGUgdGFiYmluZyBpbnRvIHRoZSBmaWVsZClcbiAgICAgIGlmIChcbiAgICAgICAgY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQgJiZcbiAgICAgICAgIShzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IHZhbHVlLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICB0aGlzJDEuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcyQxLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIGRpc3BsYXlUeXBlID0gcmVmLmRpc3BsYXlUeXBlO1xuICAgIHZhciBjdXN0b21JbnB1dCA9IHJlZi5jdXN0b21JbnB1dDtcbiAgICB2YXIgcmVuZGVyVGV4dCA9IHJlZi5yZW5kZXJUZXh0O1xuICAgIHZhciBnZXRJbnB1dFJlZiA9IHJlZi5nZXRJbnB1dFJlZjtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcbiAgICB2YXIgdGhvdXNhbmRzR3JvdXBTdHlsZSA9IHJlZi50aG91c2FuZHNHcm91cFN0eWxlO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgcmVtb3ZlRm9ybWF0dGluZyA9IHJlZi5yZW1vdmVGb3JtYXR0aW5nO1xuICAgIHZhciBtYXNrID0gcmVmLm1hc2s7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHJlZi5kZWZhdWx0VmFsdWU7XG4gICAgdmFyIGlzTnVtZXJpY1N0cmluZyA9IHJlZi5pc051bWVyaWNTdHJpbmc7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgYWxsb3dFbXB0eUZvcm1hdHRpbmcgPSByZWYuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgdmFyIGFsbG93TGVhZGluZ1plcm9zID0gcmVmLmFsbG93TGVhZGluZ1plcm9zO1xuICAgIHZhciBvblZhbHVlQ2hhbmdlID0gcmVmLm9uVmFsdWVDaGFuZ2U7XG4gICAgdmFyIGlzQWxsb3dlZCA9IHJlZi5pc0FsbG93ZWQ7XG4gICAgdmFyIGN1c3RvbU51bWVyYWxzID0gcmVmLmN1c3RvbU51bWVyYWxzO1xuICAgIHZhciBvbkNoYW5nZSA9IHJlZi5vbkNoYW5nZTtcbiAgICB2YXIgb25LZXlEb3duID0gcmVmLm9uS2V5RG93bjtcbiAgICB2YXIgb25Nb3VzZVVwID0gcmVmLm9uTW91c2VVcDtcbiAgICB2YXIgb25Gb2N1cyA9IHJlZi5vbkZvY3VzO1xuICAgIHZhciBvbkJsdXIgPSByZWYub25CbHVyO1xuICAgIHZhciBwcm9wVmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyggcmVmLCBbXCJ0eXBlXCIsIFwiZGlzcGxheVR5cGVcIiwgXCJjdXN0b21JbnB1dFwiLCBcInJlbmRlclRleHRcIiwgXCJnZXRJbnB1dFJlZlwiLCBcImZvcm1hdFwiLCBcInRob3VzYW5kU2VwYXJhdG9yXCIsIFwiZGVjaW1hbFNlcGFyYXRvclwiLCBcImFsbG93ZWREZWNpbWFsU2VwYXJhdG9yc1wiLCBcInRob3VzYW5kc0dyb3VwU3R5bGVcIiwgXCJkZWNpbWFsU2NhbGVcIiwgXCJmaXhlZERlY2ltYWxTY2FsZVwiLCBcInByZWZpeFwiLCBcInN1ZmZpeFwiLCBcInJlbW92ZUZvcm1hdHRpbmdcIiwgXCJtYXNrXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiaXNOdW1lcmljU3RyaW5nXCIsIFwiYWxsb3dOZWdhdGl2ZVwiLCBcImFsbG93RW1wdHlGb3JtYXR0aW5nXCIsIFwiYWxsb3dMZWFkaW5nWmVyb3NcIiwgXCJvblZhbHVlQ2hhbmdlXCIsIFwiaXNBbGxvd2VkXCIsIFwiY3VzdG9tTnVtZXJhbHNcIiwgXCJvbkNoYW5nZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uTW91c2VVcFwiLCBcIm9uRm9jdXNcIiwgXCJvbkJsdXJcIiwgXCJ2YWx1ZVwiXSApO1xuICAgIHZhciBvdGhlclByb3BzID0gcmVzdDtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlO1xuICAgIHZhciBtb3VudGVkID0gcmVmJDEubW91bnRlZDtcblxuICAgIC8vIGFkZCBpbnB1dCBtb2RlIG9uIGVsZW1lbnQgYmFzZWQgb24gZm9ybWF0IHByb3AgYW5kIGRldmljZSBvbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgIHZhciBpbnB1dE1vZGUgPSBtb3VudGVkICYmIGFkZElucHV0TW9kZShmb3JtYXQpID8gJ251bWVyaWMnIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGlucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHsgaW5wdXRNb2RlOiBpbnB1dE1vZGUgfSwgb3RoZXJQcm9wcywge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgIH0pO1xuXG4gICAgaWYgKGRpc3BsYXlUeXBlID09PSAndGV4dCcpIHtcbiAgICAgIHJldHVybiByZW5kZXJUZXh0ID8gKFxuICAgICAgICByZW5kZXJUZXh0KHZhbHVlLCBvdGhlclByb3BzKSB8fCBudWxsXG4gICAgICApIDogKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnc3BhbicsIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgcmVmOiBnZXRJbnB1dFJlZiB9KSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY3VzdG9tSW5wdXQpIHtcbiAgICAgIHZhciBDdXN0b21JbnB1dCA9IGN1c3RvbUlucHV0O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEN1c3RvbUlucHV0LCBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnLCBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSkpO1xuICB9O1xuXG4gIHJldHVybiBOdW1iZXJGb3JtYXQ7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuXG5OdW1iZXJGb3JtYXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGb3JtYXQ7XG4iXSwibmFtZXMiOlsiTnVtYmVyRm9ybWF0IiwiUHJpY2VEZXRhaWwiLCJwcm9wcyIsInRyZWF0bWVuVHlwZSIsInByaWNlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJjeCIsInVzZVJvdXRlciIsIlJlc2VydmF0aW9uRGV0YWlsIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInRyZWF0bWVudCIsInNldFRyZWF0bWVudCIsInJvdXRlciIsImNsYXNzTmFtZSIsImxhYmVsIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9