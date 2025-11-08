import { CompanyName, Logo, LogoImage, NavBar, NavLink, NavLinks } from './Header.styles';
import logoMono from '@/assets/logo-mono.png';

const Header: React.FC = () => {
    return (
        <NavBar>
            <Logo>
                <LogoImage width={40} height={40} src={logoMono} />

                <CompanyName>Notascam LTD</CompanyName>
            </Logo>

            <NavLinks>
                <NavLink to="/">Home</NavLink>

                <NavLink to="/subscriptions">Subscribe</NavLink>
            </NavLinks>
        </NavBar>
    );
};

export default Header;
