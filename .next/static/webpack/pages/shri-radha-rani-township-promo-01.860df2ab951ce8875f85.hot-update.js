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
    text: "Property is located in Barsana, Mathura near Shri Radha Rani Mandir, Kirti Mandir and Rangoli Mahal. Society is owned by KRS Home Developer Private Limited.",
    bg: "primary"
  }, {
    title: "Registration/Approved by which authority ?",
    text: "Society is registered by Uttar Pradesh Govt. Authority under CLU 143 (Change of Land Use).",
    bg: "info"
  }, {
    title: "Plots Size Residential/Commercial ?",
    text: "Residential and commercial both property are available in our society. Plot Size: 110 Yrds to 500 Yrds and more",
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
                lineNumber: 54,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
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
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hyaS1yYWRoYS1yYW5pLXRvd25zaGlwLXByb21vLTAxLjg2MGRmMmFiOTUxY2U4ODc1Zjg1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLGtCQUEwQ0QsK0NBQVEsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBT0UsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDdkI7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLHFDQURUO0FBRUVDLElBQUFBLElBQUksRUFBRSw4SkFGUjtBQUdFQyxJQUFBQSxFQUFFLEVBQUU7QUFITixHQUR1QixFQU12QjtBQUNFRixJQUFBQSxLQUFLLEVBQ0gsNENBRko7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLDRGQUhSO0FBSUVDLElBQUFBLEVBQUUsRUFBRTtBQUpOLEdBTnVCLEVBWXZCO0FBQ0VGLElBQUFBLEtBQUssRUFBRSxxQ0FEVDtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsaUhBRlI7QUFJRUMsSUFBQUEsRUFBRSxFQUFFO0FBSk4sR0FadUIsRUFrQnZCO0FBQ0VGLElBQUFBLEtBQUssRUFBRSw0Q0FEVDtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsOEdBRlI7QUFJRUMsSUFBQUEsRUFBRSxFQUFFO0FBSk4sR0FsQnVCLEVBd0J2QjtBQUNFRixJQUFBQSxLQUFLLEVBQ0gsb0RBRko7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLHFLQUhSO0FBS0VDLElBQUFBLEVBQUUsRUFBRTtBQUxOLEdBeEJ1QixFQStCdkI7QUFDRUYsSUFBQUEsS0FBSyxFQUFFLG1FQURUO0FBRUVDLElBQUFBLElBQUksRUFBRSw4S0FGUjtBQUlFQyxJQUFBQSxFQUFFLEVBQUU7QUFKTixHQS9CdUIsQ0FBekI7QUFzQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFnQyxRQUFFLEVBQUMsY0FBbkM7QUFBa0Qsc0JBQWdCLEVBQUMsR0FBbkU7QUFBQSxnQkFDR0gsZ0JBQWdCLENBQUNJLEdBQWpCLENBQXFCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNwQjtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQ0Usb0JBQVEsWUFBS0EsQ0FBTCxDQURWO0FBRUUscUJBQVMsRUFBQyxhQUZaO0FBR0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNUCxnQkFBZ0IsQ0FBQ0QsYUFBYSxLQUFLUSxDQUFsQixHQUFzQixDQUFDLENBQXZCLEdBQTJCQSxDQUE1QixDQUF0QjtBQUFBLGFBSFg7QUFBQSxtQ0FLRTtBQUFJLHVCQUFTLEVBQUMsWUFBZDtBQUFBLHFDQUNFO0FBQ0Usb0JBQUksRUFBQyxxQkFEUDtBQUVFLHlCQUFTLFlBQUtSLGFBQWEsS0FBS1EsQ0FBbEIsR0FBc0IsRUFBdEIsR0FBMkIsV0FBaEMsQ0FGWDtBQUdFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTVAsZ0JBQWdCLENBQUNELGFBQWEsS0FBS1EsQ0FBbEIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQkEsQ0FBNUIsQ0FBdEI7QUFBQSxpQkFIWDtBQUFBLDJCQUtHLEdBTEgsRUFNR0QsQ0FBQyxDQUFDSixLQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBc0JFO0FBQ0UscUJBQVMsWUFDUEgsYUFBYSxLQUFLUSxDQUFsQixHQUFzQixnQkFBdEIsR0FBeUMsV0FEbEMsQ0FEWDtBQUlFLG9CQUFRLFlBQUtBLENBQUwsQ0FKVjtBQUtFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVAsZ0JBQWdCLENBQUNELGFBQWEsS0FBS1EsQ0FBbEIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQkEsQ0FBNUIsQ0FBdEI7QUFBQSxhQUxYO0FBQUEsbUNBT0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBLDBCQUFxQkQsQ0FBQyxDQUFDSDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGO0FBQUEsV0FBMkJJLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwQ0Q7O0dBbEZRVDs7S0FBQUE7QUFvRlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9wcm9tby9hY2NvcmRpYW4tMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFxQWNjb3JkaW9uKCkge1xyXG4gIGNvbnN0IFthY3RpdmVEZWZhdWx0LCBzZXRBY3RpdmVEZWZhdWx0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGRlZmF1bHRBY2NvcmRpb24gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkxvY2F0aW9uIG9mIFByb2plY3QgYW5kIERldmVsb3BlciA/XCIsXHJcbiAgICAgIHRleHQ6IFwiUHJvcGVydHkgaXMgbG9jYXRlZCBpbiBCYXJzYW5hLCBNYXRodXJhIG5lYXIgU2hyaSBSYWRoYSBSYW5pIE1hbmRpciwgS2lydGkgTWFuZGlyIGFuZCBSYW5nb2xpIE1haGFsLiBTb2NpZXR5IGlzIG93bmVkIGJ5IEtSUyBIb21lIERldmVsb3BlciBQcml2YXRlIExpbWl0ZWQuXCIsXHJcbiAgICAgIGJnOiBcInByaW1hcnlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOlxyXG4gICAgICAgIFwiUmVnaXN0cmF0aW9uL0FwcHJvdmVkIGJ5IHdoaWNoIGF1dGhvcml0eSA/XCIsXHJcbiAgICAgIHRleHQ6IFwiU29jaWV0eSBpcyByZWdpc3RlcmVkIGJ5IFV0dGFyIFByYWRlc2ggR292dC4gQXV0aG9yaXR5IHVuZGVyIENMVSAxNDMgKENoYW5nZSBvZiBMYW5kIFVzZSkuXCIsXHJcbiAgICAgIGJnOiBcImluZm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlBsb3RzIFNpemUgUmVzaWRlbnRpYWwvQ29tbWVyY2lhbCA/XCIsXHJcbiAgICAgIHRleHQ6IFwiUmVzaWRlbnRpYWwgYW5kIGNvbW1lcmNpYWwgYm90aCBwcm9wZXJ0eSBhcmUgYXZhaWxhYmxlIGluIG91ciBzb2NpZXR5LiBQbG90IFNpemU6IDExMCBZcmRzIHRvIDUwMCBZcmRzIGFuZCBtb3JlXCIsXHJcblxyXG4gICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQYXltZW50IFBsYW5zLyBTY2hlbWVzICYgSW50ZXJlc3Qgb24gRU1JID9cIixcclxuICAgICAgdGV4dDogXCJLUlMgSG9tZSBEZXZlbG9wZXJzIHByb3ZpZGUgdGhlIDAlIEludGVyZXN0IHJhdGUgRU1JIGZhY2lsaXRpZXMgdG8gdGhlcmUgY2xpZW50cyBmb3IgMTUgdG8gMzUgbW9udGggYXMgd2VsbC5cIixcclxuXHJcbiAgICAgIGJnOiBcInN1Y2Nlc3NcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOlxyXG4gICAgICAgIFwiQWZmb3JkYWJpbGl0eSwgY2FuIEkgYWZmb3JkIHRoaXMgcHJvcGVydHkgdG8gYnV5ID9cIixcclxuICAgICAgdGV4dDogXCJXZSBhbHdheSByZW1lbWJlciB0aGUgYnVkZ2V0IG9mIG91ciBjdXN0b21lciBkdXJpbmcgZGV2ZWxvcG1lbnQgb2YgdGhlIG5ldyBwcm9wZXJ0eSBvciBzb2NpZXR5LiBTbyBvdXIgcHJvcGVydHkgY2FuIGJlIG93bmVkIGJ5IGV2ZXJ5b25lIHdobyBhY3R1YWxseSB3YW50cyB0byBidXkuXCIsXHJcblxyXG4gICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSZWdpc3RyeSAoaXMgcG9zc2libGUgb24gNTAlIHBheW1lbnQ/KSAmIEFsbG90bWVudHMgb2YgcHJvcGVydHkgP1wiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBjYW4gcHJvY2NlZCB5b3VyIHByb3BlcnR5IGZvciByZWdpc3RyeSBhZnRlciA1MCUgb3IgMTAwJSBwYXltZW50IG9mIHlvdXIgcHJvcGVydHkgdmFsdWUuIFlvdSB3aWxsIGdldCB5b3VyIHByb3BlcnR5IGFsbG90bWVudCBsZXR0ZXIgYWZ0ZXIgeW91ciBwcm9wZXJ0eSBib29raW5nIGFtb3VudC5cIixcclxuXHJcbiAgICAgIGJnOiBcInN1Y2Nlc3NcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRmFxXCIgZGVmYXVsdGFjdGl2ZWtleT1cIjBcIj5cclxuICAgICAgICB7ZGVmYXVsdEFjY29yZGlvbi5tYXAoKGQsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBldmVudGtleT17YCR7aX1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVEZWZhdWx0KGFjdGl2ZURlZmF1bHQgPT09IGkgPyAtMSA6IGkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRsYWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmVEZWZhdWx0ID09PSBpID8gXCJcIiA6IFwiY29sbGFwc2VkXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRGVmYXVsdChhY3RpdmVEZWZhdWx0ID09PSBpID8gLTEgOiBpKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7ZC50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvd1wiIGV2ZW50a2V5PXtgJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iMFwiPntkLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlRGVmYXVsdCA9PT0gaSA/IFwiY29sbGFwc2VkIHNob3dcIiA6IFwiY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBldmVudGtleT17YCR7aX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZURlZmF1bHQoYWN0aXZlRGVmYXVsdCA9PT0gaSA/IC0xIDogaSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iMFwiPntkLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUFjY29yZGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmFxQWNjb3JkaW9uIiwiYWN0aXZlRGVmYXVsdCIsInNldEFjdGl2ZURlZmF1bHQiLCJkZWZhdWx0QWNjb3JkaW9uIiwidGl0bGUiLCJ0ZXh0IiwiYmciLCJtYXAiLCJkIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=