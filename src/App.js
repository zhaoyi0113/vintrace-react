import React from 'react';
import { connect } from 'react-redux';
import WineList from './Winelist';

const App = ({ wineryData }) => {
  return (
    <div className="App">
      <WineList wineryData={wineryData} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    wineryData: state.wineryData,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
