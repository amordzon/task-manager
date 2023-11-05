import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  const { keycloak } = useKeycloak();
  return (
    <div>
      <Navbar className="__navbar fixed-top">
        <Container className="__navbar-container">
          <Navbar.Brand className="__logo">TaskManager</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {!keycloak.authenticated && (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => keycloak.login()}
                >
                  Login
                </button>
              )}
              {!!keycloak.authenticated && (
                <div className="d-flex align-items-center gap-3">
                  <Link to="/dashboard">Dasboard</Link>

                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => keycloak.logout()}
                  >
                    Logout
                  </button>
                </div>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPage;
