import styled from 'styled-components';
import Link from 'next/link';

const HyperLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export default ({ className, href, children }) => (
  <Link href={href}>
    <HyperLink className={className}>{children}</HyperLink>
  </Link>
);
