import { createGlobalStyle } from 'styled-components';

import theme from '../styles/theme-styles';

import '../assets/fonts/Poppins/stylesheet.css';

const GlobalStyles = createGlobalStyle`
  *,
  p, a,
  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${theme.colors.gray};
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    background-color: ${theme.colors.pink};
    padding: 5%;
    height: 100vh;
  }

  #root,
  .App {
    height: 100%;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .container-image {
    width: 100%;
    height: auto;

    .image,
    img,
    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .container-loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00dae0;

    img {
      width: 50em;
      height: auto;
      object-fit: cover;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .container-404 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #14A983;

    img {
      width: 50em;
      height: auto;
      object-fit: cover;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  iframe {
    display: none;
  }
`;

export default GlobalStyles;
