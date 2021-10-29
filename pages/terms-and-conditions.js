import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import { useState } from "react";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function TermsAndConditions() {
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
                                   <h1>Terms & Conditions</h1>
                                   {/* <!-- Breadcrumb Row --> */}
                                   <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                                        <ul className="breadcrumb">
                                             <li className="breadcrumb-item">
                                                  <Link href="/">
                                                       <a>Home</a>
                                                  </Link>
                                             </li>
                                             <li className="breadcrumb-item active" aria-current="page">
                                                  Terms & Conditions
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
                                   <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li">
                                             1. Mention “realty” name during any communication with their prospective
                                             customers
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             2. Significant influence the closing of a sale as evidenced by accompanying
                                             the prospective customer to the project site, introducing the prospective
                                             customer to the sales team member/relationship manager and bringing the
                                             prospective customer to the “KRS Group“ Corporate Office for booking the
                                             unit
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             3. Communicate project related details to the prospective customer as
                                             provided/approved by the KRS Group, for instance with respect to payment
                                             time-lines, project completion dates, project details.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             4. Not misuse the KRS Group brand name for personal benefit. For example,
                                             KRS Group may have privilege offers which the channel partner must not take
                                             advantage of
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li"></ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             5. Abide by the KRS Group brand guidelines on advertising materials and
                                             clearly mention own company name and contact details on all marketing
                                             collaterals developed and/or used post taking necessary approval from the
                                             management of KRS Group.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             6. Not indulge in sharing of channel partner fee with customers / KRS Group
                                             personnel nor attract prospective customers through sharing of fee or
                                             similar offers
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             7. Not unnecessarily interfere with the day to day functioning of project
                                             sites, marketing and Sales offices, corporate office.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             8. Obtain registration under 143 Act and provide the CLU registration certificate
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             9. All communication materials /collaterals used by the channel partners
                                             have to be approved by the KRS Group.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             10. Rs.100/- Per Square yrd will provide as a commission based on Project
                                             specified sales slab after deducting TDS/Tax’s if any.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             11. Commission amount will be issued/released on completion of Registration
                                             (or) On Registration.
                                        </ListGroup.Item>
                                   </ListGroup>
                                   <h2>
                                        As part of the relationship with KRS Group the Channel Partner is expected to
                                        follow these actions in their role:
                                   </h2>
                                   <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li">
                                             1. Communicate and share details about KRS Group’s projects with
                                             prospective customers
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             2. Bring new market opportunities to KRS Group.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             3. Document each discussion with prospective customers.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             4. Influence the prospective customer to take quick, informed buying
                                             decisions.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             5. On conclusion of a deal, ensure that the appropriate booking form is
                                             filled by the customer completely and the customer is introduced to the
                                             channel partner’s sales team member.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             6. Follow up with customer to collect the dues with respect to payment plan
                                             agreed.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                             7. Keep the sales pipeline busy with a steady stream of new customers.
                                        </ListGroup.Item>
                                   </ListGroup>
                              </div>
                         </div>
                    </div>
               </section>

               <Footer3 />
          </>
     );
}

export default TermsAndConditions;
