import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import { useState } from "react";
import Link from "next/link";

function PrivacyPolicy() {
     const [open, setOpen] = useState("p2");
     return (
          <>
               <Header3 />
               <div className="page-content bg-white">
                    {/* <!-- Banner  --> */}
                    <div
                         className="dlab-bnr-inr style-1 bg-primary"
                         style={{
                              backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
                              backgroundSize: "cover, 200%",
                         }}
                    >
                         <div className="container">
                              <div className="dlab-bnr-inr-entry">
                                   <h1>Privacy Policy</h1>
                                   {/* <!-- Breadcrumb Row --> */}
                                   <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                                        <ul className="breadcrumb">
                                             <li className="breadcrumb-item">
                                                  <Link href="/">
                                                       <a>Home</a>
                                                  </Link>
                                             </li>
                                             <li className="breadcrumb-item active" aria-current="page">
                                                  Privacy Policy
                                             </li>
                                        </ul>
                                   </nav>
                                   {/* <!-- Breadcrumb Row End --> */}
                              </div>
                         </div>
                    </div>
                    {/* <!-- Banner End -->  */}

                    {/* <!-- Terms and Conditions --> */}
               </div>

               <section>
                    <div className="content-inner">
                         <div className="container">
                              <div className="row align-items-center">
                                   <p>
                                        At Krsgrouptownship.com, accessible from KRS Group Township, one of our main
                                        priorities is the privacy of our visitors. This Privacy Policy document contains
                                        types of information that are collected and recorded by krsgrouptownship.com and
                                        how we use it. If you have additional questions or require more information
                                        about our Privacy Policy, do not hesitate to contact us. This Privacy Policy
                                        applies only to our online activities and is valid for visitors to our website
                                        with regards to the information that they shared and/or collect on
                                        krsgrouptownship.com. This policy is not applicable to any information collected
                                        offline or via channels other than this website.
                                   </p>

                                   <p>
                                        <h4>Consent</h4>
                                        By using our website, you hereby consent to our Privacy Policy and agree to its
                                        terms.
                                   </p>

                                   <p>
                                        <h4>Information we collect</h4>
                                        The personal information that you are asked to provide, and the reasons why you
                                        are asked to provide it, will be made clear to you at the point we ask you to
                                        provide your personal information.
                                        <br />
                                        If you contact us directly, we may receive additional information about you such
                                        as your name, email address, phone number, the contents of the message and/or
                                        attachments you may send us, and any other information you may choose to
                                        provide.
                                        <br />
                                        When you register for an Account, we may ask for your contact information,
                                        including items such as name, company name, address, email address, and
                                        telephone number.
                                   </p>

                                   <p>
                                        <h4>How we use your information</h4>
                                        We use the information we collect in various ways, including to:
                                   </p>

                                   <ul>
                                        <li>- Provide, operate, and maintain our website</li>
                                        <li>- Improve, personalize, and expand our website</li>
                                        <li>- Understand and analyze how you use our website</li>
                                        <li>- Develop new products, services, features, and functionality</li>
                                        <li>- 
                                             Communicate you, either directly or through one of our partners, including
                                             for customer service, to provide you with updates and other information
                                             relating to the website, and for marketing and promotional purposes Send
                                             you emails
                                        </li>
                                        <li>- Find and prevent fraud</li>
                                   </ul>

                                   <p>
                                        <h4>Log Files</h4>
                                        krsgrouptownship.com follows a standard procedure of using log files. These files log
                                        visitors when they visit websites. All hosting companies do this and a part of
                                        hosting services' analytics. The information collected by log files includes
                                        internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                                        date and time stamp, referring/exit pages, and possibly the number of clicks.
                                        These are not linked to any information that is personally identifiable. The
                                        purpose of the information is for analyzing trends, administering the site,
                                        tracking users' movement on the website, and gathering demographic information
                                   </p>

                                   <p>
                                        <h4>Cookies and Web Beacons</h4>
                                        Like any other website, krsgrouptownship.com uses 'cookies'. These cookies are used to
                                        store information including visitors' preferences, and the pages on the website
                                        that the visitor accessed or visited. The information is used to optimize the
                                        users' experience by customizing our web page content based on visitors' browser
                                        type and/or other information.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <Footer3 />
          </>
     );
}

export default PrivacyPolicy;
