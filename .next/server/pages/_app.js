(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/utilities.css */ "./styles/utilities.css");
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_utilities_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.css */ "./styles/homepage.css");
/* harmony import */ var _styles_homepage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_detail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/detail.css */ "./styles/detail.css");
/* harmony import */ var _styles_detail_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_detail_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_checkout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/checkout.css */ "./styles/checkout.css");
/* harmony import */ var _styles_checkout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_checkout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/complete-checkout.css */ "./styles/complete-checkout.css");
/* harmony import */ var _styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sign-in.css */ "./styles/sign-in.css");
/* harmony import */ var _styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sign-up.css */ "./styles/sign-up.css");
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/sign-up-photo.css */ "./styles/sign-up-photo.css");
/* harmony import */ var _styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/sign-up-success.css */ "./styles/sign-up-success.css");
/* harmony import */ var _styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/404-not-found.css */ "./styles/404-not-found.css");
/* harmony import */ var _styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_overview_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/overview.css */ "./styles/overview.css");
/* harmony import */ var _styles_overview_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_overview_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/sidebar.css */ "./styles/sidebar.css");
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_transactions_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/transactions.css */ "./styles/transactions.css");
/* harmony import */ var _styles_transactions_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_transactions_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/transactions-detail.css */ "./styles/transactions-detail.css");
/* harmony import */ var _styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/edit-profile.css */ "./styles/edit-profile.css");
/* harmony import */ var _styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/navbar-log-in.css */ "./styles/navbar-log-in.css");
/* harmony import */ var _styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/dist/shared/lib/head */ "next/dist/shared/lib/head");
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)((next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_18___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("link", {
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_16__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/404-not-found.css":
/*!**********************************!*\
  !*** ./styles/404-not-found.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/checkout.css":
/*!*****************************!*\
  !*** ./styles/checkout.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/complete-checkout.css":
/*!**************************************!*\
  !*** ./styles/complete-checkout.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/detail.css":
/*!***************************!*\
  !*** ./styles/detail.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/edit-profile.css":
/*!*********************************!*\
  !*** ./styles/edit-profile.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/homepage.css":
/*!*****************************!*\
  !*** ./styles/homepage.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/navbar-log-in.css":
/*!**********************************!*\
  !*** ./styles/navbar-log-in.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/overview.css":
/*!*****************************!*\
  !*** ./styles/overview.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sidebar.css":
/*!****************************!*\
  !*** ./styles/sidebar.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-in.css":
/*!****************************!*\
  !*** ./styles/sign-in.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up-photo.css":
/*!**********************************!*\
  !*** ./styles/sign-up-photo.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up-success.css":
/*!************************************!*\
  !*** ./styles/sign-up-success.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up.css":
/*!****************************!*\
  !*** ./styles/sign-up.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/transactions-detail.css":
/*!****************************************!*\
  !*** ./styles/transactions-detail.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/transactions.css":
/*!*********************************!*\
  !*** ./styles/transactions.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/utilities.css":
/*!******************************!*\
  !*** ./styles/utilities.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/shared/lib/head":
/*!********************************************!*\
  !*** external "next/dist/shared/lib/head" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOzs7O0FBRUEsU0FBU0UsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQW1EO0FBQ2pELHNCQUNFO0FBQUEsNEJBQ0YsK0RBQUMsbUVBQUQ7QUFBQSw4QkFFRTtBQUFNLFlBQUksRUFBQyx5RUFBWDtBQUFxRixXQUFHLEVBQUMsWUFBekY7QUFDSSxpQkFBUyxFQUFDLHlFQURkO0FBRUksbUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUNJLFlBQUksRUFBQyxxTEFEVDtBQUVJLFdBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVdFO0FBQU0sWUFBSSxFQUFDLDBDQUFYO0FBQXNELFdBQUcsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFlRTtBQUFRLFdBQUcsRUFBQyw4RUFBWjtBQUNJLGlCQUFTLEVBQUMseUVBRGQ7QUFFSSxtQkFBVyxFQUFDO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERSxlQXNCRiwrREFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkUsZUF1QkYsK0RBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRTtBQUFBLGtCQURGO0FBMkJEOztBQUNELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFMURBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZFwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy91dGlsaXRpZXMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZXBhZ2UuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZGV0YWlsLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2NoZWNrb3V0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2NvbXBsZXRlLWNoZWNrb3V0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3NpZ24taW4uY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc2lnbi11cC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9zaWduLXVwLXBob3RvLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3NpZ24tdXAtc3VjY2Vzcy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy80MDQtbm90LWZvdW5kLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL292ZXJ2aWV3LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXIuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNhY3Rpb25zLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3RyYW5zYWN0aW9ucy1kZXRhaWwuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZWRpdC1wcm9maWxlLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL25hdmJhci1sb2ctaW4uY3NzJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuXG5cblxuXG5cblxuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybihcbiAgICA8PlxuICA8SGVhZD5cbiAgICB7LyogQm9vdHN0YXJwIGNzcyAqL31cbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LSswbjB4VlcyZVNSNU9vbUdOWURuaHpBYkRzT1h4Y3ZTTjFUUHByVk1UTkRiaVlaQ3hZYk9PbDcrQU12eVRHMnhcIiBcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgey8qIEdvb2dsZSBGb250ICAqL31cbiAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XG4gICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICB7LyogQU9TIEFuaW1hdGlvbiAgKi99XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2Fvc0AyLjMuMS9kaXN0L2Fvcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2Fvc0AyLjMuMS9kaXN0L2Fvcy5qc1wiPjwvc2NyaXB0PiAqL31cblxuICAgIHsvKiBDYWxsIEJvb3RzdHJhcCBKUyAqL31cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4xL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZ3RFanJEL1NlQ3RtSVNrSmtOVWFhS01vTEQwLy9FbEoxOXNtb3p1SFY2ejNJZWhkcyszVWxiOUJuOVBseDB4NFwiIFxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cblxuXG4gIDwvSGVhZD5cbiAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8VG9hc3RDb250YWluZXIgLz5cbiAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9