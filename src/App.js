import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import WineList from './Winelist';
import Wine from './Wine';

const App = ({ wineryData }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/wine/:lotCode">
          <Wine />
        </Route>
        <Route exact path="/">
          <WineList wineryData={wineryData} />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    wineryData: state.wineryData,
  };
};

export default connect(mapStateToProps)(App);
