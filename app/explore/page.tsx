import PagePadding from '@/components/PagePadding';
import React from 'react';
import Category from './components/Category';
import {
  dummyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from '@/lib/dummyData';
import PlayListCarousel from '@/components/PlayListCarousel';
import SongListCarousel from '@/components/SongListCarousel';
import GenreListCarousel from '@/components/GenreListCarousel';

const page = async () => {
  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className='mt-4'></div>
      <Category />
      <div className='mt-20' />
      <PlayListCarousel title='새 앨범 및 싱글' playlistArray={playlistArray} />
      <div className='mt-20' />
      <SongListCarousel title='인기곡' songListTop10={songListTop10} />
      <div className='mt-20' />
      <GenreListCarousel title='분위기 및 장르' genreList={dummyGenreList} />

      <div className='mt-20' />
      <div className='mt-20' />
    </PagePadding>
  );
};

export default page;
