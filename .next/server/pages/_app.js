(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./analytics/index.js":
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Code-Play-Ground\\NextJs\\restatesalesone\\analytics\\index.js";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children:
      /*#__PURE__*/
      // process.env.NODE_ENV === "production" && process.browser ?
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-LV7XLR84LN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());

                              gtag('config', 'G-LV7XLR84LN');
                `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this) //: null

    }, void 0, false);
  }

});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../analytics */ "./analytics/index.js");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skin/skin-1.css */ "./css/skin/skin-1.css");
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "E:\\Code-Play-Ground\\NextJs\\restatesalesone\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: toggle1,
    1: setToggle1
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: header,
    1: setHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_8___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "page-wraper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_analytics__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 16
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./css/skin/skin-1.css":
/*!*****************************!*\
  !*** ./css/skin/skin-1.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-rangeslider");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-scroll-position");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixFQUFBQSxNQUFNLEtBQUssT0FBWCxJQUFzQk8sY0FBYyxHQUFHLEVBQXZDLEdBQ09MLE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXUyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixVQUF6QixDQURsQixHQUVPVixPQUFPLElBQUlBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1MsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsVUFBNUIsQ0FGbEI7QUFJQSxzQkFDSztBQUFBLDJCQUNLO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSywrREFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFFSywrREFBQyxTQUFELG9CQUFlbkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREwsbUJBREw7QUFRSjs7QUFFRCxpRUFBZUQsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FRL0RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYXIvLi9hbmFseXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NhbWFyLy4vY3NzL3NraW4vc2tpbi0xLmNzcyIsIndlYnBhY2s6Ly9zYW1hci8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zYW1hci8uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzIiwid2VicGFjazovL3NhbWFyLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL3NhbWFyLy4vc3R5bGVzL3N3aXRjaGVyLmNzcyIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdC1yYW5nZXNsaWRlclwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvY2Vzcy5icm93c2VyID9cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBHbG9iYWwgc2l0ZSB0YWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAtLT4gKi99XHJcbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUxWN1hMUjg0TE5cIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctTFY3WExSODRMTicpO1xyXG4gICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICA8L0hlYWQ+IC8vOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgR29vZ2xlQW5hbGl0aWNzIGZyb20gJy4uL2FuYWx5dGljcyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3dpdGNoZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAgY29uc3QgW3RvZ2dsZTEsIHNldFRvZ2dsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFtib2R5Xywgc2V0Ym9keV9dID0gdXNlU3RhdGUoKTtcclxuICAgICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICAgICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Ym9keV8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpO1xyXG4gICAgICAgICAgc2V0SGVhZGVyXyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1iYXItd3JhcGVyXCIpKTtcclxuICAgICB9LCBbXSk7XHJcblxyXG4gICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHVzZVNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlMSghdG9nZ2xlMSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgc2V0SGVhZGVyKHZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1ub1wiKTtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfTtcclxuXHJcbiAgICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xyXG4gICAgICAgICAgYm9keV8uc3R5bGUucGFkZGluZyA9IHZhbHVlICsgXCJweFwiO1xyXG4gICAgIH07XHJcblxyXG4gICAgIGhlYWRlciA9PT0gXCJmaXhlZFwiICYmIHNjcm9sbFBvc2l0aW9uID4gMTBcclxuICAgICAgICAgID8gaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKVxyXG4gICAgICAgICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVBbmFsaXRpY3MgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYW5nZXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSGVhZCIsInJlbmRlciIsIl9faHRtbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiR29vZ2xlQW5hbGl0aWNzIiwiU2xpZGVyIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJNeUFwcCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInRvZ2dsZTEiLCJzZXRUb2dnbGUxIiwiYm9keV8iLCJzZXRib2R5XyIsImhlYWRlciIsInNldEhlYWRlciIsImhlYWRlcl8iLCJzZXRIZWFkZXJfIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=