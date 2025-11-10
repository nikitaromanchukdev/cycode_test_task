import styled from 'styled-components';

export const PageContainer = styled.div`
    position: relative;
    min-height: calc(100vh - 81px);
`;

export const PageTitle = styled.h1`
    font-size: 2.5em;
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: center;
`;

export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
