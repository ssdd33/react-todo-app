import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 알아보기', checked: true },
    { id: 2, text: '리액트 컴포넌트 스타일링', checked: true },
    { id: 2, text: '일정관리 앱 만들기 ', checked: false },
  ]);
  const id = useRef(4);
  const onInsert = useCallback(
    (text) => {
      setTodos((prev) => [...prev, { id: id.current++, text, checked: false }]);
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todo={todos} />
    </TodoTemplate>
  );
}

export default App;
