// Credits to Brian Design: https://www.youtube.com/watch?v=Nl54MJDR2p8&t=0s

import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkA,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLinkA href="https://docs.imxnoobx.xyz" onClick={toggle}>
            Docs
          </SidebarLinkA>
          <SidebarLink to="/dashboard" onClick={toggle}>
            Dashboard
          </SidebarLink>
          <SidebarLink to="/sign-up" onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/sign-in">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
