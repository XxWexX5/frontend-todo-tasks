import { ApolloClient, InMemoryCache } from '@apollo/client';

import { returnAPI } from '../utils/returnAPI';

export const client = new ApolloClient({
  uri: `${returnAPI()}/graphql`,
  cache: new InMemoryCache(),
});
