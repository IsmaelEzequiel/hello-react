import React, { Component } from 'react';

import './index.css';

class Todo extends Component {
    render() {
        return (
            <div className="Todo-app">
                <form action="#" className="Form-input">
                    <input type="text"/>
                </form>
                <ul className="List-todo">
                    <li><input type="checkbox"/>Hello</li>
                    <li><input type="checkbox"/>Heasdasdasllo</li>
                </ul>      
            </div>
        );
    }
};

export default Todo;
