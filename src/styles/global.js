import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    color: #e6e6e6;
  }

  body, input, textarea, button {
    font: 1.6rem -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  #root {
    display: flex;
  }

  a {
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }

  button {
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  a, button {
    color: #7159c1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    text-align: left;
  }

`;
