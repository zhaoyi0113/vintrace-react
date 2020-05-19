import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { LocalDrink } from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchBar from './SearchBar';

export default ({ wineryData }) => {
  let match = useRouteMatch();
  return (
    <div>
      <SearchBar />
      <List>
        {wineryData.map((data, i) => (
          <Link  key={`item-${i}`} to={`${match.url}wine/${data.lotCode}`}>
            <ListItem style={{ cursor: 'pointer' }}>
              <ListItemAvatar>
                <LocalDrink />
              </ListItemAvatar>
              <ListItemText
                primary={data.lotCode}
                secondary={data.description}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
