// 3.	The tasks of the topics "State" and "Events"
// There is the component App
// Write code to provide:
// 1.	Using the property appData of state the component App renders one element div with text React Marathon in it
// 2.	If you click mouse on this div element the component App will convert the value of property appData to lowercase

import React from 'react';
import './App.css';
export default class App extends React.Component {
  state = {
    appData: "React Marathon"  
  };
 
  onChangeClick = () => {
    this.setState({
      appData: this.state.appData.toLowerCase()
    });
  };

  render() {
    return (
      <div onClick ={this.onChangeClick}>
        {this.state.appData}  
      </div>
    )  
  }
}
