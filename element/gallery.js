import GalleryImage from "../component/galleryImage";

function Gallery() {
  return (
    <>
      <section id="gallery" className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Gatted Society
            </h6>
            <h2 className="title">Take A Look At Our Society Development</h2>
          </div>

          <GalleryImage />

          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>
                <span className="text-danger">
                  How to Keep Your Money from Being Murdered!
                </span>{" "}
                <span className="text-success">
                  {" "}
                  Invest Your Money with Brij Rani Kutir Township!
                </span>
              </h4>
              <button type="button" className="btn btn-outline-success mt-25">
                Schedule Call Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
