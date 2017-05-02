import React, { PropTypes } from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  return (
    <div>
      <ul className="List-todo">
        { props.todos.map( todo => 
          // Or <TodoItem key={ todo.id } defaultChecked={ todo.isComplete } name={ todo.name }>
          < TodoItem key={ todo.id } { ...todo } />
         )}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}