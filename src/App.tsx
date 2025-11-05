import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Layout, { Content } from "./components/Layout";

const Root = styled.main`
    flex: 1;
    width: 100%;
`;

export default function App() {
    return (
        <Root>
            <Navbar />

            <Content>
                <Routes>
                    <Route path="/" element={<Layout>home</Layout>} />
                </Routes>
            </Content>
        </Root>
    );
}
