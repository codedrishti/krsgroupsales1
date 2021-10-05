import { Component } from "react"
import Head from "next/head"

export default class extends Component {
  render() {
    return (
      <>
        {
          // process.env.NODE_ENV === "production" && process.browser ?
          <Head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-LV7XLR84LN"></script>
            <script dangerouslySetInnerHTML={{
                     __html: `window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());

                              gtag('config', 'G-LV7XLR84LN');
                `}} />
          </Head> //: null
        }
      </>
    )
  }
}