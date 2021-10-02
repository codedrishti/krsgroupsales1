import React, {useState} from "react";

const AminitiesList = () => {
    const [open, setOpen] = useState("p2");

  return (
    <>
      
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div
            className={`${
              open === "p1"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p1")}
          >
            <div className="icon-bx-md radius bg-yellow shadow-yellow">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-office"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Park</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div
            className={`${
              open === "p2"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p2")}
          >
            <div className="icon-bx-md radius bg-red shadow-red">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-website"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Temple</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p3"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p3")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Paved Road</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p4"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p4")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">School</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p5"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p5")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Shops</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p6"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p6")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">STP Plant</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p7"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p7")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Hospital</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p8"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p8")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">OHT Plant</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p10"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p10")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Fountain</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p12"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p12")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Electricity</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p13"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p13")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">24x7 Security</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p14"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p14")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Gated Community</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p15"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p15")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">24/7 Water Supply</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p16"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p116")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Solar Lighting</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p17"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p17")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Community Center</h4>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-2 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div
            className={`${
              open === "p18"
                ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                : "icon-bx-wraper style-1 box-hover text-center m-b30"
            }`}
            onMouseOver={() => setOpen("p18")}
          >
            <div className="icon-bx-md radius bg-green shadow-green">
              <a href="javascript:void(0);" className="icon-cell">
                <i className="flaticon-pie-charts"></i>
              </a>
            </div>
            <div className="icon-content">
              <h4 className="dlab-title">Rain Water Harvesting</h4>
            </div>
          </div>
        </div>
    </>
  );
};

export default AminitiesList;