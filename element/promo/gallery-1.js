import GalleryImage from "./gallery-images-1";

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
                </span>
                <span className="text-success">
                  Invest Your Money with Brij Rani Kutir Township!
                </span>
              </h4>
              <h3 className="text-dark">Limited time offer – Hurry up! Its time to Save More For Future.</h3>
              <a data-formkit-toggle="1721633c3f" href="https://fabulous-inventor-6977.ck.page/1721633c3f">
              <button type="button" className="btn btn-outline-success mt-25 move-2">
                Schedule Call Back - <span className="text-dark">Sure good deals!</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
