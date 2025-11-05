import styled from "styled-components";
import { FullWidthSection, Content } from "./Layout";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    height: 60px;

    gap: 1rem;
    display: flex;
    align-items: center;
`;

export default function Navbar() {
    return (
        <FullWidthSection bg="#0070f3">
            <Content>
                <Nav>
                    <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        About
                    </Link>
                </Nav>
            </Content>
        </FullWidthSection>
    );
}
