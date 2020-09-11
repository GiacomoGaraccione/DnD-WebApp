import React from "react";
//import API from "./API/API.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AppTitle extends React.Component {
  render() {
    if (!this.props.loggedIn) {
      //titolo della homepage
      return (
        <Navbar bg="light" className="mb-3">
          <h2 className="text-info"> DnD Recap Page </h2>
          <Form
            inline
            className="ml-auto"
            method="POST"
            onSubmit={(event) => this.doLogin(event)}
          >
            <Form.Row>
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Nome Personaggio"
                  className="mr-3"
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Button variant="outline-success" type="submit">
              Login
            </Button>
          </Form>
        </Navbar>
      );
    }
  }
}

export default AppTitle;
