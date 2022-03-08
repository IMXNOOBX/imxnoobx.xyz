// Credits to Brian Design: https://www.youtube.com/watch?v=Nl54MJDR2p8&t=0s
// GitHub briancodex: https://github.com/briancodex/react-navbar-v3
import React from "react";
import logo from "../../assets/icon.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  NavLinkA,
  NavBtnLink,
  NavIcon,
} from './NavbarElements';

export default function NavBar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <NavIcon src={logo} alt='logo' />
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>          
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLinkA href="https://docs.imxnoobx.xyz" activeStyle>
            Docs
          </NavLinkA>
          <NavLink to='/dashboard' activeStyle>
            Dashboard
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
}
