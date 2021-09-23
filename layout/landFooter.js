function LandFooter() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer-logo">
                  <a href="/brij-rani-kutir-promo-001">
                    <img src="images/logo-white.png" alt="" />
                  </a>
                </div>
                <p className="text-center text-dark small">
                  This site is not a part of the Facebook™ website or Facebook™ Inc. 
                  Additionally, This site is NOT endorsed by Facebook™ in any way. 
                  FACEBOOK is a trademark of FACEBOOK, Inc. <br />
                  All the information on this website is published in good faith
                  and for general information purpose only. These information are 
                  provided by developer so that may be you will going to take action
                  then somethings could be changed. So any action you take upon the
                  information you find on this website (krsgrouptownship.com), is
                  strictly at your own risk. We never recommend to take any action 
                  without your self cross check the all information.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2021{" "}
                  <a href="https://krsgrouptownship.com/" target="_blank">
                    KRS Group Township
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}

    </>
  );
}

export default LandFooter;
