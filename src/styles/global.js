import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
    color: #151C33;
  }

  body {
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
