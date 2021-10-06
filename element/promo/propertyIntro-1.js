import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

function PropertyIntro1() {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section id="proIntro" className="custom-content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Property Intro
            </h6>
            <h2 className="title">💗 Over 15,000 amazing family Have taken property in our Township - you're amazing too!</h2>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="video-bx style-3">
                <img src="images/video/video-thumbnail-01.png" alt="" />
                <div className="video-btn">
                  <a
                    href="#proIntro"
                    className="popup-youtube"
                    onClick={() => setOpen(true)}
                  >
                    <i className="flaticon-play"></i>
                  </a>
                </div>
              </div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="zgAgAmN-MSo"
                onClose={() => setOpen(false)}
              />
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-lg-12">
                  <ul className="list-check primary mb-3 text-dark">
                    <li>Gated Society: They get complete privacy while living in a community.</li>
                    <li>Instant Possession after Registration.</li>
                    <li>Plot Size: 110, 150, 220 & more.</li>
                    <li>Excellent Investment with Peace of Mind.</li>
                    <li>World Class Aminities Available.</li>
                    <li>Free Site Visit Facilities.</li>
                    <li>EMI facilities 25 - 40 Month on 0% Interest Rate.</li>
                    <li>Support: Dedicated Relationship Manager.</li>
                  </ul>
                </div>
                <div className="col-lg-12 text-center">
                <Link href="https://fabulous-inventor-6977.ck.page/1721633c3f">
                    <a data-formkit-toggle="1721633c3f">
                    <button type="button" className="btn btn-danger m-2 move-2">Schedule a Call Back</button>
                  </a>
                  </Link>
                  <Link href="https://fabulous-inventor-6977.ck.page/1721633c3f">
                    <a data-formkit-toggle="1721633c3f">
                    <button type="button" className="btn btn-success move-2">Book Free Site Visit</button>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyIntro1;
