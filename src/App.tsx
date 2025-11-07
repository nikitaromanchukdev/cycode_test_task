import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Content } from "./components/Layout";
import { useCurrentPageTitle } from "./utils/hooks/useCurrentPageTitle";
import { appRoutes } from "./routes/routes";
import { Suspense } from "react";

const Root = styled.main`
    flex: 1;
    width: 100%;
`;

export default function App() {
    useCurrentPageTitle();

    return (
        <Root>
            <Navbar />

            <Content>
                <Suspense fallback={<div>loading</div>}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </Suspense>
            </Content>
        </Root>
    );
}
