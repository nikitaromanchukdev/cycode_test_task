import { Routes, Route } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { FullWidthSection } from './shared/ui/PageLayout/Layout';
import { useCurrentPageTitle } from './utils/hooks/useCurrentPageTitle';
import { appRoutes } from './app/routes/routes';
import { Suspense } from 'react';
import Header from './widgets/Header/ui/Header';

const Root = styled(FullWidthSection).attrs({ as: 'main' })<{ $bg?: string }>`
    flex: 1;
    width: 100%;

    ${({ $bg }) => $bg && `background-color: ${$bg};`}
`;

export default function App() {
    const theme = useTheme();
    useCurrentPageTitle();

    return (
        <>
            <Header />

            <Root $bg={theme.colors.backgroundDark}>
                <Suspense fallback={<div>loading</div>}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </Suspense>
            </Root>
        </>
    );
}
