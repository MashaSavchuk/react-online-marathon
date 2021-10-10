// 2. SyntheticEvent
// Create component ./app/Task2/index.js. It should render blocks for each element in "list" field and one for "text" field. List-element block should contains list-element id. 
// When you hover mouse on the list-element block, the list-element text should appear in text block When you move mouse from the list-element block, 
// the list-element text should disappear from text block For correct test passing give list-element block class "element" and give text block class "text"
// Run this in terminal
// 1.	Install dependencies yarn install
// 2.	Run webpack yarn watch

import React, { Component } from "react";
export default class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''
        };
    }
    onHoverMouseOver = (e) => {
             this.setState({  
                text: this.state.list[e.target.id-1].text
            });
    }
    onHoverMouseOut = () =>  {
            this.setState({ 
                text: ''
            });
    }
       render() {
        const {list} = this.state;
        return(
            <div>
                {list.map(item => (
                    <p className='element' key={item.id} id={item.id}
                    onMouseOver={this.onHoverMouseOver}
                    onMouseOut={this.onHoverMouseOut}>
                    id - {item.id}
                    </p>
                ))}
                <div className='text'>
                    {this.state.text}
                </div>
            </div>
        )
    }
}
_____

import React, { Component, Fragment } from "react";
import Task2 from "./Task2";
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showList: false,
        };
    }

    toggleList = () => {
        this.setState({showList: !this.state.showList});
    }


    render() {
        const { showList } = this.state;

        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <button onClick={this.toggleList}>
                            button 
                        </button>
                    </div>
                </div>
                {this.state.showList ? <Task2/>: null}
            </Fragment>
        );
    }
}
