import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('celsius');
    const [conversions, setConversions] = useState([]);
  
    const convertTemperature = () => {
      const temp = parseFloat(temperature);
      if (isNaN(temp)) return;
  
      let results = [];
  
      switch (unit) {
        case 'celsius':
          // Celsius a Fahrenheit y Kelvin
          results.push({
            label: 'Fahrenheit',
            value: (temp * 9/5) + 32
          });
          results.push({
            label: 'Kelvin',
            value: temp + 273.15
          });
          break;
        case 'fahrenheit':
          // Fahrenheit a Celsius y Kelvin
          results.push({
            label: 'Celsius',
            value: (temp - 32) * 5/9
          });
          results.push({
            label: 'Kelvin',
            value: (temp - 32) * 5/9 + 273.15
          });
          break;
        case 'kelvin':
          // Kelvin a Celsius y Fahrenheit
          results.push({
            label: 'Celsius',
            value: temp - 273.15
          });
          results.push({
            label: 'Fahrenheit',
            value: (temp - 273.15) * 9/5 + 32
          });
          break;
        default:
          break;
      }
  
      setConversions([
        { label: unit.charAt(0).toUpperCase() + unit.slice(1), value: temp },
        ...results
      ]);
    };
  
    return (
      <div className="App">
        <h1>Conversor de Temperatura</h1>
        
        <div className="converter-container">
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Ingrese temperatura"
          />
          
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
          
          <button onClick={convertTemperature}>Convertir</button>
        </div>
  
        {conversions.length > 0 && (
          <div className="results">
            <h2>Resultados:</h2>
            <ul>
              {conversions.map((conv, index) => (
                <li key={index}>
                  {conv.label}: {conv.value.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

export default App
