import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

//image imports
import Logo from "../images/logo192.png";

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
        <NavbarBrand href="/">
          <div className="navbar__image">
            <img src={Logo} alt="white logo transp" width="25px" />
            <span>&nbsp;&nbsp;</span>
            TECH~SHIP
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/mission">
                <NavLink className="navbar__links">Mission</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink to="/" className="navbar__links">
                  Programs
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink to="/" className="navbar__links">
                  Donate
                </NavLink>
              </Link>
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
