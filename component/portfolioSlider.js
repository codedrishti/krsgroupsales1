import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";


const pData = [
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic31.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic8.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic22.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic26.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic23.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic24.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic16.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic29.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
  {
    imgSrc: (
        <Image
          src="/images/portfolio/pic10.jpg"
          layout="responsive"
          layout="fill"
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
        />
    ),
    title: "Rohit Sharma",
  },
];

function PortfolioSlider() {
  const [asd, setAsd] = useState();

  const [portfolioImg, setPortfolioImg] = useState([]);

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

  useEffect(() => {
    setPortfolioImg(pData);
  }, []);

  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {portfolioImg.map((item) => (
            <>
              <div
                className="item wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                {item.imgSrc}
              </div>
            </>
          ))}
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default PortfolioSlider;
