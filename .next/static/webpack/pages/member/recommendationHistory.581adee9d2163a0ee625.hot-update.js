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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3JlY29tbWVuZGF0aW9uSGlzdG9yeS41ODFhZGVlOWQyMTYzYTBlZTYyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQU9lLFNBQVNHLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXVDO0FBQ2xELE1BQU1DLEtBQU4sR0FBdUNELEtBQXZDLENBQU1DLEtBQU47QUFBQSxNQUFZQyxZQUFaLEdBQXVDRixLQUF2QyxDQUFZRSxZQUFaO0FBQUEsTUFBeUJDLEtBQXpCLEdBQXVDSCxLQUF2QyxDQUF5QkcsS0FBekI7QUFBQSxNQUErQkMsTUFBL0IsR0FBdUNKLEtBQXZDLENBQStCSSxNQUEvQjtBQUNBLE1BQU1DLFdBQVcsR0FBQ1AsaURBQUUsQ0FBQztBQUNqQiwrQkFBMEIsSUFEVDtBQUVqQixlQUFVTSxNQUFNLEtBQUcsU0FGRjtBQUdqQixlQUFVQSxNQUFNLEtBQUcsU0FIRjtBQUlqQixjQUFTQSxNQUFNLEtBQUc7QUFKRCxHQUFELENBQXBCO0FBT0Esc0JBQ0k7QUFBQSwyQkFDQTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUMsS0FBVjtBQUFBLCtCQUdJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQyxxREFBYjtBQUFBLHNCQUFvRUg7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBLHNCQUFpRUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQywwQ0FBYjtBQUFBLGlDQUNBLDhEQUFDLHdEQUFEO0FBQ1ksaUJBQUssRUFBRUMsS0FEbkI7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TTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFpRDs7QUFFdkU7QUFDQSx3RUFBd0UsOEJBQThCO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBbUIsMEJBQTBCLGdCQUFnQixrQkFBa0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSwwREFBbUIsK0JBQStCLGdCQUFnQixrQkFBa0I7QUFDakc7O0FBRUEsV0FBVywwREFBbUIsMkJBQTJCLGdCQUFnQixrQkFBa0I7QUFDM0Y7O0FBRUE7QUFDQSxDQUFDLENBQUMsd0RBQWU7O0FBRWpCOztBQUVBLCtEQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9SZWNjb21lbmRhdGlvbkhpc3RvcnkvVGFibGVSb3cudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbnVtYmVyLWZvcm1hdC9kaXN0L3JlYWN0LW51bWJlci1mb3JtYXQuZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xuICAgIHRpdGxlIDogc3RyaW5nO1xuICAgIHRyZWF0bWVuVHlwZTogc3RyaW5nO1xuICAgIHByaWNlOm51bWJlcjtcbiAgICBzdGF0dXM6c3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVSb3cocHJvcHM6VGFibGVSb3dQcm9wcykge1xuICAgIGNvbnN0e3RpdGxlLHRyZWF0bWVuVHlwZSxwcmljZSxzdGF0dXN9PXByb3BzO1xuICAgIGNvbnN0IHN0YXR1c0NsYXNzPWN4KHtcbiAgICAgICAgJ2Zsb2F0LXN0YXJ0IGljb24tc3RhdHVzJzp0cnVlLFxuICAgICAgICAncGVuZGluZyc6c3RhdHVzPT09J3BlbmRpbmcnLFxuICAgICAgICAnc3VjY2Vzcyc6c3RhdHVzPT09J3N1Y2Nlc3MnLFxuICAgICAgICAnZmFpbGVkJzpzdGF0dXM9PT0nZmFpbGVkJ1xuXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtc3RhcnQgbWUtMyBtYi1sZy0wIG1iLTNcIiBzcmM9e2AvaW1nLyR7aW1hZ2V9LnBuZ2B9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezgwfSBoZWlnaHQ9ezYwfSBhbHQ9XCJnYW1lIHRodW1iXCIvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS10aXRsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnYW1lLXRpdGxlIGZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZnctbm9ybWFsIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0yIG0tMFwiPnt0cmVhdG1lblR5cGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGg+XG4gICAgIFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XG4gICAgICAgICAgICA8TnVtYmVyRm9ybWF0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjwvcD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgIDxMaW5rIFxuICAgICAgICBocmVmPXtgL2B9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN0YXR1cyByb3VuZGVkLXBpbGwgdGV4dC1zbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGV0YWlsc1xuXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiByZWFjdC1udW1iZXItZm9ybWF0IC0gNC45LjFcbiAqIEF1dGhvciA6IFN1ZGhhbnNodSBZYWRhdlxuICogQ29weXJpZ2h0IChjKSAyMDE2LCAyMDIyIHRvIFN1ZGhhbnNodSBZYWRhdiwgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL3MteWFkYXYvcmVhY3QtbnVtYmVyLWZvcm1hdFxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbi8vIGJhc2ljIG5vb3AgZnVuY3Rpb25cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNoYXJJc051bWJlcihjaGFyICAgICAgICAgKSB7XG4gIHJldHVybiAhIShjaGFyIHx8ICcnKS5tYXRjaCgvXFxkLyk7XG59XG5cbmZ1bmN0aW9uIGlzTmlsKHZhbCAgICAgKSB7XG4gIHJldHVybiB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIgICAgICAgICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1stW1xcXS97fSgpKis/LlxcXFxeJHxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGhvdXNhbmRzR3JvdXBSZWdleCh0aG91c2FuZHNHcm91cFN0eWxlICAgICAgICApIHtcbiAgc3dpdGNoICh0aG91c2FuZHNHcm91cFN0eWxlKSB7XG4gICAgY2FzZSAnbGFraCc6XG4gICAgICByZXR1cm4gLyhcXGQrPykoPz0oXFxkXFxkKSsoXFxkKSg/IVxcZCkpKFxcLlxcZCspPy9nO1xuICAgIGNhc2UgJ3dhbic6XG4gICAgICByZXR1cm4gLyhcXGQpKD89KFxcZHs0fSkrKD8hXFxkKSkvZztcbiAgICBjYXNlICd0aG91c2FuZCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VGhvdXNhbmRTZXBhcmF0b3IoXG4gIHN0ciAgICAgICAgLFxuICB0aG91c2FuZFNlcGFyYXRvciAgICAgICAgLFxuICB0aG91c2FuZHNHcm91cFN0eWxlICAgICAgICBcbikge1xuICB2YXIgdGhvdXNhbmRzR3JvdXBSZWdleCA9IGdldFRob3VzYW5kc0dyb3VwUmVnZXgodGhvdXNhbmRzR3JvdXBTdHlsZSk7XG4gIHZhciBpbmRleCA9IHN0ci5zZWFyY2goL1sxLTldLyk7XG4gIGluZGV4ID0gaW5kZXggPT09IC0xID8gc3RyLmxlbmd0aCA6IGluZGV4O1xuICByZXR1cm4gKFxuICAgIHN0ci5zdWJzdHJpbmcoMCwgaW5kZXgpICtcbiAgICBzdHIuc3Vic3RyaW5nKGluZGV4LCBzdHIubGVuZ3RoKS5yZXBsYWNlKHRob3VzYW5kc0dyb3VwUmVnZXgsICckMScgKyB0aG91c2FuZFNlcGFyYXRvcilcbiAgKTtcbn1cblxuLy9zcGlsdCBhIGZsb2F0IG51bWJlciBpbnRvIGRpZmZlcmVudCBwYXJ0cyBiZWZvcmVEZWNpbWFsLCBhZnRlckRlY2ltYWwsIGFuZCBuZWdhdGlvblxuZnVuY3Rpb24gc3BsaXREZWNpbWFsKG51bVN0ciAgICAgICAgLCBhbGxvd05lZ2F0aXZlKSB7XG4gIGlmICggYWxsb3dOZWdhdGl2ZSA9PT0gdm9pZCAwICkgYWxsb3dOZWdhdGl2ZSAgICAgICAgICA9IHRydWU7XG5cbiAgdmFyIGhhc05hZ2F0aW9uID0gbnVtU3RyWzBdID09PSAnLSc7XG4gIHZhciBhZGROZWdhdGlvbiA9IGhhc05hZ2F0aW9uICYmIGFsbG93TmVnYXRpdmU7XG4gIG51bVN0ciA9IG51bVN0ci5yZXBsYWNlKCctJywgJycpO1xuXG4gIHZhciBwYXJ0cyA9IG51bVN0ci5zcGxpdCgnLicpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHBhcnRzWzBdO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcGFydHNbMV0gfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBiZWZvcmVEZWNpbWFsOiBiZWZvcmVEZWNpbWFsLFxuICAgIGFmdGVyRGVjaW1hbDogYWZ0ZXJEZWNpbWFsLFxuICAgIGhhc05hZ2F0aW9uOiBoYXNOYWdhdGlvbixcbiAgICBhZGROZWdhdGlvbjogYWRkTmVnYXRpb24sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpeExlYWRpbmdaZXJvKG51bVN0ciAgICAgICAgICkge1xuICBpZiAoIW51bVN0cikgeyByZXR1cm4gbnVtU3RyOyB9XG4gIHZhciBpc05lZ2F0aXZlID0gbnVtU3RyWzBdID09PSAnLSc7XG4gIGlmIChpc05lZ2F0aXZlKSB7IG51bVN0ciA9IG51bVN0ci5zdWJzdHJpbmcoMSwgbnVtU3RyLmxlbmd0aCk7IH1cbiAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcGFydHNbMF0ucmVwbGFjZSgvXjArLywgJycpIHx8ICcwJztcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuXG4gIHJldHVybiAoXCJcIiArIChpc05lZ2F0aXZlID8gJy0nIDogJycpICsgYmVmb3JlRGVjaW1hbCArIChhZnRlckRlY2ltYWwgPyAoXCIuXCIgKyBhZnRlckRlY2ltYWwpIDogJycpKTtcbn1cblxuLyoqXG4gKiBsaW1pdCBkZWNpbWFsIG51bWJlcnMgdG8gZ2l2ZW4gc2NhbGVcbiAqIE5vdCB1c2VkIC5maXhlZFRvIGJlY2F1c2UgdGhhdCB3aWxsIGJyZWFrIHdpdGggYmlnIG51bWJlcnNcbiAqL1xuZnVuY3Rpb24gbGltaXRUb1NjYWxlKG51bVN0ciAgICAgICAgLCBzY2FsZSAgICAgICAgLCBmaXhlZERlY2ltYWxTY2FsZSAgICAgICAgICkge1xuICB2YXIgc3RyID0gJyc7XG4gIHZhciBmaWxsZXIgPSBmaXhlZERlY2ltYWxTY2FsZSA/ICcwJyA6ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzY2FsZSAtIDE7IGkrKykge1xuICAgIHN0ciArPSBudW1TdHJbaV0gfHwgZmlsbGVyO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIGNvdW50KSB7XG4gIHJldHVybiBBcnJheShjb3VudCArIDEpLmpvaW4oc3RyKTtcbn1cblxuZnVuY3Rpb24gdG9OdW1lcmljU3RyaW5nKG51bSkge1xuICBudW0gKz0gJyc7IC8vIHR5cGVjYXN0IG51bWJlciB0byBzdHJpbmdcblxuICAvLyBzdG9yZSB0aGUgc2lnbiBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIG51bWJlci5cbiAgdmFyIHNpZ24gPSBudW1bMF0gPT09ICctJyA/ICctJyA6ICcnO1xuICBpZiAoc2lnbikgeyBudW0gPSBudW0uc3Vic3RyaW5nKDEpOyB9XG5cbiAgLy8gc3BsaXQgdGhlIG51bWJlciBpbnRvIGNvZmZpY2llbnQgYW5kIGV4cG9uZW50XG4gIHZhciByZWYgPSBudW0uc3BsaXQoL1tlRV0vZyk7XG4gIHZhciBjb2VmZmljaWVudCA9IHJlZlswXTtcbiAgdmFyIGV4cG9uZW50ID0gcmVmWzFdO1xuXG4gIC8vIGNvdmVydCBleHBvbmVudCB0byBudW1iZXI7XG4gIGV4cG9uZW50ID0gTnVtYmVyKGV4cG9uZW50KTtcblxuICAvLyBpZiB0aGVyZSBpcyBubyBleHBvbmVudCBwYXJ0IG9yIGl0cyAwLCByZXR1cm4gdGhlIGNvZmZpZWNpZW50IHdpdGggc2lnblxuICBpZiAoIWV4cG9uZW50KSB7IHJldHVybiBzaWduICsgY29lZmZpY2llbnQ7IH1cblxuICBjb2VmZmljaWVudCA9IGNvZWZmaWNpZW50LnJlcGxhY2UoJy4nLCAnJyk7XG5cbiAgLyoqXG4gICAqIGZvciBzY2llbnRpZmljIG5vdGF0aW9uIHRoZSBjdXJyZW50IGRlY2ltYWwgaW5kZXggd2lsbCBiZSBhZnRlciBmaXJzdCBudW1iZXIgKGluZGV4IDApXG4gICAqIFNvIGVmZmVjdGl2ZSBkZWNpbWFsIGluZGV4IHdpbGwgYWx3YXlzIGJlIDEgKyBleHBvbmVudCB2YWx1ZVxuICAgKi9cbiAgdmFyIGRlY2ltYWxJbmRleCA9IDEgKyBleHBvbmVudDtcblxuICB2YXIgY29mZmllY2llbnRMbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcblxuICBpZiAoZGVjaW1hbEluZGV4IDwgMCkge1xuICAgIC8vIGlmIGRlY2ltYWwgaW5kZXggaXMgbGVzcyB0aGVuIDAgYWRkIHByZWNlZGluZyAwc1xuICAgIC8vIGFkZCAxIGFzIGpvaW4gd2lsbCBoYXZlXG4gICAgY29lZmZpY2llbnQgPSAnMC4nICsgcmVwZWF0KCcwJywgTWF0aC5hYnMoZGVjaW1hbEluZGV4KSkgKyBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChkZWNpbWFsSW5kZXggPj0gY29mZmllY2llbnRMbikge1xuICAgIC8vIGlmIGRlY2ltYWwgaW5kZXggaXMgbGVzcyB0aGVuIDAgYWRkIGxlYWRpbmcgMHNcbiAgICBjb2VmZmljaWVudCA9IGNvZWZmaWNpZW50ICsgcmVwZWF0KCcwJywgZGVjaW1hbEluZGV4IC0gY29mZmllY2llbnRMbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gZWxzZSBhZGQgZGVjaW1hbCBwb2ludCBhdCBwcm9wZXIgaW5kZXhcbiAgICBjb2VmZmljaWVudCA9XG4gICAgICAoY29lZmZpY2llbnQuc3Vic3RyaW5nKDAsIGRlY2ltYWxJbmRleCkgfHwgJzAnKSArICcuJyArIGNvZWZmaWNpZW50LnN1YnN0cmluZyhkZWNpbWFsSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBjb2VmZmljaWVudDtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyByZXF1aXJlZCB0byByb3VuZCBwcm9wIHZhbHVlIHRvIGdpdmVuIHNjYWxlLlxuICogTm90IHVzZWQgLnJvdW5kIG9yIC5maXhlZFRvIGJlY2F1c2UgdGhhdCB3aWxsIGJyZWFrIHdpdGggYmlnIG51bWJlcnNcbiAqL1xuZnVuY3Rpb24gcm91bmRUb1ByZWNpc2lvbihudW1TdHIgICAgICAgICwgc2NhbGUgICAgICAgICwgZml4ZWREZWNpbWFsU2NhbGUgICAgICAgICApIHtcbiAgLy9pZiBudW1iZXIgaXMgZW1wdHkgZG9uJ3QgZG8gYW55dGhpbmcgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICBpZiAoWycnLCAnLSddLmluZGV4T2YobnVtU3RyKSAhPT0gLTEpIHsgcmV0dXJuIG51bVN0cjsgfVxuXG4gIHZhciBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID0gbnVtU3RyLmluZGV4T2YoJy4nKSAhPT0gLTEgJiYgc2NhbGU7XG4gIHZhciByZWYgPSBzcGxpdERlY2ltYWwobnVtU3RyKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSByZWYuYmVmb3JlRGVjaW1hbDtcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHJlZi5hZnRlckRlY2ltYWw7XG4gIHZhciBoYXNOYWdhdGlvbiA9IHJlZi5oYXNOYWdhdGlvbjtcbiAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KChcIjAuXCIgKyAoYWZ0ZXJEZWNpbWFsIHx8ICcwJykpKTtcbiAgdmFyIGZsb2F0VmFsdWVTdHIgPVxuICAgIGFmdGVyRGVjaW1hbC5sZW5ndGggPD0gc2NhbGUgPyAoXCIwLlwiICsgYWZ0ZXJEZWNpbWFsKSA6IGZsb2F0VmFsdWUudG9GaXhlZChzY2FsZSk7XG4gIHZhciByb3VuZGVkRGVjaW1hbFBhcnRzID0gZmxvYXRWYWx1ZVN0ci5zcGxpdCgnLicpO1xuICB2YXIgaW50UGFydCA9IGJlZm9yZURlY2ltYWxcbiAgICAuc3BsaXQoJycpXG4gICAgLnJldmVyc2UoKVxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHJvdW5kZWRTdHIsIGN1cnJlbnQsIGlkeCkge1xuICAgICAgaWYgKHJvdW5kZWRTdHIubGVuZ3RoID4gaWR4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKE51bWJlcihyb3VuZGVkU3RyWzBdKSArIE51bWJlcihjdXJyZW50KSkudG9TdHJpbmcoKSArXG4gICAgICAgICAgcm91bmRlZFN0ci5zdWJzdHJpbmcoMSwgcm91bmRlZFN0ci5sZW5ndGgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudCArIHJvdW5kZWRTdHI7XG4gICAgfSwgcm91bmRlZERlY2ltYWxQYXJ0c1swXSk7XG5cbiAgdmFyIGRlY2ltYWxQYXJ0ID0gbGltaXRUb1NjYWxlKFxuICAgIHJvdW5kZWREZWNpbWFsUGFydHNbMV0gfHwgJycsXG4gICAgTWF0aC5taW4oc2NhbGUsIGFmdGVyRGVjaW1hbC5sZW5ndGgpLFxuICAgIGZpeGVkRGVjaW1hbFNjYWxlXG4gICk7XG4gIHZhciBuZWdhdGlvbiA9IGhhc05hZ2F0aW9uID8gJy0nIDogJyc7XG4gIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gc2hvdWRIYXZlRGVjaW1hbFNlcGFyYXRvciA/ICcuJyA6ICcnO1xuICByZXR1cm4gKFwiXCIgKyBuZWdhdGlvbiArIGludFBhcnQgKyBkZWNpbWFsU2VwYXJhdG9yICsgZGVjaW1hbFBhcnQpO1xufVxuXG4vKiogc2V0IHRoZSBjYXJldCBwb3NpdG9uIGluIGFuIGlucHV0IGZpZWxkICoqL1xuZnVuY3Rpb24gc2V0Q2FyZXRQb3NpdGlvbihlbCAgICAgICAgICAgICAgICAgICwgY2FyZXRQb3MgICAgICAgICkge1xuICBlbC52YWx1ZSA9IGVsLnZhbHVlO1xuICAvLyBeIHRoaXMgaXMgdXNlZCB0byBub3Qgb25seSBnZXQgJ2ZvY3VzJywgYnV0XG4gIC8vIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGl0IGV2ZXJ5dGhpbmcgLXNlbGVjdGVkLVxuICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIGlmIChlbC5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICAgIHZhciByYW5nZSA9IGVsLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgY2FyZXRQb3MpO1xuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gKGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwIGFkZGVkIGZvciBGaXJlZm94IGJ1ZylcbiAgICBpZiAoZWwuc2VsZWN0aW9uU3RhcnQgfHwgZWwuc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFpbCBjaXR5LCBmb3J0dW5hdGVseSB0aGlzIG5ldmVyIGhhcHBlbnMgKGFzIGZhciBhcyBJJ3ZlIHRlc3RlZCkgOilcbiAgICBlbC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAgR2l2ZW4gcHJldmlvdXMgdmFsdWUgYW5kIG5ld1ZhbHVlIGl0IHJldHVybnMgdGhlIGluZGV4XG4gIHN0YXJ0IC0gZW5kIHRvIHdoaWNoIHZhbHVlcyBoYXZlIGNoYW5nZWQuXG4gIFRoaXMgZnVuY3Rpb24gbWFrZXMgYXNzdW1wdGlvbiBhYm91dCBvbmx5IGNvbnNlY3V0aXZlXG4gIGNoYXJhY3RlcnMgYXJlIGNoYW5nZWQgd2hpY2ggaXMgY29ycmVjdCBhc3N1bXB0aW9uIGZvciBjYXJldCBpbnB1dC5cbiovXG5mdW5jdGlvbiBmaW5kQ2hhbmdlZEluZGV4KHByZXZWYWx1ZSAgICAgICAgLCBuZXdWYWx1ZSAgICAgICAgKSB7XG4gIHZhciBpID0gMCxcbiAgICBqID0gMDtcbiAgdmFyIHByZXZMZW5ndGggPSBwcmV2VmFsdWUubGVuZ3RoO1xuICB2YXIgbmV3TGVuZ3RoID0gbmV3VmFsdWUubGVuZ3RoO1xuICB3aGlsZSAocHJldlZhbHVlW2ldID09PSBuZXdWYWx1ZVtpXSAmJiBpIDwgcHJldkxlbmd0aCkgeyBpKys7IH1cblxuICAvL2NoZWNrIHdoYXQgaGFzIGJlZW4gY2hhbmdlZCBmcm9tIGxhc3RcbiAgd2hpbGUgKFxuICAgIHByZXZWYWx1ZVtwcmV2TGVuZ3RoIC0gMSAtIGpdID09PSBuZXdWYWx1ZVtuZXdMZW5ndGggLSAxIC0gal0gJiZcbiAgICBuZXdMZW5ndGggLSBqID4gaSAmJlxuICAgIHByZXZMZW5ndGggLSBqID4gaVxuICApIHtcbiAgICBqKys7XG4gIH1cblxuICByZXR1cm4geyBzdGFydDogaSwgZW5kOiBwcmV2TGVuZ3RoIC0gaiB9O1xufVxuXG4vKlxuICBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlXG4qL1xuZnVuY3Rpb24gY2xhbXAobnVtICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q2FyZXRQb3NpdGlvbihlbCAgICAgICAgICAgICAgICAgICkge1xuICAvKk1heCBvZiBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIGlzIHRha2VuIGZvciB0aGUgcGF0Y2ggb2YgcGl4ZWwgYW5kIG90aGVyIG1vYmlsZSBkZXZpY2UgY2FyZXQgYnVnKi9cbiAgcmV0dXJuIE1hdGgubWF4KGVsLnNlbGVjdGlvblN0YXJ0LCBlbC5zZWxlY3Rpb25FbmQpO1xufVxuXG5mdW5jdGlvbiBhZGRJbnB1dE1vZGUoZm9ybWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgcmV0dXJuIChcbiAgICBmb3JtYXQgfHxcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICEobmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSlcbiAgKTtcbn1cblxuLy8gICAgIFxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlUeXBlOiAnaW5wdXQnLFxuICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gIHRob3VzYW5kc0dyb3VwU3R5bGU6ICd0aG91c2FuZCcsXG4gIGZpeGVkRGVjaW1hbFNjYWxlOiBmYWxzZSxcbiAgcHJlZml4OiAnJyxcbiAgc3VmZml4OiAnJyxcbiAgYWxsb3dOZWdhdGl2ZTogdHJ1ZSxcbiAgYWxsb3dFbXB0eUZvcm1hdHRpbmc6IGZhbHNlLFxuICBhbGxvd0xlYWRpbmdaZXJvczogZmFsc2UsXG4gIGlzTnVtZXJpY1N0cmluZzogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgb25WYWx1ZUNoYW5nZTogbm9vcCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uS2V5RG93bjogbm9vcCxcbiAgb25Nb3VzZVVwOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbkJsdXI6IG5vb3AsXG4gIGlzQWxsb3dlZDogcmV0dXJuVHJ1ZSxcbn07XG52YXIgTnVtYmVyRm9ybWF0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoc3VwZXJjbGFzcykge1xuICBmdW5jdGlvbiBOdW1iZXJGb3JtYXQocHJvcHMgICAgICAgICkge1xuICAgIHN1cGVyY2xhc3MuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcblxuICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWVQcm9wKGRlZmF1bHRWYWx1ZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgbnVtQXNTdHJpbmc6IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSksXG4gICAgICBtb3VudGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dCA9IHtcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiAwLFxuICAgICAgc2VsZWN0aW9uRW5kOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaWYgKCBzdXBlcmNsYXNzICkgTnVtYmVyRm9ybWF0Ll9fcHJvdG9fXyA9IHN1cGVyY2xhc3M7XG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBzdXBlcmNsYXNzICYmIHN1cGVyY2xhc3MucHJvdG90eXBlICk7XG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJGb3JtYXQ7XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBzZXQgbW91bnRlZCBzdGF0ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMgICAgICAgICkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVJZlJlcXVpcmVkKHByZXZQcm9wcyk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0KTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnVwZGF0ZVZhbHVlSWZSZXF1aXJlZCA9IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlSWZSZXF1aXJlZCAocHJldlByb3BzICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBmb2N1c2VkRWxtID0gcmVmLmZvY3VzZWRFbG07XG4gICAgdmFyIHN0YXRlVmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgbGFzdE51bVN0ciA9IHN0YXRlLm51bUFzU3RyaW5nOyBpZiAoIGxhc3ROdW1TdHIgPT09IHZvaWQgMCApIGxhc3ROdW1TdHIgPSAnJztcblxuICAgIC8vIElmIG9ubHkgc3RhdGUgY2hhbmdlZCBubyBuZWVkIHRvIGRvIGFueSB0aGluZ1xuICAgIGlmIChwcmV2UHJvcHMgIT09IHByb3BzKSB7XG4gICAgICAvL3ZhbGlkYXRlIHByb3BzXG4gICAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgICAgdmFyIGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgPSB0aGlzLmZvcm1hdE51bVN0cmluZyhsYXN0TnVtU3RyKTtcblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gaXNOaWwocHJvcHMudmFsdWUpID8gbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCA6IHRoaXMuZm9ybWF0VmFsdWVQcm9wKCk7XG4gICAgICB2YXIgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpO1xuICAgICAgdmFyIGxhc3RGbG9hdFZhbHVlID0gcGFyc2VGbG9hdChsYXN0TnVtU3RyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAvL3doaWxlIHR5cGluZyBzZXQgc3RhdGUgb25seSB3aGVuIGZsb2F0IHZhbHVlIGNoYW5nZXNcbiAgICAgICAgKCghaXNOYU4oZmxvYXRWYWx1ZSkgfHwgIWlzTmFOKGxhc3RGbG9hdFZhbHVlKSkgJiYgZmxvYXRWYWx1ZSAhPT0gbGFzdEZsb2F0VmFsdWUpIHx8XG4gICAgICAgIC8vY2FuIGFsc28gc2V0IHN0YXRlIHdoZW4gZmxvYXQgdmFsdWUgaXMgc2FtZSBhbmQgdGhlIGZvcm1hdCBwcm9wcyBjaGFuZ2VzXG4gICAgICAgIGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgIT09IHN0YXRlVmFsdWUgfHxcbiAgICAgICAgLy9zZXQgc3RhdGUgYWx3YXlzIHdoZW4gbm90IGluIGZvY3VzIGFuZCBmb3JtYXR0ZWQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICAgICAoZm9jdXNlZEVsbSA9PT0gbnVsbCAmJiBmb3JtYXR0ZWRWYWx1ZSAhPT0gc3RhdGVWYWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nLFxuICAgICAgICAgIGlucHV0OiBmb2N1c2VkRWxtLFxuICAgICAgICAgIHNvdXJjZTogJ3Byb3AnLFxuICAgICAgICAgIGV2ZW50OiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqIE1pc2MgbWV0aG9kcyAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRGbG9hdFN0cmluZyA9IGZ1bmN0aW9uIGdldEZsb2F0U3RyaW5nIChudW0pIHtcbiAgICBpZiAoIG51bSA9PT0gdm9pZCAwICkgbnVtICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpO1xuXG4gICAgLy9yZW1vdmUgbmVnYXRpb24gZm9yIHJlZ2V4IGNoZWNrXG4gICAgdmFyIGhhc05lZ2F0aW9uID0gbnVtWzBdID09PSAnLSc7XG4gICAgaWYgKGhhc05lZ2F0aW9uKSB7IG51bSA9IG51bS5yZXBsYWNlKCctJywgJycpOyB9XG5cbiAgICAvL2lmIGRlY2ltYWwgc2NhbGUgaXMgemVybyByZW1vdmUgZGVjaW1hbCBhbmQgbnVtYmVyIGFmdGVyIGRlY2ltYWxTZXBhcmF0b3JcbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgPT09IDApIHtcbiAgICAgIG51bSA9IG51bS5zcGxpdChkZWNpbWFsU2VwYXJhdG9yKVswXTtcbiAgICB9XG5cbiAgICBudW0gPSAobnVtLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJykucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpO1xuXG4gICAgLy9yZW1vdmUgZXh0cmEgZGVjaW1hbHNcbiAgICB2YXIgZmlyc3REZWNpbWFsSW5kZXggPSBudW0uaW5kZXhPZignLicpO1xuXG4gICAgaWYgKGZpcnN0RGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgbnVtID0gKG51bS5zdWJzdHJpbmcoMCwgZmlyc3REZWNpbWFsSW5kZXgpKSArIFwiLlwiICsgKG51bVxuICAgICAgICAuc3Vic3RyaW5nKGZpcnN0RGVjaW1hbEluZGV4ICsgMSwgbnVtLmxlbmd0aClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZGVjaW1hbFNlcGFyYXRvciksICdnJyksICcnKSk7XG4gICAgfVxuXG4gICAgLy9hZGQgbmVnYXRpb24gYmFja1xuICAgIGlmIChoYXNOZWdhdGlvbikgeyBudW0gPSAnLScgKyBudW07IH1cblxuICAgIHJldHVybiBudW07XG4gIH07XG5cbiAgLy9yZXR1cm5lZCByZWdleCBhc3N1bWVzIGRlY2ltYWxTZXBhcmF0b3IgaXMgYXMgcGVyIHByb3BcbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXROdW1iZXJSZWdleCA9IGZ1bmN0aW9uIGdldE51bWJlclJlZ2V4IChnICAgICAgICAgLCBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yICAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBjdXN0b21OdW1lcmFscyA9IHJlZi5jdXN0b21OdW1lcmFscztcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnWzAtOScgK1xuICAgICAgICAoY3VzdG9tTnVtZXJhbHMgPyBjdXN0b21OdW1lcmFscy5qb2luKCcnKSA6ICcnKSArXG4gICAgICAgICddJyArXG4gICAgICAgIChkZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTY2FsZSAhPT0gMCAmJiAhaWdub3JlRGVjaW1hbFNlcGFyYXRvciAmJiAhZm9ybWF0XG4gICAgICAgICAgPyAnfCcgKyBlc2NhcGVSZWdFeHAoZGVjaW1hbFNlcGFyYXRvcilcbiAgICAgICAgICA6ICcnKSxcbiAgICAgIGcgPyAnZycgOiB1bmRlZmluZWRcbiAgICApO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0U2VwYXJhdG9ycyA9IGZ1bmN0aW9uIGdldFNlcGFyYXRvcnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmJDEuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzO1xuXG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yID09PSB0cnVlKSB7XG4gICAgICB0aG91c2FuZFNlcGFyYXRvciA9ICcsJztcbiAgICB9XG4gICAgaWYgKCFhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMpIHtcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IFtkZWNpbWFsU2VwYXJhdG9yLCAnLiddO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZWNpbWFsU2VwYXJhdG9yOiBkZWNpbWFsU2VwYXJhdG9yLFxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IHRob3VzYW5kU2VwYXJhdG9yLFxuICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzOiBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMsXG4gICAgfTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldE1hc2tBdEluZGV4ID0gZnVuY3Rpb24gZ2V0TWFza0F0SW5kZXggKGluZGV4ICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgbWFzayA9IHJlZi5tYXNrOyBpZiAoIG1hc2sgPT09IHZvaWQgMCApIG1hc2sgPSAnICc7XG4gICAgaWYgKHR5cGVvZiBtYXNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hc2tbaW5kZXhdIHx8ICcgJztcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldFZhbHVlT2JqZWN0ID0gZnVuY3Rpb24gZ2V0VmFsdWVPYmplY3QgKGZvcm1hdHRlZFZhbHVlICAgICAgICAsIG51bUFzU3RyaW5nICAgICAgICApIHtcbiAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIHZhbHVlOiBudW1Bc1N0cmluZyxcbiAgICAgIGZsb2F0VmFsdWU6IGlzTmFOKGZsb2F0VmFsdWUpID8gdW5kZWZpbmVkIDogZmxvYXRWYWx1ZSxcbiAgICB9O1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudmFsaWRhdGVQcm9wcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrID0gcmVmLm1hc2s7XG5cbiAgICAvL3ZhbGlkYXRlIGRlY2ltYWxTZXBhcmF0b3IgYW5kIHRob3VzYW5kU2VwYXJhdG9yXG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHJlZiQxLnRob3VzYW5kU2VwYXJhdG9yO1xuXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiXFxuICAgICAgICAgIERlY2ltYWwgc2VwYXJhdG9yIGNhbid0IGJlIHNhbWUgYXMgdGhvdXNhbmQgc2VwYXJhdG9yLlxcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcjogXCIgKyB0aG91c2FuZFNlcGFyYXRvciArIFwiICh0aG91c2FuZFNlcGFyYXRvciA9IHt0cnVlfSBpcyBzYW1lIGFzIHRob3VzYW5kU2VwYXJhdG9yID0gXFxcIixcXFwiKVxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBcIiArIGRlY2ltYWxTZXBhcmF0b3IgKyBcIiAoZGVmYXVsdCB2YWx1ZSBmb3IgZGVjaW1hbFNlcGFyYXRvciBpcyAuKVxcbiAgICAgICBcIikpO1xuICAgIH1cblxuICAgIC8vdmFsaWRhdGUgbWFza1xuICAgIGlmIChtYXNrKSB7XG4gICAgICB2YXIgbWFza0FzU3RyID0gbWFzayA9PT0gJ3N0cmluZycgPyBtYXNrIDogbWFzay50b1N0cmluZygpO1xuICAgICAgaWYgKG1hc2tBc1N0ci5tYXRjaCgvXFxkL2cpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJcXG4gICAgICAgICAgTWFzayBcIiArIG1hc2sgKyBcIiBzaG91bGQgbm90IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXI7XFxuICAgICAgICBcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqIE1pc2MgbWV0aG9kcyBlbmQgKiovXG5cbiAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbiAoZWwgICAgICAgICAgICAgICAgICAsIGNhcmV0UG9zICAgICAgICAsIGN1cnJlbnRWYWx1ZSAgICAgICAgKSB7XG4gICAgLyogc2V0dGluZyBjYXJldCBwb3NpdGlvbiB3aXRoaW4gdGltZW91dCBvZiAwbXMgaXMgcmVxdWlyZWQgZm9yIG1vYmlsZSBjaHJvbWUsXG4gICAgb3RoZXJ3aXNlIGJyb3dzZXIgcmVzZXRzIHRoZSBjYXJldCBwb3NpdGlvbiBhZnRlciB3ZSBzZXQgaXRcbiAgICBXZSBhcmUgYWxzbyBzZXR0aW5nIGl0IHdpdGhvdXQgdGltZW91dCBzbyB0aGF0IGluIG5vcm1hbCBicm93c2VyIHdlIGRvbid0IHNlZSB0aGUgZmxpY2tlcmluZyAqL1xuICAgIHNldENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zKTtcbiAgICB0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWwudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSkgeyBzZXRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcyk7IH1cbiAgICB9LCAwKTtcbiAgfTtcblxuICAvKiBUaGlzIGtlZXBzIHRoZSBjYXJldCB3aXRoaW4gdHlwaW5nIGFyZWEgc28gcGVvcGxlIGNhbid0IHR5cGUgaW4gYmV0d2VlbiBwcmVmaXggb3Igc3VmZml4ICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29ycmVjdENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBjb3JyZWN0Q2FyZXRQb3NpdGlvbiAodmFsdWUgICAgICAgICwgY2FyZXRQb3MgICAgICAgICwgZGlyZWN0aW9uICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG5cbiAgICAvL2lmIHZhbHVlIGlzIGVtcHR5IHJldHVybiAwXG4gICAgaWYgKHZhbHVlID09PSAnJykgeyByZXR1cm4gMDsgfVxuXG4gICAgLy9jYXJldCBwb3NpdGlvbiBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCB2YWx1ZSBsZW5ndGhcbiAgICBjYXJldFBvcyA9IGNsYW1wKGNhcmV0UG9zLCAwLCB2YWx1ZS5sZW5ndGgpO1xuXG4gICAgLy9pbiBjYXNlIG9mIGZvcm1hdCBhcyBudW1iZXIgbGltaXQgYmV0d2VlbiBwcmVmaXggYW5kIHN1ZmZpeFxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YXIgaGFzTmVnYXRpb24gPSB2YWx1ZVswXSA9PT0gJy0nO1xuICAgICAgcmV0dXJuIGNsYW1wKGNhcmV0UG9zLCBwcmVmaXgubGVuZ3RoICsgKGhhc05lZ2F0aW9uID8gMSA6IDApLCB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvL2luIGNhc2UgaWYgY3VzdG9tIGZvcm1hdCBtZXRob2QgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gY2FyZXRQb3M7IH1cblxuICAgIC8qIGluIGNhc2UgZm9ybWF0IGlzIHN0cmluZyBmaW5kIHRoZSBjbG9zZXN0ICMgcG9zaXRpb24gZnJvbSB0aGUgY2FyZXQgcG9zaXRpb24gKi9cblxuICAgIC8vaW4gY2FzZSB0aGUgY2FyZXRQb3MgaGF2ZSBpbnB1dCB2YWx1ZSBvbiBpdCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChmb3JtYXRbY2FyZXRQb3NdID09PSAnIycgJiYgY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UG9zXSkpIHtcbiAgICAgIHJldHVybiBjYXJldFBvcztcbiAgICB9XG5cbiAgICAvL2lmIGNhcmV0UG9zIGlzIGp1c3QgYWZ0ZXIgaW5wdXQgdmFsdWUgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoZm9ybWF0W2NhcmV0UG9zIC0gMV0gPT09ICcjJyAmJiBjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRQb3MgLSAxXSkpIHtcbiAgICAgIHJldHVybiBjYXJldFBvcztcbiAgICB9XG5cbiAgICAvL2ZpbmQgdGhlIG5lYXJlc3QgY2FyZXQgcG9zaXRpb25cbiAgICB2YXIgZmlyc3RIYXNoUG9zaXRpb24gPSBmb3JtYXQuaW5kZXhPZignIycpO1xuICAgIHZhciBsYXN0SGFzaFBvc2l0aW9uID0gZm9ybWF0Lmxhc3RJbmRleE9mKCcjJyk7XG5cbiAgICAvL2xpbWl0IHRoZSBjdXJzb3IgYmV0d2VlbiB0aGUgZmlyc3QgIyBwb3NpdGlvbiBhbmQgdGhlIGxhc3QgIyBwb3NpdGlvblxuICAgIGNhcmV0UG9zID0gY2xhbXAoY2FyZXRQb3MsIGZpcnN0SGFzaFBvc2l0aW9uLCBsYXN0SGFzaFBvc2l0aW9uICsgMSk7XG5cbiAgICB2YXIgbmV4dFBvcyA9IGZvcm1hdC5zdWJzdHJpbmcoY2FyZXRQb3MsIGZvcm1hdC5sZW5ndGgpLmluZGV4T2YoJyMnKTtcbiAgICB2YXIgY2FyZXRMZWZ0Qm91bmQgPSBjYXJldFBvcztcbiAgICB2YXIgY2FyZXRSaWdodEJvdW5kID0gY2FyZXRQb3MgKyAobmV4dFBvcyA9PT0gLTEgPyAwIDogbmV4dFBvcyk7XG5cbiAgICAvL2dldCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGxhc3QgbnVtYmVyIGlzIHByZXNlbnRcbiAgICB3aGlsZSAoXG4gICAgICBjYXJldExlZnRCb3VuZCA+IGZpcnN0SGFzaFBvc2l0aW9uICYmXG4gICAgICAoZm9ybWF0W2NhcmV0TGVmdEJvdW5kXSAhPT0gJyMnIHx8ICFjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRMZWZ0Qm91bmRdKSlcbiAgICApIHtcbiAgICAgIGNhcmV0TGVmdEJvdW5kIC09IDE7XG4gICAgfVxuXG4gICAgdmFyIGdvVG9MZWZ0ID1cbiAgICAgICFjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRSaWdodEJvdW5kXSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjYXJldFBvcyAhPT0gZmlyc3RIYXNoUG9zaXRpb24pIHx8XG4gICAgICBjYXJldFBvcyAtIGNhcmV0TGVmdEJvdW5kIDwgY2FyZXRSaWdodEJvdW5kIC0gY2FyZXRQb3M7XG5cbiAgICBpZiAoZ29Ub0xlZnQpIHtcbiAgICAgIC8vY2hlY2sgaWYgbnVtYmVyIHNob3VsZCBiZSB0YWtlbiBhZnRlciB0aGUgYm91bmQgb3IgYWZ0ZXIgaXRcbiAgICAgIC8vaWYgbnVtYmVyIHByZWNlZGluZyBhIHZhbGlkIG51bWJlciBrZWVwIGl0IGFmdGVyXG4gICAgICByZXR1cm4gY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkgPyBjYXJldExlZnRCb3VuZCArIDEgOiBjYXJldExlZnRCb3VuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZXRSaWdodEJvdW5kO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0Q2FyZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldENhcmV0UG9zaXRpb24gKGlucHV0VmFsdWUgICAgICAgICwgZm9ybWF0dGVkVmFsdWUgICAgICAgICwgY2FyZXRQb3MgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBzdGF0ZVZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpO1xuICAgIHZhciBpbnB1dE51bWJlciA9IChpbnB1dFZhbHVlLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJyk7XG4gICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IChmb3JtYXR0ZWRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgIHZhciBqLCBpO1xuXG4gICAgaiA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZXRQb3M7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRJbnB1dENoYXIgPSBpbnB1dFZhbHVlW2ldIHx8ICcnO1xuICAgICAgdmFyIGN1cnJlbnRGb3JtYXRDaGFyID0gZm9ybWF0dGVkVmFsdWVbal0gfHwgJyc7XG4gICAgICAvL25vIG5lZWQgdG8gaW5jcmVhc2UgbmV3IGN1cnNvciBwb3NpdGlvbiBpZiBmb3JtYXR0ZWQgdmFsdWUgZG9lcyBub3QgaGF2ZSB0aG9zZSBjaGFyYWN0ZXJzXG4gICAgICAvL2Nhc2UgaW5wdXRWYWx1ZSA9IDFhMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gIDEyM1xuICAgICAgaWYgKCFjdXJyZW50SW5wdXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJiBjdXJyZW50SW5wdXRDaGFyICE9PSBjdXJyZW50Rm9ybWF0Q2hhcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy9XaGVuIHdlIGFyZSBzdHJpcGluZyBvdXQgbGVhZGluZyB6ZXJvcyBtYWludGFpbiB0aGUgbmV3IGN1cnNvciBwb3NpdGlvblxuICAgICAgLy9DYXNlIGlucHV0VmFsdWUgPSAwMDAyMyBhbmQgZm9ybWF0dGVkVmFsdWUgPSAyMztcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudElucHV0Q2hhciA9PT0gJzAnICYmXG4gICAgICAgIGN1cnJlbnRGb3JtYXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJlxuICAgICAgICBjdXJyZW50Rm9ybWF0Q2hhciAhPT0gJzAnICYmXG4gICAgICAgIGlucHV0TnVtYmVyLmxlbmd0aCAhPT0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvL3dlIGFyZSBub3QgdXNpbmcgY3VycmVudEZvcm1hdENoYXIgYmVjYXVzZSBqIGNhbiBjaGFuZ2UgaGVyZVxuICAgICAgd2hpbGUgKGN1cnJlbnRJbnB1dENoYXIgIT09IGZvcm1hdHRlZFZhbHVlW2pdICYmIGogPCBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaisrO1xuICAgICAgfVxuICAgICAgaisrO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiAhc3RhdGVWYWx1ZSkge1xuICAgICAgLy9zZXQgaXQgdG8gdGhlIG1heGltdW0gdmFsdWUgc28gaXQgZ29lcyBhZnRlciB0aGUgbGFzdCBudW1iZXJcbiAgICAgIGogPSBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy9jb3JyZWN0IGNhcmV0IHBvc2l0aW9uIGlmIGl0cyBvdXRzaWRlIG9mIGVkaXRhYmxlIGFyZWFcbiAgICBqID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbihmb3JtYXR0ZWRWYWx1ZSwgaik7XG5cbiAgICByZXR1cm4gajtcbiAgfTtcbiAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgZW5kcyAqKi9cblxuICAvKiogbWV0aG9kcyB0byByZW1vdmUgZm9ybWF0dHRpbmcgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUucmVtb3ZlUHJlZml4QW5kU3VmZml4ID0gZnVuY3Rpb24gcmVtb3ZlUHJlZml4QW5kU3VmZml4ICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuXG4gICAgLy9yZW1vdmUgcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAoIWZvcm1hdCAmJiB2YWwpIHtcbiAgICAgIHZhciBpc05lZ2F0aXZlID0gdmFsWzBdID09PSAnLSc7XG5cbiAgICAgIC8vcmVtb3ZlIG5lZ2F0aW9uIHNpZ25cbiAgICAgIGlmIChpc05lZ2F0aXZlKSB7IHZhbCA9IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCk7IH1cblxuICAgICAgLy9yZW1vdmUgcHJlZml4XG4gICAgICB2YWwgPSBwcmVmaXggJiYgdmFsLmluZGV4T2YocHJlZml4KSA9PT0gMCA/IHZhbC5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCwgdmFsLmxlbmd0aCkgOiB2YWw7XG5cbiAgICAgIC8vcmVtb3ZlIHN1ZmZpeFxuICAgICAgdmFyIHN1ZmZpeExhc3RJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihzdWZmaXgpO1xuICAgICAgdmFsID1cbiAgICAgICAgc3VmZml4ICYmIHN1ZmZpeExhc3RJbmRleCAhPT0gLTEgJiYgc3VmZml4TGFzdEluZGV4ID09PSB2YWwubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgICAgID8gdmFsLnN1YnN0cmluZygwLCBzdWZmaXhMYXN0SW5kZXgpXG4gICAgICAgICAgOiB2YWw7XG5cbiAgICAgIC8vYWRkIG5lZ2F0aW9uIHNpZ24gYmFja1xuICAgICAgaWYgKGlzTmVnYXRpdmUpIHsgdmFsID0gJy0nICsgdmFsOyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nID0gZnVuY3Rpb24gcmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcgKHZhbCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGZvcm1hdEFycmF5ID0gZm9ybWF0LnNwbGl0KCcjJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0ciAhPT0gJyc7IH0pO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIG51bVN0ciA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0QXJyYXkubGVuZ3RoOyBpIDw9IGxuOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gZm9ybWF0QXJyYXlbaV0gfHwgJyc7XG5cbiAgICAgIC8vaWYgaSBpcyB0aGUgbGFzdCBmcmFnbWVudCB0YWtlIHRoZSBpbmRleCBvZiBlbmQgb2YgdGhlIHZhbHVlXG4gICAgICAvL0ZvciBjYXNlIGxpa2UgKzEgKDkxMSkgOTExIDkxIDkxIGhhdmluZyBwYXR0ZXJuICsxICgjIyMpICMjIyAjIyAjI1xuICAgICAgdmFyIGluZGV4ID0gaSA9PT0gbG4gPyB2YWwubGVuZ3RoIDogdmFsLmluZGV4T2YocGFydCwgc3RhcnQpO1xuXG4gICAgICAvKiBpbiBhbnkgY2FzZSBpZiB3ZSBkb24ndCBmaW5kIHRoZSBwYXR0ZXJuIHBhcnQgaW4gdGhlIHZhbHVlIGFzc3VtZSB0aGUgdmFsIGFzIG51bWVyaWMgc3RyaW5nXG4gICAgICBUaGlzIHdpbGwgYmUgYWxzbyBpbiBjYXNlIGlmIHVzZXIgaGFzIHN0YXJ0ZWQgdHlwaW5nLCBpbiBhbnkgb3RoZXIgY2FzZSBpdCB3aWxsIG5vdCBiZSAtMVxuICAgICAgdW5sZXNzIHdyb25nIHByb3AgdmFsdWUgaXMgcHJvdmlkZWQgKi9cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgbnVtU3RyID0gdmFsO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bVN0ciArPSB2YWwuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCk7XG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyBwYXJ0Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKG51bVN0ci5tYXRjaCh0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpKSB8fCBbXSkuam9pbignJyk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW1vdmVGb3JtYXR0aW5nID0gZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZyAodmFsICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcmVtb3ZlRm9ybWF0dGluZyA9IHJlZi5yZW1vdmVGb3JtYXR0aW5nO1xuICAgIGlmICghdmFsKSB7IHJldHVybiB2YWw7IH1cblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YWwgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWwpO1xuICAgICAgdmFsID0gdGhpcy5nZXRGbG9hdFN0cmluZyh2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcodmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW1vdmVGb3JtYXR0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvL2NvbmRpdGlvbiBuZWVkIHRvIGJlIGhhbmRsZWQgaWYgZm9ybWF0IG1ldGhvZCBpcyBwcm92aWRlLFxuICAgICAgdmFsID0gcmVtb3ZlRm9ybWF0dGluZyh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSAodmFsLm1hdGNoKHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSkpIHx8IFtdKS5qb2luKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbiAgLyoqIG1ldGhvZHMgdG8gcmVtb3ZlIGZvcm1hdHR0aW5nIGVuZCAqKi9cblxuICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIHN0YXJ0ICoqKi9cbiAgLyoqXG4gICAqIEZvcm1hdCB3aGVuICMgYmFzZWQgc3RyaW5nIGlzIHByb3ZpZGVkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbnVtU3RyIE51bWVyaWMgU3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgIGZvcm1hdHRlZCBWYWx1ZVxuICAgKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRXaXRoUGF0dGVybiA9IGZ1bmN0aW9uIGZvcm1hdFdpdGhQYXR0ZXJuIChudW1TdHIgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBoYXNoQ291bnQgPSAwO1xuICAgIHZhciBmb3JtYXR0ZWROdW1iZXJBcnkgPSBmb3JtYXQuc3BsaXQoJycpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsbiA9IGZvcm1hdC5sZW5ndGg7IGkgPCBsbjsgaSsrKSB7XG4gICAgICBpZiAoZm9ybWF0W2ldID09PSAnIycpIHtcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyQXJ5W2ldID0gbnVtU3RyW2hhc2hDb3VudF0gfHwgdGhpcy5nZXRNYXNrQXRJbmRleChoYXNoQ291bnQpO1xuICAgICAgICBoYXNoQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlckFyeS5qb2luKCcnKTtcbiAgfTtcbiAgLyoqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbnVtU3RyIE51bWVyaWMgc3RyaW5nL2Zsb2F0U3RyaW5nXSBJdCBhbHdheXMgaGF2ZSBkZWNpbWFsU2VwYXJhdG9yIGFzIC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBmb3JtYXR0ZWQgVmFsdWVcbiAgICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0QXNOdW1iZXIgPSBmdW5jdGlvbiBmb3JtYXRBc051bWJlciAobnVtU3RyICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgdGhvdXNhbmRzR3JvdXBTdHlsZSA9IHJlZi50aG91c2FuZHNHcm91cFN0eWxlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHJlZiQxLnRob3VzYW5kU2VwYXJhdG9yO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcblxuICAgIHZhciBoYXNEZWNpbWFsU2VwYXJhdG9yID0gbnVtU3RyLmluZGV4T2YoJy4nKSAhPT0gLTEgfHwgKGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgdmFyIHJlZiQyID0gc3BsaXREZWNpbWFsKG51bVN0ciwgYWxsb3dOZWdhdGl2ZSk7XG4gICAgdmFyIGJlZm9yZURlY2ltYWwgPSByZWYkMi5iZWZvcmVEZWNpbWFsO1xuICAgIHZhciBhZnRlckRlY2ltYWwgPSByZWYkMi5hZnRlckRlY2ltYWw7XG4gICAgdmFyIGFkZE5lZ2F0aW9uID0gcmVmJDIuYWRkTmVnYXRpb247IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgICAvL2FwcGx5IGRlY2ltYWwgcHJlY2lzaW9uIGlmIGl0cyBkZWZpbmVkXG4gICAgaWYgKGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhZnRlckRlY2ltYWwgPSBsaW1pdFRvU2NhbGUoYWZ0ZXJEZWNpbWFsLCBkZWNpbWFsU2NhbGUsIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgICB9XG5cbiAgICBpZiAodGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgIGJlZm9yZURlY2ltYWwgPSBhcHBseVRob3VzYW5kU2VwYXJhdG9yKGJlZm9yZURlY2ltYWwsIHRob3VzYW5kU2VwYXJhdG9yLCB0aG91c2FuZHNHcm91cFN0eWxlKTtcbiAgICB9XG5cbiAgICAvL2FkZCBwcmVmaXggYW5kIHN1ZmZpeFxuICAgIGlmIChwcmVmaXgpIHsgYmVmb3JlRGVjaW1hbCA9IHByZWZpeCArIGJlZm9yZURlY2ltYWw7IH1cbiAgICBpZiAoc3VmZml4KSB7IGFmdGVyRGVjaW1hbCA9IGFmdGVyRGVjaW1hbCArIHN1ZmZpeDsgfVxuXG4gICAgLy9yZXN0b3JlIG5lZ2F0aW9uIHNpZ25cbiAgICBpZiAoYWRkTmVnYXRpb24pIHsgYmVmb3JlRGVjaW1hbCA9ICctJyArIGJlZm9yZURlY2ltYWw7IH1cblxuICAgIG51bVN0ciA9IGJlZm9yZURlY2ltYWwgKyAoKGhhc0RlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNlcGFyYXRvcikgfHwgJycpICsgYWZ0ZXJEZWNpbWFsO1xuXG4gICAgcmV0dXJuIG51bVN0cjtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdE51bVN0cmluZyA9IGZ1bmN0aW9uIGZvcm1hdE51bVN0cmluZyAobnVtU3RyKSB7XG4gICAgaWYgKCBudW1TdHIgPT09IHZvaWQgMCApIG51bVN0ciAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgYWxsb3dFbXB0eUZvcm1hdHRpbmcgPSByZWYuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgdmFyIGN1c3RvbU51bWVyYWxzID0gcmVmLmN1c3RvbU51bWVyYWxzO1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IG51bVN0cjtcblxuICAgIGlmIChjdXN0b21OdW1lcmFscyAmJiBjdXN0b21OdW1lcmFscy5sZW5ndGggPT09IDEwKSB7XG4gICAgICB2YXIgY3VzdG9tTnVtZXJhbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnWycgKyBjdXN0b21OdW1lcmFscy5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gbnVtU3RyLnJlcGxhY2UoY3VzdG9tTnVtZXJhbFJlZ2V4LCBmdW5jdGlvbiAoZGlnaXQpIHsgcmV0dXJuIGN1c3RvbU51bWVyYWxzLmluZGV4T2YoZGlnaXQpLnRvU3RyaW5nKCk7IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG51bVN0ciA9PT0gJycgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobnVtU3RyID09PSAnLScgJiYgIWZvcm1hdCkge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSAnLSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdFdpdGhQYXR0ZXJuKGZvcm1hdHRlZFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0KGZvcm1hdHRlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdEFzTnVtYmVyKGZvcm1hdHRlZFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRWYWx1ZVByb3AgPSBmdW5jdGlvbiBmb3JtYXRWYWx1ZVByb3AgKGRlZmF1bHRWYWx1ZSAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IHJlZi5hbGxvd0VtcHR5Rm9ybWF0dGluZztcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlO1xuICAgIHZhciBpc051bWVyaWNTdHJpbmcgPSByZWYkMS5pc051bWVyaWNTdHJpbmc7XG5cbiAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdXNlIGRlZmF1bHRWYWx1ZSBpbnN0ZWFkXG4gICAgdmFsdWUgPSBpc05pbCh2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcblxuICAgIHZhciBpc05vbk51bWVyaWNGYWxzeSA9ICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMDtcblxuICAgIGlmIChpc05vbk51bWVyaWNGYWxzeSAmJiBhbGxvd0VtcHR5Rm9ybWF0dGluZykge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBpZiB2YWx1ZSBpcyBub3QgZGVmaW5lZCByZXR1cm4gZW1wdHkgc3RyaW5nXG4gICAgaWYgKGlzTm9uTnVtZXJpY0ZhbHN5ICYmICFhbGxvd0VtcHR5Rm9ybWF0dGluZykgeyByZXR1cm4gJyc7IH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHRvTnVtZXJpY1N0cmluZyh2YWx1ZSk7XG4gICAgICBpc051bWVyaWNTdHJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vY2hhbmdlIGluZmluaXR5IHZhbHVlIHRvIGVtcHR5IHN0cmluZ1xuICAgIGlmICh2YWx1ZSA9PT0gJ0luZmluaXR5JyAmJiBpc051bWVyaWNTdHJpbmcpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy9yb3VuZCB0aGUgbnVtYmVyIGJhc2VkIG9uIGRlY2ltYWxTY2FsZVxuICAgIC8vZm9ybWF0IG9ubHkgaWYgbm9uIGZvcm1hdHRlZCB2YWx1ZSBpcyBwcm92aWRlZFxuICAgIGlmIChpc051bWVyaWNTdHJpbmcgJiYgIWZvcm1hdCAmJiB0eXBlb2YgZGVjaW1hbFNjYWxlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSByb3VuZFRvUHJlY2lzaW9uKHZhbHVlLCBkZWNpbWFsU2NhbGUsIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpc051bWVyaWNTdHJpbmcgPyB0aGlzLmZvcm1hdE51bVN0cmluZyh2YWx1ZSkgOiB0aGlzLmZvcm1hdElucHV0KHZhbHVlKTtcblxuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdE5lZ2F0aW9uID0gZnVuY3Rpb24gZm9ybWF0TmVnYXRpb24gKHZhbHVlKSB7XG4gICAgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgbmVnYXRpb25SZWdleCA9IG5ldyBSZWdFeHAoJygtKScpO1xuICAgIHZhciBkb3VibGVOZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pKC4pKigtKScpO1xuXG4gICAgLy8gQ2hlY2sgbnVtYmVyIGhhcyAnLScgdmFsdWVcbiAgICB2YXIgaGFzTmVnYXRpb24gPSBuZWdhdGlvblJlZ2V4LnRlc3QodmFsdWUpO1xuXG4gICAgLy8gQ2hlY2sgbnVtYmVyIGhhcyAyIG9yIG1vcmUgJy0nIHZhbHVlc1xuICAgIHZhciByZW1vdmVOZWdhdGlvbiA9IGRvdWJsZU5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7XG5cbiAgICAvL3JlbW92ZSBuZWdhdGlvblxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG5cbiAgICBpZiAoaGFzTmVnYXRpb24gJiYgIXJlbW92ZU5lZ2F0aW9uICYmIGFsbG93TmVnYXRpdmUpIHtcbiAgICAgIHZhbHVlID0gJy0nICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0SW5wdXQgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dCAodmFsdWUpIHtcbiAgICBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcblxuICAgIC8vZm9ybWF0IG5lZ2F0aW9uIG9ubHkgaWYgd2UgYXJlIGZvcm1hdHRpbmcgYXMgbnVtYmVyXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVQcmVmaXhBbmRTdWZmaXgodmFsdWUpO1xuICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdE5lZ2F0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvL3JlbW92ZSBmb3JtYXR0aW5nIGZyb20gbnVtYmVyXG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcodmFsdWUpO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0TnVtU3RyaW5nKHZhbHVlKTtcbiAgfTtcblxuICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIGVuZCAqKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuaXNDaGFyYWN0ZXJBRm9ybWF0ID0gZnVuY3Rpb24gaXNDaGFyYWN0ZXJBRm9ybWF0IChjYXJldFBvcyAgICAgICAgLCB2YWx1ZSAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcblxuICAgIC8vY2hlY2sgd2l0aGluIGZvcm1hdCBwYXR0ZXJuXG4gICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnICYmIGZvcm1hdFtjYXJldFBvc10gIT09ICcjJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgLy9jaGVjayBpbiBudW1iZXIgZm9ybWF0XG4gICAgaWYgKFxuICAgICAgIWZvcm1hdCAmJlxuICAgICAgKGNhcmV0UG9zIDwgcHJlZml4Lmxlbmd0aCB8fFxuICAgICAgICBjYXJldFBvcyA+PSB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoIHx8XG4gICAgICAgIChkZWNpbWFsU2NhbGUgJiYgZml4ZWREZWNpbWFsU2NhbGUgJiYgdmFsdWVbY2FyZXRQb3NdID09PSBkZWNpbWFsU2VwYXJhdG9yKSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyB3aWxsIGNoZWNrIGlmIGFueSBmb3JtYXR0aW5nIGdvdCByZW1vdmVkIGJ5IHRoZSBkZWxldGUgb3IgYmFja3NwYWNlIGFuZCByZXNldCB0aGUgdmFsdWVcbiAgICogSXQgd2lsbCBhbHNvIHdvcmsgYXMgZmFsbGJhY2sgaWYgYW5kcm9pZCBjaG9tZSBrZXlEb3duIGhhbmRsZXIgZG9lcyBub3Qgd29ya1xuICAgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29ycmVjdElucHV0VmFsdWUgPSBmdW5jdGlvbiBjb3JyZWN0SW5wdXRWYWx1ZSAoY2FyZXRQb3MgICAgICAgICwgbGFzdFZhbHVlICAgICAgICAsIHZhbHVlICAgICAgICApIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IHJlZiQxLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIGxhc3ROdW1TdHIgPSB0aGlzLnN0YXRlLm51bUFzU3RyaW5nIHx8ICcnO1xuICAgIHZhciByZWYkMiA9IHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQ7XG4gICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gcmVmJDIuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIHNlbGVjdGlvbkVuZCA9IHJlZiQyLnNlbGVjdGlvbkVuZDtcbiAgICB2YXIgcmVmJDMgPSBmaW5kQ2hhbmdlZEluZGV4KGxhc3RWYWx1ZSwgdmFsdWUpO1xuICAgIHZhciBzdGFydCA9IHJlZiQzLnN0YXJ0O1xuICAgIHZhciBlbmQgPSByZWYkMy5lbmQ7XG5cbiAgICAvKiogQ2hlY2sgZm9yIGFueSBhbGxvd2VkIGRlY2ltYWwgc2VwYXJhdG9yIGlzIGFkZGVkIGluIHRoZSBudW1lcmljIGZvcm1hdCBhbmQgcmVwbGFjZSBpdCB3aXRoIGRlY2ltYWwgc2VwYXJhdG9yICovXG4gICAgaWYgKFxuICAgICAgIWZvcm1hdCAmJlxuICAgICAgc3RhcnQgPT09IGVuZCAmJlxuICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzLmluZGV4T2YodmFsdWVbc2VsZWN0aW9uU3RhcnRdKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBkZWNpbWFsU2NhbGUgPT09IDAgPyAnJyA6IGRlY2ltYWxTZXBhcmF0b3I7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uU3RhcnQpICsgc2VwYXJhdG9yICsgdmFsdWUuc3Vic3RyKHNlbGVjdGlvblN0YXJ0ICsgMSwgdmFsdWUubGVuZ3RoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgbGVmdEJvdW5kID0gISFmb3JtYXQgPyAwIDogcHJlZml4Lmxlbmd0aDtcbiAgICB2YXIgcmlnaHRCb3VuZCA9IGxhc3RWYWx1ZS5sZW5ndGggLSAoISFmb3JtYXQgPyAwIDogc3VmZml4Lmxlbmd0aCk7XG5cbiAgICBpZiAoXG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzb21ldGhpbmcgZ290IGFkZGVkXG4gICAgICB2YWx1ZS5sZW5ndGggPiBsYXN0VmFsdWUubGVuZ3RoIHx8XG4gICAgICAvLyBvciBpZiB0aGUgbmV3IHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgIXZhbHVlLmxlbmd0aCB8fFxuICAgICAgLy8gb3IgaWYgbm90aGluZyBoYXMgY2hhbmdlZCwgaW4gd2hpY2ggY2FzZSBzdGFydCB3aWxsIGJlIHNhbWUgYXMgZW5kXG4gICAgICBzdGFydCA9PT0gZW5kIHx8XG4gICAgICAvLyBvciBpbiBjYXNlIGlmIHdob2xlIGlucHV0IGlzIHNlbGVjdGVkIGFuZCBuZXcgdmFsdWUgaXMgdHlwZWRcbiAgICAgIChzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IGxhc3RWYWx1ZS5sZW5ndGgpIHx8XG4gICAgICAvLyBvciBpbiBjYXNlIGlmIHRoZSB3aG9sZSBjb250ZW50IGlzIHJlcGxhY2VkIGJ5IGJyb3dzZXIsIGV4YW1wbGUgKGF1dG9jb21wbGV0ZSlcbiAgICAgIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RWYWx1ZS5sZW5ndGgpIHx8XG4gICAgICAvLyBvciBpZiBjaGFyY3RlcnMgYmV0d2VlbiBwcmVmaXggYW5kIHN1ZmZpeCBpcyBzZWxlY3RlZC5cbiAgICAgIC8vIEZvciBudW1lcmljIGlucHV0cyB3ZSBhcHBseSB0aGUgZm9ybWF0IHNvLCBwcmVmaXggYW5kIHN1ZmZpeCBjYW4gYmUgaWdub3JlZFxuICAgICAgKHNlbGVjdGlvblN0YXJ0ID09PSBsZWZ0Qm91bmQgJiYgc2VsZWN0aW9uRW5kID09PSByaWdodEJvdW5kKVxuICAgICkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIGRlbGV0ZWQgcG9ydGlvbiBoYXMgYSBjaGFyYWN0ZXIgdGhhdCBpcyBwYXJ0IG9mIGEgZm9ybWF0XG4gICAgdmFyIGRlbGV0ZWRWYWx1ZXMgPSBsYXN0VmFsdWUuc3Vic3RyKHN0YXJ0LCBlbmQgLSBzdGFydCk7XG4gICAgdmFyIGZvcm1hdEdvdERlbGV0ZWQgPSAhIVtdLmNvbmNhdCggZGVsZXRlZFZhbHVlcyApLmZpbmQoZnVuY3Rpb24gKGRlbGV0ZWRWYWwsIGlkeCkgeyByZXR1cm4gdGhpcyQxLmlzQ2hhcmFjdGVyQUZvcm1hdChpZHggKyBzdGFydCwgbGFzdFZhbHVlKTsgfVxuICAgICk7XG5cbiAgICAvLyBpZiBpdCBoYXMsIG9ubHkgcmVtb3ZlIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGZvcm1hdFxuICAgIGlmIChmb3JtYXRHb3REZWxldGVkKSB7XG4gICAgICB2YXIgZGVsZXRlZFZhbHVlUG9ydGlvbiA9IGxhc3RWYWx1ZS5zdWJzdHIoc3RhcnQpO1xuICAgICAgdmFyIHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzID0ge307XG4gICAgICB2YXIgcmVzb2x2ZWRQb3J0aW9uID0gW107XG4gICAgICBbXS5jb25jYXQoIGRlbGV0ZWRWYWx1ZVBvcnRpb24gKS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50UG9ydGlvbiwgaWR4KSB7XG4gICAgICAgIGlmICh0aGlzJDEuaXNDaGFyYWN0ZXJBRm9ybWF0KGlkeCArIHN0YXJ0LCBsYXN0VmFsdWUpKSB7XG4gICAgICAgICAgcmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnNbaWR4XSA9IGN1cnJlbnRQb3J0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA+IGRlbGV0ZWRWYWx1ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJlc29sdmVkUG9ydGlvbi5wdXNoKGN1cnJlbnRQb3J0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgaWYgKHJlc29sdmVkUG9ydGlvbi5sZW5ndGggPiBpZHgpIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24uc3BsaWNlKGlkeCwgMCwgcmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnNbaWR4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZWRQb3J0aW9uLnB1c2gocmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnNbaWR4XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YWx1ZSA9IGxhc3RWYWx1ZS5zdWJzdHIoMCwgc3RhcnQpICsgcmVzb2x2ZWRQb3J0aW9uLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8vZm9yIG51bWJlcnMgY2hlY2sgaWYgYmVmb3JlRGVjaW1hbCBnb3QgZGVsZXRlZCBhbmQgdGhlcmUgaXMgbm90aGluZyBhZnRlciBkZWNpbWFsLFxuICAgIC8vY2xlYXIgYWxsIG51bWJlcnMgaW4gc3VjaCBjYXNlIHdoaWxlIGtlZXBpbmcgdGhlIC0gc2lnblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YXIgbnVtZXJpY1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG4gICAgICB2YXIgcmVmJDQgPSBzcGxpdERlY2ltYWwoXG4gICAgICAgIG51bWVyaWNTdHJpbmcsXG4gICAgICAgIGFsbG93TmVnYXRpdmVcbiAgICAgICk7XG4gICAgICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZiQ0LmJlZm9yZURlY2ltYWw7XG4gICAgICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmJDQuYWZ0ZXJEZWNpbWFsO1xuICAgICAgdmFyIGFkZE5lZ2F0aW9uID0gcmVmJDQuYWRkTmVnYXRpb247IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgICAgIC8vY2xlYXIgb25seSBpZiBzb21ldGhpbmcgZ290IGRlbGV0ZWRcbiAgICAgIHZhciBpc0JlZm9yZURlY2ltYWxQb2ludCA9IGNhcmV0UG9zIDwgdmFsdWUuaW5kZXhPZihkZWNpbWFsU2VwYXJhdG9yKSArIDE7XG4gICAgICBpZiAoXG4gICAgICAgIG51bWVyaWNTdHJpbmcubGVuZ3RoIDwgbGFzdE51bVN0ci5sZW5ndGggJiZcbiAgICAgICAgaXNCZWZvcmVEZWNpbWFsUG9pbnQgJiZcbiAgICAgICAgYmVmb3JlRGVjaW1hbCA9PT0gJycgJiZcbiAgICAgICAgIXBhcnNlRmxvYXQoYWZ0ZXJEZWNpbWFsKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhZGROZWdhdGlvbiA/ICctJyA6ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKiogVXBkYXRlIHZhbHVlIGFuZCBjYXJldCBwb3NpdGlvbiAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gdXBkYXRlVmFsdWUgKHBhcmFtcyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgKSB7XG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gcGFyYW1zLmZvcm1hdHRlZFZhbHVlO1xuICAgIHZhciBpbnB1dCA9IHBhcmFtcy5pbnB1dDtcbiAgICB2YXIgc2V0Q2FyZXRQb3NpdGlvbiA9IHBhcmFtcy5zZXRDYXJldFBvc2l0aW9uOyBpZiAoIHNldENhcmV0UG9zaXRpb24gPT09IHZvaWQgMCApIHNldENhcmV0UG9zaXRpb24gPSB0cnVlO1xuICAgIHZhciBzb3VyY2UgPSBwYXJhbXMuc291cmNlO1xuICAgIHZhciBldmVudCA9IHBhcmFtcy5ldmVudDtcbiAgICB2YXIgbnVtQXNTdHJpbmcgPSBwYXJhbXMubnVtQXNTdHJpbmc7XG4gICAgdmFyIGNhcmV0UG9zID0gcGFyYW1zLmNhcmV0UG9zO1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblZhbHVlQ2hhbmdlID0gcmVmLm9uVmFsdWVDaGFuZ2U7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbGFzdFZhbHVlID0gcmVmJDEudmFsdWU7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vY2FsY3VsYXRlIGNhcmV0IHBvc2l0aW9uIGlmIG5vdCBkZWZpbmVkXG4gICAgICBpZiAoY2FyZXRQb3MgPT09IHVuZGVmaW5lZCAmJiBzZXRDYXJldFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWUgfHwgaW5wdXQudmFsdWU7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRDYXJldFBvc2l0aW9uID0gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oaW5wdXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXQgdGhlIHZhbHVlIGltcGVyYXRpdmVseSwgdGhpcyBpcyByZXF1aXJlZCBmb3IgSUUgZml4XG4gICAgICAgICAqIFRoaXMgaXMgYWxzbyByZXF1aXJlZCBhcyBpZiBuZXcgY2FyZXQgcG9zaXRpb24gaXMgYmV5b25kIHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICAgICAgICogQ2FyZXQgcG9zaXRpb24gd2lsbCBub3QgYmUgc2V0IGNvcnJlY3RseVxuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcblxuICAgICAgICAvL2dldCB0aGUgY2FyZXQgcG9zaXRpb25cbiAgICAgICAgY2FyZXRQb3MgPSB0aGlzLmdldENhcmV0UG9zaXRpb24oaW5wdXRWYWx1ZSwgZm9ybWF0dGVkVmFsdWUsIGN1cnJlbnRDYXJldFBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBzZXQgdGhlIHZhbHVlIGltcGVyYXRpdmVseSwgYXMgd2Ugc2V0IHRoZSBjYXJldCBwb3NpdGlvbiBhcyB3ZWxsIGltcGVyYXRpdmVseS5cbiAgICAgICAqIFRoaXMgaXMgdG8ga2VlcCB2YWx1ZSBhbmQgY2FyZXQgcG9zaXRpb24gaW4gc3luY1xuICAgICAgICovXG4gICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICAvL3NldCBjYXJldCBwb3NpdGlvbiwgYW5kIHZhbHVlIGltcGVyYXRpdmVseSB3aGVuIGVsZW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgIGlmIChzZXRDYXJldFBvc2l0aW9uKSB7XG4gICAgICAgIC8vc2V0IGNhcmV0IHBvc2l0aW9uXG4gICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oaW5wdXQsIGNhcmV0UG9zLCBmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9jYWxjdWxhdGUgbnVtZXJpYyBzdHJpbmcgaWYgbm90IHBhc3NlZFxuICAgIGlmIChudW1Bc1N0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy91cGRhdGUgc3RhdGUgaWYgdmFsdWUgaXMgY2hhbmdlZFxuICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcgfSk7XG5cbiAgICAgIC8vIHRyaWdnZXIgb25WYWx1ZUNoYW5nZSBzeW5jaHJvbm91c2x5LCBzbyBwYXJlbnQgaXMgdXBkYXRlZCBhbG9uZyB3aXRoIHRoZSBudW1iZXIgZm9ybWF0LiBGaXggZm9yICMyNzcsICMyODdcbiAgICAgIG9uVmFsdWVDaGFuZ2UodGhpcy5nZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpLCB7IGV2ZW50OiBldmVudCwgc291cmNlOiBzb3VyY2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZSAoZSAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBpbnB1dFZhbHVlID0gZWwudmFsdWU7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgaXNBbGxvd2VkID0gcHJvcHMuaXNBbGxvd2VkO1xuICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsKTtcblxuICAgIGlucHV0VmFsdWUgPSB0aGlzLmNvcnJlY3RJbnB1dFZhbHVlKGN1cnJlbnRDYXJldFBvc2l0aW9uLCBsYXN0VmFsdWUsIGlucHV0VmFsdWUpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRJbnB1dChpbnB1dFZhbHVlKSB8fCAnJztcbiAgICB2YXIgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgdmFyIHZhbHVlT2JqID0gdGhpcy5nZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpO1xuICAgIHZhciBpc0NoYW5nZUFsbG93ZWQgPSBpc0FsbG93ZWQodmFsdWVPYmopO1xuXG4gICAgaWYgKCFpc0NoYW5nZUFsbG93ZWQpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gbGFzdFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nLFxuICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgIGlucHV0OiBlbCxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgc291cmNlOiAnZXZlbnQnLFxuICAgIH0pO1xuXG4gICAgaWYgKGlzQ2hhbmdlQWxsb3dlZCkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25CbHVyID0gZnVuY3Rpb24gb25CbHVyIChlICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZTtcbiAgICB2YXIgZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuICAgIHZhciBvbkJsdXIgPSBwcm9wcy5vbkJsdXI7XG4gICAgdmFyIGFsbG93TGVhZGluZ1plcm9zID0gcHJvcHMuYWxsb3dMZWFkaW5nWmVyb3M7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHRoaXMuZm9jdXNlZEVsbSA9IG51bGw7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0KTtcblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAvLyBpZiB0aGUgbnVtQXNTdHJpbmcgaXMgbm90IGEgdmFsaWQgbnVtYmVyIHJlc2V0IGl0IHRvIGVtcHR5XG4gICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChudW1Bc1N0cmluZykpKSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxsb3dMZWFkaW5nWmVyb3MpIHtcbiAgICAgICAgbnVtQXNTdHJpbmcgPSBmaXhMZWFkaW5nWmVybyhudW1Bc1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKG51bUFzU3RyaW5nKTtcblxuICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgICAvLyB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgcGVyc2lzdGVkIGJlY2F1c2UgaXRzIHByb3BlcnRpZXMgY2FuIGJlIGFjY2Vzc2VkIGluIGFuIGFzeW5jaHJvbm91cyB3YXlcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgICAgICBpbnB1dDogZS50YXJnZXQsXG4gICAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgc291cmNlOiAnZXZlbnQnLFxuICAgICAgICB9KTtcbiAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG9uQmx1cihlKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLm9uS2V5RG93biA9IGZ1bmN0aW9uIG9uS2V5RG93biAoZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgdmFyIGtleSA9IGUua2V5O1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gJyc7XG4gICAgdmFyIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbjtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIG9uS2V5RG93biA9IHJlZi5vbktleURvd247XG4gICAgdmFyIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IgPSBkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCAmJiBmaXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KGZhbHNlLCBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yKTtcbiAgICB2YXIgbmVnYXRpdmVSZWdleCA9IG5ldyBSZWdFeHAoJy0nKTtcbiAgICB2YXIgaXNQYXR0ZXJuRm9ybWF0ID0gdHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZyc7XG5cbiAgICB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0ID0ge1xuICAgICAgc2VsZWN0aW9uU3RhcnQ6IHNlbGVjdGlvblN0YXJ0LFxuICAgICAgc2VsZWN0aW9uRW5kOiBzZWxlY3Rpb25FbmQsXG4gICAgfTtcblxuICAgIC8vSGFuZGxlIGJhY2tzcGFjZSBhbmQgZGVsZXRlIGFnYWluc3Qgbm9uIG51bWVyaWNhbC9kZWNpbWFsIGNoYXJhY3RlcnMgb3IgYXJyb3cga2V5c1xuICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0IC0gMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydCArIDE7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydDtcbiAgICB9XG5cbiAgICAvL2lmIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiBpcyBub3Qgc2V0IGl0IG1lYW5zIHdlIGRvbid0IHdhbnQgdG8gSGFuZGxlIGtleURvd25cbiAgICAvL2Fsc28gaWYgbXVsdGlwbGUgY2hhcmFjdGVycyBhcmUgc2VsZWN0ZWQgZG9uJ3QgaGFuZGxlXG4gICAgaWYgKGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdGlvblN0YXJ0ICE9PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgIG9uS2V5RG93bihlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q2FyZXRQb3NpdGlvbiA9IGV4cGVjdGVkQ2FyZXRQb3NpdGlvbjtcbiAgICB2YXIgbGVmdEJvdW5kID0gaXNQYXR0ZXJuRm9ybWF0ID8gZm9ybWF0LmluZGV4T2YoJyMnKSA6IHByZWZpeC5sZW5ndGg7XG4gICAgdmFyIHJpZ2h0Qm91bmQgPSBpc1BhdHRlcm5Gb3JtYXQgPyBmb3JtYXQubGFzdEluZGV4T2YoJyMnKSArIDEgOiB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoO1xuXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBrZXkgPT09ICdBcnJvd0xlZnQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIG5ld0NhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBleHBlY3RlZENhcmV0UG9zaXRpb24sIGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleSA9PT0gJ0RlbGV0ZScgJiZcbiAgICAgICFudW1SZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pICYmXG4gICAgICAhbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pXG4gICAgKSB7XG4gICAgICB3aGlsZSAoIW51bVJlZ2V4LnRlc3QodmFsdWVbbmV3Q2FyZXRQb3NpdGlvbl0pICYmIG5ld0NhcmV0UG9zaXRpb24gPCByaWdodEJvdW5kKSB7XG4gICAgICAgIG5ld0NhcmV0UG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScgJiYgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkpIHtcbiAgICAgIC8qIE5PVEU6IFRoaXMgaXMgc3BlY2lhbCBjYXNlIHdoZW4gYmFja3NwYWNlIGlzIHByZXNzZWQgb24gYVxuICAgICAgbmVnYXRpdmUgdmFsdWUgd2hpbGUgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyBhZnRlciBwcmVmaXguIFdlIGNhbid0IGhhbmRsZSBpdCBvbiBvbkNoYW5nZSBiZWNhdXNlXG4gICAgICB3ZSB3aWxsIG5vdCBoYXZlIGFueSBpbmZvcm1hdGlvbiBvZiBrZXlQcmVzc1xuICAgICAgKi9cbiAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA8PSBsZWZ0Qm91bmQgKyAxICYmIHZhbHVlWzBdID09PSAnLScgJiYgdHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgY2FyZXRQb3M6IG5ld0NhcmV0UG9zaXRpb24sXG4gICAgICAgICAgaW5wdXQ6IGVsLFxuICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgIHNvdXJjZTogJ2V2ZW50JyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFuZWdhdGl2ZVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkpIHtcbiAgICAgICAgd2hpbGUgKCFudW1SZWdleC50ZXN0KHZhbHVlW25ld0NhcmV0UG9zaXRpb24gLSAxXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA+IGxlZnRCb3VuZCkge1xuICAgICAgICAgIG5ld0NhcmV0UG9zaXRpb24tLTtcbiAgICAgICAgfVxuICAgICAgICBuZXdDYXJldFBvc2l0aW9uID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgbmV3Q2FyZXRQb3NpdGlvbiwgJ2xlZnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBuZXdDYXJldFBvc2l0aW9uICE9PSBleHBlY3RlZENhcmV0UG9zaXRpb24gfHxcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA8IGxlZnRCb3VuZCB8fFxuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID4gcmlnaHRCb3VuZFxuICAgICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qIE5PVEU6IHRoaXMgaXMganVzdCByZXF1aXJlZCBmb3IgdW5pdCB0ZXN0IGFzIHdlIG5lZWQgdG8gZ2V0IHRoZSBuZXdDYXJldFBvc2l0aW9uLFxuICAgICAgICAgICAgUmVtb3ZlIHRoaXMgd2hlbiB5b3UgZmluZCBkaWZmZXJlbnQgc29sdXRpb24gKi9cbiAgICBpZiAoZS5pc1VuaXRUZXN0UnVuKSB7XG4gICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBuZXdDYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpO1xuICB9O1xuXG4gIC8qKiByZXF1aXJlZCB0byBoYW5kbGUgdGhlIGNhcmV0IHBvc2l0aW9uIHdoZW4gY2xpY2sgYW55d2hlcmUgd2l0aGluIHRoZSBpbnB1dCAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbiBvbk1vdXNlVXAgKGUgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuXG4gICAgLyoqXG4gICAgICogTk9URTogd2UgaGF2ZSB0byBnaXZlIGRlZmF1bHQgdmFsdWUgZm9yIHZhbHVlIGFzIGluIGNhc2Ugd2hlbiBjdXN0b20gaW5wdXQgaXMgcHJvdmlkZWRcbiAgICAgKiB2YWx1ZSBjYW4gY29tZSBhcyB1bmRlZmluZWQgd2hlbiBub3RoaW5nIGlzIHByb3ZpZGVkIG9uIHZhbHVlIHByb3AuXG4gICAgICovXG4gICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICB2YXIgdmFsdWUgPSBlbC52YWx1ZTsgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgPSAnJztcblxuICAgIGlmIChzZWxlY3Rpb25TdGFydCA9PT0gc2VsZWN0aW9uRW5kKSB7XG4gICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgIGlmIChjYXJldFBvc2l0aW9uICE9PSBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlVXAoZSk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cyAoZSAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgLy8gV29ya2Fyb3VuZCBDaHJvbWUgYW5kIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzc5MzI4XG4gICAgLy8gKG9uRm9jdXMgZXZlbnQgdGFyZ2V0IHNlbGVjdGlvblN0YXJ0IGlzIGFsd2F5cyAwIGJlZm9yZSBzZXRUaW1lb3V0KVxuICAgIGUucGVyc2lzdCgpO1xuXG4gICAgdGhpcy5mb2N1c2VkRWxtID0gZS50YXJnZXQ7XG4gICAgdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uRW5kID0gZWwuc2VsZWN0aW9uRW5kO1xuICAgICAgdmFyIHZhbHVlID0gZWwudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gJyc7XG5cbiAgICAgIHZhciBjYXJldFBvc2l0aW9uID0gdGhpcyQxLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG5cbiAgICAgIC8vc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24gb25seSB3aGVuIGV2ZXJ5dGhpbmcgaXMgbm90IHNlbGVjdGVkIG9uIGZvY3VzICh3aGlsZSB0YWJiaW5nIGludG8gdGhlIGZpZWxkKVxuICAgICAgaWYgKFxuICAgICAgICBjYXJldFBvc2l0aW9uICE9PSBzZWxlY3Rpb25TdGFydCAmJlxuICAgICAgICAhKHNlbGVjdGlvblN0YXJ0ID09PSAwICYmIHNlbGVjdGlvbkVuZCA9PT0gdmFsdWUubGVuZ3RoKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMkMS5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzJDEucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgZGlzcGxheVR5cGUgPSByZWYuZGlzcGxheVR5cGU7XG4gICAgdmFyIGN1c3RvbUlucHV0ID0gcmVmLmN1c3RvbUlucHV0O1xuICAgIHZhciByZW5kZXJUZXh0ID0gcmVmLnJlbmRlclRleHQ7XG4gICAgdmFyIGdldElucHV0UmVmID0gcmVmLmdldElucHV0UmVmO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHJlZi50aG91c2FuZFNlcGFyYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZi5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSByZWYuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzO1xuICAgIHZhciB0aG91c2FuZHNHcm91cFN0eWxlID0gcmVmLnRob3VzYW5kc0dyb3VwU3R5bGU7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciByZW1vdmVGb3JtYXR0aW5nID0gcmVmLnJlbW92ZUZvcm1hdHRpbmc7XG4gICAgdmFyIG1hc2sgPSByZWYubWFzaztcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcmVmLmRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgaXNOdW1lcmljU3RyaW5nID0gcmVmLmlzTnVtZXJpY1N0cmluZztcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IHJlZi5hbGxvd0VtcHR5Rm9ybWF0dGluZztcbiAgICB2YXIgYWxsb3dMZWFkaW5nWmVyb3MgPSByZWYuYWxsb3dMZWFkaW5nWmVyb3M7XG4gICAgdmFyIG9uVmFsdWVDaGFuZ2UgPSByZWYub25WYWx1ZUNoYW5nZTtcbiAgICB2YXIgaXNBbGxvd2VkID0gcmVmLmlzQWxsb3dlZDtcbiAgICB2YXIgY3VzdG9tTnVtZXJhbHMgPSByZWYuY3VzdG9tTnVtZXJhbHM7XG4gICAgdmFyIG9uQ2hhbmdlID0gcmVmLm9uQ2hhbmdlO1xuICAgIHZhciBvbktleURvd24gPSByZWYub25LZXlEb3duO1xuICAgIHZhciBvbk1vdXNlVXAgPSByZWYub25Nb3VzZVVwO1xuICAgIHZhciBvbkZvY3VzID0gcmVmLm9uRm9jdXM7XG4gICAgdmFyIG9uQmx1ciA9IHJlZi5vbkJsdXI7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHJlZi52YWx1ZTtcbiAgICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKCByZWYsIFtcInR5cGVcIiwgXCJkaXNwbGF5VHlwZVwiLCBcImN1c3RvbUlucHV0XCIsIFwicmVuZGVyVGV4dFwiLCBcImdldElucHV0UmVmXCIsIFwiZm9ybWF0XCIsIFwidGhvdXNhbmRTZXBhcmF0b3JcIiwgXCJkZWNpbWFsU2VwYXJhdG9yXCIsIFwiYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzXCIsIFwidGhvdXNhbmRzR3JvdXBTdHlsZVwiLCBcImRlY2ltYWxTY2FsZVwiLCBcImZpeGVkRGVjaW1hbFNjYWxlXCIsIFwicHJlZml4XCIsIFwic3VmZml4XCIsIFwicmVtb3ZlRm9ybWF0dGluZ1wiLCBcIm1hc2tcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJpc051bWVyaWNTdHJpbmdcIiwgXCJhbGxvd05lZ2F0aXZlXCIsIFwiYWxsb3dFbXB0eUZvcm1hdHRpbmdcIiwgXCJhbGxvd0xlYWRpbmdaZXJvc1wiLCBcIm9uVmFsdWVDaGFuZ2VcIiwgXCJpc0FsbG93ZWRcIiwgXCJjdXN0b21OdW1lcmFsc1wiLCBcIm9uQ2hhbmdlXCIsIFwib25LZXlEb3duXCIsIFwib25Nb3VzZVVwXCIsIFwib25Gb2N1c1wiLCBcIm9uQmx1clwiLCBcInZhbHVlXCJdICk7XG4gICAgdmFyIG90aGVyUHJvcHMgPSByZXN0O1xuICAgIHZhciByZWYkMSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIHZhbHVlID0gcmVmJDEudmFsdWU7XG4gICAgdmFyIG1vdW50ZWQgPSByZWYkMS5tb3VudGVkO1xuXG4gICAgLy8gYWRkIGlucHV0IG1vZGUgb24gZWxlbWVudCBiYXNlZCBvbiBmb3JtYXQgcHJvcCBhbmQgZGV2aWNlIG9uY2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgdmFyIGlucHV0TW9kZSA9IG1vdW50ZWQgJiYgYWRkSW5wdXRNb2RlKGZvcm1hdCkgPyAnbnVtZXJpYycgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgaW5wdXRQcm9wcyA9IE9iamVjdC5hc3NpZ24oeyBpbnB1dE1vZGU6IGlucHV0TW9kZSB9LCBvdGhlclByb3BzLCB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgfSk7XG5cbiAgICBpZiAoZGlzcGxheVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgcmV0dXJuIHJlbmRlclRleHQgPyAoXG4gICAgICAgIHJlbmRlclRleHQodmFsdWUsIG90aGVyUHJvcHMpIHx8IG51bGxcbiAgICAgICkgOiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdzcGFuJywgT2JqZWN0LmFzc2lnbih7fSwgb3RoZXJQcm9wcywgeyByZWY6IGdldElucHV0UmVmIH0pLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjdXN0b21JbnB1dCkge1xuICAgICAgdmFyIEN1c3RvbUlucHV0ID0gY3VzdG9tSW5wdXQ7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQ3VzdG9tSW5wdXQsIE9iamVjdC5hc3NpZ24oe30sIGlucHV0UHJvcHMsIHsgcmVmOiBnZXRJbnB1dFJlZiB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcsIE9iamVjdC5hc3NpZ24oe30sIGlucHV0UHJvcHMsIHsgcmVmOiBnZXRJbnB1dFJlZiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE51bWJlckZvcm1hdDtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5cbk51bWJlckZvcm1hdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZvcm1hdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiTnVtYmVyRm9ybWF0IiwiY3giLCJUYWJsZVJvdyIsInByb3BzIiwidGl0bGUiLCJ0cmVhdG1lblR5cGUiLCJwcmljZSIsInN0YXR1cyIsInN0YXR1c0NsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==