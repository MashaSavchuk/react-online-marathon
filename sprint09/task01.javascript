// The tasks of the topic "Keys"
// There is the component App
// Write code to provide:
// 1.	Display in the component App the next list: ...
// 2.	Use the element li to represent an item in a list
// 3.	Provide some unique keys to render this list, but don't use the index of an item as its key

import React from 'react';
import './App.css';
export default function App() {
let list = [{id: 1, text: "Animals"}, 
            {id: 2, text: "Anime"}, 
            {id: 3, text: "Anti-Malware"}, 
            {id: 4, text: "Art Design"}, 
            {id: 5, text: "Books"}, 
            {id: 6, text: "Business"}, 
            {id: 7, text: "Calendar"}, 
            {id: 8, text: "Cloud Storage"}, 
            {id: 9, text: "File Sharing"}, 
            {id: 10, text: "Animals"}, 
            {id: 11, text: "Continuous Integration"}, 
            {id: 12, text: "Cryptocurrency"}];
  return (
    <div>
      <ul>
        {list.map(el => 
          <li key = {el.id}>{el.text}</li>
          )}
      </ul>
    </div>
  );
}
