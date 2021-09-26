import { useEffect } from "react";
import SRRTslider from "../../element/promo/tq-slider-1";
import Footer from "../../layout/landFooter";
import Header from "../../layout/landHeader";
import SEO from "../../component/seo";
import FBPixel from "../../analytics/pixel";

function ShriRadhaRaniTqPromo001() {
     useEffect(() => {
          document.querySelector("body").setAttribute("color", "color_1");
     }, []);

     return (
          <>
               <FBPixel pixelType="SRRTownshipTq" />
               <SEO title="Thank you - KRS Group Township" />
               <Header />
               <div className="page-content bg-white" id="top">
                    <SRRTslider />
               </div>
               <Footer />
          </>
     );
}

export default ShriRadhaRaniTqPromo001;
