"use strict";
self["webpackHotUpdate_N_E"]("pages/brij-rani-kutir-promo-001",{

/***/ "./analytics/pixel.js":
/*!****************************!*\
  !*** ./analytics/pixel.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\analytics\\pixel.js";





function FBPixel(data) {
  console.log(data);

  if (data.pixelType === "Brijranikutir") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
          async: true,
          dangerouslySetInnerHTML: {
            __html: "\n                                   !function(f,b,e,v,n,t,s)\n                                   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n                                   n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n                                   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n                                   n.queue=[];t=b.createElement(e);t.async=!0;\n                                   t.src=v;s=b.getElementsByTagName(e)[0];\n                                   s.parentNode.insertBefore(t,s)}(window, document,'script',\n                                   'https://connect.facebook.net/en_US/fbevents.js');\n                                   fbq('init', '4346283808795715');\n                                   fbq('track', 'PageView');\n                                   "
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("noscript", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            height: "1",
            width: "1",
            style: "display:none",
            src: "https://www.facebook.com/tr?id=4346283808795715&ev=PageView&noscript=1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this)
    }, void 0, false);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: "No Pixel Added"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this)
    }, void 0, false);
  }
}

_c = FBPixel;
/* harmony default export */ __webpack_exports__["default"] = (FBPixel);

var _c;

$RefreshReg$(_c, "FBPixel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpai1yYW5pLWt1dGlyLXByb21vLTAwMS5iODc1YTg4NzcyMDYyNzUwMWFkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxTQUFTRSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNsQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBRUEsTUFBSUEsSUFBSSxDQUFDRyxTQUFMLEtBQW1CLGVBQXZCLEVBQXdDO0FBQ25DLHdCQUNLO0FBQUEsNkJBQ0ssOERBQUMsa0RBQUQ7QUFBQSxnQ0FFSztBQUNLLGVBQUssTUFEVjtBQUVLLGlDQUF1QixFQUFFO0FBQ3BCQyxZQUFBQSxNQUFNO0FBRGM7QUFGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTCxlQW1CSztBQUFBLGlDQUNLO0FBQ0ssa0JBQU0sRUFBQyxHQURaO0FBRUssaUJBQUssRUFBQyxHQUZYO0FBR0ssaUJBQUssRUFBQyxjQUhYO0FBSUssZUFBRyxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMLHFCQURMO0FBaUNKLEdBbENELE1Ba0NPO0FBQ0Ysd0JBQ0s7QUFBQSw2QkFDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMLHFCQURMO0FBS0o7QUFDTDs7S0E1Q1FMO0FBOENULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuYWx5dGljcy9waXhlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmZ1bmN0aW9uIEZCUGl4ZWwoZGF0YSkge1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgIFxyXG4gICAgIGlmIChkYXRhLnBpeGVsVHlwZSA9PT0gXCJCcmlqcmFuaWt1dGlyXCIpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBGYWNlYm9vayBQaXhlbCBDb2RlIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZixiLGUsdixuLHQscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jYWxsTWV0aG9kLmFwcGx5KG4sYXJndW1lbnRzKTpuLnF1ZXVlLnB1c2goYXJndW1lbnRzKX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWYuX2ZicSlmLl9mYnE9bjtuLnB1c2g9bjtuLmxvYWRlZD0hMDtuLnZlcnNpb249JzIuMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc3JjPXY7cz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxzKX0od2luZG93LCBkb2N1bWVudCwnc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MzQ2MjgzODA4Nzk1NzE1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdQYWdlVmlldycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPG5vc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6bm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RyP2lkPTQzNDYyODM4MDg3OTU3MTUmZXY9UGFnZVZpZXcmbm9zY3JpcHQ9MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L25vc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIEZhY2Vib29rIFBpeGVsIENvZGUgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPk5vIFBpeGVsIEFkZGVkPC9oMT5cclxuICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGQlBpeGVsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiRkJQaXhlbCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGl4ZWxUeXBlIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==