import React from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="branding">Meal Planner</Navbar.Brand>
        </Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Search Recipes" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to={"/about"}>
              Saved Recipes
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>
              Shopping List
            </Nav.Link>
            <Nav.Link as={Link} to={"/resume"}>
              Weekly Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Select Category
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
