// 2. The tasks of the topic "Props"
// There are two components - App and its children component First
// Write code to provide:
// Є два компоненти - програма App та її дочірній компонент First Напишіть код, щоб надати: 
// 1.	Using the props the component App passes into the component First the list converted into lowercase: ...
// 2.	The component First renders the first (is at index 0) element of the array received in props.

import React from 'react';
import './App.css';
import First from './First';
export default function App() {
  let list = ["Animals", 
              "Anime", 
              "Anti-Malware", 
              "Art Design", 
              "Books", 
              "Business", 
              "Calendar", 
              "Cloud Storage", 
              "File Sharing", 
              "Animals", 
              "Continuous Integration", 
              "Cryptocurrency"].map(el => el.toLowerCase());
  return (
    <div>
          {
            <First items = {list}/>
            }
    </div>
  );
}
___

import React from "react";
export default class First extends React.Component {   
    render() {
        return this.props.items[0]
    }
}
