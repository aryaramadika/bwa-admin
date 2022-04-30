(() => {
var exports = {};
exports.id = "pages/member";
exports.ids = ["pages/member"];
exports.modules = {

/***/ "./components/organisms/OverviewContent/TableRow.tsx":
/*!***********************************************************!*\
  !*** ./components/organisms/OverviewContent/TableRow.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\TableRow.tsx";




function TableRow(props) {
  const {
    title,
    treatmenType,
    item,
    price,
    status,
    image
  } = props;
  const statusClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'float-start icon-status': true,
    'pending': status === 'Pending',
    'success': status === 'Success',
    'failed': status === 'Failed'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
      className: "align-middle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
        scope: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "game-title-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "game-title fw-medium text-start color-palette-1 m-0",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-xs fw-normal text-start color-palette-2 m-0",
            children: treatmenType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "fw-medium text-start color-palette-1 m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_0___default()), {
            value: price,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: statusClass
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "fw-medium text-start color-palette-1 m-0 position-relative",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/organisms/OverviewContent/index.tsx":
/*!********************************************************!*\
  !*** ./components/organisms/OverviewContent/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverviewContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/patient */ "./services/patient.ts");
/* harmony import */ var _treatementOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treatementOverview */ "./components/organisms/OverviewContent/treatementOverview.tsx");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableRow */ "./components/organisms/OverviewContent/TableRow.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\index.tsx";







function OverviewContent() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    const response = await (0,_services_patient__WEBPACK_IMPORTED_MODULE_1__.getPatientOverview)();

    if (response.error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(response.message);
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
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("main", {
    className: "main-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "ps-lg-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: "text-4xl fw-bold color-palette-1 mb-30",
        children: "Overview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "top-up-categories mb-30",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Total Booking Spent"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "main-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "row",
            children: count.map(spend => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_treatementOverview__WEBPACK_IMPORTED_MODULE_2__.default, {
              spending: spend.total,
              icon: "ic-desktop",
              children: spend.treatmentType
            }, spend._id, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, this))
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "latest-transaction",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-lg fw-medium color-palette-1 mb-14",
          children: "Latest Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
                  children: "Treatment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "col",
                  children: "Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "col",
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
              children: data.map(historyBooking => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
                title: historyBooking.treatment.treatmentType,
                price: historyBooking.total,
                status: historyBooking.status
              }, historyBooking._id, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 37
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
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

/***/ }),

/***/ "./components/organisms/OverviewContent/treatementOverview.tsx":
/*!*********************************************************************!*\
  !*** ./components/organisms/OverviewContent/treatementOverview.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Treatment)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\OverviewContent\\treatementOverview.tsx";



function Treatment(props) {
  const {
    children,
    spending,
    icon
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "col-lg-4 ps-15 pe-15 pb-lg-0 pb-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "categories-card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "d-flex align-items-center mb-24",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: "/icon/treatment icon.png",
          width: 90,
          height: 60
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "color-palette-1 mb-0 ms-12",
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "text-sm color-palette-2 mb-1",
          children: "Total Spent"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "text-2xl color-palette-1 fw-medium m-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
            value: spending,
            prefix: "Rp ",
            displayType: "text",
            thousandSeparator: ".",
            decimalSeparator: ","
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/organisms/SideBar/MenuItem.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/SideBar/MenuItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\MenuItem.tsx";



function MenuItem(props) {
  const {
    title,
    icon,
    active
  } = props;
  const classItem = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    'item': true,
    'mb-30': true,
    active
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: classItem,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "me-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: `/icon/${icon}.svg`,
        width: 25,
        height: 25
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "item-title m-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "",
        className: "text-lg text-decoration-none",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/organisms/SideBar/Profile.tsx":
/*!**************************************************!*\
  !*** ./components/organisms/SideBar/Profile.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\Profile.tsx";




function Profile() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    avatar: '',
    name: '',
    email: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('token');

    if (token) {
      const JwtToken = atob(token);
      const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(JwtToken);
      const userPayload = payload.patient; // const IMG = process.env.NEXT_PUBLIC_IMAGE
      // user.avatar = `${IMG}/${userPayload.avatar}`

      setUser(userPayload);
    } // console.log('User  :',user)

  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "user text-center pb-50 pe-30",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
      src: user.avatar,
      width: "90",
      height: "90",
      className: "img-fluid mb-20",
      style: {
        borderRadius: "100%"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: "fw-bold text-xl color-palette-1 m-0",
      children: user.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "color-palette-2 m-0",
      children: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/organisms/SideBar/index.tsx":
/*!************************************************!*\
  !*** ./components/organisms/SideBar/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile */ "./components/organisms/SideBar/Profile.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./components/organisms/SideBar/MenuItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SideBar\\index.tsx";



function SideBar(props) {
  const {
    activeMenu
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
    className: "sidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "content pt-50 pb-30 ps-30",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "menus",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Overview",
          icon: "ic-menu-overview",
          active: activeMenu === 'overview'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Transactions",
          icon: "ic-menu-transaction",
          active: activeMenu === 'transactions'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Recommendation",
          icon: "ic-menu-messages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Treatment History",
          icon: "ic-menu-card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Booking",
          icon: "ic-menu-rewards"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Setting",
          icon: "ic-menu-settings",
          active: activeMenu === 'settings'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: "Log Out",
          icon: "ic-menu-logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
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

  ; // console.log(response)

  const res = {
    error: false,
    message: 'Success',
    data: response.data.count ? response.data : response.data.data
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

/***/ "./pages/member/index.tsx":
/*!********************************!*\
  !*** ./pages/member/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customer),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _components_organisms_OverviewContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/organisms/OverviewContent */ "./components/organisms/OverviewContent/index.tsx");
/* harmony import */ var _components_organisms_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/organisms/SideBar */ "./components/organisms/SideBar/index.tsx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\member\\index.tsx";




function Customer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: "overview overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_organisms_SideBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_organisms_OverviewContent__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
async function getServerSideProps({
  req
}) {
  const {
    token
  } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(jwtToken);
  const userFromPayload = payload.patient;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload
    }
  };
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
/* harmony export */   "setBooking": () => (/* binding */ setBooking),
/* harmony export */   "getPatientOverview": () => (/* binding */ getPatientOverview)
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
async function getPatientOverview() {
  const url = `${ROOT_API}/${API_VERSION}/patients/dashboard`;
  return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__.default)({
    url,
    method: 'GET',
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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

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
var __webpack_exports__ = (__webpack_exec__("./pages/member/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQW9DO0FBQ3ZDLFFBQU1pRCxHQUFHLEdBQUksR0FBRXlSLFFBQVMsSUFBR0UsV0FBWSxxQkFBdkM7QUFDQSxTQUFPNVIsb0RBQU8sQ0FBQztBQUNYQyxJQUFBQSxHQURXO0FBRVhDLElBQUFBLE1BQU0sRUFBRSxLQUZHO0FBR1hiLElBQUFBLEtBQUssRUFBRTtBQUhJLEdBQUQsQ0FBZCxDQUZ1QyxDQVF2QztBQUNBO0FBRUE7QUFDSDs7Ozs7Ozs7OztBQ3BFRCwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b3JlZ2cvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvVGFibGVSb3cudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdmVydmlld0NvbnRlbnQvdHJlYXRlbWVudE92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2lkZUJhci9NZW51SXRlbS50c3giLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZGVCYXIvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZGVCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9jb25maWcvYXBpL2luZGV4LnRzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9wYWdlcy9tZW1iZXIvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9zZXJ2aWNlcy9wYXRpZW50LnRzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwiand0LWRlY29kZVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL3RyZWF0ZW1lbnRPdmVydmlld1wiXHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmludGVyZmFjZSBUYWJsZVJvd1Byb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICB0cmVhdG1lblR5cGU6IHN0cmluZztcclxuICAgIGl0ZW0gOiBudW1iZXI7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBzdGF0dXM6J1BlbmRpbmcnfCdTdWNjZXNzJ3wnRmFpbGVkJztcclxuICAgIGltYWdlOnN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZVJvdyhwcm9wczpUYWJsZVJvd1Byb3BzKSB7XHJcbiAgICBjb25zdHt0aXRsZSx0cmVhdG1lblR5cGUsaXRlbSxwcmljZSxzdGF0dXMsaW1hZ2V9PXByb3BzO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2xhc3M9Y3goe1xyXG4gICAgICAgICdmbG9hdC1zdGFydCBpY29uLXN0YXR1cyc6dHJ1ZSxcclxuICAgICAgICAncGVuZGluZyc6c3RhdHVzPT09J1BlbmRpbmcnLFxyXG4gICAgICAgICdzdWNjZXNzJzpzdGF0dXM9PT0nU3VjY2VzcycsXHJcbiAgICAgICAgJ2ZhaWxlZCc6c3RhdHVzPT09J0ZhaWxlZCdcclxuXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtc3RhcnQgbWUtMyBtYi1sZy0wIG1iLTNcIiBzcmM9e2AvaW1nLyR7aW1hZ2V9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17ODB9IGhlaWdodD17NjB9IGFsdD1cImdhbWUgdGh1bWJcIi8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtdGl0bGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnYW1lLXRpdGxlIGZ3LW1lZGl1bSB0ZXh0LXN0YXJ0IGNvbG9yLXBhbGV0dGUtMSBtLTBcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmdy1ub3JtYWwgdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTIgbS0wXCI+e3RyZWF0bWVuVHlwZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGg+XHJcbiAgICAgXHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy1tZWRpdW0gdGV4dC1zdGFydCBjb2xvci1wYWxldHRlLTEgbS0wXCI+XHJcbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9wPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctbWVkaXVtIHRleHQtc3RhcnQgY29sb3ItcGFsZXR0ZS0xIG0tMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldFBhdGllbnRPdmVydmlldyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wYXRpZW50XCJcclxuaW1wb3J0IFRyZWF0bWVudCBmcm9tIFwiLi90cmVhdGVtZW50T3ZlcnZpZXdcIlxyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIi4vVGFibGVSb3dcIlxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UGF0aWVudE92ZXJ2aWV3KClcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCdUT0tFTiA6ICcsdG9rZW4pXHJcbiAgICAgICAgLy8gICAvLyBjb25zdCB1c2VyID0gand0X2RlY29kZSh0b2tlbilcclxuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCdVU0VSIDogJyAsdXNlcilcclxuICAgICAgICAvLyAgIGNvbnN0IHRva2VuQmFzZTY0ID0gYnRvYSh0b2tlbik7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnVE9LRU4gQkFTRSA2NCA6ICcgLHRva2VuQmFzZTY0KVxyXG4gICAgICAgIC8vICAgQ29va2llcy5zZXQoJ3Rva2VuJywgdG9rZW5CYXNlNjQsIHsgZXhwaXJlczogMSB9KTtcclxuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIC8vICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnREFUQTonLHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgc2V0Q291bnQocmVzcG9uc2UuZGF0YS5jb3VudCk7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhLmRhdGEpOyAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTMwXCI+T3ZlcnZpZXc8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtdXAtY2F0ZWdvcmllcyBtYi0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xNFwiPlRvdGFsIEJvb2tpbmcgU3BlbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudC5tYXAoKHNwZW5kKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVhdG1lbnQga2V5PXtzcGVuZC5faWR9IHNwZW5kaW5nPXtzcGVuZC50b3RhbH0gaWNvbiA9J2ljLWRlc2t0b3AnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3BlbmQudHJlYXRtZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWF0bWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXRyYW5zYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy1tZWRpdW0gY29sb3ItcGFsZXR0ZS0xIG1iLTE0XCI+TGF0ZXN0IFRyYW5zYWN0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBtYWluLWNvbnRlbnQtdGFibGUgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVybGVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIiBzY29wZT1cImNvbFwiPlRyZWF0bWVudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGhpc3RvcnlCb29raW5nKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGlzdG9yeUJvb2tpbmcuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGlzdG9yeUJvb2tpbmcudHJlYXRtZW50LnRyZWF0bWVudFR5cGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aGlzdG9yeUJvb2tpbmcudG90YWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e2hpc3RvcnlCb29raW5nLnN0YXR1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIlxyXG5cclxuaW50ZXJmYWNlIHRyZXRhbWVudFByb3Bze1xyXG4gICAgY2hpbGRyZW46UmVhY3ROb2RlO1xyXG4gICAgc3BlbmRpbmc6bnVtYmVyO1xyXG4gICAgaWNvbjonaWMtZGVza3RvcCd8J2ljLW1vYmlsZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyZWF0bWVudChwcm9wczogdHJldGFtZW50UHJvcHMpIHtcclxuICAgIGNvbnN0e2NoaWxkcmVuICwgc3BlbmRpbmcgLCBpY29ufT0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgcHMtMTUgcGUtMTUgcGItbGctMCBwYi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTI0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaWNvbi90cmVhdG1lbnQgaWNvbi5wbmcnd2lkdGg9ezkwfSBoZWlnaHQ9ezYwfS8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlLTEgbWItMCBtcy0xMlwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBjb2xvci1wYWxldHRlLTIgbWItMVwiPlRvdGFsIFNwZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgY29sb3ItcGFsZXR0ZS0xIGZ3LW1lZGl1bSBtLTBcIj5cclxuICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiUnAgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmludGVyZmFjZSBNZW51SXRlbVByb3Bze1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICBpY29uIDogJ2ljLW1lbnUtb3ZlcnZpZXcnfCdpYy1tZW51LXRyYW5zYWN0aW9uJ1xyXG4gICAgfCdpYy1tZW51LW1lc3NhZ2VzJ3wnaWMtbWVudS1jYXJkJ3wnaWMtbWVudS1yZXdhcmRzJ1xyXG4gICAgfCdpYy1tZW51LXNldHRpbmdzJ3wnaWMtbWVudS1sb2dvdXQnO1xyXG4gICAgYWN0aXZlPyA6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHM6UGFydGlhbDxNZW51SXRlbVByb3BzPikge1xyXG4gICAgY29uc3R7dGl0bGUsIGljb24gLCBhY3RpdmV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc0l0ZW09IGN4KHtcclxuICAgICAgICAnaXRlbSc6dHJ1ZSxcclxuICAgICAgICAnbWItMzAnOnRydWUsXHJcbiAgICAgICAgYWN0aXZlXHJcblxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzSXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWUtM1wiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2ljb24vJHtpY29ufS5zdmdgfSB3aWR0aD17MjV9IGhlaWdodD17MjV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGUgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPnt0aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhdmF0YXI6JycsXHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDonJ1xyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnN0IEp3dFRva2VuID0gYXRvYih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogSldUUGF5bG9hZFR5cGVzID0gand0X2RlY29kZShKd3RUb2tlbilcclxuICAgICAgICAgICAgY29uc3QgdXNlclBheWxvYWQgOiBVc2VyVHlwZXMgPSBwYXlsb2FkLnBhdGllbnRcclxuICAgICAgICAgICAgLy8gY29uc3QgSU1HID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VcclxuICAgICAgICAgICAgLy8gdXNlci5hdmF0YXIgPSBgJHtJTUd9LyR7dXNlclBheWxvYWQuYXZhdGFyfWBcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyUGF5bG9hZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyICA6Jyx1c2VyKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIHRleHQtY2VudGVyIHBiLTUwIHBlLTMwXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiOTBcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMjBcIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjEwMCVcIn19IC8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC14bCBjb2xvci1wYWxldHRlLTEgbS0wXCI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGUtMiBtLTBcIj57dXNlci5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiXHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIlxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIlxyXG5cclxuaW50ZXJmYWNlIFNpZGVCYXJQcm9wcyB7XHJcbiAgICBhY3RpdmVNZW51OiAnb3ZlcnZpZXcnIHwgJ3RyYW5zYWN0aW9ucycgfCAnc2V0dGluZ3MnXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKHByb3BzOlNpZGVCYXJQcm9wcykge1xyXG4gICAgY29uc3QgeyBhY3RpdmVNZW51IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHB0LTUwIHBiLTMwIHBzLTMwXCI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiT3ZlcnZpZXdcIiBpY29uPVwiaWMtbWVudS1vdmVydmlld1wiIGFjdGl2ZT17YWN0aXZlTWVudSA9PT0gJ292ZXJ2aWV3J30gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiVHJhbnNhY3Rpb25zXCIgaWNvbj1cImljLW1lbnUtdHJhbnNhY3Rpb25cImFjdGl2ZT17YWN0aXZlTWVudSA9PT0gJ3RyYW5zYWN0aW9ucyd9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgaWNvbj1cImljLW1lbnUtbWVzc2FnZXNcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJUcmVhdG1lbnQgSGlzdG9yeVwiIGljb249XCJpYy1tZW51LWNhcmRcIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB0aXRsZT1cIkJvb2tpbmdcIiBpY29uPVwiaWMtbWVudS1yZXdhcmRzXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRpdGxlPVwiU2V0dGluZ1wiIGljb249XCJpYy1tZW51LXNldHRpbmdzXCIgYWN0aXZlPXthY3RpdmVNZW51ID09PSAnc2V0dGluZ3MnfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGl0bGU9XCJMb2cgT3V0XCIgaWNvbj1cImljLW1lbnUtbG9nb3V0XCIvPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuaW1wb3J0IHsgSldUUGF5bG9hZFR5cGVzLCBVc2VyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLXR5cGVzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2FsbEFwaVByb3BzIGV4dGVuZHMgQXhpb3NSZXF1ZXN0Q29uZmlne1xyXG4gICAgdG9rZW4/OiBib29sZWFuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYWxsQVBJKHt1cmwsIG1ldGhvZCwgZGF0YSwgdG9rZW59OiBDYWxsQXBpUHJvcHMpIHtcclxuICAgIGxldCBoZWFkZXJzID17fVxyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIGNvbnN0IHRva2VuQ29va2llcyA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW5Db29raWVzKXtcclxuICAgICAgICAgICAgY29uc3QgSnd0VG9rZW4gPSBhdG9iKHRva2VuQ29va2llcylcclxuICAgICAgICAgICAgaGVhZGVycyA9e1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7Snd0VG9rZW59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBoZWFkZXJzXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2FwaSByZXNwb25zZSA6ICcsIHJlc3BvbnNlKVxyXG4gICAgXHJcbiAgICBpZihyZXNwb25zZT8uc3RhdHVzID4gMzAwKXtcclxuICAgICAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuY291bnQgPyByZXNwb25zZS5kYXRhIDogcmVzcG9uc2UuZGF0YS5kYXRhXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBPdmVydmlld0NvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL092ZXJ2aWV3Q29udGVudFwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2lkZUJhclwiO1xyXG5pbXBvcnQgeyBKV1RQYXlsb2FkVHlwZXMsIFVzZXJUeXBlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXMnO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdmVydmlldyBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICA8T3ZlcnZpZXdDb250ZW50IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuaW50ZXJmYWNlIEdldFNlcnZlclNpZGVQcm9wc3tcclxuICAgIHJlcTp7XHJcbiAgICAgICAgY29va2llczoge1xyXG4gICAgICAgIHRva2VuOnN0cmluZ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEgfTpHZXRTZXJ2ZXJTaWRlUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5jb29raWVzO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9zaWduLWluJyxcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgand0VG9rZW4gPSBCdWZmZXIuZnJvbSh0b2tlbiwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpOyBcclxuICAgIGNvbnN0IHBheWxvYWQ6IEpXVFBheWxvYWRUeXBlcyA9IGp3dERlY29kZShqd3RUb2tlbik7XHJcbiAgICBjb25zdCB1c2VyRnJvbVBheWxvYWQ6IFVzZXJUeXBlcyA9IHBheWxvYWQucGF0aWVudDtcclxuICAgIGNvbnN0IElNRyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNRztcclxuICAgIHVzZXJGcm9tUGF5bG9hZC5hdmF0YXIgPSBgJHtJTUd9LyR7dXNlckZyb21QYXlsb2FkLmF2YXRhcn1gO1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgIHVzZXI6IHVzZXJGcm9tUGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNhbGxBUEkgZnJvbSBcIi4uL2NvbmZpZy9hcGlcIjtcclxuaW1wb3J0IHsgQm9va1R5cGVzIH0gZnJvbSBcIi4vZGF0YS10eXBlc1wiO1xyXG5cclxuXHJcbmNvbnN0IFJPT1RfQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG5jb25zdCBBUElfVkVSU0lPTiA9ICdhcGkvdjEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlYXR1cmVkVGhlcmFwaXN0KCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBFTkRQT0lOVCA9ICdwYXRpZW50cy9sYW5kaW5ncGFnZSc7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059LyR7RU5EUE9JTlR9YCk7XHJcbiAgICBjb25zdCBheGlvc1Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGV0YWlUaGVyYXBpc3QoaWQpIHtcclxuICAgIGNvbnN0IEVORFBPSU5UID0gYHBhdGllbnRzLyR7aWR9L2RldGFpbGA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059LyR7RU5EUE9JTlR9YCk7XHJcbiAgICBjb25zdCBheGlvc1Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByaWNlRGV0YWlsKCkge1xyXG4gICAgY29uc3QgRU5EUE9JTlQgPSBgcGF0aWVudHMvcHJpY2VkZXRhaWxgO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke1JPT1RfQVBJfS8ke0FQSV9WRVJTSU9OfS8ke0VORFBPSU5UfWApO1xyXG4gICAgY29uc3QgYXhpb3NSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxuICAgIHJldHVybiAgYXhpb3NSZXNwb25zZS5kYXRhO31cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXltZW50RGV0YWlsKCkge1xyXG4gICAgY29uc3QgRU5EUE9JTlQgPSBgcGF0aWVudHMvcGF5bWVudE1ldGhvZGA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059LyR7RU5EUE9JTlR9YCk7XHJcbiAgICBjb25zdCBheGlvc1Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7XHJcbn0gICBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldEJvb2tpbmcoZGF0YTogQm9va1R5cGVzKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vcGF0aWVudHMvYm9va2A7XHJcbiAgICByZXR1cm4gY2FsbEFQSSh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdG9rZW46IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059LyR7RU5EUE9JTlR9YCk7XHJcbiAgICAvLyBjb25zdCBheGlvc1Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIFxyXG4gICAgLy8gcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7XHJcbn0gICBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhdGllbnRPdmVydmlldygpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke1JPT1RfQVBJfS8ke0FQSV9WRVJTSU9OfS9wYXRpZW50cy9kYXNoYm9hcmRgO1xyXG4gICAgcmV0dXJuIGNhbGxBUEkoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHRva2VuOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke1JPT1RfQVBJfS8ke0FQSV9WRVJTSU9OfS8ke0VORFBPSU5UfWApO1xyXG4gICAgLy8gY29uc3QgYXhpb3NSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxuICAgIC8vIHJldHVybiAgYXhpb3NSZXNwb25zZS5kYXRhO1xyXG59ICAgXHJcbiBcclxuICAgIFxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImp3dC1kZWNvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJOdW1iZXJGb3JtYXQiLCJjeCIsIlRhYmxlUm93IiwicHJvcHMiLCJ0aXRsZSIsInRyZWF0bWVuVHlwZSIsIml0ZW0iLCJwcmljZSIsInN0YXR1cyIsImltYWdlIiwic3RhdHVzQ2xhc3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFBhdGllbnRPdmVydmlldyIsIlRyZWF0bWVudCIsInRvYXN0IiwidXNlUm91dGVyIiwiT3ZlcnZpZXdDb250ZW50Iiwicm91dGVyIiwiY291bnQiLCJzZXRDb3VudCIsImRhdGEiLCJzZXREYXRhIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BlbmQiLCJ0b3RhbCIsInRyZWF0bWVudFR5cGUiLCJfaWQiLCJoaXN0b3J5Qm9va2luZyIsInRyZWF0bWVudCIsIkltYWdlIiwiY2hpbGRyZW4iLCJzcGVuZGluZyIsImljb24iLCJNZW51SXRlbSIsImFjdGl2ZSIsImNsYXNzSXRlbSIsIkNvb2tpZXMiLCJqd3RfZGVjb2RlIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwiYXZhdGFyIiwibmFtZSIsImVtYWlsIiwidG9rZW4iLCJnZXQiLCJKd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlclBheWxvYWQiLCJwYXRpZW50IiwiYm9yZGVyUmFkaXVzIiwiU2lkZUJhciIsImFjdGl2ZU1lbnUiLCJheGlvcyIsImNhbGxBUEkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwidG9rZW5Db29raWVzIiwiQXV0aG9yaXphdGlvbiIsImNhdGNoIiwiZXJyIiwicmVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsImp3dERlY29kZSIsIkN1c3RvbWVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiY29va2llcyIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJqd3RUb2tlbiIsIkJ1ZmZlciIsImZyb20iLCJ1c2VyRnJvbVBheWxvYWQiLCJJTUciLCJORVhUX1BVQkxJQ19JTUciLCJST09UX0FQSSIsIk5FWFRfUFVCTElDX0FQSSIsIkFQSV9WRVJTSU9OIiwiZ2V0RmVhdHVyZWRUaGVyYXBpc3QiLCJFTkRQT0lOVCIsImF4aW9zUmVzcG9uc2UiLCJnZXREZXRhaVRoZXJhcGlzdCIsImdldFByaWNlRGV0YWlsIiwiZ2V0UGF5bWVudERldGFpbCIsInNldEJvb2tpbmciXSwic291cmNlUm9vdCI6IiJ9