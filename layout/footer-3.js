import Link from "next/link";


function Footer3() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-3" id="footer" style={{"backgroundImage":"url(images/background/bg11.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<p>Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Site Map</h5>
							<ul>
								<li><Link href="/"><a>Home</a></Link></li>
								<li><Link href="/about"><a>About Us</a></Link></li>
								<li><Link href="/projects"><a>Projects</a></Link></li>
								<li><Link href="/contact"><a>Contact</a></Link></li>
								<li><Link href="/become-associate"><a>Join as Associate</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our Projects</h5>
							<ul>
							<li><Link href="/brij-rani-kutir-township">
								<a>Brij Rani Kutir</a></Link></li>
							<li><Link href="/maa-kaila-devi-township"><a>Maa Kaila Devi</a></Link></li>
                                   <li><Link href="/shri-radha-rani-township"><a>Shri Radha Rani</a></Link></li>
                                   <li><Link href="/shri-radha-rani-township-phase-1">
								<a>Shri Radha Rani Phase-I</a>
							</Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services style-1">
						   <h5 className="footer-title">Other links</h5>
							<ul>
								<li><Link href="/faq"><a>FAQ</a></Link></li>
								<li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
								<li><Link href="/terms-and-conditions"><a>Terms & Conditions</a></Link></li>
								<li><Link href="/contact"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget widget_getintuch">
							<h5 className="footer-title">Contact Us</h5>
							<ul>
								<li>
									<i className="fa fa-phone gradient"></i>
									<span><a className="text-white" href="tel:07550400495">+91 7550-400-495</a>
									<br/><a className="text-white" href="tel:09873632575">+91 98-7363-2575</a></span> 
								</li>
								<li>
									<i className="fa fa-envelope gradient"></i> 
									<span>info@krsgrouptownship.com <br/>krsgrouptownship@gmail.com</span>
								</li>
								<li>
									<i className="fa fa-map-marker gradient"></i>
									<span>15/1, Main Mathura Road, Faridabad, HRY, IND 121003</span>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
		</div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://krsgrouptownship.com/" target="_blank">KRS Group Township</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer3;