import { useAtom } from 'jotai';
import { animeAtom } from '../store/index.ts';

export default function SimpleAtom() {
  const [anime, setAnime] = useAtom(animeAtom);
  return (
    <>
      <ul>
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
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
    </>
  );
}
