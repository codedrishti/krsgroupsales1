import { useState } from "react";

function Accordion1() {
  const [activeDefault, setActiveDefault] = useState(0);
  const defaultAccordion = [
    {
      title: "Location of Project and Developer ?",
      text: "Property is located in Vrindavan near Shri Garun Govind Temple. Society is owned by KRS Home Developer Private Limited.",
      bg: "primary",
    },
    {
      title:
        "Registration/Approved by which authority ?",
      text: "Society is registered under CLU 143 (Change of Land Use) & by District Authority.",

      bg: "info",
    },
    {
      title: "Residential/Commercial ?",
      text: "Residential and commercial both property are available in our society.",

      bg: "success",
    },
    {
      title: "Payment Plans/ Schemes & Interest on EMI ?",
      text: "KRS Home Developers provide the 0% Interest rate EMI facilities to there clients for 15 to 35 month as well.",

      bg: "success",
    },
    {
      title:
        "Affordability, can I afford this property to buy ?",
      text: "We alway remember the budget of our customer during development of the new property or society. So our property can be owned by everyone who actually wants to buy.",

      bg: "success",
    },
    {
      title: "Registry (is possible on 50% payment?) & Allotments of property ?",
      text: "You can procced your property for registry after 50% or 100% payment of your property value. You will get your property allotment letter after your property booking amount.",

      bg: "success",
    },
  ];
  return (
    <>
      <div className="dlab-accordion" id="accordionFaq" defaultactivekey="0">
        {defaultAccordion.map((d, i) => (
          <div className="card" key={i}>
            <div
              eventkey={`${i}`}
              className="card-header"
              onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            >
              <h5 className="dlab-title">
                <a
                  href="javascript:void(0);"
                  className={`${activeDefault === i ? "" : "collapsed"}`}
                  onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                >
                  {" "}
                  {d.title}
                </a>
              </h5>
            </div>
            {/* <div className="collapse show" eventkey={`${i}`}>
                        <div className="card-body">
                            <p className="m-b0">{d.text}</p>
                        </div>
                    </div> */}
            <div
              className={`${
                activeDefault === i ? "collapsed show" : "collapsed"
              }`}
              eventkey={`${i}`}
              onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            >
              <div className="card-body">
                <p className="m-b0">{d.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordion1;
