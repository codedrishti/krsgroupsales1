import { useEffect } from "react";
import Kutirtyslider from "../element/kutir-ty-slider-01";
import Footer from "../layout/landFooter";
import Header from "../layout/landHeader";
import SEO from "../component/seo";
import FBPixel from "../analytics/pixel";

function BrijRaniKutirPromo001() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  
  return (
    <>
      <FBPixel pixelType="BrijranikutirTq" />
      <SEO title="Thank you - KRS Group Township" />
      <Header />
      <div className="page-content bg-white" id="top">
        <Kutirtyslider />
      </div>
      <Footer />
    </>
  );
}

export default BrijRaniKutirPromo001;
