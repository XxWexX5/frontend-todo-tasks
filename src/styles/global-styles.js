import { createGlobalStyle } from 'styled-components';

import theme from '../styles/theme-styles';

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 62.5%;
    background-color: ${theme.colors.pink};
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
