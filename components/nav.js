import styled from 'styled-components';
import Link from './link';
import { LINKS } from '../constant';

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
const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const StyledLink = styled(Link)`
    padding: 0 20px;
    line-height: 60px;
    transition: color 0.2s ease-in-out;
    word-break: keep-all;
    &:hover {
        color: #ffc825;
    }
`;

const Nav = props => {
    console.log(props.router.asPath);
    return (
        <Main>
            <Logo href="/">
                <img src="/static/images/logo.svg" width="100" />
            </Logo>
            <LinkList>
                {LINKS.map((link, i) => (
                    <StyledLink key={i} href={link.href} router={props.router.asPath}>
                        {link.name}
                    </StyledLink>
                ))}
            </LinkList>
        </Main>
    );
};

export default Nav;
