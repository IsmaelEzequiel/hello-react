import React, { Component } from 'react';

import { TodoForm, TodoList } from '../todoForm';
import { addTodo, generateId } from '../../lib/todoHelpers';

import './index.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, name:'Todo one', isComplete: true},
            ],
            currentTodo: ''
        };
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    
    handlerSubmit(event) {
        event.preventDefault();
        const newId = generateId();
        const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
        const updatedTodo = addTodo(this.state.todos, newTodo);
        this.setState({
            todos: updatedTodo,
            currentTodo: ''
        });
    }

    handleChangeInput(event) {
        this.setState({
            currentTodo: event.target.value
        })
    }

    render() {
        return (
            <div className="Todo-app">

                < TodoForm
                    handleChangeInput={ this.handleChangeInput }
                    currentTodo={ this.state.currentTodo }
                    handlerSubmit={ this.handlerSubmit }
                 />

                < TodoList
                    todos={ this.state.todos }
                />

            </div>
        );
    }
};

export default Todo;

