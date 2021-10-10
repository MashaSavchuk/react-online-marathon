// 2.The task of the topic "Hooks"
// There is the functional component App which renders one element div with text React Marathon in it
// Using hooks write code to provide next functionality: on page load, the component App fetches from localStorage a value of key appData and puts it in the input

import React, {useState, useEffect} from 'react';
import './App.css';
export default function App() {
  const [valueFromLocalStorage, setValueFromLocalStorage] = useState("");

  useEffect(function() {    
        const newValue = localStorage.getItem("appData");
        setValueFromLocalStorage(newValue)
  }, []);

  return (
    <div>
        React Marathon, appData: <input size='5' defaultValue={valueFromLocalStorage} />
    </div>
  );
}
