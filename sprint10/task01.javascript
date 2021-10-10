// 1. Lifecycle
// Create component in ./app/Task1/index.js. It should send request to backend using Fetch API and then render "block#1" with result (Look at ./server/index.js! 
// You can find some list to use in the task). Component should show "block#2" while waiting response.
// Examples "block#1" and "block#2" at /screenshots
// 1.	Install dependencies yarn install
// 2.	Run webpack yarn watch
// 3.	Run server yarn server

import React, { Component } from "react";
export default class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            error: null,           
            isLoaded: false,
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/list')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              list: result
            });
          },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }    
    render() {
        const {error, isLoaded, list} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <div>
                {list.map((item) => (  
                    <div key={item.id}>
                      <p>{`id - ${item.id}`}</p>
                      <p>{`name - ${item.name}`}</p>
                      <p>{`note - ${item.note}`}</p>
                    </div>
                ))}
            </div>
            );
          }
    }
}
