import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducers/store';
import FibonacciForm from './components/FibonacciForm';
import FibonacciHistory from './components/FibonacciHistory';
import useFibonacci from './hooks/useFibonacci';
import Clock from './components/Clock';

const App = () => {
  const { generateFibonacci } = useFibonacci();

  const handleGenerate = (seed1, seed2) => {
    generateFibonacci(seed1, seed2);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Clock />
        <FibonacciForm onGenerate={handleGenerate} />
        <FibonacciHistory />
      </div>
    </Provider>
  );
};

export default App;

