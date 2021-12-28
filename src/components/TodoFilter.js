import React from 'react';
import './TodoFilter.scss';
const TodoFilter = ({ todos, setSelector, onClear, onCompletedClear }) => {
  const left = todos.filter((todo) => !todo.checked);
  return (
    <div className="todoFilter">
      <div className="leftCount">{left.length} left</div>
      <div className="selector_btn_wrapper">
        <button className="all_btn" onClick={() => setSelector('ALL')}>
          All
        </button>
        <button className="active_btn" onClick={() => setSelector('ACTIVE')}>
          Active
        </button>
        <button
          className="completed_btn"
          onClick={() => setSelector('COMPLETED')}
        >
          Completed
        </button>
      </div>
      <div className="clear_btn_wrapper">
        <button className="clear" onClick={onClear}>
          Clear
        </button>
        <button className="clearCompleted" onClick={onCompletedClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
