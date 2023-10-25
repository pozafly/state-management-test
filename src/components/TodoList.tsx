import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/index.ts';
import TodoItem from './TodoItem.tsx';
import TodoItemCreator from './TodoItemCreator.tsx';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function TodoList() {
  const todoList: Todo[] = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
