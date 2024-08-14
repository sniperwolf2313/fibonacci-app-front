import { useSelector } from 'react-redux';


const useFibonacci = () => {
  const history = useSelector((state) => state.history);

  const generateFibonacci = (seed1, seed2) => {
    if (isNaN(seed1) || isNaN(seed2) || seed1 < 0 || seed2 < 0) return [];

    let series = [seed1, seed2];
    for (let i = 0; i < seed2 - 1; i++) {
      const nextNumber = series[series.length - 1] + series[series.length - 2];
      series.push(nextNumber);
    }

    const newSeries = series.reverse();
    return newSeries;
  };

  return {
    history,
    generateFibonacci,
  };
};

export default useFibonacci;
