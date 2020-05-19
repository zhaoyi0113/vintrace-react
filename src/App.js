import React from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import {LocalDrink} from '@material-ui/icons';

import './App.css';

const WineList = ({ wineryData }) => {
  return (
    <List>
      {wineryData.map((data, i) => (
        <ListItem key={`item-${i}`} style={{ cursor: 'pointer' }}>
          <ListItemAvatar>
            <LocalDrink />
          </ListItemAvatar>
          <ListItemText primary={data.lotCode} secondary={data.description} />
        </ListItem>
      ))}
    </List>
  );
};

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
