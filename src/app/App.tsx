import React, { Suspense } from 'react';
import Header from '../widgets/Header/ui/Header';
import { GlobalStyle } from '../styles/global';

import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/routes';
import styled from 'styled-components';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />

            <Root>
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
};

export default App;

const Root = styled.main``;
