import React from 'react';
import './TodoFilter.scss';
const TodoFilter = ({ todos, setSelector, onClear, onCompletedClear }) => {
  const left = todos.filter((todo) => !todo.checked).length;
  const completed = todos.filter((todo) => todo.checked).length;
  return (
    <div className="todoFilter">
      <div className="leftCount">
        {left}
        {left <= 1 ? ' item' : ' items'} left
      </div>
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
        {!!completed && (
          <button className="clearCompleted" onClick={onCompletedClear}>
            Clear Completed
          </button>
        )}
        <button className="Clear" onClick={onClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
