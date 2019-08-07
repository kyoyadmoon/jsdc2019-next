import styled from 'styled-components';
import Link from 'next/link';

import { assetPrefix } from '~/constant/globalConfig';

const HyperLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export default ({ className, href, children }) => (
  <Link href={`${assetPrefix}${href}`}>
    <HyperLink className={className}>{children}</HyperLink>
  </Link>
);
