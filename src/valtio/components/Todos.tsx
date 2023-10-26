import { useSnapshot } from 'valtio';
import { store } from '../store/index.ts';

export default function Todos() {
  const snap = useSnapshot(store);

  return (
    <ul>
      {snap.todos
        .filter(({ status }) => status === snap.filter || snap.filter === 'all')
        .map(({ description, status, id }) => {
          return (
            <li key={id}>
              <span data-status={status} className="description">
                {description}
              </span>
              <button className="remove">X</button>
            </li>
          );
        })}
      <div>Todos</div>
    </ul>
  );
}
