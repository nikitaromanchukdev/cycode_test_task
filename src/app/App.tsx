import { Suspense } from 'react';
import Header from '../widgets/Header/ui/Header';
import { GlobalStyle } from '../styles/global';

import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/routes';
import styled from 'styled-components';
import StoreProvider from './providers/store/StoreProvider';
import { createLocalStorageMiddleware, loadMiddlewareState } from './providers/store/middleware';
import { LoadingOverlay } from '@/shared/ui/LoadingOverlay/LoadingOverlay';

const App: React.FC = () => {
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

                <Root>
                    {/* TODO */}
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
