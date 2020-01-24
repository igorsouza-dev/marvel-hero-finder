import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Roboto+Mono&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #b80000 0%,
      #940000 15.1%,
      #6c0101 39.58%,
      #480101 69.27%,
      #380505 94.79%
    );
    background-repeat: no-repeat;
    height: 100%;
    overflow: auto;
  }
  body, input, button, textarea {
    font-family: 'Bowlby One SC', cursive;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
