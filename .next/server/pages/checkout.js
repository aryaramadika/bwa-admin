(() => {
var exports = {};
exports.id = "pages/checkout";
exports.ids = ["pages/checkout"];
exports.modules = {

/***/ "./components/organisms/CheckoutComfirmation/index.tsx":
/*!*************************************************************!*\
  !*** ./components/organisms/CheckoutComfirmation/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckoutConfirmation)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\CheckoutComfirmation\\index.tsx";






function CheckoutConfirmation() {
  const {
    0: checkbox,
    1: setCheckbox
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const onSubmit = async () => {
    // console.log('submit',checkbox)
    const dataReservationLocal = localStorage.getItem('data-reservasi');
    const dataReservation = JSON.parse(dataReservationLocal);

    if (!checkbox) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('Make sure you already pay the reservation'); // [CODE UPDATE] menggagalkan checkout jika checkbox false
      // return;
    }

    const data = {
      treatment: dataReservation.treatmentPrice._id,
      payment: dataReservation.paymentMethod.payment._id,
      bank: dataReservation.paymentMethod.bank._id,
      accountUser: dataReservation.bankAccountName,
      name: dataReservation.name,
      // address : "Jln Batubulan",
      phoneNumber: dataReservation.phoneNumber,
      // gender: "WOMAN",
      // age: 22,
      lementation: dataReservation.lementation
    }; // console.log('data: ',data)

    const response = await (0,_services_patient__WEBPACK_IMPORTED_MODULE_3__.setBooking)(data);

    if (response.error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(response.message);
    } else {
      // [CODE UPDATE] memindahkan router.push sebelum toast
      router.push('/complete-checkout');
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Checkout Berhasil');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      className: "checkbox-label text-lg color-palette-1",
      children: ["I have transferred the money", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "checkbox",
        checked: checkbox,
        onChange: () => setCheckbox(!checkbox)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "checkmark"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "d-md-block d-flex flex-column w-100 pt-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" // href="./complete-checkout"
        ,
        onClick: onSubmit,
        type: "button",
        children: "Confirm Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/organisms/CheckoutDetail/index.tsx":
/*!*******************************************************!*\
  !*** ./components/organisms/CheckoutDetail/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckoutDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\CheckoutDetail\\index.tsx";




function CheckoutDetail() {
  const {
    0: dataReservation,
    1: setDataReservation
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    lementation: '',
    phoneNumber: '',
    treatmentPrice: {
      treatmentType: '',
      price: 0,
      _id: ''
    },
    paymentMethod: {
      payment: {
        type: '',
        _id: ''
      },
      bank: {
        noRekening: '',
        bankName: '',
        name: '',
        _id: ''
      }
    },
    bankAccountName: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const dataFromLocal = localStorage.getItem('data-reservasi');
    const dataRerservasitLocal = JSON.parse(dataFromLocal);
    console.log('Data Reservasi :', dataRerservasitLocal);
    setDataReservation(dataRerservasitLocal);
  }, []);
  const priceTreatment = dataReservation.treatmentPrice.price;
  const taxes = dataReservation.treatmentPrice.price * (1 / 100);
  const total = priceTreatment + taxes;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "purchase pt-md-50 pt-30",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "fw-bold text-xl color-palette-1 mb-20",
        children: "Purchase Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Reservation ID ", ' ', " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details",
          children: "#00R1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 75
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Treatment", ' ', " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details",
          children: dataReservation.treatmentPrice.treatmentType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 69
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Price", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
            value: priceTreatment,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Admin Fee (10%)", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
            value: taxes,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Total ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details color-palette-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
            value: total,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 60
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {
      style: {
        border: '1px solid black'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "payment pt-md-50 pb-md-50 pt-10 pb-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "fw-bold text-xl color-palette-1 mb-20",
        children: "Payment Informations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Your Account Name ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "purchase-details",
          children: dataReservation.bankAccountName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 80
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Type ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "payment-details",
          children: dataReservation.paymentMethod.payment.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 67
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Bank Name ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "payment-details",
          children: dataReservation.paymentMethod.bank.bankName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Bank Account Name ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "payment-details",
          children: dataReservation.paymentMethod.bank.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 80
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Bank Number ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "payment-details",
          children: dataReservation.paymentMethod.bank.noRekening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 74
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/organisms/CheckoutItem/index.tsx":
/*!*****************************************************!*\
  !*** ./components/organisms/CheckoutItem/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckoutItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\CheckoutItem\\index.tsx";


function CheckoutItem() {
  const {
    0: dataTreatment,
    1: setDataTreatment
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    lementation: '',
    phoneNumber: '',
    price: 0,
    treatmentPrice: {
      treatmentType: '',
      price: 0
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const dataFromLocal = localStorage.getItem('data-reservasi');
    const dataTreatmentLocal = JSON.parse(dataFromLocal); // console.log('data price:', dataTreatmentLocal)

    setDataTreatment(dataTreatmentLocal);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "pe-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        marginLeft: '-25px',
        marginTop: '-25px'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Nama Pasien ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "purchase-details",
          style: {
            marginLeft: '321px'
          },
          children: dataTreatment.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 74
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Treatment ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "purchase-details",
          style: {
            marginLeft: '321px'
          },
          children: dataTreatment.treatmentPrice.treatmentType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Lementation ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "purchase-details",
          style: {
            marginLeft: '321px'
          },
          children: dataTreatment.lementation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 74
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: ["Phone Number ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "purchase-details",
          style: {
            marginLeft: '321px'
          },
          children: dataTreatment.phoneNumber
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 75
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./config/api/index.ts":
/*!*****************************!*\
  !*** ./config/api/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


async function callAPI({
  url,
  method,
  data,
  token
}) {
  let headers = {};

  if (token) {
    const tokenCookies = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('token');

    if (tokenCookies) {
      const JwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${JwtToken}`
      };
    }
  }

  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
    url,
    method,
    data,
    headers
  }).catch(err => err.response); // console.log('api response : ', response)

  if ((response === null || response === void 0 ? void 0 : response.status) > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null
    };
    return res;
  }

  ;
  const res = {
    error: false,
    message: 'Login Success',
    data: response.data.data
  };
  return res;
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["admintbs5.herokuapp.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkout)
/* harmony export */ });
/* harmony import */ var _components_organisms_CheckoutItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/CheckoutItem */ "./components/organisms/CheckoutItem/index.tsx");
/* harmony import */ var _components_organisms_CheckoutDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organisms/CheckoutDetail */ "./components/organisms/CheckoutDetail/index.tsx");
/* harmony import */ var _components_organisms_CheckoutComfirmation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms/CheckoutComfirmation */ "./components/organisms/CheckoutComfirmation/index.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\checkout.tsx";






function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: "checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "logo text-md-center text-start pb-50",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: "",
            href: "/#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/icon/TBS5LOGO.PNG",
              width: 240,
              height: 240,
              alt: "logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 18
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("g", {
              mask: "url(#mask0)",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("circle", {
                cx: "30",
                cy: "30",
                r: "30",
                fill: "#00BAFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
                d: "M41.5001 35.0001C52.3001 38.2001 49.6668 48.0001 47.0001 52.5001L71.0001 60.5001L79.5001 -12.9999C63.6667 -13.8333 29.5001 -14.9999 19.5001 -12.9999C7.00007 -10.4999 13.5001 4.00006 12.0001 14.0001C10.5001 24.0001 28.0001 31.0001 41.5001 35.0001Z",
                fill: "#4D17E2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
                d: "M54.495 47.785C54.495 51.285 53.655 54.54 51.975 57.55C50.295 60.56 47.74 63.01 44.31 64.9C40.88 66.79 36.645 67.735 31.605 67.735C26.705 67.735 22.33 66.86 18.48 65.11C14.7 63.29 11.655 60.84 9.345 57.76C7.105 54.61 5.81 51.04 5.46 47.05H15.645C15.855 49.15 16.555 51.215 17.745 53.245C19.005 55.205 20.755 56.85 22.995 58.18C25.305 59.44 28.07 60.07 31.29 60.07C35.49 60.07 38.71 58.95 40.95 56.71C43.19 54.47 44.31 51.6 44.31 48.1C44.31 45.09 43.505 42.64 41.895 40.75C40.355 38.86 38.43 37.39 36.12 36.34C33.81 35.22 30.66 34.03 26.67 32.77C21.98 31.23 18.2 29.795 15.33 28.465C12.53 27.065 10.115 25 8.085 22.27C6.125 19.54 5.145 15.935 5.145 11.455C5.145 7.60499 6.055 4.20999 7.875 1.27C9.765 -1.67 12.425 -3.945 15.855 -5.555C19.355 -7.165 23.45 -7.97 28.14 -7.97C35.42 -7.97 41.195 -6.185 45.465 -2.615C49.735 0.884996 52.22 5.365 52.92 10.825H42.63C42.07 7.885 40.565 5.295 38.115 3.055C35.665 0.814997 32.34 -0.305003 28.14 -0.305003C24.29 -0.305003 21.21 0.709996 18.9 2.73999C16.59 4.69999 15.435 7.5 15.435 11.14C15.435 14.01 16.17 16.355 17.64 18.175C19.18 19.925 21.07 21.325 23.31 22.375C25.55 23.355 28.63 24.475 32.55 25.735C37.31 27.275 41.125 28.745 43.995 30.145C46.935 31.545 49.42 33.68 51.45 36.55C53.48 39.35 54.495 43.095 54.495 47.785Z",
                fill: "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
          style: {
            border: '1px solid black'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "title-text pt-md-50 pt-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
            className: "text-4xl fw-bold color-palette-1 mb-10",
            align: "",
            children: "Detail Reservasi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_CheckoutItem__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
          style: {
            border: '1px solid black'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_CheckoutDetail__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_organisms_CheckoutComfirmation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./services/patient.ts":
/*!*****************************!*\
  !*** ./services/patient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFeaturedTherapist": () => (/* binding */ getFeaturedTherapist),
/* harmony export */   "getDetaiTherapist": () => (/* binding */ getDetaiTherapist),
/* harmony export */   "getPriceDetail": () => (/* binding */ getPriceDetail),
/* harmony export */   "getPaymentDetail": () => (/* binding */ getPaymentDetail),
/* harmony export */   "setBooking": () => (/* binding */ setBooking)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/api */ "./config/api/index.ts");


const ROOT_API = "https://admintbs5.herokuapp.com";
const API_VERSION = 'api/v1';
async function getFeaturedTherapist() {
  const ENDPOINT = 'patients/landingpage';
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
async function getDetaiTherapist(id) {
  const ENDPOINT = `patients/${id}/detail`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
async function getPriceDetail() {
  const ENDPOINT = `patients/pricedetail`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
async function getPaymentDetail() {
  const ENDPOINT = `patients/paymentMethod`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
async function setBooking(data) {
  const url = `${ROOT_API}/${API_VERSION}/patients/book`;
  return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__.default)({
    url,
    method: 'POST',
    data,
    token: true
  }); // const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  // const axiosResponse = response.data;
  // return  axiosResponse.data;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-number-format");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/checkout.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxNQUZHO0FBR1gzQyxJQUFBQSxJQUhXO0FBSVg0QyxJQUFBQSxLQUFLLEVBQUU7QUFKSSxHQUFELENBQWQsQ0FGOEMsQ0FTOUM7QUFDQTtBQUVBO0FBQ0g7Ozs7Ozs7Ozs7QUN2REQsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZWdnLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2hlY2tvdXRDb21maXJtYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DaGVja291dERldGFpbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0NoZWNrb3V0SXRlbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL2NvbmZpZy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3BhZ2VzL2NoZWNrb3V0LnRzeCIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc2VydmljZXMvcGF0aWVudC50cyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBzZXRCb29raW5nIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3BhdGllbnRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dENvbmZpcm1hdGlvbigpIHtcclxuICAgIGNvbnN0IFtjaGVja2JveCxzZXRDaGVja2JveF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3VibWl0JyxjaGVja2JveClcclxuICAgICAgICBjb25zdCBkYXRhUmVzZXJ2YXRpb25Mb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhLXJlc2VydmFzaScpXHJcbiAgICAgICAgY29uc3QgZGF0YVJlc2VydmF0aW9uID0gSlNPTi5wYXJzZShkYXRhUmVzZXJ2YXRpb25Mb2NhbCEpXHJcbiAgICAgICAgaWYgKCFjaGVja2JveCkge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTWFrZSBzdXJlIHlvdSBhbHJlYWR5IHBheSB0aGUgcmVzZXJ2YXRpb24nKTtcclxuICAgICAgICAgICAgLy8gW0NPREUgVVBEQVRFXSBtZW5nZ2FnYWxrYW4gY2hlY2tvdXQgamlrYSBjaGVja2JveCBmYWxzZVxyXG4gICAgICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPXtcclxuICAgICAgICAgICAgdHJlYXRtZW50IDogZGF0YVJlc2VydmF0aW9uLnRyZWF0bWVudFByaWNlLl9pZCxcclxuICAgICAgICAgICAgcGF5bWVudCA6IGRhdGFSZXNlcnZhdGlvbi5wYXltZW50TWV0aG9kLnBheW1lbnQuX2lkLFxyXG4gICAgICAgICAgICBiYW5rIDogZGF0YVJlc2VydmF0aW9uLnBheW1lbnRNZXRob2QuYmFuay5faWQsXHJcbiAgICAgICAgICAgIGFjY291bnRVc2VyIDogZGF0YVJlc2VydmF0aW9uLmJhbmtBY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgbmFtZTogIGRhdGFSZXNlcnZhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAvLyBhZGRyZXNzIDogXCJKbG4gQmF0dWJ1bGFuXCIsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBkYXRhUmVzZXJ2YXRpb24ucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIC8vIGdlbmRlcjogXCJXT01BTlwiLFxyXG4gICAgICAgICAgICAvLyBhZ2U6IDIyLFxyXG4gICAgICAgICAgICBsZW1lbnRhdGlvbjpkYXRhUmVzZXJ2YXRpb24ubGVtZW50YXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGE6ICcsZGF0YSlcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNldEJvb2tpbmcoZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gW0NPREUgVVBEQVRFXSBtZW1pbmRhaGthbiByb3V0ZXIucHVzaCBzZWJlbHVtIHRvYXN0XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY29tcGxldGUtY2hlY2tvdXQnKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnQ2hlY2tvdXQgQmVyaGFzaWwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWxhYmVsIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0xXCI+SSBoYXZlIHRyYW5zZmVycmVkIHRoZSBtb25leVxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2JveH0gb25DaGFuZ2U9eygpID0+IHNldENoZWNrYm94KCFjaGVja2JveCl9Lz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWJsb2NrIGQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwdC01MFwiPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jb25maXJtLXBheW1lbnQgcm91bmRlZC1waWxsIGZ3LW1lZGl1bSB0ZXh0LXdoaXRlIGJvcmRlci0wIHRleHQtbGdcIiAgICBcclxuICAgICAgICAvLyBocmVmPVwiLi9jb21wbGV0ZS1jaGVja291dFwiXHJcbiAgICAgICAgb25DbGljaz17b25TdWJtaXR9IFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICBQYXltZW50XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0RGV0YWlsKCkge1xyXG4gICAgICAgIGNvbnN0W2RhdGFSZXNlcnZhdGlvbixzZXREYXRhUmVzZXJ2YXRpb25dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGxlbWVudGF0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6JycsXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50VHlwZTonJyxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTowLFxyXG4gICAgICAgICAgICAgICAgICAgIF9pZDonJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6JycgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiYW5rOntcclxuICAgICAgICAgICAgICAgICAgICAgICBub1Jla2VuaW5nOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJhbmtOYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgX2lkOicnICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhbmtBY2NvdW50TmFtZTonJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGFGcm9tTG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YS1yZXNlcnZhc2knKVxyXG4gICAgICAgIGNvbnN0IGRhdGFSZXJzZXJ2YXNpdExvY2FsID0gSlNPTi5wYXJzZShkYXRhRnJvbUxvY2FsISlcclxuICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBSZXNlcnZhc2kgOicsZGF0YVJlcnNlcnZhc2l0TG9jYWwpXHJcbiAgICAgICAgc2V0RGF0YVJlc2VydmF0aW9uKGRhdGFSZXJzZXJ2YXNpdExvY2FsKVxyXG4gICAgICAgIH0sW10pXHJcbiAgICAgICAgY29uc3QgcHJpY2VUcmVhdG1lbnQgPSBkYXRhUmVzZXJ2YXRpb24udHJlYXRtZW50UHJpY2UucHJpY2VcclxuICAgICAgICBjb25zdCB0YXhlcyA9IGRhdGFSZXNlcnZhdGlvbi50cmVhdG1lbnRQcmljZS5wcmljZSAqICgxLzEwMClcclxuICAgICAgICBjb25zdCB0b3RhbCA9IHByaWNlVHJlYXRtZW50ICsgdGF4ZXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2UgcHQtbWQtNTAgcHQtMzBcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LXhsIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPlB1cmNoYXNlIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG1iLTIwXCI+UmVzZXJ2YXRpb24gSUQgeycgJ30gPHNwYW4gY2xhc3NOYW1lPVwicHVyY2hhc2UtZGV0YWlsc1wiPiMwMFIxPC9zcGFuPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPlRyZWF0bWVudHsnICd9IDxzcGFuIGNsYXNzTmFtZT1cInB1cmNoYXNlLWRldGFpbHNcIj57ZGF0YVJlc2VydmF0aW9uLnRyZWF0bWVudFByaWNlLnRyZWF0bWVudFR5cGV9PC9zcGFuPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPlByaWNleycgJ30gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdXJjaGFzZS1kZXRhaWxzXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIlJwIFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPkFkbWluIEZlZSAoMTAlKSBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1cmNoYXNlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RheGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCJScCBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPlRvdGFsIDxzcGFuIGNsYXNzTmFtZT1cInB1cmNoYXNlLWRldGFpbHMgY29sb3ItcGFsZXR0ZS00XCI+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9IHt0b3RhbH1cclxuICAgICAgICAgICAgICAgIHByZWZpeD1cIlJwIFwiIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxociBcclxuICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6JzFweCBzb2xpZCBibGFjaydcclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50IHB0LW1kLTUwIHBiLW1kLTUwIHB0LTEwIHBiLTEwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC14bCBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5QYXltZW50IEluZm9ybWF0aW9uczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSBtYi0yMFwiPllvdXIgQWNjb3VudCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInB1cmNoYXNlLWRldGFpbHNcIj57ZGF0YVJlc2VydmF0aW9uLmJhbmtBY2NvdW50TmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5UeXBlIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsc1wiPntkYXRhUmVzZXJ2YXRpb24ucGF5bWVudE1ldGhvZC5wYXltZW50LnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5CYW5rIE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWxzXCI+e2RhdGFSZXNlcnZhdGlvbi5wYXltZW50TWV0aG9kLmJhbmsuYmFua05hbWV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG1iLTIwXCI+QmFuayBBY2NvdW50IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWxzXCI+e2RhdGFSZXNlcnZhdGlvbi5wYXltZW50TWV0aG9kLmJhbmsubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5CYW5rIE51bWJlciA8c3BhbiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbHNcIj57ZGF0YVJlc2VydmF0aW9uLnBheW1lbnRNZXRob2QuYmFuay5ub1Jla2VuaW5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXRJdGVtKCkge1xyXG4gICAgY29uc3RbZGF0YVRyZWF0bWVudCxzZXREYXRhVHJlYXRtZW50XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgIGxlbWVudGF0aW9uOicnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOicnLFxyXG4gICAgICAgIHByaWNlOjAsXHJcbiAgICAgICAgdHJlYXRtZW50UHJpY2U6e1xyXG4gICAgICAgICAgICB0cmVhdG1lbnRUeXBlOicnLFxyXG4gICAgICAgICAgICBwcmljZTowXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YUZyb21Mb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhLXJlc2VydmFzaScpXHJcbiAgICAgICAgY29uc3QgZGF0YVRyZWF0bWVudExvY2FsID0gSlNPTi5wYXJzZShkYXRhRnJvbUxvY2FsISlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YSBwcmljZTonLCBkYXRhVHJlYXRtZW50TG9jYWwpXHJcbiAgICAgICAgc2V0RGF0YVRyZWF0bWVudChkYXRhVHJlYXRtZW50TG9jYWwpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1jaGVja291dCBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIHB0LW1kLTUwIHBiLW1kLTUwIHB0LTMwIHBiLTMwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZS00XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNyb3BwZWRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9UaHVtYm5haWwtMy5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6Jy0yNXB4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOictMjVweCdcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMiBtLTBcIiBhbGlnbj0nY2VudGVyJz5OYW1hIFBhc2llbiA8L3A+ICovfVxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiZnctbm9ybWFsIHRleHQteGwgY29sb3ItcGFsZXR0ZS0xIG1iLTEwXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOic0MHB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoncmV2ZXJ0J1xyXG4gICAgICAgICAgICB9fSBhbGlnbj0nY2VudGVyJz57ZGF0YVRyZWF0bWVudC5uYW1lfTxici8+IHtkYXRhVHJlYXRtZW50LnByaWNlfTwvcD4gKi99XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG1iLTIwXCI+TmFtYSBQYXNpZW4gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVyY2hhc2UtZGV0YWlsc1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiczMjFweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2RhdGFUcmVhdG1lbnQubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5UcmVhdG1lbnQgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVyY2hhc2UtZGV0YWlsc1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiczMjFweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2RhdGFUcmVhdG1lbnQudHJlYXRtZW50UHJpY2UudHJlYXRtZW50VHlwZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5MZW1lbnRhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJwdXJjaGFzZS1kZXRhaWxzXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzMyMXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT57ZGF0YVRyZWF0bWVudC5sZW1lbnRhdGlvbn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBjb2xvci1wYWxldHRlLTEgbWItMjBcIj5QaG9uZSBOdW1iZXIgPHNwYW4gY2xhc3NOYW1lPVwicHVyY2hhc2UtZGV0YWlsc1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiczMjFweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2RhdGFUcmVhdG1lbnQucGhvbmVOdW1iZXJ9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMiBtLTBcIiBhbGlnbj0nY2VudGVyJz5TaWxhaGthbiBMYW5qdXRrYW4gUGVtYmF5YXJhbjwvcD4gKi99XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG5pbXBvcnQgeyBKV1RQYXlsb2FkVHlwZXMsIFVzZXJUeXBlcyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDYWxsQXBpUHJvcHMgZXh0ZW5kcyBBeGlvc1JlcXVlc3RDb25maWd7XHJcbiAgICB0b2tlbj86IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNhbGxBUEkoe3VybCwgbWV0aG9kLCBkYXRhLCB0b2tlbn06IENhbGxBcGlQcm9wcykge1xyXG4gICAgbGV0IGhlYWRlcnMgPXt9XHJcbiAgICBpZih0b2tlbil7XHJcbiAgICAgICAgY29uc3QgdG9rZW5Db29raWVzID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbkNvb2tpZXMpe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW5Db29raWVzKVxyXG4gICAgICAgICAgICBoZWFkZXJzID17XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOmBCZWFyZXIgJHtKd3RUb2tlbn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGhlYWRlcnNcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IGVyci5yZXNwb25zZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnYXBpIHJlc3BvbnNlIDogJywgcmVzcG9uc2UpXHJcbiAgICBcclxuICAgIGlmKHJlc3BvbnNlPy5zdGF0dXMgPiAzMDApe1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIFN1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgQ2hlY2tvdXRJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DaGVja291dEl0ZW1cIjtcclxuaW1wb3J0IENoZWNrb3V0RGV0YWlsIGZyb20gXCIuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DaGVja291dERldGFpbFwiXHJcbmltcG9ydCBDaGVja291dENvbmZpcm1hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2hlY2tvdXRDb21maXJtYXRpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQgbXgtYXV0byBwdC1tZC0xMDAgcGItbWQtMTQ1IHB0LTMwIHBiLTMwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIHRleHQtbWQtY2VudGVyIHRleHQtc3RhcnQgcGItNTBcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbi9UQlM1TE9HTy5QTkdcIiB3aWR0aD17MjQwfSBoZWlnaHQgPXsyNDB9IGFsdD1cImxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIG1hc2s9XCJ1cmwoI21hc2swKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjMwXCIgY3k9XCIzMFwiIHI9XCIzMFwiIGZpbGw9XCIjMDBCQUZGXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00MS41MDAxIDM1LjAwMDFDNTIuMzAwMSAzOC4yMDAxIDQ5LjY2NjggNDguMDAwMSA0Ny4wMDAxIDUyLjUwMDFMNzEuMDAwMSA2MC41MDAxTDc5LjUwMDEgLTEyLjk5OTlDNjMuNjY2NyAtMTMuODMzMyAyOS41MDAxIC0xNC45OTk5IDE5LjUwMDEgLTEyLjk5OTlDNy4wMDAwNyAtMTAuNDk5OSAxMy41MDAxIDQuMDAwMDYgMTIuMDAwMSAxNC4wMDAxQzEwLjUwMDEgMjQuMDAwMSAyOC4wMDAxIDMxLjAwMDEgNDEuNTAwMSAzNS4wMDAxWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM0RDE3RTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTU0LjQ5NSA0Ny43ODVDNTQuNDk1IDUxLjI4NSA1My42NTUgNTQuNTQgNTEuOTc1IDU3LjU1QzUwLjI5NSA2MC41NiA0Ny43NCA2My4wMSA0NC4zMSA2NC45QzQwLjg4IDY2Ljc5IDM2LjY0NSA2Ny43MzUgMzEuNjA1IDY3LjczNUMyNi43MDUgNjcuNzM1IDIyLjMzIDY2Ljg2IDE4LjQ4IDY1LjExQzE0LjcgNjMuMjkgMTEuNjU1IDYwLjg0IDkuMzQ1IDU3Ljc2QzcuMTA1IDU0LjYxIDUuODEgNTEuMDQgNS40NiA0Ny4wNUgxNS42NDVDMTUuODU1IDQ5LjE1IDE2LjU1NSA1MS4yMTUgMTcuNzQ1IDUzLjI0NUMxOS4wMDUgNTUuMjA1IDIwLjc1NSA1Ni44NSAyMi45OTUgNTguMThDMjUuMzA1IDU5LjQ0IDI4LjA3IDYwLjA3IDMxLjI5IDYwLjA3QzM1LjQ5IDYwLjA3IDM4LjcxIDU4Ljk1IDQwLjk1IDU2LjcxQzQzLjE5IDU0LjQ3IDQ0LjMxIDUxLjYgNDQuMzEgNDguMUM0NC4zMSA0NS4wOSA0My41MDUgNDIuNjQgNDEuODk1IDQwLjc1QzQwLjM1NSAzOC44NiAzOC40MyAzNy4zOSAzNi4xMiAzNi4zNEMzMy44MSAzNS4yMiAzMC42NiAzNC4wMyAyNi42NyAzMi43N0MyMS45OCAzMS4yMyAxOC4yIDI5Ljc5NSAxNS4zMyAyOC40NjVDMTIuNTMgMjcuMDY1IDEwLjExNSAyNSA4LjA4NSAyMi4yN0M2LjEyNSAxOS41NCA1LjE0NSAxNS45MzUgNS4xNDUgMTEuNDU1QzUuMTQ1IDcuNjA0OTkgNi4wNTUgNC4yMDk5OSA3Ljg3NSAxLjI3QzkuNzY1IC0xLjY3IDEyLjQyNSAtMy45NDUgMTUuODU1IC01LjU1NUMxOS4zNTUgLTcuMTY1IDIzLjQ1IC03Ljk3IDI4LjE0IC03Ljk3QzM1LjQyIC03Ljk3IDQxLjE5NSAtNi4xODUgNDUuNDY1IC0yLjYxNUM0OS43MzUgMC44ODQ5OTYgNTIuMjIgNS4zNjUgNTIuOTIgMTAuODI1SDQyLjYzQzQyLjA3IDcuODg1IDQwLjU2NSA1LjI5NSAzOC4xMTUgMy4wNTVDMzUuNjY1IDAuODE0OTk3IDMyLjM0IC0wLjMwNTAwMyAyOC4xNCAtMC4zMDUwMDNDMjQuMjkgLTAuMzA1MDAzIDIxLjIxIDAuNzA5OTk2IDE4LjkgMi43Mzk5OUMxNi41OSA0LjY5OTk5IDE1LjQzNSA3LjUgMTUuNDM1IDExLjE0QzE1LjQzNSAxNC4wMSAxNi4xNyAxNi4zNTUgMTcuNjQgMTguMTc1QzE5LjE4IDE5LjkyNSAyMS4wNyAyMS4zMjUgMjMuMzEgMjIuMzc1QzI1LjU1IDIzLjM1NSAyOC42MyAyNC40NzUgMzIuNTUgMjUuNzM1QzM3LjMxIDI3LjI3NSA0MS4xMjUgMjguNzQ1IDQzLjk5NSAzMC4xNDVDNDYuOTM1IDMxLjU0NSA0OS40MiAzMy42OCA1MS40NSAzNi41NUM1My40OCAzOS4zNSA1NC40OTUgNDMuMDk1IDU0LjQ5NSA0Ny43ODVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgXHJcbiAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOicxcHggc29saWQgYmxhY2snXHJcbiAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0IHB0LW1kLTUwIHB0LTBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTEwXCIgYWxpZ24gPScnPkRldGFpbCBSZXNlcnZhc2k8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDaGVja291dEl0ZW0gLz5cclxuICAgICAgICAgICAgPGhyIFxyXG4gICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgICAgICAgICB9fS8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDaGVja291dERldGFpbCAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRDb25maXJtYXRpb24gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2FsbEFQSSBmcm9tIFwiLi4vY29uZmlnL2FwaVwiO1xyXG5pbXBvcnQgeyBCb29rVHlwZXMgfSBmcm9tIFwiLi9kYXRhLXR5cGVzXCI7XHJcblxyXG5cclxuY29uc3QgUk9PVF9BUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEk7XHJcbmNvbnN0IEFQSV9WRVJTSU9OID0gJ2FwaS92MSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVhdHVyZWRUaGVyYXBpc3QoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IEVORFBPSU5UID0gJ3BhdGllbnRzL2xhbmRpbmdwYWdlJztcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vJHtFTkRQT0lOVH1gKTtcclxuICAgIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIGF4aW9zUmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXRhaVRoZXJhcGlzdChpZCkge1xyXG4gICAgY29uc3QgRU5EUE9JTlQgPSBgcGF0aWVudHMvJHtpZH0vZGV0YWlsYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vJHtFTkRQT0lOVH1gKTtcclxuICAgIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIGF4aW9zUmVzcG9uc2UuZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJpY2VEZXRhaWwoKSB7XHJcbiAgICBjb25zdCBFTkRQT0lOVCA9IGBwYXRpZW50cy9wcmljZWRldGFpbGA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059LyR7RU5EUE9JTlR9YCk7XHJcbiAgICBjb25zdCBheGlvc1Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7fVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBheW1lbnREZXRhaWwoKSB7XHJcbiAgICBjb25zdCBFTkRQT0lOVCA9IGBwYXRpZW50cy9wYXltZW50TWV0aG9kYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vJHtFTkRQT0lOVH1gKTtcclxuICAgIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIGF4aW9zUmVzcG9uc2UuZGF0YTtcclxufSAgIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Qm9va2luZyhkYXRhOiBCb29rVHlwZXMpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke1JPT1RfQVBJfS8ke0FQSV9WRVJTSU9OfS9wYXRpZW50cy9ib29rYDtcclxuICAgIHJldHVybiBjYWxsQVBJKHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0b2tlbjogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vJHtFTkRQT0lOVH1gKTtcclxuICAgIC8vIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gIGF4aW9zUmVzcG9uc2UuZGF0YTtcclxufSAgIFxyXG4gXHJcbiAgICBcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInRvYXN0Iiwic2V0Qm9va2luZyIsIkNoZWNrb3V0Q29uZmlybWF0aW9uIiwiY2hlY2tib3giLCJzZXRDaGVja2JveCIsInJvdXRlciIsIm9uU3VibWl0IiwiZGF0YVJlc2VydmF0aW9uTG9jYWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YVJlc2VydmF0aW9uIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJkYXRhIiwidHJlYXRtZW50IiwidHJlYXRtZW50UHJpY2UiLCJfaWQiLCJwYXltZW50IiwicGF5bWVudE1ldGhvZCIsImJhbmsiLCJhY2NvdW50VXNlciIsImJhbmtBY2NvdW50TmFtZSIsIm5hbWUiLCJwaG9uZU51bWJlciIsImxlbWVudGF0aW9uIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicHVzaCIsInN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJOdW1iZXJGb3JtYXQiLCJDaGVja291dERldGFpbCIsInNldERhdGFSZXNlcnZhdGlvbiIsInRyZWF0bWVudFR5cGUiLCJwcmljZSIsInR5cGUiLCJub1Jla2VuaW5nIiwiYmFua05hbWUiLCJkYXRhRnJvbUxvY2FsIiwiZGF0YVJlcnNlcnZhc2l0TG9jYWwiLCJjb25zb2xlIiwibG9nIiwicHJpY2VUcmVhdG1lbnQiLCJ0YXhlcyIsInRvdGFsIiwiYm9yZGVyIiwiQ2hlY2tvdXRJdGVtIiwiZGF0YVRyZWF0bWVudCIsInNldERhdGFUcmVhdG1lbnQiLCJkYXRhVHJlYXRtZW50TG9jYWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiYXhpb3MiLCJDb29raWVzIiwiY2FsbEFQSSIsInVybCIsIm1ldGhvZCIsInRva2VuIiwiaGVhZGVycyIsInRva2VuQ29va2llcyIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsIkF1dGhvcml6YXRpb24iLCJjYXRjaCIsImVyciIsInN0YXR1cyIsInJlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiSW1hZ2UiLCJDaGVja291dCIsIlJPT1RfQVBJIiwiTkVYVF9QVUJMSUNfQVBJIiwiQVBJX1ZFUlNJT04iLCJnZXRGZWF0dXJlZFRoZXJhcGlzdCIsIkVORFBPSU5UIiwiYXhpb3NSZXNwb25zZSIsImdldERldGFpVGhlcmFwaXN0IiwiZ2V0UHJpY2VEZXRhaWwiLCJnZXRQYXltZW50RGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==