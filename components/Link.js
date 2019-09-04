import styled from 'styled-components';
import Link from 'next/link';

const HyperLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${props => {
        return props.router === props.href ? '#ffc825' : '#e4e4e4';
    }};
`;

export default ({ router, className, href, children }) => {
    return (
        <Link href={href}>
            <HyperLink className={className} href={href} router={router}>
                {children}
            </HyperLink>
        </Link>
    );
};
