'use client';

import { TopSong } from '@/types';
import Image from 'next/image';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from 'react-icons/fi';
import IconButton from './elements/IconButton';

type SongCardProps = {
  song: TopSong;
};

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className='flex flex-row items-center gap-4 w-full h-[48px] relative group'>
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} alt='image' fill className='object-cover' />
        <section className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer'>
          <FiPlayCircle size={20} />
        </section>
      </div>

      <div className='flex flex-row items-center gap-4'>
        <div>
          {song.rank === song.prevRank && <FaCircle size={10} />}
          {song.rank > song.prevRank && (
            <AiOutlineCaretUp size={10} color='#3ca63f' />
          )}
          {song.rank < song.prevRank && (
            <AiOutlineCaretDown size={10} color='#ff0000' />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>

      <div>
        <div>{song.name}</div>
      </div>

      <section className='hidden group-hover:flex absolute top-0 right-0 flex-row items-center justify-end h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]'>
        <IconButton icon={<FiThumbsUp size={20} />} onClickIcon={() => {}} />
        <IconButton icon={<FiThumbsDown size={20} />} onClickIcon={() => {}} />
        <IconButton
          icon={<FiMoreVertical size={20} />}
          onClickIcon={() => {}}
        />
      </section>
    </article>
  );
};

export default SongCard;
