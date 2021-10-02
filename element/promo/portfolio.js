import PortfolioSlider from "../../component/promo/portfolioSlider";

function Portfolio() {
  return (
    <>
      <section
        id="ourTestimonial"
        className="content-inner bg-primary"
        style={{ backgroundImage: "url(images/background/bg3.png)" }}
      >
        <div className="px-xl-5 px-md-4 px-3">
          <div className="row testimonials-wraper-1">
            <div className="col-lg-9">
              <PortfolioSlider />
            </div>
            <div
              className="col-lg-3 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="section-head style-1 text-white p-t15">
                <h6 className="sub-title bgl-light m-b20">Client Portfolio</h6>
                <h2 className="title m-b10">See, How we are growing? </h2>
                {/* <p>
                    We would like to welcome more People Like you. 
                    Don’t Buy from us Unless you’re not Satisfied because 
                    Our Only One Purpose, Satisfaction.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
