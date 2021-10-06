import Link from "next/link";

function Cta() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(images/background/bg5.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row action-box style-1 align-items-center">
            <div
              className="col-lg-8 col-md-8 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  More With Us
                </h6>
                <h2 className="title">
                  Best Investment is now your Duty, Don’t be Delay. Because You
                  Deserve It! Get Call Back Today.
                </h2>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <Link href="https://fabulous-inventor-6977.ck.page/dad8077b79">
                <a data-formkit-toggle="dad8077b79">
              <button type="button" className="btn btn-success mt-25 move-2">
                Call Me! I want to discuss.
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

export default Cta;
