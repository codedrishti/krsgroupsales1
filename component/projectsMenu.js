import React, { Component } from "react";
import Link from "next/link";

class ProjectsMenu extends Component {

     render() {
          return (
               <>
                    <aside className="side-bar sticky-top">
                         <div className="widget_nav_menu m-b40">
                              <ul id="projectMenuName">
                                   <Link href="/projects">
                                        <li>
                                             <a href="">ALL PROJECTS</a>{" "}
                                        </li>
                                   </Link>
                                   <Link href="/brij-rani-kutir-township">
                                        <li>
                                             <a href="">
                                                  BRIJ RANI KUTIR TOWNSHIP
                                             </a>
                                        </li>
                                   </Link>
                                   <Link href="/maa-kaila-devi-township">
                                        <li>
                                             <a href="">
                                                  MAA KAILA DEVI TOWNSHIP
                                             </a>{" "}
                                        </li>
                                   </Link>
                                   <Link href="/shri-radha-rani-township">
                                        <li>
                                             <a href="">
                                                  SHRI RADHA RANI TOWNSHIP
                                             </a>{" "}
                                        </li>
                                   </Link>
                                   <Link href="/shri-radha-rani-township-phase-1">
                                        <li>
                                             <a href="/shri-radha-rani-township-phase-1">
                                                  SHRI RADHA RANI TOWNSHIP PHASE
                                                  1
                                             </a>{" "}
                                        </li>
                                   </Link>
                              </ul>
                         </div>
                         <div className="widget widget_bunch_brochures">
                              <div className="download-file">
                                   <h4 className="title">Get your brochures</h4>
                                   <ul>
                                        <li>
                                             <a href="services-details-3">
                                                  <div className="text">
                                                       Company Brochures
                                                  </div>
                                                  <i className="fa fa-download"></i>
                                             </a>
                                        </li>
                                        <li>
                                             <a href="services-details-3">
                                                  <div className="text">
                                                       Company Info
                                                  </div>
                                                  <i className="fa fa-download"></i>
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </aside>
               </>
          );
     }
}

export default ProjectsMenu;
