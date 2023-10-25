import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/index.ts';
import type { Todo } from './TodoList.tsx';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: Todo[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
