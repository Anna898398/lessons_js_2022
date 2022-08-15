//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from './Button';
 

// App => Button
export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div>{number}</div>
      <Button changeNumber={setNumber} name="кнопку"></Button>
    </div>
  );
}


