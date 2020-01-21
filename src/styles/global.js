import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
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
