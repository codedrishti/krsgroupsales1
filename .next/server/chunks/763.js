"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 7763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ testimonial)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/testimonialSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function TestimonialSlider() {
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
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "testimonial-detail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "testimonial-pic",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "images/testimonials/pic3.jpg",
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Cak Dikin"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "testimonial-position",
                  children: ["CEO & Founder", " "]
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "testimonial-detail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "testimonial-pic",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "images/testimonials/pic3.jpg",
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Lora Price"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "testimonial-position",
                  children: ["CEO & Founder", " "]
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "testimonial-detail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "testimonial-pic",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "images/testimonials/pic3.jpg",
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Cak Dikin"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "testimonial-position",
                  children: ["CEO & Founder", " "]
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "testimonial-detail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "testimonial-pic",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "images/testimonials/pic3.jpg",
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Cak Dikin"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "testimonial-position",
                  children: ["CEO & Founder", " "]
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
        })]
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const testimonialSlider = (TestimonialSlider);
;// CONCATENATED MODULE: ./element/testimonial.js





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
            className: "col-lg-3 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-1 text-white p-t15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "sub-title bgl-light m-b20",
                children: "Testmonial"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title m-b10",
                children: "See What Are They Say About Us "
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Fusce vitae sapien eu mauris semper faucibus eget tristique lorem."
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