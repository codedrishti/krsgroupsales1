import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header-2";
import SEO from "../component/seo";

function Home() {
     useEffect(() => {
          document.querySelector("body").setAttribute("color", "color_1");
     }, []);
     return (
          <>
               <SEO title="No. 1 Township Developer in India - KRS Group" />
               <Header />
               <div className="page-content bg-white">
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                         {/* <!-- About Us --> */}
                         <div
                              className="section-full bg-white  page-down overlay-black-dark"
                              style={{
                                   backgroundImage:
                                        "url(images/background/bg2.jpg)",
                                   backgroundSize: "cover",
                                   backgroundPosition: "right top",
                              }}
                         >
                              <div className="container-fluid">
                                   <div className="pagedown-title">
                                        <img src="images/vlc.png" alt="" />
                                        <h1>
                                             Site Is Down <br />
                                             For Maintenance
                                        </h1>
                                        <p>
                                             This is the Technical Problems
                                             Page. <br />
                                             Or any other page.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         {/* <!-- About Us End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
               </div>
               {/* <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
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
        <Cta />
      </div>
      <Footer /> */}
          </>
     );
}

export default Home;
