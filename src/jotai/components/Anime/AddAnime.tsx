import { useSetAtom } from 'jotai';
import { animeAtom } from '../../store/index.ts';

export default function AddAnime() {
  const setAnime = useSetAtom(animeAtom);

  return (
    <button
      onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false,
          },
        ]);
      }}
    >
      Add Cowboy Bebop
    </button>
  );
}
