"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./analytics/ga.js
// log the pageview with their URL
const pageview = url => {
  window.gtag('config', "G-LV7XLR84LN", {
    page_path: url
  });
}; // log specific events happening.

const ga_event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./analytics/index.js





/* harmony default export */ const analytics = (class extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children:
      /*#__PURE__*/
      // process.env.NODE_ENV === "production" && process.browser ?
      (0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${"G-LV7XLR84LN"}`
        }), /*#__PURE__*/jsx_runtime_.jsx("script", {
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
        })]
      }) //: null

    });
  }

});
;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
;// CONCATENATED MODULE: external "react-rangeslider"
const external_react_rangeslider_namespaceObject = require("react-rangeslider");
;// CONCATENATED MODULE: external "use-scroll-position"
const external_use_scroll_position_namespaceObject = require("use-scroll-position");
var external_use_scroll_position_default = /*#__PURE__*/__webpack_require__.n(external_use_scroll_position_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_namespaceObject.useRouter)();
  const {
    0: toggle1,
    1: setToggle1
  } = (0,external_react_.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,external_react_.useState)();
  const {
    0: header,
    1: setHeader
  } = (0,external_react_.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  let scrollPosition = external_use_scroll_position_default()();

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
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-wraper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(analytics, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6674));
module.exports = __webpack_exports__;

})();