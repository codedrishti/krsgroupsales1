import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Slider from "react-slick";

function Slider1() {
     return (
          <>
               <div
                    className="banner-one"
                    style={{
                         backgroundImage:
                              "url(images/main-slider/slider1/pic2.png)",
                    }}
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
                                                                           "border-radius":
                                                                                "5px",
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
                                                  यहाँ सर्च खत्म करें, Govt. Approved Township!
                                             </h6>
                                             <h1
                                                  data-wow-duration="1.2s"
                                                  data-wow-delay="1s"
                                                  className="wow fadeInUp "
                                             >
                                                  Shri Radha Rani{" "}
                                                  <span className="text-primary">
                                                       Township
                                                  </span>{" "}
                                                  Barsana
                                             </h1>
                                             <a
                                                  data-wow-duration="1.6s"
                                                  data-wow-delay="2s"
                                                  className="wow fadeInUp btn btn-link d-inline-flex align-items-center"
                                             >
                                                  <i className="fa fa-angle-right m-r10"></i>
                                                  Only Appriciated Township in
                                                  Barsana, Mathura
                                             </a>
                                             <a
                                                  data-wow-duration="1.6s"
                                                  data-wow-delay="2s"
                                                  className="wow fadeInUp btn btn-link d-inline-flex align-items-center"
                                             >
                                                  <i className="fa fa-angle-right m-r10 m-t10"></i>
                                                  Affordable Property with World
                                                  Class Aminities
                                             </a>
                                             <div className="col-lg-12 text-center">
                                             <Link href="https://fabulous-inventor-6977.ck.page/1721633c3f">
                                                  <a data-formkit-toggle="1721633c3f">
                                                       <button
                                                            type="button"
                                                            className="btn btn-success m-2"
                                                       >
                                                            Pay less, get more!
                                                            - Schedule a Call
                                                            Back
                                                       </button>
                                                  </a>
                                             </Link>
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
                                             <img
                                                  src="/images/promo/slider/pic-2.jpg"
                                                  alt="Shri Radha Rani Township Photo"
                                             />
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
                                             <img
                                                  src="/images/promo/slider/pic-3.jpg"
                                                  alt="Shri Radha Rani Township Photo"
                                             />
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
                                             <img
                                                  src="/images/promo/slider/pic-4.jpg"
                                                  alt="Shri Radha Rani Township Photo"
                                             />
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
                                             <img
                                                  src="/images/promo/slider/pic-5.jpg"
                                                  alt="Shri Radha Rani Township Photo"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Slider1;
