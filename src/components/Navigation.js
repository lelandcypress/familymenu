import React, { useState, useEffect } from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
require("dotenv").config();

const Navigation = () => {
  const [query, setQuery] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const recipeSearch = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients="${query}
        "&number=20`
    );
    console.log(response);
  };

  return (
    <Container className="navbarcont">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="branding">Meal Planner</Navbar.Brand>

        <Form className="searchbar">
          <Form.Group controlId="searchbar">
            <input
              type="text"
              placeholder="Search Recipes"
              onChange={handleInput}
            />
          </Form.Group>
        </Form>
        <Button type="submit" variant="primary" onClick={recipeSearch}>
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
};

export default Navigation;
