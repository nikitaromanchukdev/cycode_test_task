import styled from "styled-components";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo-mono.png";
import { useRouteLabel } from "@/utils/hooks/useRouteLabel";
import { FullWidthSection, Content } from "./Layout";
import { Logo } from "./Logo";

export default function Navbar() {
    const location = useLocation();

    const label = useRouteLabel();

    return (
        <Header $bg="var(--outer-space)">
            <NavbarContent>
                <Logo src={logo} alt="Logo" />

                <Nav>
                    <PageTitle>{label}</PageTitle>
                </Nav>
            </NavbarContent>
        </Header>
    );
}

const Header = styled(FullWidthSection)``;

const Nav = styled.nav`
    position: relative;

    height: 60px;

    display: flex;
    align-items: center;
    gap: 2rem;
`;

const PageTitle = styled.div`
    color: white;
`;

const NavbarContent = styled(Content)`
    display: flex;
    align-items: center;

    gap: 2rem;
`;
