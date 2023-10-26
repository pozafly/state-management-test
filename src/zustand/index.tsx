import { usePersonStore } from './store/index.ts';

export default function Zustand() {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  return (
    <main>
      <label>First Name</label>
      <input
        type="text"
        onChange={(e) => updateFirstName(e.currentTarget.value)}
        value={firstName}
      />

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  );
}
