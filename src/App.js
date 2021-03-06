import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import Home from './Home';
import Detail from './Detail';
import Error from './Error';

class App extends Component {
  render() {
    return (<ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home}></Route>
            <Route path={"/details/:movieId"} component={Detail}></Route>
            <Route path={"/error"} component={Error}></Route>
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
