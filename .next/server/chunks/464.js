"use strict";
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 7107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./component/blogSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function BlogSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
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
      className: "blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary",
      style: {
        "position": "relative"
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/blog/blog-grid-1/pic1.jpg",
                alt: ""
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Praesent ut lobortis purus hasellus libero orci, accumsan."
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "blog-details-1",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "images/blog/blog-grid-1/pic2.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Donec feugiat mollis nisi in dignissim. Morbi lectus."
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "blog-details-1",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "blog-details-1",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        })]
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const blogSlider = (BlogSlider);
;// CONCATENATED MODULE: ./element/blog.js





function Blog() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Blog"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "Latest Blog & News"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(blogSlider, {})]
      })
    })
  });
}

/* harmony default export */ const blog = (Blog);

/***/ })

};
;