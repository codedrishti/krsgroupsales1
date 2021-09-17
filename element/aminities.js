import { useEffect, useState } from "react";
import AminitiesList from "../component/aminitiesList-2";
// import { WOW } from "wowjs";

function Aminities() {
  return (
    <>
      <section
        id="aminities-sec"
        className="custom-content-inner wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Aminities
            </h6>
            <h2 className="title">Provide World Class Aminities To You</h2>
            <p>
              We are bounded to provide the best aminities to live here with the
              all posiblities
            </p>
          </div>
          <div className="row">
            <AminitiesList />
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>
                <span className="text-warning">In Exchange for Tiny Investment with 0% Intrest Rate,
                You Get ALL Of This Price Less Aminities.</span>
              </h4>
              <button type="button" className="btn btn-outline-success mt-25">Schedule Call Back</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aminities;
