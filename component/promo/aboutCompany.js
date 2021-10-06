import Link from "next/link";

function AboutCompany() {
  return (
    <>
      <section id="aboutus" className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src="images/about/JP-tyagi-intro-01.jpg" className="" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6>
                <h2 className="title">
                  How We Can Help You To Achieve Your Dream Goal
                </h2>
              </div>
              <p className="text-dark">
                We KRS Group started our opration into the real estate industry
                in the year of 1998. And we established our self realestate
                group in the year of 2015 with the name of KRS Home Developers.
                We earned so much credibility & reliablity during these years.
                KRS Group and its company KRS Home Developers is the most
                reputed name in this industry.
              </p>
              <p className="m-b30 text-dark">
                <span className="text-dark h5">We are On A Mission To Help 100,000+ People, By Providing
                Affordable Property with World Class Aminites</span>. We Build Township
                Whose Value Keeps on Increasing Over The Time, That why Our KRS
                Family is Growing Too Fast. And It's Our Vision and Mission
                Also.
              </p>
              {/* <img src="images/sign.png" alt="" /> */}
              <h4 className="m-b30">KRS Home Developers Private Limited</h4>
              <Link href="https://fabulous-inventor-6977.ck.page/dad8077b79">
                        <a data-formkit-toggle="dad8077b79">
                <button className="btn btn-success d-inline-flex align-items-center move-2">
                  <i className="fa fa-angle-right m-r10"></i>Save money and live better
                </button>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCompany;
