import React, { PropTypes } from 'react';

export const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handlerSubmit} className="Form-input">
        <input type="text"
          onChange={ props.handleChangeInput }
          value={ props.currentTodo }/>
      </form>
    </div>
  );  
};

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired
}