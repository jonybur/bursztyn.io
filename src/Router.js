import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Pages/Home/Home.js'; 
import { Photography } from './Pages/Photography/Photography.js'; 
import { styles } from './Router.css';

class MainRouter extends PureComponent {
  render () {
    return (
      <Router className="router">
        <div className="router">
          <Route exact path="/" component={Home}/>
          <Route path="/photography" component={Photography}/>
          {/*<Route path="/portfolio" component={Home}/>*/}
        </div>
      </Router>
    );
  }
}

export default MainRouter;