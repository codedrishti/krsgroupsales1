import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

const tData = [
     {
          name: "Kishor Sarkar",
          pic: (
               <Image
                    src="/images/testimonials/kishor-sarkar.jpg"
                    layout="responsive"
                    layout="fill"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
               />
          ),
          from: "Nagaland",
          review: "We had the good fortune to have buy a property in 2020 with Ideal Company and our real estate manager Riya Yadav, with an outstanding experience. Anyone in the market looking to buy a property needs to seriously consider Her and their company. You will be extremely happy you did.",
     },
     {
          name: "Daya Sankar",
          pic: (
               <Image
                    src="/images/testimonials/daya-sankar.jpg"
                    layout="responsive"
                    layout="fill"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
               />
          ),
          from: "Mumbai",
          review: "We were very satisfied from start of visiting their township. We had no complaints what so ever about the whole process. Ideal had the right realtor to help us. We are very pleased. They ideal always would call us to make sure everything is ok. I would definitely use ideal again.",
     },
     {
          name: "Pankaj Yadav",
          pic: (
               <Image
                    src="/images/testimonials/pankaj-yadav.jpg"
                    layout="responsive"
                    layout="fill"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
               />
          ),
          from: "Mathura",
          review: "I was extremely happy with their both township they recommended - Shri Radha Rani & Shri Radha Rani Township Phase 1. Both at best location with great aminities. I got a good deal on one time payment. I was extremely happy and would recommend KRS Group to everyone.",
     },
     {
          name: "Ravinder Singh",
          pic: (
               <Image
                    src="/images/testimonials/ravinder-singh.jpg"
                    layout="responsive"
                    layout="fill"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
               />
          ),
          from: "Bangalore",
          review: "KRS Group is very professional with communicating the process and great follow through. Offers on half/full payment plan and I procced property registry on same day. I will personally use The KRS Group in the future and highly recommend them to others.",
     },
     {
          name: "Goverdhan Agarwal",
          pic: (
               <Image
                    src="/images/testimonials/kunal-mishra.jpg"
                    layout="responsive"
                    layout="fill"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
               />
          ),
          from: "Hydrabad",
          review: "Riya and his team did an outstanding job. She was able to provide me a best deal for my dream place property in vrindavan and I am so happy. She did all the hard work and streamlined the entire process for us! We are so happy and will recommend to our friends and family!",
     },
];

function TestimonialSlider() {
     const [testimoni, setTestimoni] = useState([]);

     useEffect(() => {
          setTestimoni(tData);
     }, []);

     const [asd, setAsd] = useState();
     const settings = {
          dots: true,
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          dots: false,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          responsive: [
               {
                    breakpoint: 1320,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: false,
                         centerMode: false,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: false,
                         centerMode: false,
                    },
               },
          ],
     };
     const renderArrows = () => {
          return (
               <div className="owl-nav">
                    <div className="owl-prev" onClick={() => asd.slickPrev()}>
                         <i className="fa fa-arrow-left"></i>
                    </div>
                    <div className="owl-next" onClick={() => asd.slickNext()}>
                         <i className="fa fa-arrow-right"></i>
                    </div>
               </div>
          );
     };
     return (
          <>
               <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
                    <Slider ref={(c) => setAsd(c)} {...settings}>
                         {testimoni.map((item) => (
                              <>
                                   <div
                                        className="item wow fadeInUp"
                                        data-wow-duration="2s"
                                        data-wow-delay="0.6s"
                                   >
                                        <div className="testimonial-1">
                                             <div className="testimonial-text">
                                                  <p className="text-justify">
                                                       <q>{item.review}</q>
                                                  </p>
                                             </div>
                                             <div className="testimonial-detail">
                                                  <div className="testimonial-pic">
                                                       {item.pic}
                                                  </div>
                                                  <div className="clearfix">
                                                       <strong className="testimonial-name">
                                                            {item.name}
                                                       </strong>
                                                       <span className="testimonial-position">
                                                            {item.from}
                                                       </span>
                                                       <ul className="star-rating">
                                                            <li>
                                                                 <i className="fa fa-star fa-sm text-warning"></i>
                                                            </li>
                                                            <li>
                                                                 <i className="fa fa-star fa-sm text-warning"></i>
                                                            </li>
                                                            <li>
                                                                 <i className="fa fa-star fa-sm text-warning"></i>
                                                            </li>
                                                            <li>
                                                                 <i className="fa fa-star fa-sm text-warning"></i>
                                                            </li>
                                                            <li>
                                                                 <i className="fa fa-star fa-sm text-warning"></i>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </>
                         ))}
                    </Slider>
                    {renderArrows()}
               </div>
          </>
     );
}

export default TestimonialSlider;
