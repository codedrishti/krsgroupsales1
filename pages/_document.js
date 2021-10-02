import Document, { Html, Head, Main, NextScript } from 'next/document';
// require('dotenv').config();


class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
               <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon.png"
               />
          </Head>
        <body>
          <Main />
          <NextScript />
               <a
                    href="https://api.whatsapp.com/send?phone=919873632575&text=Hello,%20I%20need%20to%20discuss%20something%20about%20the%20property."
                    target="_blank"
                    className="bt-buy-now theme-btn"
               >
                    <i className="fab fa-whatsapp"></i>
                    <span>Chat</span>
               </a>
               <a
                    href="mailto:info@krsgrouptownship.com?subject=KRS Group Township - Share the property details."
                    target="_blank"
                    className="bt-support-now theme-btn"
               >
                    <i className="fa fa-envelope" />
                    <span>Email</span>
               </a>
               <a href="#top">
                    <button
                         className="scroltop icon-up"
                         type="button"
                         style={{ display: "inline-block" }}
                    >
                         <i className="fa fa-arrow-up" />
                    </button>
               </a>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
