import React from 'react';
import ReactDOM from 'react-dom';

import Home from './templates/App';
import GlobalStyles from './styles/global-styles.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme-styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Home />

      <GlobalStyles />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
