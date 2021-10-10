// 2. The tasks of the topic JSX 2:
// Create React Elements:
// •	MyLabel in ./src/components/my-label/my-label.js, that return label tag with:
// o	for attribute with value inp-num
// o	data-testid attribute with value element-label
// o	inner text Count:
// •	MyInput in ./src/components/my-input/my-input.js, that return input tag with:
// o	id attribute with value inp-num
// o	type attribute with value number
// o	data-testid attribute with value element-input
// •	MyButton in ./src/components/my-button/my-button.js, that return button tag with:
// o	data-testid attribute with value element-button
// o	inner text Add to account

import React from 'react';
export default function Label(){
    return <label for="inp-num" data-testid="element-label">Count:</label>
}

import React from 'react';
export default function Input(){
    return <input id="inp-num" type="number" data-testid="element-input" />   
}
    
import React from 'react';
export default function Button(){
    return <button data-testid="element-button">Add to account</button>  
}    
