import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 100vh;
`;

export const FullWidthSection = styled.section<{ bg?: string }>`
    width: 100%;
    background-color: ${({ bg }) => bg || "transparent"};
`;

export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

interface LayoutProps {}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
