import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Nav from '~/components/nav';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background: #222;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
`;

class Main extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Nav route={router.route} />
        <Component {...pageProps} />
        <GlobalStyle/>
      </Container>
    );
  }
}

export default Main;
