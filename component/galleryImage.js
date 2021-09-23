// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function GalleryImage() {
  const gImage = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic1.jpg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic12.jpg",
      img: (
        <Image
          src="/images/gallery/pic12.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic15.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic3.jpg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic4.png"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic5.jpg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic6.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "branding", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic7.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic10.png"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic18.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic14.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/gallery/pic4.jpg",
      img: (
        <Image
          src="/images/gallery/pic17.jpeg"
          layout="responsive"
          width={400}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(gImage);
  }, []);
  
  return (
        <>
            <SimpleReactLightbox>
                <SRLWrapper >
                    <div className="clearfix">
                        <ul id="masonry" className="row" data-column-width="6">
                          {projects.map((item) =>
                            
                              <>
                                <li
                                  className="card-container col-lg-3 col-md-4 col-sm-6 web_design wow fadeInUp"
                                  data-wow-duration="2s"
                                  data-wow-delay="0.1s"
                                >
                                    <div className="dlab-box style-1 m-b30">
                                        <div className="dlab-media">
                                            <a href=""> {item.img}</a> 
                                        </div>
                                    </div>
                                </li>
                              </>
                            
                          )}
                        </ul>
                    </div>
                </SRLWrapper >      
            </SimpleReactLightbox>  
        </>
  );
}

export default GalleryImage;
