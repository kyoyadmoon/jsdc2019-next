import styled from 'styled-components';

import Link from './Link';
import Img from './Img';

const LINKS = [
  { href: '/', name: '首頁' },
  { href: '/about', name: '關於我們' },
  { href: '/venue', name: '會場' },
  { href: '/speaker', name: '講者' },
  { href: '/agenda', name: '議程' },
  { href: '/sponsors', name: '合作夥伴' },
  { href: '/team', name: '工作團隊' },
  { href: '/conduct', name: '行為準則' },
];

const Main = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 60px;
  padding: 0 15px;
  color: #e4e4e4;
`;
const LinkList = styled.div`
  display: flex;
  margin-left: 7px;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`;
const StyledLink = styled(Link)`
  padding: 0 20px;
  line-height: 60px;
  transition: color .2s ease-in-out;
  word-break: keep-all;

  &:hover {
    color: #ffc825;
  }
`;

const Nav = () => {
  return (
    <Main>
      <Logo href='/'><Img src='/static/images/logo.svg' width='100'/></Logo>
      <LinkList>
        {LINKS.map((link, i) => (
          <StyledLink key={i} href={link.href}>{link.name}</StyledLink>
        ))}
      </LinkList>
    </Main>
  );
};

export default Nav;
