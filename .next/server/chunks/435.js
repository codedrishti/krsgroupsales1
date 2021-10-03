"use strict";
exports.id = 435;
exports.ids = [435];
exports.modules = {

/***/ 9435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ aboutUs)
});

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(1577);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(4253);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/counterup.js





function Counterup({
  count
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: count,
      redraw: true,
      children: ({
        countUpRef,
        start
      }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
        onChange: start,
        delayedCall: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          ref: countUpRef,
          children: "count"
        })
      })
    })
  });
}

/* harmony default export */ const counterup = (Counterup);
;// CONCATENATED MODULE: ./element/counter.js





function Counter() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "counter m-b0",
              children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 9875
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Satisfied Clients"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.4s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "counter m-b0",
              children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 7894
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Project Lunched"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.6s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "counter m-b0",
              children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 65
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Years Completed"
            })]
          })
        })
      })]
    })
  });
}

/* harmony default export */ const counter = (Counter);
;// CONCATENATED MODULE: ./element/aboutUs.js





function AboutUs() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner bg-white",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 m-b30",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dz-media",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/about/img6.png",
                className: "move-2",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-6",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-3 mb-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title",
                children: "About KRS Group"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-separator style-2 bg-primary"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus hendrerit ut a odio."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "m-b30",
              children: "Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu."
            }), /*#__PURE__*/jsx_runtime_.jsx(counter, {})]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const aboutUs = (AboutUs);

/***/ })

};
;