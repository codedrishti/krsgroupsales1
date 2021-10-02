import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import AboutUs from "../element/aboutUs";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";

function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <AboutUs />

        {/* <!-- Video --> */}
        <section className="video-wraper-1">
          <div className="content-inner bg-gray">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-3">
                    <h2 className="title">Watch Us How Our Team Work Togather</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                    Praesent fermentum nisl at ipsum facilisis viverra. Ut
                    elementum accumsan finibus. Cras placerat lacinia mi, ac
                    dictum ante. Donec libero enim, tincidunt sit amet venenatis
                    id, maximus eu quam.{" "}
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>Suspendisse ullamcorper mollis orci in facilisis.</li>
                    <li>Etiam orci magna, accumsan varius enim volutpat.</li>
                    <li>
                      Donec fringilla velit risus, in imperdiet turpis euismod
                      quis.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-2" style={{marginTop:"-78px"}}>
                    <img src="images/video/pic2.jpg" alt="" />
                    <div className="video-btn"></div>
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="FzcfZyEhOoI"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer3 />
    </>
  );
}

export default About;
