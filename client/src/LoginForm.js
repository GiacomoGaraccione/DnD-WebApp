import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "./API/API.js";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/esm/Modal";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFailed: false,
    };
  }

  doLogin = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value; //riceve username e password inseriti
    const password = event.target.elements.password.value;

    API.login(username, password)
      .then(() => {
        console.log("Login done");
        this.props.doLogin(username, password); //se sono corretti si imposta la visione della homepage del professore
      })
      .catch((err) => {
        console.log("Login error");
        this.setState({ loginFailed: true }); //altrimenti mostra il popup di errore
      });
  };

  onClickClose = () => {
    this.setState({ loginFailed: false });
  };

  render() {
    return (
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
              placeholder="Username"
              className="mr-3"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              className="mr-3"
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="outline-success" type="submit">
          Login
        </Button>
        {this.state.loginFailed && ( //popup di errore mostrato all'utente quando le credenziali sono errate
          <Modal show={this.state.loginFailed}>
            <Modal.Header
              closeButton={true}
              onClick={() => this.onClickClose()}
            >
              <Modal.Title> Error </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Alert variant="danger" className="ml-3">
                {" "}
                Wrong credentials, username and/or password inserted are wrong{" "}
              </Alert>
            </Modal.Body>
          </Modal>
        )}
      </Form>
    );
  }
}

export default LoginForm;
