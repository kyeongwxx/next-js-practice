'use client';

import { getRandomElementFromArray } from '@/lib/utils';
import { Playlist } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type PlayListCardProps = {
  playlist: Playlist;
};

const PlayListCard = ({ playlist }: PlayListCardProps) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;

  const songListLength = songList?.length;
  const imgSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className='h-[240px] cursor-pointer'>
      <section onClick={onClickCard} className='relative h-[136px]'>
        <Image src={imgSrc} fill alt='thumbnail' className='object-cover' />
      </section>

      <section className='mt-2'>
        <div>{playlistName}</div>
        <div className='text-neutral-500'>{`${owner} - 트랙 ${songListLength}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
