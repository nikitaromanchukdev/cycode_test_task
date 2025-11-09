import React, { Suspense } from 'react';
import Header from '../widgets/Header/ui/Header';
import { GlobalStyle } from '../styles/global';

import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/routes';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />

            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    {appRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
