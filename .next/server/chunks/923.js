"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 3194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function AboutCompany() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
      id: "aboutus",
      className: "content-inner",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "col-lg-6 m-b30 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
              className: "dz-media",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
                src: "images/about/JP-tyagi-intro-01.jpg",
                className: "",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "col-lg-6 m-b30 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "section-head style-1 mb-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                className: "sub-title bgl-primary m-b20 text-primary",
                children: "About Us"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
                className: "title",
                children: "How We Can Help You Achieve Your Dream Goal"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "text-dark",
              children: "We KRS Group started our opration into the real estate industry in the year of 1998. And we established our self realestate group in the year of 2015 with the name of KRS Home Developers. We earned so much credibility & reliablity during these years. KRS Group and its company KRS Home Developers is the most reputed name in this industry."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              className: "m-b30 text-dark",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "text-dark h5",
                children: "We are On A Mission To Help 100,000+ People, By Providing Affordable Property with World Class Aminites"
              }), ". We Build Township Whose Value Keeps on Increasing Over The Time, That why Our KRS Family is Growing Too Fast. And It's Our Vision and Mission Also."]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
              className: "m-b30",
              children: "KRS Home Developers Private Limited"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              "data-formkit-toggle": "1721633c3f",
              href: "https://fabulous-inventor-6977.ck.page/1721633c3f",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: "btn btn-success d-inline-flex align-items-center move-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
                  className: "fa fa-angle-right m-r10"
                }), "Save money and live better"]
              })
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutCompany);

/***/ }),

/***/ 5521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ aminities)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/promo/aminitiesList-2.js




const aminitiesData = [{
  title: "Park",
  icon: "fa fa-tree"
}, {
  title: "Temple",
  icon: "fa fa-om"
}, {
  title: "Paved Road",
  icon: "fa fa-road"
}, {
  title: "School",
  icon: "fa fa-school"
}, {
  title: "Shops",
  icon: "fa fa-shopping-basket"
}, {
  title: "STP Plant",
  icon: "fa fa-water"
}, {
  title: "Hospital",
  icon: "fa fa-hospital-o"
}, {
  title: "24/7 Water Supply",
  icon: "fa fa-hand-holding-water"
}, {
  title: "Electricity",
  icon: "fa fa-lightbulb-o"
}, {
  title: "24x7 Security",
  icon: "fa fa-shield-alt"
}, {
  title: "Gated Community",
  icon: "fa fa-house-user"
}, {
  title: "Fountain",
  icon: "fa fa-bullseye"
}, {
  title: "Solar Lighting",
  icon: "fa fa-solar-panel"
}, {
  title: "Community Center",
  icon: "fa fa-users"
}, {
  title: "Rain Water Harvesting",
  icon: "fa fa-cloud-rain"
}];

function AminitiesList2() {
  const {
    0: aminities,
    1: setAminities
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    setAminities(aminitiesData);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: aminities.map(item => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-lg-4 wow fadeInLeft",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-bx-wraper style-6 left p-0 m-b30 icon-up",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "icon-bx-sm bg-white",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "javascript:void(0);",
                className: "icon-cell text-primary",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: item.icon
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "icon-content",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "dlab-title mt-25",
                children: item.title
              })
            })]
          })
        })
      })
    }))
  });
}

/* harmony default export */ const aminitiesList_2 = (AminitiesList2);
;// CONCATENATED MODULE: ./element/promo/aminities.js

 // import { WOW } from "wowjs";





function Aminities() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "aminities-sec",
      className: "custom-content-inner wow fadeInUp",
      style: {
        backgroundImage: "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Aminities"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "Provide World Class Aminities To You"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "We are bounded to provide the best aminities to live here with the all posiblities"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx(aminitiesList_2, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-12 text-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-warning",
                children: "In Exchange for Tiny Investment with 0% Intrest Rate, You Get ALL Of This Price Less Aminities."
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-dark",
                children: "Its your pocket-friendly property and Everything you need, on a budget so Hurry before the price get increase."
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              "data-formkit-toggle": "1721633c3f",
              href: "https://fabulous-inventor-6977.ck.page/1721633c3f",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "btn btn-outline-success mt-25 move-2",
                children: ["Schedule Call Back - ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-dark",
                  children: "Don't miss the chance!"
                })]
              })
            })]
          })
        })]
      })
    })
  });
}

/* harmony default export */ const aminities = (Aminities);

/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function Cta() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
      style: {
        backgroundImage: "url(images/background/bg5.jpg)",
        backgroundSize: "cover"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row action-box style-1 align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "col-lg-8 col-md-8 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "section-head style-1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                className: "sub-title bgl-primary m-b20 text-primary",
                children: "More With Us"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
                className: "title",
                children: "Best Investment is now your Duty, Don\u2019t be Delay. Because You Deserve It! Get Call Back Today."
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "col-lg-4 col-md-4 text-right m-b30 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              "data-formkit-toggle": "1721633c3f",
              href: "https://fabulous-inventor-6977.ck.page/1721633c3f",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
                type: "button",
                className: "btn btn-success mt-25 move-2",
                children: "Call Me! I want to discuss."
              })
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cta);

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/promo/portfolioSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const pData = [{
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic31.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic8.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic22.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic26.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic23.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic24.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic16.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic29.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}, {
  imgSrc: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/portfolio/pic10.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "contain"
  }),
  title: "Rohit Sharma"
}];

function PortfolioSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const {
    0: portfolioImg,
    1: setPortfolioImg
  } = (0,external_react_.useState)([]);
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 1320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }]
  };

  const renderArrows = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "owl-nav",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-prev",
        onClick: () => asd.slickPrev(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-left"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-next",
        onClick: () => asd.slickNext(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-right"
        })
      })]
    });
  };

  (0,external_react_.useEffect)(() => {
    setPortfolioImg(pData);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: portfolioImg.map(item => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: item.imgSrc
          })
        }))
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const portfolioSlider = (PortfolioSlider);
;// CONCATENATED MODULE: ./element/promo/portfolio.js





function Portfolio() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "ourTestimonial",
      className: "content-inner bg-primary",
      style: {
        backgroundImage: "url(images/background/bg3.png)"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-xl-5 px-md-4 px-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row testimonials-wraper-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/jsx_runtime_.jsx(portfolioSlider, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-1 text-white p-t15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "sub-title bgl-light m-b20",
                children: "Client Portfolio"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title m-b10",
                children: "See, How we are growing? "
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const portfolio = (Portfolio);

/***/ }),

/***/ 9203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6616);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







function PropertyIntro() {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
      id: "proIntro",
      className: "custom-content-inner",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Property Intro"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
            className: "title",
            children: "\uD83D\uDC97 Over 15,000 amazing family Have taken property in our Township - you're amazing too!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "col-lg-6 m-b30 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "video-bx style-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: "images/video/video-thumbnail-01.png",
                alt: ""
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "video-btn",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#proIntro",
                  className: "popup-youtube",
                  onClick: () => setOpen(true),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "flaticon-play"
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_modal_video__WEBPACK_IMPORTED_MODULE_2___default()), {
              channel: "youtube",
              autoplay: true,
              isOpen: isOpen,
              videoId: "zgAgAmN-MSo",
              onClose: () => setOpen(false)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-6 m-b30 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                  className: "list-check primary mb-3 text-dark",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Gated Society: They get complete privacy while living in a community."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Instant Possession after Registration."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Safe and Quality Neighborhood."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Excellent Investment with Peace of Mind."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "World Class Aminities Available."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Free Site Visit Facilities."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "EMI facilities 25 - 40 Month on 0% Interest Rate."
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Support: Dedicated Relationship Manager."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "col-lg-12 text-center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  "data-formkit-toggle": "1721633c3f",
                  href: "https://fabulous-inventor-6977.ck.page/1721633c3f",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                    type: "button",
                    className: "btn btn-danger m-2 move-2",
                    children: "Schedule a Call Back"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  "data-formkit-toggle": "1721633c3f",
                  href: "https://fabulous-inventor-6977.ck.page/1721633c3f",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                    type: "button",
                    className: "btn btn-success move-2",
                    children: "Book Free Site Visit"
                  })
                })]
              })]
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyIntro);

/***/ }),

/***/ 4162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ testimonial)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/promo/testimonialSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const tData = [{
  name: "Kishor Sarkar",
  pic: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/testimonials/kishor-sarkar.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "cover"
  }),
  from: "Nagaland",
  review: "We had the good fortune to have buy a property in 2020 with Ideal Company and our real estate manager Riya Yadav, with an outstanding experience. Anyone in the market looking to buy a property needs to seriously consider Her and their company. You will be extremely happy you did."
}, {
  name: "Daya Sankar",
  pic: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/testimonials/daya-sankar.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "cover"
  }),
  from: "Mumbai",
  review: "We were very satisfied from start of visiting their township. We had no complaints what so ever about the whole process. Ideal had the right realtor to help us. We are very pleased. They ideal always would call us to make sure everything is ok. I would definitely use ideal again."
}, {
  name: "Pankaj Yadav",
  pic: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/testimonials/pankaj-yadav.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "cover"
  }),
  from: "Mathura",
  review: "I was extremely happy with their both township they recommended - Shri Radha Rani & Shri Radha Rani Township Phase 1. Both at best location with great aminities. I got a good deal on one time payment. I was extremely happy and would recommend KRS Group to everyone."
}, {
  name: "Ravinder Singh",
  pic: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/testimonials/ravinder-singh.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "cover"
  }),
  from: "Bangalore",
  review: "KRS Group is very professional with communicating the process and great follow through. Offers on half/full payment plan and I procced property registry on same day. I will personally use The KRS Group in the future and highly recommend them to others."
}, {
  name: "Goverdhan Agarwal",
  pic: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: "/images/testimonials/kunal-mishra.jpg",
    layout: "responsive",
    layout: "fill",
    width: "100%",
    height: "100%",
    layout: "responsive",
    objectFit: "cover"
  }),
  from: "Hydrabad",
  review: "Riya and his team did an outstanding job. She was able to provide me a best deal for my dream place property in vrindavan and I am so happy. She did all the hard work and streamlined the entire process for us! We are so happy and will recommend to our friends and family!"
}];

function TestimonialSlider() {
  const {
    0: testimoni,
    1: setTestimoni
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    setTestimoni(tData);
  }, []);
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 1320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }]
  };

  const renderArrows = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "owl-nav",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-prev",
        onClick: () => asd.slickPrev(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-left"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-next",
        onClick: () => asd.slickNext(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-right"
        })
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: testimoni.map(item => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.6s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "testimonial-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "testimonial-text",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-justify",
                  children: /*#__PURE__*/jsx_runtime_.jsx("q", {
                    children: item.review
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "testimonial-detail",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "testimonial-pic",
                  children: item.pic
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "clearfix",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                    className: "testimonial-name",
                    children: item.name
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "testimonial-position",
                    children: item.from
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "star-rating",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fa fa-star fa-sm text-warning"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fa fa-star fa-sm text-warning"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fa fa-star fa-sm text-warning"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fa fa-star fa-sm text-warning"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fa fa-star fa-sm text-warning"
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        }))
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const testimonialSlider = (TestimonialSlider);
;// CONCATENATED MODULE: ./element/promo/testimonial.js





function Testimonial() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "ourTestimonial",
      className: "content-inner bg-primary",
      style: {
        "backgroundImage": "url(images/background/bg3.png)"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-xl-5 px-md-4 px-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row testimonials-wraper-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/jsx_runtime_.jsx(testimonialSlider, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 wow fadeInRight align-middle",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-1 text-white p-t15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "sub-title bgl-light m-b20",
                children: "Testmonial"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title m-b10",
                children: "See Our Customer Stories "
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const testimonial = (Testimonial);

/***/ })

};
;