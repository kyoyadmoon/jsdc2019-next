import styled from 'styled-components';
import HyperLink from './Link';
import { LINKS } from '../constant';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  return (
    <Main>
      <Logo href="/">
        <img src="/static/images/logo/logo.svg" width="100" />
      </Logo>
      <LinkList>
        {LINKS.map((link, i) => (
          <HyperLink key={i} href={link.href} router={router}>
            {link.name}
          </HyperLink>
        ))}
      </LinkList>
    </Main>
  );
};

export default Nav;

const Main = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    height: 60px;
    padding: 0 15px;
    color: ${props => props.theme.colors.white};
`;

const LinkList = styled.div`
    display: flex;
    margin-left: 7px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
