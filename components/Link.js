import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HyperLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    padding: 0 15px;
    line-height: 50px;
    transition: color 0.2s ease-in-out;
    word-break: keep-all;
    color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
`;

export default ({ className, href, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <HyperLink className={className} active={router.asPath === href}>
        {children}
      </HyperLink>
    </Link>
  );
};
