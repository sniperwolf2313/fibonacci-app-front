import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../store/reducers/store';
import useFibonacci from '../hooks/useFibonacci';
import './fibonacciform.css';

const FibonacciForm = ({ onGenerate }) => {
  const [manualTime, setManualTime] = useState('');
  const [useServerTime, setUseServerTime] = useState(false);
  const [error, setError] = useState('');

  const { generateFibonacci } = useFibonacci();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setManualTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let seed1, seed2, executionTime;

    if (useServerTime) {
      const now = new Date();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      seed1 = parseInt(minutes[0], 10);
      seed2 = parseInt(minutes[1], 10);
      executionTime = now.toLocaleTimeString();
    } else {
      const timeParts = manualTime.split(':');

      if (timeParts.length !== 3) {
        setError('Por favor, ingresa la hora en formato HH:MM:SS.');
        return;
      }

      const [hh, mm, ss] = timeParts.map(Number);

      if (
        isNaN(hh) || isNaN(mm) || isNaN(ss) ||
        hh < 0 || hh > 23 ||
        mm < 0 || mm > 59 ||
        ss < 0 || ss > 59
      ) {
        setError('Por favor, ingresa un valor válido para la hora en formato HH:MM:SS.');
        return;
      }

      executionTime = new Date().toLocaleDateString() + ' ' + manualTime;
      seed1 = parseInt(mm.toString().padStart(2, '0')[0], 10);
      seed2 = parseInt(mm.toString().padStart(2, '0')[1], 10);
      const date = new Date();
      date.setHours(hh);
      date.setMinutes(mm);
      date.setSeconds(ss);
      executionTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
    }

    if (isNaN(seed1) || isNaN(seed2) || seed1 < 0 || seed2 < 0) return;

    const result = generateFibonacci(seed1, seed2);
    dispatch(addToHistory({ time: executionTime, series: result }));
    onGenerate(seed1, seed2);
    setError('');

    try {
      await axios.post('https://vpxn1rdqu7.execute-api.us-east-1.amazonaws.com/SendEmailsFibonacci', {
        recipientEmail: 'maicol.cardenas2313@gmail.com,didier.correa@proteccion.com.co,correalondon@gmail.com',
        subject: 'Prueba Técnica – Michael Stev Cardenas Quintero',
        body: `Hora: ${executionTime}\nSerie: ${result.join(', ')}`
      });
      alert('Correo enviado exitosamente');
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      alert('Error al enviar el correo');
    }
  };

  return (
    <div className="fibonacci-form-container">
      <h2>Generar Serie Fibonacci</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="numeric"
          value={manualTime}
          onChange={handleChange}
          disabled={useServerTime}
          placeholder="HH:MM:SS"
        />
        <label>
          <input
            type="checkbox"
            checked={useServerTime}
            onChange={(e) => setUseServerTime(e.target.checked)}
          />
          Usar hora del servidor
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Generar Fibonacci</button>
      </form>
    </div>
  );
};

export default FibonacciForm;
