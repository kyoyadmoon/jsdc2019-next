import styled from 'styled-components';

export default () => (
  <Container>
    <LogoImgBox>
      <LogoImg src="https://2019.jsdc.tw/images/official/jsdcmain-line.png" />
      {/* <LogoImg animation src="https://2019.jsdc.tw/images/official/jsdcmain.png" /> */}
    </LogoImgBox>
    <Title>The 8th JavaScript Developer Annual Conference in Taiwan</Title>
    <HighlightSpan>JSDC 2019活動</HighlightSpan>
    <HighlightSpan>2019/9/28 (六) 技術工作坊：「 JavaScript 新技術的入門與導入」</HighlightSpan>
    <HighlightSpan>2019/10/26 (六) 主年會：「 JavaScript 穩定之後，然後呢？」</HighlightSpan>
    <Division />
    <DescriptionSpan>JavaScript 近年從 ES6 的出世到前端框架的競逐，帶動了一連串的革命，</DescriptionSpan>
    <DescriptionSpan>也同時在後端、行動裝置，甚至是 IoT，機器學習等領域大放異彩。</DescriptionSpan>
    <DescriptionSpan>如名言「任何可用 JavaScript 編寫的應用程序，最終將用 JavaScript 編寫」
      </DescriptionSpan>
    <HighlightSpan>我們期待 JavaScript 的未來！</HighlightSpan>
    <Button>BUY NOW</Button>
  </Container>
);

const Container = styled.div`
  padding: 60px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImgBox = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const LogoImg = styled.img`
  max-width: 1440px;
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  text-size-adjust: 100%;
  font-weight: 700;
  margin-top: 0;
`;

const HighlightSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  line-height: 35px;
`;

const DescriptionSpan = styled.span`
  font-size: 16px;
  line-height: 35px;
`;

const Division = styled.div`
  height: 15px;
`;

const Button = styled.button`
  margin-top: 50px;
  width: 50%;
  height: 44px;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  letter-spacing: 0.125em;
  font-weight: 400;
  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.bg};
    transition: color .2s ease-in-out,border-color .2s ease-in-out;
  }
`;
