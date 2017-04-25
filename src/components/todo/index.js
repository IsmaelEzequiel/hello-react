import React, { Component } from 'react';

import './index.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, name:'Todo one', isComplete: true},
                {id: 2, name:'todo two', isComplete: false},
                {id: 3, name:'todo three', isComplete: false},
            ],
            currentTodo: ''
        };
        this.handlerInputChange = this.handlerInputChange.bind(this);
    }

    handlerInputChange(event) {
        this.setState({
            currentTodo: event.target.value
        });
    }

    render() {
        return (
            <div className="Todo-app">
                <form action="#" className="Form-input">
                    <input type="text" onChange={this.handlerInputChange} value={ this.state.currentTodo }/>
                </form>
                <ul className="List-todo">
                    { this.state.todos.map(todo => 
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={ todo.isComplete } />{ todo.name }
                        </li>)
                    }
                </ul>      
            </div>
        );
    }
};

export default Todo;
