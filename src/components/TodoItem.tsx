import type { Todo } from './TodoList.tsx';

type TodoItemProp = {
  item: Todo;
};

export default function TodoItem({
  item: { id, text, isComplete },
}: TodoItemProp) {
  return (
    <>
      <div>id: {id}</div>
      <div>text: {text}</div>
      <div>isComplete: {isComplete}</div>
    </>
  );
}
