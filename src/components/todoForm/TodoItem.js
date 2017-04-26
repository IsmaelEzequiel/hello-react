import React, { PropTypes } from 'react';

export const TodoItem = (props) => {
  return (
    <li key={ props.id }>
      <input type="checkbox" defaultChecked={ props.isComplete }/> { props.name }
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired 
}