import styled from 'styled-components';
import Link from 'next/link';

const HyperLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    padding: 0 20px;
    line-height: 60px;
    transition: color 0.2s ease-in-out;
    word-break: keep-all;
    color: ${props => props.router === props.href ? props.theme.colors.primary : props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
`;

export default ({ router, className, href, children }) => {
  return (
    <Link href={href}>
      <HyperLink className={className} router={router}>
        {children}
      </HyperLink>
    </Link>
  );
};
