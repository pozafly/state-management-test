import { atom } from 'recoil';
import type { Todo } from '../components/TodoList.tsx';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});
