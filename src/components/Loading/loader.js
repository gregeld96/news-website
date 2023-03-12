import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

const Loading = () => (
  <Container className="vh-100">
    <Row className="justify-content-center align-items-center h-100">
      <Spinner color="primary" />
    </Row>
  </Container>
);

export default Loading;