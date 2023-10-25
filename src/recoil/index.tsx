import TodoList from './components/TodoList.tsx';
import { RecoilRoot } from 'recoil';

export default function Recoil() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
