import React from 'react';
import { connect } from 'react-redux';
import WineList from './Winelist';

const App = ({ wineryData, search }) => {
  return (
    <div className="App">
      <WineList wineryData={wineryData} search={search} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    wineryData: state.wineryData,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    search: (text) => {
      dispatch({ type: 'search', text });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
