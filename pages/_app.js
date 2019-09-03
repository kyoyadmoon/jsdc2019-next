import App, { Container } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Nav from '~/components/nav';
import theme from '~/config/styledComponentsTheme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.fontFamily};
    background: ${theme.colors.bg};
    width: 100%;
    height: 100%;
    font-size: ${theme.font.fontSize};
    color: ${theme.colors.white};
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
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Nav route={router.route} />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default Main;
