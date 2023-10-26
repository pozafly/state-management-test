import type { Filter, Status } from './index.ts';
import { store } from './index.ts';

export const addTodo = (description: string) => {
  store.todos.push({
    description,
    status: 'pending',
    id: Date.now(),
  });
};

export const removeTodo = (id: number) => {
  const index = store.todos.findIndex((todo) => todo.id === id);
  if (index >= 0) {
    store.todos.splice(index, 1);
  }
};

export const toggleDone = (id: number, currentStatus: Status) => {
  const nextStatus = currentStatus === 'pending' ? 'completed' : 'pending';
  const todo = store.todos.find((todo) => todo.id === id);
  if (todo) {
    todo.status = nextStatus;
  }
};

export const setFilter = (filter: Filter) => (store.filter = filter);
