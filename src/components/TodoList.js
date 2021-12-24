import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
export default function TodoList({ todo }) {
  return (
    <div className="TodoList">
      {todo.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
