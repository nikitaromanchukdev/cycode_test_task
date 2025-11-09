import styled from 'styled-components';
import { PageContainer, PageTitle, Content } from './PageLayout.styles';
import { ComponentProps, forwardRef } from 'react';

type PageContainerProps = ComponentProps<typeof PageContainer>;
interface PageLayoutProps extends PageContainerProps {
    title?: string;
    children: React.ReactNode;
}
export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>((props, ref) => {
    const { title, children, className, ...nativeProps } = props;

    return (
        <PageContainer ref={ref} className={className} {...nativeProps}>
            {title && (
                <TitleSection>
                    <PageTitle>{title}</PageTitle>
                </TitleSection>
            )}

            {children}
        </PageContainer>
    );
});
PageLayout.displayName = 'PageLayout';

const TitleSection = styled(Content).attrs({ as: 'section' })`
    padding: ${({ theme }) => theme.utils.spacing(20)} 0;
`;
