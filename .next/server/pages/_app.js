(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./analytics/ga.js":
/*!*************************!*\
  !*** ./analytics/ga.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageview": () => (/* binding */ pageview),
/* harmony export */   "event": () => (/* binding */ event)
/* harmony export */ });
// log the pageview with their URL
const pageview = url => {
  window.gtag('config', "G-LV7XLR84LN", {
    page_path: url
  });
}; // log specific events happening.

const event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};

/***/ }),

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
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\analytics\\index.js";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children:
      /*#__PURE__*/
      // process.env.NODE_ENV === "production" && process.browser ?
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${"G-LV7XLR84LN"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          async: true,
          dangerouslySetInnerHTML: {
            __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag('config', '${"G-LV7XLR84LN"}', {
                    page_path: window.location.pathname,
                  });
                `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
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
/* harmony import */ var _analytics_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../analytics/ga */ "./analytics/ga.js");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../analytics */ "./analytics/index.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/skin/skin-1.css */ "./css/skin/skin-1.css");
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\pages\\_app.js";

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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleRouteChange = url => {
      _analytics_ga__WEBPACK_IMPORTED_MODULE_3__.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_10___default()();

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      className: "page-wraper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_analytics__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQSxzQkFDSztBQUFBLDJCQUNLO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSywrREFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFFSywrREFBQyxTQUFELG9CQUFldkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREwsbUJBREw7QUFRSjs7QUFFRCxpRUFBZUQsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYXIvLi9hbmFseXRpY3MvZ2EuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9hbmFseXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0LXJhbmdlc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInVzZS1zY3JvbGwtcG9zaXRpb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcclxuICAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUywge1xyXG4gICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICAgfSlcclxuICAgfVxyXG4gICBcclxuICAgLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXHJcbiAgIGV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgcGFyYW1zIH0pID0+IHtcclxuICAgICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcylcclxuICAgfSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuYnJvd3NlciA/XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDU31gfT48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICAgIGFzeW5jXHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgIF9faHRtbDogYHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgICAgICAgZ3RhZyhcImpzXCIsIG5ldyBEYXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1N9Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSGVhZD4gLy86IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2FuYWx5dGljcy9nYSc7XHJcbmltcG9ydCBHb29nbGVBbmFsaXRpY3MgZnJvbSAnLi4vYW5hbHl0aWNzJztcclxuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zd2l0Y2hlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgICBjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgY29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShcImZpeGVkXCIpO1xyXG4gICAgIGNvbnN0IFtoZWFkZXJfLCBzZXRIZWFkZXJfXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRib2R5Xyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcbiAgICAgICAgICBzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xyXG4gICAgIH0sIFtdKTtcclxuXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICAgICAgICBnYS5wYWdldmlldyh1cmwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuXHJcbiAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gdXNlU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgICBzZXRUb2dnbGUxKCF0b2dnbGUxKTtcclxuICAgICB9XHJcblxyXG4gICAgIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICB9O1xyXG5cclxuICAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICAgICAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgICAgfTtcclxuXHJcbiAgICAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgICAgICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICAgICAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUFuYWxpdGljcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmFuZ2VzbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS1zY3JvbGwtcG9zaXRpb25cIik7Il0sIm5hbWVzIjpbInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiLCJDb21wb25lbnQiLCJIZWFkIiwicmVuZGVyIiwiX19odG1sIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJnYSIsIkdvb2dsZUFuYWxpdGljcyIsImNvcnMiLCJTbGlkZXIiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsIk15QXBwIiwicGFnZVByb3BzIiwicm91dGVyIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJib2R5XyIsInNldGJvZHlfIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJldmVudHMiLCJvbiIsIm9mZiIsInNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=