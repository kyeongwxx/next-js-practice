import { TopSong } from '@/types';
import SongCard from './SongCard';

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {songList.map((song, index) => (
        <SongCard key={index} song={song} />
      ))}
    </div>
  );
};

export default SongColumn;
