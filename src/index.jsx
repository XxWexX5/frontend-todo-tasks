import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import { client } from './lib/apollo';

import Home from './pages/home';

import GlobalStyles from './styles/global-styles.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme-styles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Home />

        <GlobalStyles />
      </React.StrictMode>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
