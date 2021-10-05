"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/faq-accordian.js":
/*!************************************!*\
  !*** ./component/faq-accordian.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Code Play Ground\\NextJs\\restatesalesone\\component\\faq-accordian.js",
    _s = $RefreshSig$();





function FaqAccordion() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      activeDefault = _useState[0],
      setActiveDefault = _useState[1];

  var defaultAccordion = [{
    title: "Fusce sem ligula, imperdiet sed nisi sit amet ?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "primary"
  }, {
    title: "Maecenas aliquet quam sed tellus cursus ?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "info"
  }, {
    title: "Proin blandit sed arcu sed ultricies ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Proin cursus massa ipsum, sit amet ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Quisque sem tortor, accumsan finibus massa ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "dlab-accordion accordion-sm",
      id: "accordionFaq",
      defaultActiveKey: "0",
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
                lineNumber: 61,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
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
                lineNumber: 89,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFhM2U5N2Q4YWU4ZDA5ZWQxZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUdBLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDcEIsa0JBQTBDRCwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUFPRSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUNyQjtBQUNJQyxJQUFBQSxLQUFLLEVBQUUsaURBRFg7QUFFSUMsSUFBQUEsSUFBSSxFQUNBLDhNQUhSO0FBSUlDLElBQUFBLEVBQUUsRUFBRTtBQUpSLEdBRHFCLEVBT3JCO0FBQ0lGLElBQUFBLEtBQUssRUFBRSwyQ0FEWDtBQUVJQyxJQUFBQSxJQUFJLEVBQ0EsOE1BSFI7QUFLSUMsSUFBQUEsRUFBRSxFQUFFO0FBTFIsR0FQcUIsRUFjckI7QUFDSUYsSUFBQUEsS0FBSyxFQUFFLHdDQURYO0FBRUlDLElBQUFBLElBQUksRUFDQSw4YUFIUjtBQUtJQyxJQUFBQSxFQUFFLEVBQUU7QUFMUixHQWRxQixFQXNCckI7QUFDSUYsSUFBQUEsS0FBSyxFQUFFLHNDQURYO0FBRUlDLElBQUFBLElBQUksRUFDQSw4YUFIUjtBQUtJQyxJQUFBQSxFQUFFLEVBQUU7QUFMUixHQXRCcUIsRUE2QnJCO0FBQ0lGLElBQUFBLEtBQUssRUFBRSw4Q0FEWDtBQUVJQyxJQUFBQSxJQUFJLEVBQ0EsOGFBSFI7QUFLSUMsSUFBQUEsRUFBRSxFQUFFO0FBTFIsR0E3QnFCLENBQXpCO0FBc0NGLHNCQUNFO0FBQUEsMkJBQ0U7QUFDVSxlQUFTLEVBQUMsNkJBRHBCO0FBRVUsUUFBRSxFQUFDLGNBRmI7QUFHVSxzQkFBZ0IsRUFBQyxHQUgzQjtBQUFBLGdCQUtXSCxnQkFBZ0IsQ0FBQ0ksR0FBakIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsNEJBQ2xCO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFDSSxvQkFBUSxZQUFLQSxDQUFMLENBRFo7QUFFSSxxQkFBUyxFQUFDLGFBRmQ7QUFHSSxtQkFBTyxFQUFFO0FBQUEscUJBQ0xQLGdCQUFnQixDQUFDRCxhQUFhLEtBQUtRLENBQWxCLEdBQXNCLENBQUMsQ0FBdkIsR0FBMkJBLENBQTVCLENBRFg7QUFBQSxhQUhiO0FBQUEsbUNBT0k7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSxxQ0FDSTtBQUFHLG9CQUFJLEVBQUMscUJBQVI7QUFDSSx5QkFBUyxZQUNMUixhQUFhLEtBQUtRLENBQWxCLEdBQXNCLEVBQXRCLEdBQTJCLFdBRHRCLENBRGI7QUFJSSx1QkFBTyxFQUFFO0FBQUEseUJBQ0xQLGdCQUFnQixDQUNaRCxhQUFhLEtBQUtRLENBQWxCLEdBQXNCLENBQUMsQ0FBdkIsR0FBMkJBLENBRGYsQ0FEWDtBQUFBLGlCQUpiO0FBQUEsMkJBVUssR0FWTCxFQVdLRCxDQUFDLENBQUNKLEtBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUE2Qkk7QUFBSyxxQkFBUyxZQUNFSCxhQUFhLEtBQUtRLENBQWxCLEdBQXNCLGdCQUF0QixHQUF5QyxXQUQzQyxDQUFkO0FBRWdCLG9CQUFRLFlBQUtBLENBQUwsQ0FGeEI7QUFFa0MsbUJBQU8sRUFBRTtBQUFBLHFCQUMzQlAsZ0JBQWdCLENBQ1pELGFBQWEsS0FBS1EsQ0FBbEIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQkEsQ0FEZixDQURXO0FBQUEsYUFGM0M7QUFBQSxtQ0FPSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNJO0FBQUcseUJBQVMsRUFBQyxNQUFiO0FBQUEsMEJBQXFCRCxDQUFDLENBQUNIO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Qko7QUFBQSxXQUEyQkksQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa0I7QUFBQSxPQUFyQjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXFERDs7R0E3RlFUOztLQUFBQTtBQStGVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZmFxLWFjY29yZGlhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZhcUFjY29yZGlvbigpIHtcclxuICAgIGNvbnN0IFthY3RpdmVEZWZhdWx0LCBzZXRBY3RpdmVEZWZhdWx0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgZGVmYXVsdEFjY29yZGlvbiA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkZ1c2NlIHNlbSBsaWd1bGEsIGltcGVyZGlldCBzZWQgbmlzaSBzaXQgYW1ldCA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICBcIkFuaW0gcGFyaWF0dXIgY2xpY2hlIHJlcHJlaGVuZGVyaXQsIGVuaW0gZWl1c21vZCBoaWdoIGxpZmUgYWNjdXNhbXVzIHRlcnJ5IHJpY2hhcmRzb24gYWQgc3F1aWQuIDMgd29sZiBtb29uIG9mZmljaWEgYXV0ZSwgbm9uIGN1cGlkYXRhdCBza2F0ZWJvYXJkIGRvbG9yIGJydW5jaC4gRm9vZCB0cnVjayBxdWlub2EgbmVzY2l1bnQgbGFib3J1bSBlaXVzbW9kLlwiLFxyXG4gICAgICAgICAgICBiZzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1hZWNlbmFzIGFsaXF1ZXQgcXVhbSBzZWQgdGVsbHVzIGN1cnN1cyA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICBcIkFuaW0gcGFyaWF0dXIgY2xpY2hlIHJlcHJlaGVuZGVyaXQsIGVuaW0gZWl1c21vZCBoaWdoIGxpZmUgYWNjdXNhbXVzIHRlcnJ5IHJpY2hhcmRzb24gYWQgc3F1aWQuIDMgd29sZiBtb29uIG9mZmljaWEgYXV0ZSwgbm9uIGN1cGlkYXRhdCBza2F0ZWJvYXJkIGRvbG9yIGJydW5jaC4gRm9vZCB0cnVjayBxdWlub2EgbmVzY2l1bnQgbGFib3J1bSBlaXVzbW9kLlwiLFxyXG5cclxuICAgICAgICAgICAgYmc6IFwiaW5mb1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJQcm9pbiBibGFuZGl0IHNlZCBhcmN1IHNlZCB1bHRyaWNpZXMgP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgICAgICAgXCJEb25lYyBzdXNjaXBpdCBwb3J0YSBsb3JlbSBlZ2V0IGNvbmRpbWVudHVtLiBNb3JiaSB2aXRhZSBtYXVyaXMgaW4gbGVvIHZlbmVuYXRpcyB2YXJpdXMuIEFsaXF1YW0gbnVuYyBlbmltLCBlZ2VzdGFzIGFjIGR1aSBpbiwgYWxpcXVhbSB2dWxwdXRhdGUgZXJhdC4gQ3VyYWJpdHVyIHBvcnR0aXRvciBhbnRlIHV0IG9kaW8gdmVzdGlidWx1bSwgZXQgaWFjdWxpcyBhcmN1IHNjZWxlcmlzcXVlLkFuaW0gcGFyaWF0dXIgY2xpY2hlIHJlcHJlaGVuZGVyaXQsIGVuaW0gZWl1c21vZCBoaWdoIGxpZmUgYWNjdXNhbXVzIHRlcnJ5IHJpY2hhcmRzb24gYWQgc3F1aWQuIDMgd29sZiBtb29uIG9mZmljaWEgYXV0ZSwgbm9uIGN1cGlkYXRhdCBza2F0ZWJvYXJkIGRvbG9yIGJydW5jaC4gRm9vZCB0cnVjayBxdWlub2EgbmVzY2l1bnQgbGFib3J1bSBlaXVzbW9kLlwiLFxyXG5cclxuICAgICAgICAgICAgYmc6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUHJvaW4gY3Vyc3VzIG1hc3NhIGlwc3VtLCBzaXQgYW1ldCA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICBcIkRvbmVjIHN1c2NpcGl0IHBvcnRhIGxvcmVtIGVnZXQgY29uZGltZW50dW0uIE1vcmJpIHZpdGFlIG1hdXJpcyBpbiBsZW8gdmVuZW5hdGlzIHZhcml1cy4gQWxpcXVhbSBudW5jIGVuaW0sIGVnZXN0YXMgYWMgZHVpIGluLCBhbGlxdWFtIHZ1bHB1dGF0ZSBlcmF0LiBDdXJhYml0dXIgcG9ydHRpdG9yIGFudGUgdXQgb2RpbyB2ZXN0aWJ1bHVtLCBldCBpYWN1bGlzIGFyY3Ugc2NlbGVyaXNxdWUuQW5pbSBwYXJpYXR1ciBjbGljaGUgcmVwcmVoZW5kZXJpdCwgZW5pbSBlaXVzbW9kIGhpZ2ggbGlmZSBhY2N1c2FtdXMgdGVycnkgcmljaGFyZHNvbiBhZCBzcXVpZC4gMyB3b2xmIG1vb24gb2ZmaWNpYSBhdXRlLCBub24gY3VwaWRhdGF0IHNrYXRlYm9hcmQgZG9sb3IgYnJ1bmNoLiBGb29kIHRydWNrIHF1aW5vYSBuZXNjaXVudCBsYWJvcnVtIGVpdXNtb2QuXCIsXHJcblxyXG4gICAgICAgICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlF1aXNxdWUgc2VtIHRvcnRvciwgYWNjdW1zYW4gZmluaWJ1cyBtYXNzYSA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICBcIkRvbmVjIHN1c2NpcGl0IHBvcnRhIGxvcmVtIGVnZXQgY29uZGltZW50dW0uIE1vcmJpIHZpdGFlIG1hdXJpcyBpbiBsZW8gdmVuZW5hdGlzIHZhcml1cy4gQWxpcXVhbSBudW5jIGVuaW0sIGVnZXN0YXMgYWMgZHVpIGluLCBhbGlxdWFtIHZ1bHB1dGF0ZSBlcmF0LiBDdXJhYml0dXIgcG9ydHRpdG9yIGFudGUgdXQgb2RpbyB2ZXN0aWJ1bHVtLCBldCBpYWN1bGlzIGFyY3Ugc2NlbGVyaXNxdWUuQW5pbSBwYXJpYXR1ciBjbGljaGUgcmVwcmVoZW5kZXJpdCwgZW5pbSBlaXVzbW9kIGhpZ2ggbGlmZSBhY2N1c2FtdXMgdGVycnkgcmljaGFyZHNvbiBhZCBzcXVpZC4gMyB3b2xmIG1vb24gb2ZmaWNpYSBhdXRlLCBub24gY3VwaWRhdGF0IHNrYXRlYm9hcmQgZG9sb3IgYnJ1bmNoLiBGb29kIHRydWNrIHF1aW5vYSBuZXNjaXVudCBsYWJvcnVtIGVpdXNtb2QuXCIsXHJcblxyXG4gICAgICAgICAgICBiZzogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRsYWItYWNjb3JkaW9uIGFjY29yZGlvbi1zbVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImFjY29yZGlvbkZhcVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0QWNjb3JkaW9uLm1hcCgoZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50a2V5PXtgJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURlZmF1bHQoYWN0aXZlRGVmYXVsdCA9PT0gaSA/IC0xIDogaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRsYWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEZWZhdWx0ID09PSBpID8gXCJcIiA6IFwiY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEZWZhdWx0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURlZmF1bHQgPT09IGkgPyAtMSA6IGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvd1wiIGV2ZW50S2V5PXtgJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWIwXCI+e2QudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEZWZhdWx0ID09PSBpID8gXCJjb2xsYXBzZWQgc2hvd1wiIDogXCJjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH0gZXZlbnRrZXk9e2Ake2l9YH0gb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURlZmF1bHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGVmYXVsdCA9PT0gaSA/IC0xIDogaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWIwXCI+e2QudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUFjY29yZGlvbjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGYXFBY2NvcmRpb24iLCJhY3RpdmVEZWZhdWx0Iiwic2V0QWN0aXZlRGVmYXVsdCIsImRlZmF1bHRBY2NvcmRpb24iLCJ0aXRsZSIsInRleHQiLCJiZyIsIm1hcCIsImQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==