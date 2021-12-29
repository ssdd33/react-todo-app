import React, { useState, useCallback } from 'react';
import { MdAdd, MdCheck } from 'react-icons/md';
import './TodoInsert.scss';
import cn from 'classnames';
export default function TodoInsert({ onInsert, onAllCheck, todos }) {
  const allCheck = todos.filter((todo) => todo.checked).length === todos.length;
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
      console.log('onSubmit');
    },
    [onInsert, value],
  );
  return (
    <div className="container">
      <div className={cn('allCheckBtn', { allCheck })} onClick={onAllCheck}>
        <MdCheck />
      </div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
}
