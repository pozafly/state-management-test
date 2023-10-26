import { proxy } from 'valtio';

export type Status = 'pending' | 'completed';
export type Filter = Status | 'all';
export type Todo = {
  description: string;
  status: Status;
  id: number;
};

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: 'all',
  todos: [],
});
