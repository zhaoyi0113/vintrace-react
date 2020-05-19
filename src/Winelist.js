import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { LocalDrink } from '@material-ui/icons';
import SearchBar from './SearchBar';

export default ({ wineryData }) => {
  return (
    <div>
      <SearchBar />
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
    </div>
  );
};
