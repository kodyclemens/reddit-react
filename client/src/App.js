import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from '../src/components/NotFound';
import RedditSearch from './containers/RedditSearch';
import About from './components/About';

class App extends PureComponent {
  render () {
    return <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={RedditSearch} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  };
};

export default App