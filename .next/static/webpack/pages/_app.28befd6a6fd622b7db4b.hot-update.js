"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Code_Play_Ground_NextJs_restatesalesone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "./node_modules/cors/lib/index.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rangeslider */ "./node_modules/react-rangeslider/lib/index.js");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-scroll-position */ "./node_modules/use-scroll-position/dist/index.es.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skin/skin-1.css */ "./css/skin/skin-1.css");
/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Code_Play_Ground_NextJs_restatesalesone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      toggle1 = _useState[0],
      setToggle1 = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      body_ = _useState2[0],
      setbody_ = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("fixed"),
      header = _useState3[0],
      setHeader = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      header_ = _useState4[0],
      setHeader_ = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  var scrollPosition = (0,use_scroll_position__WEBPACK_IMPORTED_MODULE_8__.default)();

  function toggle() {
    setToggle1(!toggle1);
  }

  var chageHeader = function chageHeader(value) {
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

  var onChange = function onChange(value) {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("title", {
        children: "Samar - React Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("link", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "page-wraper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
      href: "https://api.whatsapp.com/send?phone=919873632575&text=Hello,%20I%20need%20to%20discuss%20something%20about%20the%20property.",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
        className: "fab fa-whatsapp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
      href: "mailto:info@krsgrouptownship.com?subject=KRS Group Township - Share the property details.",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
        className: "fa fa-envelope"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
      href: "#top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
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

_s(MyApp, "x4Fyv1VfViKhIyuldZagOa5ZU6w=", false, function () {
  return [use_scroll_position__WEBPACK_IMPORTED_MODULE_8__.default];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOGJlZmQ2YTZmZDYyMmI3ZGI0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNNLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUNwQyxrQkFBOEJOLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9PLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxFQUFsQztBQUFBLE1BQU9TLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QlYsK0NBQVEsQ0FBQyxPQUFELENBQXBDO0FBQUEsTUFBT1csTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCWiwrQ0FBUSxFQUF0QztBQUFBLE1BQU9hLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNYVyxJQUFBQSxRQUFRLENBQUNLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFELENBQVI7QUFDQUYsSUFBQUEsVUFBVSxDQUFDQyxRQUFRLENBQUNFLHNCQUFULENBQWdDLGlCQUFoQyxDQUFELENBQVY7QUFDSixHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsTUFBSUMsY0FBYyxHQUFHZiw0REFBaUIsRUFBdEM7O0FBQ0EsV0FBU2dCLE1BQVQsR0FBa0I7QUFDYlgsSUFBQUEsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNKOztBQUVELE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMxQlQsSUFBQUEsU0FBUyxDQUFDUyxL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ZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1yYW5nZXNsaWRlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IHVzZVNjcm9sbFBvc2l0aW9uIGZyb20gXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0xLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICAgY29uc3QgW3RvZ2dsZTEsIHNldFRvZ2dsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFtib2R5Xywgc2V0Ym9keV9dID0gdXNlU3RhdGUoKTtcclxuICAgICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICAgICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Ym9keV8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpO1xyXG4gICAgICAgICAgc2V0SGVhZGVyXyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1iYXItd3JhcGVyXCIpKTtcclxuICAgICB9LCBbXSk7XHJcblxyXG4gICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHVzZVNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlMSghdG9nZ2xlMSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgc2V0SGVhZGVyKHZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1ub1wiKTtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfTtcclxuXHJcbiAgICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xyXG4gICAgICAgICAgYm9keV8uc3R5bGUucGFkZGluZyA9IHZhbHVlICsgXCJweFwiO1xyXG4gICAgIH07XHJcblxyXG4gICAgIGhlYWRlciA9PT0gXCJmaXhlZFwiICYmIHNjcm9sbFBvc2l0aW9uID4gMTBcclxuICAgICAgICAgID8gaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKVxyXG4gICAgICAgICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlNhbWFyIC0gUmVhY3QgVGVtcGxhdGU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTkxOTg3MzYzMjU3NSZ0ZXh0PUhlbGxvLCUyMEklMjBuZWVkJTIwdG8lMjBkaXNjdXNzJTIwc29tZXRoaW5nJTIwYWJvdXQlMjB0aGUlMjBwcm9wZXJ0eS5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnQtYnV5LW5vdyB0aGVtZS1idG5cIlxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNoYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Aa3JzZ3JvdXB0b3duc2hpcC5jb20/c3ViamVjdD1LUlMgR3JvdXAgVG93bnNoaXAgLSBTaGFyZSB0aGUgcHJvcGVydHkgZGV0YWlscy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnQtc3VwcG9ydC1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICA8YSBocmVmPVwiI3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sdG9wIGljb24tdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvcnMiLCJTbGlkZXIiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJib2R5XyIsInNldGJvZHlfIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsUG9zaXRpb24iLCJ0b2dnbGUiLCJjaGFnZUhlYWRlciIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25DaGFuZ2UiLCJzZXRTbGlkZXJWYWx1Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=