import React, { Component } from "react";
import Head from "next/head";
import FBPixelCode from "../component/fbPixel";

class FBPixel extends Component {

     constructor(props) {
          super(props);
          this.state = {
             ...props
          }
          //...
      }

     render() {

          const data = this.state.pixelType;
          //console.log(data);
          
          if (data === "BrijranikutirTq") {
               return (
                    <>
                         <Head>
                              {/* <!-- Facebook Pixel Code --> */}
                              <FBPixelCode />
                              <script
                                   async
                                   dangerouslySetInnerHTML={{
                                        __html: `
                                   !function(f,b,e,v,n,t,s)
                                   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                   n.queue=[];t=b.createElement(e);t.async=!0;
                                   t.src=v;s=b.getElementsByTagName(e)[0];
                                   s.parentNode.insertBefore(t,s)}(window, document,'script',
                                   'https://connect.facebook.net/en_US/fbevents.js');
                                   fbq('init', '4346283808795715');
                                   fbq('track', 'Lead', {content_category: "Page", content_type: "Real Estate", content_name: "Brij Rani Kutir - Tq"});
                                   `,
                                   }}
                              />
                              <noscript>
                                   <img
                                        height={1}
                                        width={1}
                                        style={{"display":"none"}}
                                        src="https://www.facebook.com/tr?id=4346283808795715&ev=PageView&noscript=1"
                                   />
                              </noscript>
                              {/* <!-- End Facebook Pixel Code --> */}
                         </Head>
                    </>
               );
          }else if(data === "SRRTownshipTq") {
               return (
                    <>
                         <Head>
                              {/* <!-- Facebook Pixel Code --> */}
                              <FBPixelCode />
                              <script
                                   async
                                   dangerouslySetInnerHTML={{
                                        __html: `
                                   !function(f,b,e,v,n,t,s)
                                   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                   n.queue=[];t=b.createElement(e);t.async=!0;
                                   t.src=v;s=b.getElementsByTagName(e)[0];
                                   s.parentNode.insertBefore(t,s)}(window, document,'script',
                                   'https://connect.facebook.net/en_US/fbevents.js');
                                   fbq('init', '4346283808795715');
                                   fbq('track', 'Lead', {content_category: "Page", content_type: "Real Estate", content_name: "Shri Radha Rani Township - Tq"});
                                   `,
                                   }}
                              />
                              <noscript>
                                   <img
                                        height={1}
                                        width={1}
                                        style={{"display":"none"}}
                                        src="https://www.facebook.com/tr?id=4346283808795715&ev=PageView&noscript=1"
                                   />
                              </noscript>
                              {/* <!-- End Facebook Pixel Code --> */}
                         </Head>
                    </>
               );
          }else {
               return (
                    <>
                         <Head>
                              {/* <!-- Facebook Pixel Code --> */}
                              <FBPixelCode />
                              {/* <!-- End Facebook Pixel Code --> */}
                         </Head>
                    </>
               );
          }
     }
}

export default FBPixel;
