import { useAtomValue } from 'jotai';
import { animeAtom } from '../../store/index.ts';

export default function AnimeList() {
  const anime = useAtomValue(animeAtom);

  return (
    <ul>
      {anime.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
}
