import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://steady-chow-18.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "aLNcN2QesZsRMI7cJG857GYCVoSwLdxDWlpTlujXUzoUs84KVaBj9EXFrSt3ClaW",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://steady-chow-18.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "aLNcN2QesZsRMI7cJG857GYCVoSwLdxDWlpTlujXUzoUs84KVaBj9EXFrSt3ClaW",
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
