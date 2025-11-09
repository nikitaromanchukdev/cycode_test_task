import styled from 'styled-components';
import { PageContainer, PageTitle, Content } from './PageLayout.styles';

interface PageLayoutProps {
    title?: string;
    children: React.ReactNode;
}
export const PageLayout: React.FC<PageLayoutProps> = props => {
    const { title, children } = props;

    return (
        <PageContainer>
            {title && (
                <TitleSection>
                    <PageTitle>{title}</PageTitle>
                </TitleSection>
            )}

            {children}
        </PageContainer>
    );
};

const TitleSection = styled(Content).attrs({ as: 'section' })`
    padding: ${({ theme }) => theme.utils.spacing(20)}px 0;
`;
