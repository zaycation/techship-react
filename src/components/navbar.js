import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { MdAccountCircle } from "react-icons/md";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed="top"
        className="navbar__component"
      >
        <NavbarBrand href="/">TECH~SHIP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/">Mission</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Program
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Pricing</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Curriculum</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/">Donate</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <MdAccountCircle size={32} color="white" />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
