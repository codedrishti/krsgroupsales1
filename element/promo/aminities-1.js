import { useEffect, useState } from "react";
import AminitiesList from "../../component/promo/aminitiesList-2";
import Link from "next/link";
// import { WOW } from "wowjs";

function Aminities1() {
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
            <h2 className="title">Provide World Class Aminities With Plots</h2>
            <p>
              We are committed to provide the best aminities to live in this Govt. Approved Township with the
              all posiblities.
            </p>
          </div>
          <div className="row">
            <AminitiesList />
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>
                <span className="text-warning">In Exchange for Tiny Investment with 0% Intrest Rate,
                You Get ALL Of This Price Less Aminities With Your PLOT.</span><br />
                <span className="text-dark">Its your pocket-friendly property and Everything you need, on a budget so Hurry before the price get increase.</span>
              </h3>
              <Link href="https://fabulous-inventor-6977.ck.page/1721633c3f">
                    <a data-formkit-toggle="1721633c3f">
              <button type="button" className="btn btn-outline-success mt-25 move-2">Schedule Call Back - <span className="text-dark">Don't miss the chance!</span></button>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aminities1;
