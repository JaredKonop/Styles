import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../App.css"; // Adjust the path according to your project structure

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar
      expand="lg"
      className="bg-body-tertiary navbar-center"
      placement="sticky"
    >
      <CContainer fluid className="justify-content-center">
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse
          className="navbar-collapse justify-content-center"
          visible={visible}
        >
          <CNavbarNav className="justify-content-center">
            <CNavItem>
              <CNavLink as={Link} to="/impressionism" exact>
                Impressionism
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/surrealism">
                Surrealism
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/cubism">
                Cubism
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/minimalism">
                Minimalism
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/popart">
                Pop Art
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
