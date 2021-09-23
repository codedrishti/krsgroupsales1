import { useEffect } from "react";
import Kutirtyslider from "../element/kutir-ty-slider-01";
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
        <Kutirtyslider />
      </div>
      <Footer />
    </>
  );
}

export default BrijRaniKutirPromo001;
