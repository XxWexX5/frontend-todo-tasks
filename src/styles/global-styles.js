import { createGlobalStyle } from 'styled-components';

import theme from '../styles/theme-styles';

const GlobalStyles = createGlobalStyle`
  *,
  p, a,
  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${theme.colors.gray};
  }

  body {
    font-size: 62.5%;
    background-color: ${theme.colors.pink};
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
    }
  }
`;

export default GlobalStyles;
