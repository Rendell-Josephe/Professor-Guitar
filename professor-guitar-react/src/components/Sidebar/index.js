import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} >About</SidebarLink>
                    <SidebarLink to='scales' onClick={toggle} >Scales</SidebarLink>
                    <SidebarLink to='chords' onClick={toggle} >Chords</SidebarLink>
                    <SidebarLink to='music-theory' onClick={toggle} >Music Theory</SidebarLink>
                    <SidebarLink to='picking' onClick={toggle} >Picking Techniques</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle} >Sign Up</SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to ='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
