import { useEffect } from "react";
import Slider4 from "../element/slider-4";
import AboutUs from "../component/aboutCompany";
import PropertyIntro from "../element/propertyintro";
import Aminities from "../element/aminities";
import Counter from "../element/counter";
import Gallery from "../element/gallery";
import Testimonial from "../element/testimonial";
import FAQList from "../component/faqList";
import Cta from "../element/cta";
import Footer from "../layout/landFooter";
import Header from "../layout/landHeader";


function Landingpage() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider4 />
        <PropertyIntro />
        <Aminities />
        <Counter />
        <Gallery />
        <Testimonial />
        <AboutUs />
        <FAQList />
        <Cta />
        {/* <Clients />
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Projects />
        <Newsletter />
        <Team />
        <Pricing />
        <Testimonial />
        <Blog />
        <Quote />
        <Cta /> */}
      </div>
      <Footer />
    </>
  );
}

export default Landingpage;
