"use strict";
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ counter)
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
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner bg-primary",
      style: {
        "backgroundImage": "url(images/background/bg3.png)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "icon-bx-wraper style-4 text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bg-green shadow-green m-b20",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-smile"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "title",
                  children: "Registry of Clients"
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                    count: 9875
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "icon-bx-wraper style-4 text-center m-tb30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bg-yellow shadow-yellow m-b20",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-line-graph"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "title",
                  children: "Developed The Land"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                  className: "counter m-b0 text-primary",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(counterup, {
                    count: 600
                  }), " Acres"]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.6s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "icon-bx-wraper style-4 text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bg-blue shadow-blue m-b20",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-startup"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "title",
                  children: "Project Lunched"
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                    count: 5
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "icon-bx-wraper style-4 text-center m-tb30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx-sm radius bg-red shadow-red m-b20",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-confetti"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "title",
                  children: "Years Completed"
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                    count: 7
                  })
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const counter = (Counter);

/***/ })

};
;