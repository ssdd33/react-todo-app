import React, { useReducer, useRef, useCallback, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    case 'CLEAR':
      return [];
    case 'COMPLETEDCLEAR':
      return todos.filter((todo) => !todo.checked);
    default:
      return todos;
  }
};
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [selector, setSelector] = useState('ALL');
  const id = useRef(1);

  const filterTodos = useCallback(() => {
    switch (selector) {
      case 'ACTIVE':
        return todos.filter((todo) => !todo.checked);
      case 'COMPLETED':
        return todos.filter((todo) => todo.checked);

      default:
        return todos;
    }
  }, [selector, todos]);
  const onInsert = useCallback((text) => {
    const todo = { id: id.current, text, checked: false };
    dispatch({ type: 'INSERT', todo });
    id.current += 1;
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const onClear = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);
  const onCompletedClear = useCallback(() => {
    dispatch({ type: 'COMPLETEDCLEAR' });
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        filterTodos={filterTodos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <TodoFilter
        todos={todos}
        onClear={onClear}
        onCompletedClear={onCompletedClear}
        setSelector={setSelector}
      />
    </TodoTemplate>
  );
};

export default App;
