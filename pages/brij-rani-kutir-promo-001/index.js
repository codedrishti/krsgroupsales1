import { useEffect } from "react";
import Script from "next/script";
import Slider4 from "../../element/promo/slider-4";
import AboutUs from "../../component/promo/aboutCompany";
import PropertyIntro from "../../element/promo/propertyintro";
import Aminities from "../../element/promo/aminities";
import Portfolio from "../../element/promo/portfolio";
import Gallery from "../../element/promo/gallery";
import Testimonial from "../../element/promo/testimonial";
import FAQList from "../../component/promo/faqList";
import Cta from "../../element/promo/cta";
import Footer from "../../layout/landFooter";
import Header from "../../layout/landHeader";
import SEO from "../../component/seo";
import FBPixel from "../../analytics/pixel";

function BrijRaniKutirPromo001() {
     
     useEffect(() => {
          document.querySelector("body").setAttribute("color", "color_1");

          document.documentElement.style.setProperty(
               "--gradient",
               "linear-gradient(to right,#896eff 0,#5f3bff 51%,#896eff 100%)"
          );
          document.documentElement.style.setProperty(
               "--gradient-sec",
               "linear-gradient(to right,#130065 0,#2b0ead 51%,#130065 100%)"
          );
         

     }, []);

     return (
          <>
               <FBPixel pixelType="Brijranikutir" />
               <SEO title="No. 1 Township Developer in India - KRS Group" />
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
               <Script
                    async
                    data-uid="dad8077b79"
                    src="https://fabulous-inventor-6977.ck.page/dad8077b79/index.js"
                    strategy="beforeInteractive"
               />
          </>
     );
}

export default BrijRaniKutirPromo001;
