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
    <Container className="navbarcont">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="branding">Meal Planner</Navbar.Brand>

        <Form className="searchbar">
          <Form.Group controlId="searchbar">
            <Form.Control type="search" placeholder="Search Recipes" />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Search
        </Button>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to={"/recipes"}>
              Saved Recipes
            </Nav.Link>
            <Nav.Link as={Link} to={"/shopping"}>
              Shopping List
            </Nav.Link>
            <Nav.Link as={Link} to={"/menu"}>
              Weekly Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Select Category
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
