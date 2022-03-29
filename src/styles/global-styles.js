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
    padding: 6em;
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
`;

export default GlobalStyles;
