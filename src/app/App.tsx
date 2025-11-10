import { Suspense } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { LoadingOverlay } from '@/shared/ui';
import { useCurrentPageTitle } from '@/shared/lib';
import { GlobalStyle } from '@/styles/global';
import Header from '../widgets/Header/ui/Header';
import StoreProvider from './providers/store/StoreProvider';
import { createLocalStorageMiddleware, loadMiddlewareState } from './providers/store/middleware';
import { Loader } from './providers/Loader';
import { appRoutes } from '@/shared/providers';

const App: React.FC = () => {
    useCurrentPageTitle();

    const localStorageMiddleware = createLocalStorageMiddleware({
        key: 'store',
        fields: ['subscription'],
    });

    const middleware = [localStorageMiddleware];

    const initialState = loadMiddlewareState(middleware);

    return (
        <StoreProvider initialState={initialState} middleware={middleware}>
            <Suspense fallback={<LoadingOverlay fullscreen />}>
                <GlobalStyle />
                <Header />
                <Loader />

                <Root>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </Root>
            </Suspense>
        </StoreProvider>
    );
};

export default App;

const Root = styled.main``;
