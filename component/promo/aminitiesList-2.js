import React, {useState, useEffect} from "react";

const aminitiesData = [
  {
    title: "Park",
    icon: "fa fa-tree",
  },
  {
    title: "Temple",
    icon: "fa fa-om",
  },
  {
    title: "Paved Road",
    icon: "fa fa-road",
  },
  {
    title: "School",
    icon: "fa fa-school",
  },
  {
    title: "Shops",
    icon: "fa fa-shopping-basket",
  },
  {
    title: "STP Plant",
    icon: "fa fa-water",
  },
  {
    title: "Hospital",
    icon: "fa fa-hospital-o",
  },
  {
    title: "24/7 Water Supply",
    icon: "fa fa-hand-holding-water",
  },
  {
    title: "Electricity",
    icon: "fa fa-lightbulb-o",
  },
  {
    title: "24x7 Security",
    icon: "fa fa-shield-alt",
  },
  {
    title: "Gated Community",
    icon: "fa fa-house-user",
  },
  {
    title: "Fountain",
    icon: "fa fa-bullseye",
  },
  {
    title: "Solar Lighting",
    icon: "fa fa-solar-panel",
  },
  {
    title: "Community Center",
    icon: "fa fa-users",
  },
  {
    title: "Rain Water Harvesting",
    icon: "fa fa-cloud-rain",
  },
];

function AminitiesList2() {
    
    const [aminities, setAminities] = useState([]);
    
    useEffect(() => {
        setAminities(aminitiesData);
      }, []);

  return (
    <>
      {/* <!-- About Us --> */}

      {aminities.map((item) => 
          <>
        <div
          className="col-lg-4 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="col-lg-12 col-md-12">
            <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
              <div className="icon-bx-sm bg-white">
                <a
                  href="javascript:void(0);"
                  className="icon-cell text-primary"
                >
                  <i className={item.icon}></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title mt-25">{item.title}</h4>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}

export default AminitiesList2;
