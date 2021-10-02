import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import GetInTouch from "../element/get-in-touch";
import Newsletter from "../element/newsletter";
import PropertyHome from "../element/propertyHome";
import Service from "../element/service";
import Slider from "../element/slider";
import Testimonial from "../element/testimonial";
import FaqHome from "../element/faqHome"
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";

function Home() {
 
  return (
    <>
      <Header3 />
      <div className="page-content bg-white" id="top">
        <Slider />
        <Service />
        <PropertyHome />
        <Newsletter />
        <AboutUs />
        <Testimonial />
        <FaqHome />
        <GetInTouch />
        <Footer3 />
      </div>
    </>
  );
}

export default Home;
