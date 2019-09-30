import App, { Container } from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import theme from '~/config/theme';

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

const PageContainer = styled.div`
  min-height: 95vh;
  padding-top: 100px;
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
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle/>
          <Nav/>
          <PageContainer>
            <Component {...pageProps}/>
          </PageContainer>
          <Footer/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Main;
