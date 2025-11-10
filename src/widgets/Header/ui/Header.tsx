import logoMono from '@/assets/logo-mono.png';
import { useStore } from '@/app/providers'; // TODO
import { appRoutes } from '@/app/routes/routes'; // TODO
import { CompanyName, Logo, LogoImage, NavBar, NavLink, NavLinks } from './Header.styles';

const Header: React.FC = () => {
    const { companyName } = useStore();

    return (
        <NavBar>
            <Logo>
                <LogoImage width={40} height={40} src={logoMono} />

                <CompanyName>{companyName}</CompanyName>
            </Logo>

            <NavLinks>
                {appRoutes
                    .filter(route => route.showInNav)
                    .map(route => (
                        <NavLink key={route.path} to={route.path}>
                            {route.name}
                        </NavLink>
                    ))}
            </NavLinks>
        </NavBar>
    );
};

export default Header;
