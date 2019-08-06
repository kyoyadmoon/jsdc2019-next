import { ServerStyleSheet } from 'styled-components';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const styleElement = sheet.getStyleElement();

    return { ...initialProps, styleElement };
  }

  renderGoogleTranslateElementScript = () => (
    <script dangerouslySetInnerHTML={{ __html:
      `function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'tw'},
      'google_translate_element');}`,
    }}/>
  );

  render() {
    return (
      <Html>
        <Head/>
        <link rel='stylesheet' type='text/css' href='static/normalize.css'/>
        <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'/>

        {this.props.styleElement}
        <body>
          <Main/>
          <NextScript/>
          {this.renderGoogleTranslateElementScript()}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
