import { Outlet } from "react-router-dom";
// import { ReactComponent as GitLogo } from '../../assets/logo.svg'
import logo from '../../assets/logo.png';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";

const Navigation = ({background}) => {
    return (
        <div>
            <NavigationContainer background={background}>         
                <LogoContainer to='/'>
                    <img src={logo} alt="" />
                </LogoContainer>
                <NavLinks>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/search'>SEARCH</NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </div>
        )
}

export default Navigation;