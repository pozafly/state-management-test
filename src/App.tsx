import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList.tsx';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
