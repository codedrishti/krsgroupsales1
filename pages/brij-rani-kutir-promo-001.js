import { useEffect } from "react";
import Script from 'next/script';
import Slider4 from "../element/slider-4";
import AboutUs from "../component/aboutCompany";
import PropertyIntro from "../element/propertyintro";
import Aminities from "../element/aminities";
import Portfolio from "../element/portfolio";
import Counter from "../element/counter";
import Gallery from "../element/gallery";
import Testimonial from "../element/testimonial";
import FAQList from "../component/faqList";
import Cta from "../element/cta";
import Footer from "../layout/landFooter";
import Header from "../layout/landHeader";

function BrijRaniKutirPromo001() {
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
                    <Portfolio />
                    <Gallery />
                    <Testimonial />
                    <AboutUs />
                    <FAQList />
                    <Cta />
               </div>
               
               <Footer />
               <Script async data-uid="dad8077b79" src="https://fabulous-inventor-6977.ck.page/dad8077b79/index.js" strategy="beforeInteractive"/>
          </>
     );
}

export default BrijRaniKutirPromo001;
