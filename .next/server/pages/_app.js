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
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
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
        lineNumber: 69,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL2FuYWx5dGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtcmFuZ2VzbGlkZXJcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuYnJvd3NlciA/XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgey8qIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+ICovfVxyXG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1MVjdYTFI4NExOXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLUxWN1hMUjg0TE4nKTtcclxuICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgPC9IZWFkPiAvLzogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEdvb2dsZUFuYWxpdGljcyBmcm9tICcuLi9hbmFseXRpY3MnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1yYW5nZXNsaWRlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IHVzZVNjcm9sbFBvc2l0aW9uIGZyb20gXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0xLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XHJcbiAgICAgY29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgICAgICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgICAgfSwgW10pO1xyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGdhLnBhZ2V2aWV3KHVybClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICBcclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3JvdXRlci5ldmVudHNdKVxyXG5cclxuICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgY29uc3QgY2hhZ2VIZWFkZXIgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHNldEhlYWRlcih2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwiZml4ZWRcIikge1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktbm9cIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktbm9cIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgIH07XHJcblxyXG4gICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBzZXRTbGlkZXJWYWx1KHZhbHVlKTtcclxuICAgICAgICAgIGJvZHlfLnN0eWxlLnBhZGRpbmcgPSB2YWx1ZSArIFwicHhcIjtcclxuICAgICB9O1xyXG5cclxuICAgICBoZWFkZXIgPT09IFwiZml4ZWRcIiAmJiBzY3JvbGxQb3NpdGlvbiA+IDEwXHJcbiAgICAgICAgICA/IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwiaXMtZml4ZWRcIilcclxuICAgICAgICAgIDogaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29vZ2xlQW5hbGl0aWNzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmFuZ2VzbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS1zY3JvbGwtcG9zaXRpb25cIik7Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkhlYWQiLCJyZW5kZXIiLCJfX2h0bWwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkdvb2dsZUFuYWxpdGljcyIsIlNsaWRlciIsInVzZVNjcm9sbFBvc2l0aW9uIiwiTXlBcHAiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ0b2dnbGUxIiwic2V0VG9nZ2xlMSIsImJvZHlfIiwic2V0Ym9keV8iLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImdhIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiIsInNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=