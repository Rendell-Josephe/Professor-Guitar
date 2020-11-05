import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink 
} from './NavBarElements';

const isLoggedIn = true;
const Navbar = ({ toggle }) => {

    return (
    <>
       <Nav>
            <NavBarContainer>
                <NavLogo to='/'>Professor Guitar</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="scales">Scales</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="chords">Chords</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="music-theory">Music Theory</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="picking">Picking Techniques</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/signin">{isLoggedIn ? 'Sign out' : 'Sign In'}</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
    </>
    );
};

export default Navbar;
