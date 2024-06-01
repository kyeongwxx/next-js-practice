'use client';

import { IoMdPlayCircle } from 'react-icons/io';

type PlayListNavProps = {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: {
      name: string;
      channelId: number;
      channel: string;
      src: string;
      imageSrc: string;
    }[];
  };
};

const PlayListNav = ({ playlist }: PlayListNavProps) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {};

  return (
    <li className='mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group'>
      <div>
        <div className='text-[14px]'>{playlistName}</div>
        <div className='text-[12px] text-neutral-500'>{owner}</div>
      </div>

      <div>
        <div
          className='hidden group-hover:block cursor-pointer'
          onClick={onClickPlay}
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
