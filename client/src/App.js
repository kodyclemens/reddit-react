import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './NotFound';
import RedditSearch from './components/RedditSearch';

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' exact component={RedditSearch} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  };
};

export default App