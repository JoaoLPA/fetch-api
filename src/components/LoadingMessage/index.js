import React from "react";
import { Container } from "./styles";

const LoadingMessage = ({ message }) => {
  return (
    <Container>
      <h1>{message}</h1>
    </Container>
  );
};

export default LoadingMessage;
