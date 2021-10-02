import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import { useState } from "react";
import Link from 'next/link';


function TermsAndConditions() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Terms & Conditions</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
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
                    <p>Rohit Sharma</p>
               </div>
          </div>
     </div>

     </section>

     <Footer3/>
     
    </>
  )
}

export default TermsAndConditions;