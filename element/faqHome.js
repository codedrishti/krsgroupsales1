import Link from "next/link";
import FaqAccordion from "../component/faq-accordian";

function FaqHome() {
     return (
          <>
               {/* <!-- Blog --> */}
               <section className="content-inner">
                    <div className="container">
                         <div className="section-head style-3 text-center">
                              <h2 className="title">FAQ</h2>
                              <div className="dlab-separator style-2 bg-primary"></div>
                         </div>
                         <div className="row">
                              <div className="row align-items-center">
                                   <div
                                        className="col-lg-6 wow fadeIn"
                                        data-wow-duration="2s"
                                        data-wow-delay="0.2s"
                                   >
                                        <FaqAccordion />
                                   </div>
                                   <div
                                        className="col-lg-6 wow fadeIn"
                                        data-wow-duration="2s"
                                        data-wow-delay="0.4s"
                                   >
                                        <img
                                             src="images/about/img1.png"
                                             className="move-4"
                                             alt=""
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
}

export default FaqHome;
