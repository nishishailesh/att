import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://fluent-stag-45.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "WqLRFUZNbuQE1lUb6o5WOQH1YlJr3Xz8FvuWmdJX9Or7qV8dzQIFMBMO0Ts10rV1",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://fluent-stag-45.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "WqLRFUZNbuQE1lUb6o5WOQH1YlJr3Xz8FvuWmdJX9Or7qV8dzQIFMBMO0Ts10rV1",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
