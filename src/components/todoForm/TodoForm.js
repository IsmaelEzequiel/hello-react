import React from 'react';

export const TodoForm = (props) => (
  <form action="#" className="Form-input">
    <input type="text"
      onChange={ props.handleChangeInput }
      value={ props.currentTodo }/>
  </form>
);