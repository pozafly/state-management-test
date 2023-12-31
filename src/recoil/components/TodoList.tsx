import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem.tsx';
import TodoItemCreator from './TodoItemCreator.tsx';
import { filteredTodoListState } from '../store/selectors/index.ts';
import TodoListFilters from './TodoListFilters.tsx';
import TodoListStats from './TodoListStats.tsx';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function TodoList() {
  const todoList: Todo[] = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
