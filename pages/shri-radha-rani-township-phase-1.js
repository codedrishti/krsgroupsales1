import { useState, useEffect } from "react";
import Image from "next/image";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import Link from "next/link";
import ProjectsMenu from "../component/projectsMenu";
import Aminities from "../component/aminities";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function SRRTownship1() {
     const portfolio = [
          {
               title: "Software Landing Page Design",
               category: ["all", "web_design", "branding"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic1.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
          {
               title: "Software Landing Page Design",
               category: ["all", "web_development", "branding"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic2.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
          {
               title: "Software Landing Page Design",
               category: ["all", "web_design", "seo"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic3.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
          {
               title: "Software Landing Page Design",
               category: ["all", "web_design", "branding"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic4.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
          {
               title: "Software Landing Page Design",
               category: ["all", "web_development", "seo"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic5.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
          {
               title: "Software Landing Page Design",
               category: ["all", "mobile_app", "branding"],
               img: (
                    <Image
                         src="/images/projects/project-1/pic6.jpg"
                         layout="responsive"
                         width={370}
                         height={370}
                    />
               ),
               author: "Jhone Doe",
          },
     ];

     const [projects, setProjects] = useState([]);

     useEffect(() => {
          setProjects(portfolio);
     }, []);

     return (
          <>
               <Header3 />
               <div className="page-content bg-white">
                    {/* <!-- Banner  --> */}
                    <div
                         className="dlab-bnr-inr style-1 bg-primary"
                         style={{
                              backgroundImage:
                                   "url(images/banner/bnr2.png), var(--gradient-sec)",
                              backgroundSize: "cover, 200%",
                         }}
                    >
                         <div className="container">
                              <div className="dlab-bnr-inr-entry">
                                   <h1>Shri Radha Rani Township Phase I</h1>
                                   {/* <!-- Breadcrumb Row --> */}
                                   <nav
                                        aria-label="breadcrumb"
                                        className="breadcrumb-row style-1"
                                   >
                                        <ul className="breadcrumb">
                                             <li className="breadcrumb-item">
                                                  <Link href="/">
                                                       <a>Home</a>
                                                  </Link>
                                             </li>
                                             <li
                                                  className="breadcrumb-item active"
                                                  aria-current="page"
                                             >
                                                  Project Details
                                             </li>
                                        </ul>
                                   </nav>
                                   {/* <!-- Breadcrumb Row End --> */}
                              </div>
                         </div>
                    </div>
                    {/* <!-- Banner End --> */}

                    {/* <!-- Project Details --> */}
                    <section className="content-inner-2 mb-4">	
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-3 col-lg-4 m-b30">
                                        <ProjectsMenu />
                                   </div>
                                   <div className="col-xl-9 col-lg-8">
                                        <div className="dlab-media m-b30 rounded-md">
                                             <img
                                                  src="images/blog/default/thum1.jpg"
                                                  alt=""
                                             />
                                        </div>
                                        <div className="dlab-content">
                                             <div className="m-b40">
                                                  <h3>Web Development</h3>
                                                  <p>
                                                       Lorem Ipsum is simply
                                                       dummy text of the
                                                       printing and typesetting
                                                       industry. Lorem Ipsum has
                                                       been the industry's
                                                       standard dummy text ever
                                                       since the 1500s, when an
                                                       unknown printer took a
                                                       galley of type and
                                                       scrambled it to make a
                                                       type specimen book. It
                                                       has survived not only
                                                       five centuries, but also
                                                       the leap into electronic
                                                       typesetting, remaining
                                                       essentially unchanged. It
                                                       was popularised in the
                                                       1960s with the release of
                                                       Letraset sheets
                                                       containing Lorem Ipsum
                                                       passages, and more
                                                       recently with desktop
                                                       publishing software like
                                                       Aldus PageMaker including
                                                       versions of Lorem Ipsum.
                                                  </p>
                                             </div>
                                             <div className="row">
                                                  <div className="col-lg-12">
                                                       <h3>
                                                            How You Start Web
                                                            Development ?
                                                       </h3>
                                                       <p>
                                                            Lorem Ipsum is
                                                            simply dummy text of
                                                            the printing and
                                                            typesetting
                                                            industry. Lorem
                                                            Ipsum has been the
                                                            industry's standard
                                                            dummy text ever
                                                            since the 1500s,
                                                            when an unknown
                                                            printer took a
                                                            galley.
                                                       </p>
                                                       <ul className="list-check style-1 primary">
                                                            <li>
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing.
                                                            </li>
                                                            <li>
                                                                 Lorem Ipsum has
                                                                 been the
                                                                 industry's
                                                                 standard dummy
                                                                 text ever.
                                                            </li>
                                                            <li>
                                                                 when an unknown
                                                                 printer took a
                                                                 galley of type
                                                                 and scrambled.
                                                            </li>
                                                            <li>
                                                                 It has survived
                                                                 not only five
                                                                 centuries, but
                                                                 also the leap.
                                                            </li>
                                                            <li>
                                                                 Recently with
                                                                 desktop
                                                                 publishing
                                                                 software like
                                                                 Aldus
                                                                 PageMaker.
                                                            </li>
                                                            <li>
                                                                 Lorem Ipsum is
                                                                 simply dummy
                                                                 text of the
                                                                 printing
                                                                 industry.
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>

				{/* { Project Aminities } */}

				<section className="content-inner bg-gray">
                         <div className="container">
                              <div className="section-head style-3 text-center">
                                   <h2 className="title">World Class Aminities</h2>
                                   <div className="dlab-separator style-2 bg-primary"></div>
							<Aminities />
                              </div>
					</div>
				</section>

                    {/* <!-- Gallerty --> */}
                    <section className="content-inner bg-white">
                         <div className="container">
                              <div className="section-head style-3 text-center">
                                   <h2 className="title">Project Gallery</h2>
                                   <div className="dlab-separator style-2 bg-primary"></div>
                              </div>

                              <SimpleReactLightbox>
                                   <SRLWrapper>
                                        <div className="clearfix">
                                             <ul
                                                  id="masonry"
                                                  className="row"
                                                  data-column-width="3"
                                             >
                                                  {projects.map((item) =>
                                                       
                                                            <>
                                                                 <li
                                                                      className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                                                                      data-wow-duration="2s"
                                                                      data-wow-delay="0.1s"
                                                                 >
                                                                      <div className="dlab-box  style-3 m-b30">
                                                                           <div className="dlab-media ">
                                                                                {
                                                                                     item.img
                                                                                }
                                                                           </div>
                                                                           {/* <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                By <a href="javascript:void(0);">{item.author}</a>
                              </p>
                                </div> */}
                                                                      </div>
                                                                 </li>
                                                            </>
                                                       ) }
                                             </ul>
                                        </div>
                                   </SRLWrapper>
                              </SimpleReactLightbox>
                         </div>
                    </section>
               </div>
               <Footer3 />
          </>
     );
}

export default SRRTownship1;
