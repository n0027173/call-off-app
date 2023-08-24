import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";

const NavBar = (props) => {
  const handleLinkClick = (linkName) => {
    props.setActiveTab(linkName);
  };

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
      <div className="container-fluid">
        <img src="../assets/liberty.png" alt="Liberty Logo" />
        <div>
          <Navbar color="faded" light>
            {/* <Navbar color="#ffd000"> */}
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <NavbarBrand href="/" className="mr-auto">
              Call Off Form
            </NavbarBrand>
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                  // onClick={(e) => {
                  //   handleLinkClick("Admin");
                  // }}
                  >
                    Admin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Guidelines">Guidelines</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    onClick={(e) => {
                      handleLinkClick("National Parks");
                    }}
                  >
                    National Parks
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
