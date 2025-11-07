import styled, { useTheme } from 'styled-components';
import logo from '@/assets/logo-mono.png';
import { useRouteLabel } from '@/utils/hooks/useRouteLabel';
import { FullWidthSection, Content } from './Layout';
import { Logo } from './Logo';

export default function Navbar() {
    const theme = useTheme();

    const label = useRouteLabel();

    return (
        <Header $bg={theme.fn.withOpacity(theme.colors.darkCharcoal, 20)}>
            <Nav>
                <Logo src={logo} alt="Logo" />

                <PageTitle>{label}</PageTitle>
            </Nav>
        </Header>
    );
}

const Header = styled(FullWidthSection).attrs({ as: 'header' })``;

const PageTitle = styled.div`
    color: white;
`;

const Nav = styled(Content).attrs({ as: 'nav' })`
    height: 60px;

    display: flex;
    align-items: center;

    gap: 2rem;
`;
