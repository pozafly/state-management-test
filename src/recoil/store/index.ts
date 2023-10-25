import { atom } from 'recoil';
import type { Todo } from '../components/TodoList.tsx';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export type FilterState = 'Show All' | 'Show Completed' | 'Show Uncompleted';

export const todoListFilterState = atom<FilterState>({
  key: 'todoListFilterState',
  default: 'Show All',
});
