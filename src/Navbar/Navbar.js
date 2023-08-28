import { useState } from "react";
import "../styles/Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const handleLinkClick = (linkName) => {
    props.setActiveTab(linkName);
  };

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
      <div className="container-fluid">
        <div>
          <Navbar color="faded" light>
            <NavbarBrand  className="mr-auto">
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <img
              className="libertyLogo"
              height="auto"
              width="175px"
              src="../assets/liberty.png"
              alt="Liberty Logo"
            />
            </NavbarBrand>
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
              <NavItem>
                  <NavLink onClick={(e) => {
                      handleLinkClick("InputForm");
                    }}
                    >
                     Form
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={(e) => {
                      handleLinkClick("AdminReport");
                    }}
                    >
                    Admin
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={(e) => {
                      handleLinkClick("Guidelines");
                    }}
                    >
                    Guidelines
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
