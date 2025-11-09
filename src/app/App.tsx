import React, { Suspense } from 'react';
import Header from '../widgets/Header/ui/Header';
import { GlobalStyle } from '../styles/global';

import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/routes';
import styled from 'styled-components';
import StoreProvider from './providers/store/StoreProvider';
import { createLocalStorageMiddleware, loadMiddlewareState } from './providers/store/middleware';

const App: React.FC = () => {
    const localStorageMiddleware = createLocalStorageMiddleware({
        key: 'store',
        fields: ['subscription', 'companyName'],
    });

    const middleware = [localStorageMiddleware];

    const initialState = loadMiddlewareState(middleware);

    return (
        <StoreProvider initialState={initialState} middleware={middleware}>
            <GlobalStyle />
            <Header />

            <Root>
                {/* TODO */}
                <Suspense fallback={<div>loading</div>}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </Suspense>
            </Root>
        </StoreProvider>
    );
};

export default App;

const Root = styled.main``;
