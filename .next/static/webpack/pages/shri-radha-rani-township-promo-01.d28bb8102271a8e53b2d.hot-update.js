"use strict";
self["webpackHotUpdate_N_E"]("pages/shri-radha-rani-township-promo-01",{

/***/ "./element/promo/accordian-1.js":
/*!**************************************!*\
  !*** ./element/promo/accordian-1.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\element\\promo\\accordian-1.js",
    _s = $RefreshSig$();





function FaqAccordion() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      activeDefault = _useState[0],
      setActiveDefault = _useState[1];

  var defaultAccordion = [{
    title: "Location of Project and Developer ?",
    text: "Property is located in Vrindavan near Shri Garun Govind Temple. Society is owned by KRS Home Developer Private Limited.",
    bg: "primary"
  }, {
    title: "Registration/Approved by which authority ?",
    text: "Society is registered under CLU 143 (Change of Land Use) & by District Authority.",
    bg: "info"
  }, {
    title: "Residential/Commercial ?",
    text: "Residential and commercial both property are available in our society.",
    bg: "success"
  }, {
    title: "Payment Plans/ Schemes & Interest on EMI ?",
    text: "KRS Home Developers provide the 0% Interest rate EMI facilities to there clients for 15 to 35 month as well.",
    bg: "success"
  }, {
    title: "Affordability, can I afford this property to buy ?",
    text: "We alway remember the budget of our customer during development of the new property or society. So our property can be owned by everyone who actually wants to buy.",
    bg: "success"
  }, {
    title: "Registry (is possible on 50% payment?) & Allotments of property ?",
    text: "You can procced your property for registry after 50% or 100% payment of your property value. You will get your property allotment letter after your property booking amount.",
    bg: "success"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "dlab-accordion",
      id: "accordionFaq",
      defaultactivekey: "0",
      children: defaultAccordion.map(function (d, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            eventkey: "".concat(i),
            className: "card-header",
            onClick: function onClick() {
              return setActiveDefault(activeDefault === i ? -1 : i);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
              className: "dlab-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "javascript:void(0);",
                className: "".concat(activeDefault === i ? "" : "collapsed"),
                onClick: function onClick() {
                  return setActiveDefault(activeDefault === i ? -1 : i);
                },
                children: [" ", d.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "".concat(activeDefault === i ? "collapsed show" : "collapsed"),
            eventkey: "".concat(i),
            onClick: function onClick() {
              return setActiveDefault(activeDefault === i ? -1 : i);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "card-body",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "m-b0",
                children: d.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(FaqAccordion, "7iP66bnn3LP9+K3fY4cYg369fD4=");

_c = FaqAccordion;
/* harmony default export */ __webpack_exports__["default"] = (FaqAccordion);

var _c;

$RefreshReg$(_c, "FaqAccordion");

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


/***/ }),

/***/ "./element/promo/faqList-1.js":
/*!************************************!*\
  !*** ./element/promo/faqList-1.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordian_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordian-1 */ "./element/promo/accordian-1.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\element\\promo\\faqList-1.js";





function FAQList() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      id: "faq-sec",
      className: "custom-content-inner",
      style: {
        backgroundImage: "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            className: "title",
            children: "Answer of Your Question!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-8 m-auto wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_accordian_1__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = FAQList;
/* harmony default export */ __webpack_exports__["default"] = (FAQList);

var _c;

$RefreshReg$(_c, "FAQList");

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


/***/ }),

/***/ "./pages/shri-radha-rani-township-promo-01/index.js":
/*!**********************************************************!*\
  !*** ./pages/shri-radha-rani-township-promo-01/index.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_promo_slider_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element/promo/slider-1 */ "./element/promo/slider-1.js");
/* harmony import */ var _component_aboutCompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/aboutCompany */ "./component/aboutCompany.js");
/* harmony import */ var _element_propertyintro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../element/propertyintro */ "./element/propertyintro.js");
/* harmony import */ var _element_aminities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../element/aminities */ "./element/aminities.js");
/* harmony import */ var _element_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../element/portfolio */ "./element/portfolio.js");
/* harmony import */ var _element_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../element/counter */ "./element/counter.js");
/* harmony import */ var _element_promo_gallery_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../element/promo/gallery-1 */ "./element/promo/gallery-1.js");
/* harmony import */ var _element_testimonial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../element/testimonial */ "./element/testimonial.js");
/* harmony import */ var _element_promo_faqList_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../element/promo/faqList-1 */ "./element/promo/faqList-1.js");
/* harmony import */ var _element_cta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../element/cta */ "./element/cta.js");
/* harmony import */ var _layout_landFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layout/landFooter */ "./layout/landFooter.js");
/* harmony import */ var _layout_landHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layout/landHeader */ "./layout/landHeader.js");
/* harmony import */ var _component_seo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/seo */ "./component/seo.js");
/* harmony import */ var _analytics_pixel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../analytics/pixel */ "./analytics/pixel.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\pages\\shri-radha-rani-township-promo-01\\index.js",
    _s = $RefreshSig$();




















function ShriRadhaRaniTownshipPromo001() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_analytics_pixel__WEBPACK_IMPORTED_MODULE_15__.default, {
      pixelType: "Shriradharanitownship"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_component_seo__WEBPACK_IMPORTED_MODULE_14__.default, {
      title: "No. 1 Township in Barsana, Mathura - KRS Group"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_layout_landHeader__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "page-content bg-white",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_promo_slider_1__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_propertyintro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_aminities__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_portfolio__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_promo_gallery_1__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_testimonial__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_component_aboutCompany__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_promo_faqList_1__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_element_cta__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_layout_landFooter__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
      async: true,
      "data-uid": "dad8077b79",
      src: "https://fabulous-inventor-6977.ck.page/dad8077b79/index.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }, this)]
  }, void 0, true);
}

_s(ShriRadhaRaniTownshipPromo001, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ShriRadhaRaniTownshipPromo001;
/* harmony default export */ __webpack_exports__["default"] = (ShriRadhaRaniTownshipPromo001);

var _c;

$RefreshReg$(_c, "ShriRadhaRaniTownshipPromo001");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hyaS1yYWRoYS1yYW5pLXRvd25zaGlwLXByb21vLTAxLmQyOGJiODEwMjI3MWE4ZTUzYjJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLGtCQUEwQ0QsK0NBQVEsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBT0UsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDdkI7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLHFDQURUO0FBRUVDLElBQUFBLElBQUksRUFBRSx5SEFGUjtBQUdFQyxJQUFBQSxFQUFFLEVBQUU7QUFITixHQUR1QixFQU12QjtBQUNFRixJQUFBQSxLQUFLLEVBQ0gsNENBRko7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLG1GQUhSO0FBS0VDLElBQUFBLEVBQUUsRUFBRTtBQUxOLEdBTnVCLEVBYXZCO0FBQ0VGLElBQUFBLEtBQUssRUFBRSwwQkFEVDtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsd0VBRlI7QUFJRUMsSUFBQUEsRUFBRSxFQUFFO0FBSk4sR0FidUIsRUFtQnZCO0FBQ0VGLElBQUFBLEtBQUssRUFBRSw0Q0FEVDtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsOEdBRlI7QUFJRUMsSUFBQUEsRUFBRSxFQUFFO0FBSk4sR0FuQnVCLEVBeUJ2QjtBQUNFRixJQUFBQSxLQUFLLEVBQ0gsb0RBRko7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLHFLQUhSO0FBS0VDLElBQUFBLEVBQUUsRUFBRTtBQUxOLEdBekJ1QixFQWdDdkI7QUFDRUYsSUFBQUEsS0FBSyxFQUFFLG1FQURUO0FBRUVDLElBQUFBLElBQUksRUFBRSw4S0FGUjtBQUlFQyxJQUFBQSxFQUFFLEVBQUU7QUFKTixHQWhDdUIsQ0FBekI7QUF1Q0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxn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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOTCxlQU9LLCtEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQTCxlQVFLLCtEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSTCxlQVNLLCtEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKTCxlQWdCSywrREFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJMLGVBaUJLLCtEQUFDLG9EQUFEO0FBQVEsV0FBSyxNQUFiO0FBQWMsa0JBQVMsWUFBdkI7QUFBb0MsU0FBRyxFQUFDLDREQUF4QztBQUFxRyxjQUFRLEVBQUM7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCTDtBQUFBLGtCQURMO0FBcUJKOztHQTFCUUg7O0tBQUFBO0FBNEJULCtEQUFlQSw2QkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9lbGVtZW50L3Byb21vL2FjY29yZGlhbi0xLmpzIiwid2VicGFjazovL19OX0UvLi9lbGVtZW50L3Byb21vL2ZhcUxpc3QtMS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hyaS1yYWRoYS1yYW5pLXRvd25zaGlwLXByb21vLTAxL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYXFBY2NvcmRpb24oKSB7XHJcbiAgY29uc3QgW2FjdGl2ZURlZmF1bHQsIHNldEFjdGl2ZURlZmF1bHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZGVmYXVsdEFjY29yZGlvbiA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTG9jYXRpb24gb2YgUHJvamVjdCBhbmQgRGV2ZWxvcGVyID9cIixcclxuICAgICAgdGV4dDogXCJQcm9wZXJ0eSBpcyBsb2NhdGVkIGluIFZyaW5kYXZhbiBuZWFyIFNocmkgR2FydW4gR292aW5kIFRlbXBsZS4gU29jaWV0eSBpcyBvd25lZCBieSBLUlMgSG9tZSBEZXZlbG9wZXIgUHJpdmF0ZSBMaW1pdGVkLlwiLFxyXG4gICAgICBiZzogXCJwcmltYXJ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTpcclxuICAgICAgICBcIlJlZ2lzdHJhdGlvbi9BcHByb3ZlZCBieSB3aGljaCBhdXRob3JpdHkgP1wiLFxyXG4gICAgICB0ZXh0OiBcIlNvY2lldHkgaXMgcmVnaXN0ZXJlZCB1bmRlciBDTFUgMTQzIChDaGFuZ2Ugb2YgTGFuZCBVc2UpICYgYnkgRGlzdHJpY3QgQXV0aG9yaXR5LlwiLFxyXG5cclxuICAgICAgYmc6IFwiaW5mb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUmVzaWRlbnRpYWwvQ29tbWVyY2lhbCA/XCIsXHJcbiAgICAgIHRleHQ6IFwiUmVzaWRlbnRpYWwgYW5kIGNvbW1lcmNpYWwgYm90aCBwcm9wZXJ0eSBhcmUgYXZhaWxhYmxlIGluIG91ciBzb2NpZXR5LlwiLFxyXG5cclxuICAgICAgYmc6IFwic3VjY2Vzc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUGF5bWVudCBQbGFucy8gU2NoZW1lcyAmIEludGVyZXN0IG9uIEVNSSA/XCIsXHJcbiAgICAgIHRleHQ6IFwiS1JTIEhvbWUgRGV2ZWxvcGVycyBwcm92aWRlIHRoZSAwJSBJbnRlcmVzdCByYXRlIEVNSSBmYWNpbGl0aWVzIHRvIHRoZXJlIGNsaWVudHMgZm9yIDE1IHRvIDM1IG1vbnRoIGFzIHdlbGwuXCIsXHJcblxyXG4gICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTpcclxuICAgICAgICBcIkFmZm9yZGFiaWxpdHksIGNhbiBJIGFmZm9yZCB0aGlzIHByb3BlcnR5IHRvIGJ1eSA/XCIsXHJcbiAgICAgIHRleHQ6IFwiV2UgYWx3YXkgcmVtZW1iZXIgdGhlIGJ1ZGdldCBvZiBvdXIgY3VzdG9tZXIgZHVyaW5nIGRldmVsb3BtZW50IG9mIHRoZSBuZXcgcHJvcGVydHkgb3Igc29jaWV0eS4gU28gb3VyIHByb3BlcnR5IGNhbiBiZSBvd25lZCBieSBldmVyeW9uZSB3aG8gYWN0dWFsbHkgd2FudHMgdG8gYnV5LlwiLFxyXG5cclxuICAgICAgYmc6IFwic3VjY2Vzc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUmVnaXN0cnkgKGlzIHBvc3NpYmxlIG9uIDUwJSBwYXltZW50PykgJiBBbGxvdG1lbnRzIG9mIHByb3BlcnR5ID9cIixcclxuICAgICAgdGV4dDogXCJZb3UgY2FuIHByb2NjZWQgeW91ciBwcm9wZXJ0eSBmb3IgcmVnaXN0cnkgYWZ0ZXIgNTAlIG9yIDEwMCUgcGF5bWVudCBvZiB5b3VyIHByb3BlcnR5IHZhbHVlLiBZb3Ugd2lsbCBnZXQgeW91ciBwcm9wZXJ0eSBhbGxvdG1lbnQgbGV0dGVyIGFmdGVyIHlvdXIgcHJvcGVydHkgYm9va2luZyBhbW91bnQuXCIsXHJcblxyXG4gICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1hY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkZhcVwiIGRlZmF1bHRhY3RpdmVrZXk9XCIwXCI+XHJcbiAgICAgICAge2RlZmF1bHRBY2NvcmRpb24ubWFwKChkLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZXZlbnRrZXk9e2Ake2l9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRGVmYXVsdChhY3RpdmVEZWZhdWx0ID09PSBpID8gLTEgOiBpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkbGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlRGVmYXVsdCA9PT0gaSA/IFwiXCIgOiBcImNvbGxhcHNlZFwifWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZURlZmF1bHQoYWN0aXZlRGVmYXVsdCA9PT0gaSA/IC0xIDogaSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge2QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBldmVudGtleT17YCR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYjBcIj57ZC50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZURlZmF1bHQgPT09IGkgPyBcImNvbGxhcHNlZCBzaG93XCIgOiBcImNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgZXZlbnRrZXk9e2Ake2l9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVEZWZhdWx0KGFjdGl2ZURlZmF1bHQgPT09IGkgPyAtMSA6IGkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYjBcIj57ZC50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXFBY2NvcmRpb247XHJcbiIsImltcG9ydCBGYXFBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaWFuLTFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gRkFRTGlzdCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDwhLS0gRmFxIC0tPiAqL31cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgaWQ9XCJmYXEtc2VjXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udGVudC1pbm5lclwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChpbWFnZXMvYmFja2dyb3VuZC9iZzEucG5nKVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgc3R5bGUtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3ViLXRpdGxlIGJnbC1wcmltYXJ5IG0tYjIwIHRleHQtcHJpbWFyeVwiPkZBUTwvaDY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFuc3dlciBvZiBZb3VyIFF1ZXN0aW9uITwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctOCBtLWF1dG8gd293IGZhZGVJblwiXHJcbiAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIyc1wiXHJcbiAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYXFBY2NvcmRpb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRkFRTGlzdDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi8uLi9lbGVtZW50L3Byb21vL3NsaWRlci0xXCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuLi8uLi9jb21wb25lbnQvYWJvdXRDb21wYW55XCI7XHJcbmltcG9ydCBQcm9wZXJ0eUludHJvIGZyb20gXCIuLi8uLi9lbGVtZW50L3Byb3BlcnR5aW50cm9cIjtcclxuaW1wb3J0IEFtaW5pdGllcyBmcm9tIFwiLi4vLi4vZWxlbWVudC9hbWluaXRpZXNcIjtcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vLi4vZWxlbWVudC9wb3J0Zm9saW9cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY291bnRlclwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vLi4vZWxlbWVudC9wcm9tby9nYWxsZXJ5LTFcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi8uLi9lbGVtZW50L3Rlc3RpbW9uaWFsXCI7XHJcbmltcG9ydCBGQVFMaXN0IGZyb20gXCIuLi8uLi9lbGVtZW50L3Byb21vL2ZhcUxpc3QtMVwiO1xyXG5pbXBvcnQgQ3RhIGZyb20gXCIuLi8uLi9lbGVtZW50L2N0YVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9sYXlvdXQvbGFuZEZvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9sYXlvdXQvbGFuZEhlYWRlclwiO1xyXG5pbXBvcnQgU0VPIGZyb20gXCIuLi8uLi9jb21wb25lbnQvc2VvXCI7XHJcbmltcG9ydCBGQlBpeGVsIGZyb20gXCIuLi8uLi9hbmFseXRpY3MvcGl4ZWxcIjtcclxuXHJcbmZ1bmN0aW9uIFNocmlSYWRoYVJhbmlUb3duc2hpcFByb21vMDAxKCkge1xyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcImNvbG9yXzFcIik7XHJcbiAgICAgfSwgW10pO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgPEZCUGl4ZWwgcGl4ZWxUeXBlPVwiU2hyaXJhZGhhcmFuaXRvd25zaGlwXCIgLz5cclxuICAgICAgICAgICAgICAgPFNFTyB0aXRsZT1cIk5vLiAxIFRvd25zaGlwIGluIEJhcnNhbmEsIE1hdGh1cmEgLSBLUlMgR3JvdXBcIiAvPlxyXG4gICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGJnLXdoaXRlXCIgaWQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5SW50cm8gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QW1pbml0aWVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcnRmb2xpbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFib3V0VXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RkFRTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdGEgLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgIDxTY3JpcHQgYXN5bmMgZGF0YS11aWQ9XCJkYWQ4MDc3Yjc5XCIgc3JjPVwiaHR0cHM6Ly9mYWJ1bG91cy1pbnZlbnRvci02OTc3LmNrLnBhZ2UvZGFkODA3N2I3OS9pbmRleC5qc1wiIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIi8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaHJpUmFkaGFSYW5pVG93bnNoaXBQcm9tbzAwMTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmFxQWNjb3JkaW9uIiwiYWN0aXZlRGVmYXVsdCIsInNldEFjdGl2ZURlZmF1bHQiLCJkZWZhdWx0QWNjb3JkaW9uIiwidGl0bGUiLCJ0ZXh0IiwiYmciLCJtYXAiLCJkIiwiaSIsIkxpbmsiLCJGQVFMaXN0IiwiYmFja2dyb3VuZEltYWdlIiwidXNlRWZmZWN0IiwiU2NyaXB0IiwiU2xpZGVyIiwiQWJvdXRVcyIsIlByb3BlcnR5SW50cm8iLCJBbWluaXRpZXMiLCJQb3J0Zm9saW8iLCJDb3VudGVyIiwiR2FsbGVyeSIsIlRlc3RpbW9uaWFsIiwiQ3RhIiwiRm9vdGVyIiwiSGVhZGVyIiwiU0VPIiwiRkJQaXhlbCIsIlNocmlSYWRoYVJhbmlUb3duc2hpcFByb21vMDAxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==