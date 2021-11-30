import React, { FormEvent, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const App = () => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container fluid style={{ width: "100vw", height: "100vh" }}>
      <Row className="justify-content-md-center align-items-center">
        <Col xs={6} md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={state.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
