import { selector } from 'recoil';
import { todoListFilterState, todoListState } from '../index.ts';
import type { Todo } from '../../components/TodoList.tsx';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        console.log(
          'here',
          list.filter((item: Todo) => item.isComplete)
        );
        return list.filter((item: Todo) => item.isComplete);
      case 'Show Uncompleted':
        console.log(
          'here',
          list.filter((item: Todo) => !item.isComplete)
        );
        return list.filter((item: Todo) => !item.isComplete);
      default:
        return list;
    }
  },
});
