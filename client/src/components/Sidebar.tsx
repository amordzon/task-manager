import React, { useState } from "react";
import { Col, Nav, NavDropdown } from "react-bootstrap";
import useLogout from "../hooks/useLogout";
import { Navigate } from "react-router";
import useModal from "../hooks/useModal";
import NewProject from "./Dashboard/Projects/NewProject";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const { isLoggedIn, logOut } = useLogout();
  const { handleShowProjectForm, showNewProjectForm, handleCloseProjectForm } =
    useModal();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NewProject
        showNewProjectForm={showNewProjectForm}
        handleCloseProjectForm={handleCloseProjectForm}
      />
      <Col className="p-3 d-flex flex-column col-md-3 col-lg-3 col-xl-2 vh-100 position-fixed  __sidebar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4 text-light">Task Manager</span>
        </a>
        <hr />
        <Nav className="nav nav-pills flex-column mb-auto">
          <Nav.Item>
            <Nav.Link
              href="#"
              onClick={() => setActiveLink("Home")}
              active={activeLink === "Home"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              onClick={() => setActiveLink("Activity")}
              active={activeLink === "Activity"}
            >
              Activity
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              onClick={() => setActiveLink("Projects")}
              active={activeLink === "Projects"}
            >
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" onClick={handleShowProjectForm} active={false}>
              Add New
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <NavDropdown title="User" id="dropdown" className="dropdown mt-auto">
          <NavDropdown.Item href="#">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logOut}>Sign out</NavDropdown.Item>
        </NavDropdown>
      </Col>
    </>
  );
};

export default Sidebar;
