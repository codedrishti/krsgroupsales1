import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
     console.log("Captcha value:", value);
}

function AssociateForm() {
     return (
          <>
               <div className="content-inner">
                    <div className="container">
                         <div className="row align-items-center">
                              <div
                                   className="col-xl-6 m-b30 wow fadeInLeft"
                                   data-wow-duration="2s"
                                   data-wow-delay="0.2s"
                              >
                                   <div className="dlab-media">
                                        <img
                                             src="images/about/img3.png"
                                             className="move-3"
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div
                                   className="col-xl-6 m-b30 wow fadeInRight"
                                   data-wow-duration="2s"
                                   data-wow-delay="0.4s"
                              >
                                   <form
                                        className="dlab-form dzForm"
                                        method="POST"
                                        action="script/contact.php"
                                   >
                                        <div className="dzFormMsg"></div>
                                        <input
                                             type="hidden"
                                             className="form-control"
                                             name="dzToDo"
                                             value="Contact"
                                        />
                                        <div className="row">
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="name"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="First Name"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="lname"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Last Name"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="email"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Email Address"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="mobile"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Phone No."
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-12">
                                                  <div className="input-group">
                                                       <input
                                                            name="subject"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Subject"
                                                            value="I want to become an associate with KRS Group Township."
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="state"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="State"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-6">
                                                  <div className="input-group">
                                                       <input
                                                            name="pincode"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="pincode"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-12">
                                                  <div className="input-group">
                                                       <input
                                                            name="address"
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Complete address"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="col-sm-12">
                                                  <div className="input-group">
                                                       <textarea
                                                            name="message"
                                                            required
                                                            className="form-control"
                                                            placeholder="Message"
                                                       ></textarea>
                                                  </div>
                                             </div>

                                             <div className="col-sm-12">
                                                  <div className="input-group">
                                                       <div
                                                            className="g-recaptcha"
                                                            data-sitekey="6LfsnJ0cAAAAAIxqkMBUX7XZNMMMxsO0jOz333Fi"
                                                            data-callback="verifyRecaptchaCallback"
                                                            data-expired-callback="expiredRecaptchaCallback"
                                                       ></div>
                                                       <input
                                                            className="form-control d-none"
                                                            style={{
                                                                 display: "none",
                                                            }}
                                                            data-recaptcha="true"
                                                            required
                                                            data-error="Please complete the Captcha"
                                                       />
                                                  </div>
                                             </div>
                                             <ReCAPTCHA
                                                  sitekey="6LfsnJ0cAAAAAJZt-Ni9UTxzmNcsUyEOKIFo3x9b"
                                                  onChange={onChange}
                                             />
                                             <div className="col-sm-12 m-2">
                                                  <button
                                                       name="submit"
                                                       type="submit"
                                                       value="Submit"
                                                       className="btn btn-corner gradient btn-primary"
                                                  >
                                                       Submit Now
                                                  </button>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default AssociateForm;
