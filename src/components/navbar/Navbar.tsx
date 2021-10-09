import React from "react";
import { Nav, NavMenu, NavBtn, Bars } from "./NavbarElements";
import Link from "./Navlink";
import NavLink from "./Navlink"
import { SidebarProps } from "../props";
import Image from "next/image";
import logo from "../../../public/logo.png";
function Navigation(sideBarProps:SidebarProps) {
  const handleSelect = (eventKey: any) => alert(`selected ${eventKey}`);
  
  return (
    <>
      <Nav>
        <Link href="/">
        <Image
            src={logo}
            width="250"
            height="80"
            alt="Logo of Visit Madh Island"
          />       
           </Link>
        <Bars onClick={sideBarProps.toggleSidebar} />
        <NavMenu>
          <NavLink  href="/recee">Recee</NavLink>
          <NavLink href="/places">Film Location</NavLink>
          <NavLink href="/shoot-permissions">Shoot Permissions</NavLink>
          <NavLink href="/places">Event Venues</NavLink>
          <NavLink href="/places">Villas & Bugalows</NavLink>
          <NavLink href="#">Search</NavLink>
          <NavLink href="/history">Profile</NavLink>
    
        </NavMenu>
        <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navigation;
