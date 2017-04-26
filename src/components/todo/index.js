import React, { Component } from 'react';

import { TodoForm, TodoList } from '../todoForm';

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
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }
    
    handleChangeInput (event) {
        this.setState({
            currentTodo: event.target.value
        })
    }

    render() {
        return (
            <div className="Todo-app">

                < TodoForm
                    handleChangeInput={this.handleChangeInput}
                    currentTodo={this.state.currentTodo}
                 />

                < TodoList
                    todos={this.state.todos}
                />

            </div>
        );
    }
};

export default Todo;

