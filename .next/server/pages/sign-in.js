(() => {
var exports = {};
exports.id = "pages/sign-in";
exports.ids = ["pages/sign-in"];
exports.modules = {

/***/ "./components/organisms/SignInForm/index.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/SignInForm/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInForm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth */ "./services/auth.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\components\\organisms\\SignInForm\\index.tsx";





 // import jwt_decode from "jwt-decode";




function SignInForm() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const onSubmit = async () => {
    const data = {
      email,
      password
    };
    console.log("data : ", data);

    if (!email || !password) {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Email dan Password wajib diisi!!!');
    } else {
      const response = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.setSignIn)(data);

      if (response.error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(response.message);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Login Success');
        const {
          token
        } = response.data; // console.log('TOKEN : ',token)
        // const user = jwt_decode(token)
        // console.log('USER : ' ,user)

        const tokenBase64 = btoa(token);
        console.log('TOKEN BASE 64 : ', tokenBase64);
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set('token', tokenBase64, {
          expires: 1
        }); // console.log(response)

        router.push('/');
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
      className: "text-4xl fw-bold color-palette-1 mb-10",
      children: "Sign In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
      className: "text-lg color-palette-1 m-0",
      children: "Masuk untuk melakukan proses pendaftaran online"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "pt-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
        for: "email",
        className: "form-label text-lg fw-medium color-palette-1 mb-10",
        children: "Email Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
        type: "email",
        className: "form-control rounded-pill text-lg",
        id: "email",
        name: "email",
        "aria-describedby": "email",
        placeholder: "Enter your email address",
        value: email,
        onChange: event => setEmail(event.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "pt-30",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
        for: "password",
        className: "form-label text-lg fw-medium color-palette-1 mb-10",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
        type: "password",
        className: "form-control rounded-pill text-lg",
        id: "password",
        name: "password",
        "aria-describedby": "password",
        placeholder: "Your password",
        value: password,
        onChange: event => setPassword(event.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "button-group d-flex flex-column mx-auto pt-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        className: "btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" // href="/" 
        ,
        type: "button",
        onClick: onSubmit,
        children: "Continue to Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "sign-up",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill" // role="button"
          ,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)]
  }, void 0, true);
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/sign-in.tsx":
/*!***************************!*\
  !*** ./pages/sign-in.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_organisms_SignInForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organisms/SignInForm */ "./components/organisms/SignInForm/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\campus subject\\Final Project 1\\TBSFisioterapi\\front-end-tbs\\pages\\sign-in.tsx";




function SignIn() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: "sign-in mx-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "row  ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-xxl-5 col-lg-6  my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          action: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "container mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "pb-50",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  className: "navbar-brand",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                    src: "/icon/TBS5LOGO.png",
                    width: 160,
                    height: 160,
                    alt: "logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_organisms_SignInForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/icon/fotoluar.png",
          width: "402",
          height: "291.21",
          className: "img-fluid pb-50",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "text-4xl fw-bold text-white mb-30",
          children: ["Tukad Banyusari 5 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 85
          }, this), "Physiotherapy & Massage."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "text-white m-0",
          children: ["We provide digital-based registration and consultation services", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this), "to improve patient health services", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 56
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./services/auth.ts":
/*!**************************!*\
  !*** ./services/auth.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSignUp": () => (/* binding */ setSignUp),
/* harmony export */   "setSignIn": () => (/* binding */ setSignIn)
/* harmony export */ });
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api */ "./config/api/index.ts");

const ROOT_API = "https://admintbs5.herokuapp.com";
const API_VERSION = 'api/v1';
async function setSignUp(data) {
  const ENDPOINT = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return (0,_config_api__WEBPACK_IMPORTED_MODULE_0__.default)({
    url: ENDPOINT,
    method: 'POST',
    data
  });
}
async function setSignIn(data) {
  const ENDPOINT = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return (0,_config_api__WEBPACK_IMPORTED_MODULE_0__.default)({
    url: ENDPOINT,
    method: 'POST',
    data
  }); // const axiosResponse = response.data;
  // return  axiosResponse.data;
}

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

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

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

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

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sign-in.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vc3RvcmVnZy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpZ25JbkZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9jb25maWcvYXBpL2luZGV4LnRzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3BhZ2VzL3NpZ24taW4udHN4Iiwid2VicGFjazovL3N0b3JlZ2cvLi9zZXJ2aWNlcy9hdXRoLnRzIiwid2VicGFjazovL3N0b3JlZ2cvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9zdG9yZWdnL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9pZ25vcmVkfEQ6XFxjYW1wdXMgc3ViamVjdFxcRmluYWwgUHJvamVjdCAxXFxUQlNGaXNpb3RlcmFwaVxcZnJvbnQtZW5kLXRic1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IHNldFNpZ25JbiB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbi8vIGltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5Gb3JtKCkge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIDogXCIsZGF0YSlcclxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignRW1haWwgZGFuIFBhc3N3b3JkIHdhamliIGRpaXNpISEhJyk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNldFNpZ25JbihkYXRhKVxyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdMb2dpbiBTdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RPS0VOIDogJyx0b2tlbilcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVzZXIgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VTRVIgOiAnICx1c2VyKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5CYXNlNjQgPSBidG9hKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT0tFTiBCQVNFIDY0IDogJyAsdG9rZW5CYXNlNjQpXHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbkJhc2U2NCwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZ3LWJvbGQgY29sb3ItcGFsZXR0ZS0xIG1iLTEwXCI+U2lnbiBJbjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgY29sb3ItcGFsZXR0ZS0xIG0tMFwiPk1hc3VrIHVudHVrIG1lbGFrdWthbiBwcm9zZXMgcGVuZGFmdGFyYW4gb25saW5lPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xMFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtcGlsbCB0ZXh0LWxnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+c2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtbGcgZnctbWVkaXVtIGNvbG9yLXBhbGV0dGUtMSBtYi0xMFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGwgdGV4dC1sZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT5zZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgZC1mbGV4IGZsZXgtY29sdW1uIG14LWF1dG8gcHQtNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ24taW4gZnctbWVkaXVtIHRleHQtbGcgdGV4dC13aGl0ZSByb3VuZGVkLXBpbGwgbWItMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHJlZj1cIi9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q29udGludWUgdG8gU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwic2lnbi11cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduLXVwIGZ3LW1lZGl1bSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMSByb3VuZGVkLXBpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxUb2FzdENvbnRhaW5lciAvPiAqL31cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG5pbXBvcnQgeyBKV1RQYXlsb2FkVHlwZXMsIFVzZXJUeXBlcyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RhdGEtdHlwZXMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDYWxsQXBpUHJvcHMgZXh0ZW5kcyBBeGlvc1JlcXVlc3RDb25maWd7XHJcbiAgICB0b2tlbj86IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNhbGxBUEkoe3VybCwgbWV0aG9kLCBkYXRhLCB0b2tlbn06IENhbGxBcGlQcm9wcykge1xyXG4gICAgbGV0IGhlYWRlcnMgPXt9XHJcbiAgICBpZih0b2tlbil7XHJcbiAgICAgICAgY29uc3QgdG9rZW5Db29raWVzID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbkNvb2tpZXMpe1xyXG4gICAgICAgICAgICBjb25zdCBKd3RUb2tlbiA9IGF0b2IodG9rZW5Db29raWVzKVxyXG4gICAgICAgICAgICBoZWFkZXJzID17XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOmBCZWFyZXIgJHtKd3RUb2tlbn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGhlYWRlcnNcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IGVyci5yZXNwb25zZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnYXBpIHJlc3BvbnNlIDogJywgcmVzcG9uc2UpXHJcbiAgICBcclxuICAgIGlmKHJlc3BvbnNlPy5zdGF0dXMgPiAzMDApe1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIFN1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2lnbkluRm9ybVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZ24taW4gbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHhsLTUgY29sLWxnLTYgIG15LWF1dG8gcHktbGctMCBwdC1sZy01MCBwYi1sZy01MCBwdC0zMCBwYi00NyBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMgPSBcIi9pY29uL1RCUzVMT0dPLnBuZ1wiIHdpZHRoPXsxNjB9IGhlaWdodD17MTYwfSBhbHQ9XCJsb2dvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWduSW5Gb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtNyBjb2wtbGctNiBiZy1ibHVlIHRleHQtY2VudGVyIHB0LWxnLTE0NSBwYi1sZy0xNDUgZC1sZy1ibG9jayBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb24vZm90b2x1YXIucG5nXCIgd2lkdGg9XCI0MDJcIiBoZWlnaHQ9XCIyOTEuMjFcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcGItNTBcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZnctYm9sZCB0ZXh0LXdoaXRlIG1iLTMwXCI+VHVrYWQgQmFueXVzYXJpIDUgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBQaHlzaW90aGVyYXB5ICYgTWFzc2FnZS48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtLTBcIj5XZSBwcm92aWRlIGRpZ2l0YWwtYmFzZWQgcmVnaXN0cmF0aW9uIGFuZCBjb25zdWx0YXRpb24gc2VydmljZXMgXHJcbiAgICAgICAgICAgICAgICA8YnIvPnRvIGltcHJvdmUgcGF0aWVudCBoZWFsdGggc2VydmljZXM8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2FsbEFQSSBmcm9tIFwiLi4vY29uZmlnL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2dpblR5cGVzIH0gZnJvbSBcIi4vZGF0YS10eXBlc1wiO1xyXG5cclxuXHJcbmNvbnN0IFJPT1RfQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG5jb25zdCBBUElfVkVSU0lPTiA9ICdhcGkvdjEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNpZ25VcChkYXRhOkZvcm1EYXRhKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IEVORFBPSU5UID0gYCR7Uk9PVF9BUEl9LyR7QVBJX1ZFUlNJT059L2F1dGgvc2lnbnVwYDtcclxuIFxyXG4gICAgcmV0dXJuIGNhbGxBUEkoe1xyXG4gICAgICAgIHVybDpFTkRQT0lOVCxcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNpZ25JbihkYXRhOiBMb2dpblR5cGVzKSB7XHJcblxyXG4gICAgY29uc3QgRU5EUE9JTlQgPSBgJHtST09UX0FQSX0vJHtBUElfVkVSU0lPTn0vYXV0aC9zaWduaW5gO1xyXG5cclxuICAgIHJldHVybiBjYWxsQVBJKHtcclxuICAgICAgICB1cmw6RU5EUE9JTlQsXHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnN0IGF4aW9zUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgLy8gcmV0dXJuICBheGlvc1Jlc3BvbnNlLmRhdGE7XHJcbiAgICBcclxufSIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJMaW5rIiwidG9hc3QiLCJzZXRTaWduSW4iLCJDb29raWVzIiwiU2lnbkluRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3VjY2VzcyIsInRva2VuIiwidG9rZW5CYXNlNjQiLCJidG9hIiwic2V0IiwiZXhwaXJlcyIsInB1c2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYXhpb3MiLCJjYWxsQVBJIiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuQ29va2llcyIsImdldCIsIkp3dFRva2VuIiwiYXRvYiIsIkF1dGhvcml6YXRpb24iLCJjYXRjaCIsImVyciIsInN0YXR1cyIsInJlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJJbWFnZSIsIlNpZ25JbiIsIlJPT1RfQVBJIiwiTkVYVF9QVUJMSUNfQVBJIiwiQVBJX1ZFUlNJT04iLCJzZXRTaWduVXAiLCJFTkRQT0lOVCJdLCJzb3VyY2VSb290IjoiIn0=