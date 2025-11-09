import { PageContainer, PageTitle } from './PageLayout.styles';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
    return (
        <PageContainer>
            <PageTitle>{title}</PageTitle>
            {children}
        </PageContainer>
    );
};
