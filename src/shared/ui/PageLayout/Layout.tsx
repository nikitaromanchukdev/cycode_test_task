import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const FullWidthSection = styled.section<{ $bg?: string }>`
    width: 100%;
    background-color: ${({ $bg }) => $bg || 'transparent'};
`;

export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const LayoutWrapper = styled(Content)`
    display: flex;
    flex-direction: column;

    min-height: 100vh;
`;

interface LayoutProps {}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
