// 3. The tasks of the topic Styles:
// Modify React Elements:
// •	App component at ./components/app/app.js
// o	import app.css as css-file
// o	add html attr:class wrapper-app to div tag
// •	Button component at ./components/button/button.js
// o	add inner text Wake up Neo...
// o	add inline styles to button tag with this values: 

import React from 'react';
import Button from '../button/button.js';
import "./app.css";
export default function App(){
    return <div className="wrapper-app" data-testid="element-app"><Button /></div>
}

import React from 'react';
export default function Button(){
    const style = {
        color: 'rgb(18, 255, 18)',
        background: 'transparent',
        border: '0px',
        fontFamily: "Courier",
        fontSize: '33pt'
      };
    return <button style={style} data-testid="element-button">Wake up Neo...</button>;
}
