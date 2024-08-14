import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import './fibonacciResult.css';

const FibonacciResult = ({ series }) => {
  return (
    <div className="result-container">
      <List>
        {series.map((number, index) => (
          <ListItem key={index} className="result-list-item">
            <ListItemText primary={number} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FibonacciResult;
