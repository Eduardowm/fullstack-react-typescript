import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import { BookContextProvider } from "./contexts/useGetOneBook";
import { BookSearchContextProvider } from "./contexts/useSearchBooks";
import { CreateUpdate } from "./pages/CreateUpdate";
import { BookView } from "./pages/BookView";
import { Home } from "./pages/Home";
import { FontFace } from "./styles/fonts";
import { GlobalStyle } from "./styles/global";

const App = () => (
  <>
    <ApolloProvider
      client={
        new ApolloClient({
          uri: "http://localhost:3333/graphql",
          cache: new InMemoryCache(),
        })
      }
    >
      <Router>
        <Switch>
          <Route path="/book" exact>
            <BookSearchContextProvider>
              <Home/>
            </BookSearchContextProvider>
          </Route>
          <Route path="/book/create" exact>
            <CreateUpdate/>
          </Route>
          <Route path="/book/:_id/update" exact>
            <CreateUpdate/>
          </Route>
          <Route path="/book/:_id" exact>
            <BookContextProvider>
              <BookView/>
            </BookContextProvider>
          </Route>
          <Redirect from="*" to="/book"/>
        </Switch>
      </Router>
    </ApolloProvider>
    <GlobalStyle/>
    <FontFace/>
  </>
);

export default App;
