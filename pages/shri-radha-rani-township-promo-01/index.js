import { useEffect } from "react";
import Script from 'next/script';
import Slider from "../../element/promo/slider-1";
import AboutUs from "../../component/aboutCompany";
import PropertyIntro from "../../element/propertyintro";
import Aminities from "../../element/aminities";
import Portfolio from "../../element/portfolio";
import Counter from "../../element/counter";
import Gallery from "../../element/promo/gallery-1";
import Testimonial from "../../element/testimonial";
import FAQList from "../../element/promo/faqList-1";
import Cta from "../../element/cta";
import Footer from "../../layout/landFooter";
import Header from "../../layout/landHeader";
import SEO from "../../component/seo";
import FBPixel from "../../analytics/pixel";

function ShriRadhaRaniTownshipPromo001() {
     useEffect(() => {
          document.querySelector("body").setAttribute("color", "color_1");
     }, []);

     return (
          <>
               <FBPixel pixelType="Shriradharanitownship" />
               <SEO title="No. 1 Gated Society in Barsana, Mathura - KRS Group" />
               <Header />
               <div className="page-content bg-white" id="top">
                    <Slider />
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
               <Script async data-uid="1721633c3f" src="https://fabulous-inventor-6977.ck.page/1721633c3f/index.js" />
          </>
     );
}

export default ShriRadhaRaniTownshipPromo001;
