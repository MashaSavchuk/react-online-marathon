// 4. Using CSS Modules
// Please, create CSS modules for Button and Input. These modules should define a class with the same name 'active'.
// •	For Button the class should define background-color as lightblue,
// •	For Input the class should define background-color as azure

import React from 'react';
import styles from './Button.module.css';
function Button() {  
  return (
    <button className={styles.active}>
      Click Me
    </button>
  )
}
export default Button
____
.active{
    background-color: lightblue;
}
____
import React from 'react';
import styles from "./Input.module.css";
function Input() {  
  return (<input type='text' className={styles.active}/>
  )
}
export default Input
____
.active{
    background-color: azure;
}

