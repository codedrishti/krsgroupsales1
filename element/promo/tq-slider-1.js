import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Slider from "react-slick";

function SRRTThankyouPage01() {
  return (
    <>
      <div
        className="banner-one"
        style={{ backgroundImage: "url(/images/main-slider/slider1/pic2.png)" }}
      >
        <div className="container">
          <div className="banner-inner">
            {/* <div className="img1">
              <img src="images/main-slider/slider1/pic3.png" alt="" />
            </div>
            <div className="img2">
              <img src="images/main-slider/slider1/pic4.png" alt="" />
            </div> */}
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <div
                        className="dz-media move-box wow fadeIn"
                        data-wow-duration="1.6s"
                        data-wow-delay="0.8s"
                      >
                        {/* <img className="move-1" src="images/move/pic1.png" alt=""/>
								<img className="move-2" src="images/move/pic2.png" alt=""/> */}
                        <a href="/images/promo/slider/pic-1.jpg">
                          <img
                            src="/images/promo/slider/pic-1.jpg"
                            alt="Shri Radha Rani Township"
                            className="move-2"
                            style={{
                              border: "5px solid black",
                              "border-radius": "5px",
                              cursor: "pointer",
                            }}
                          />
                        </a>
                      </div>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </div>
              </div>

              <div className="col-md-6">
                <div className="banner-content">
                  <h6
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp sub-title text-danger"
                  >
                    You have taken a massive action.
                  </h6>
                  <h1
                    data-wow-duration="1.2s"
                    data-wow-delay="1s"
                    className="wow fadeInUp "
                  >
                    Congratulations! <span className="text-primary">We will get in your touch.</span>
                  </h1>
                    <div className="col-lg-12 text-center">
                         <a type="button" className="btn btn-danger m-2" href="https://facebook.com/shriradharanitownship" target="_blank"> Join On Facebook </a>
                    </div>
                    <div className="col-lg-12 text-center">
                         <a type="button" className="btn btn-success m-2" href="https://api.whatsapp.com/send?phone=919873632575&text=Hello,%20please%20share%20the%20details%20about%20brij%20rani%20kutir.%20I%20wants%20to%20know%20more." target="_blank">Connect Us On Whatsapp</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div
              className="col-sm-3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div className="dlab-team m-b30">
                <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="/images/promo/slider/pic-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div className="dlab-team m-b30">
                <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="/images/promo/slider/pic-3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div className="dlab-team m-b30">
                <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="/images/promo/slider/pic-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div className="dlab-team m-b30">
                <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="/images/promo/slider/pic-5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SRRTThankyouPage01;
