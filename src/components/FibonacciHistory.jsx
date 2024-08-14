import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import './fibonacciHistory.css';

const FibonacciHistory = () => {
  const history = useSelector((state) => state.history);

  if (!history || history.length === 0) {
    return (
      <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>
        No hay historial disponible.
      </Typography>
    );
  }

  return (
    <div className="history-container">
      <Typography variant="h5" gutterBottom>
        Historial de Series Generadas
      </Typography>
      <List>
        {history.map((entry, index) => {
          const series = Array.isArray(entry.series) ? entry.series : [];
          const time = entry.time || 'Desconocida';
          return (
            <ListItem key={index} className="history-list-item">
              <ListItemText
                primary={`Hora: ${time}`}
                secondary={`Serie: ${series.join(', ')}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default FibonacciHistory;
