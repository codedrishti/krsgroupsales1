(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

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
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/skin/skin-1.css */ "./css/skin/skin-1.css");
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function MyApp({
  Component,
  pageProps
}) {
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
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_7___default()();

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("title", {
        children: "No.1 Township Developer in India - KRS Group"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: "page-wraper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
      href: "https://api.whatsapp.com/send?phone=919873632575&text=Hello,%20I%20need%20to%20discuss%20something%20about%20the%20property.",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("i", {
        className: "fab fa-whatsapp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
        children: "Chat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
      href: "mailto:info@krsgrouptownship.com?subject=KRS Group Township - Share the property details.",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("i", {
        className: "fa fa-envelope"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
      href: "#top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 16
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbWFyLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0LXJhbmdlc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInVzZS1zY3JvbGwtcG9zaXRpb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zd2l0Y2hlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XHJcbiAgICAgY29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgICAgICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgICAgfSwgW10pO1xyXG5cclxuICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgY29uc3QgY2hhZ2VIZWFkZXIgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHNldEhlYWRlcih2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwiZml4ZWRcIikge1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktbm9cIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktbm9cIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgIH07XHJcblxyXG4gICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBzZXRTbGlkZXJWYWx1KHZhbHVlKTtcclxuICAgICAgICAgIGJvZHlfLnN0eWxlLnBhZGRpbmcgPSB2YWx1ZSArIFwicHhcIjtcclxuICAgICB9O1xyXG5cclxuICAgICBoZWFkZXIgPT09IFwiZml4ZWRcIiAmJiBzY3JvbGxQb3NpdGlvbiA+IDEwXHJcbiAgICAgICAgICA/IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwiaXMtZml4ZWRcIilcclxuICAgICAgICAgIDogaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Oby4xIFRvd25zaGlwIERldmVsb3BlciBpbiBJbmRpYSAtIEtSUyBHcm91cDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9OTE5ODczNjMyNTc1JnRleHQ9SGVsbG8sJTIwSSUyMG5lZWQlMjB0byUyMGRpc2N1c3MlMjBzb21ldGhpbmclMjBhYm91dCUyMHRoZSUyMHByb3BlcnR5LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidC1idXktbm93IHRoZW1lLWJ0blwiXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2hhdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BrcnNncm91cHRvd25zaGlwLmNvbT9zdWJqZWN0PUtSUyBHcm91cCBUb3duc2hpcCAtIFNoYXJlIHRoZSBwcm9wZXJ0eSBkZXRhaWxzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidC1zdXBwb3J0LW5vdyB0aGVtZS1idG5cIlxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy11cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYW5nZXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ycyIsIlNsaWRlciIsInVzZVNjcm9sbFBvc2l0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2dnbGUxIiwic2V0VG9nZ2xlMSIsImJvZHlfIiwic2V0Ym9keV8iLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxQb3NpdGlvbiIsInRvZ2dsZSIsImNoYWdlSGVhZGVyIiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInNldFNsaWRlclZhbHUiLCJzdHlsZSIsInBhZGRpbmciLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==