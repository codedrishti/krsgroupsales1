import FaqAccordion from "./accordian-1";
import Link from "next/link";

function FAQList() {
  return (
    <>
      {/* <!-- Faq --> */}
      <section
      id="faq-sec"
        className="custom-content-inner"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">FAQ</h6>
            <h2 className="title">Answer of Your Question!</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-8 m-auto wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQList;
