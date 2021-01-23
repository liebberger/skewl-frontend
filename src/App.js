import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import MainPage from "./pages/MainPage";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
    </ApolloProvider>

  );
}
