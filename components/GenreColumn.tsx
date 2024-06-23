import GenreCard from './GenreCard';
import React from 'react';

type GenreColumn = {
  genreList: string[];
};

const GenreColumn: React.FC<GenreColumn> = ({ genreList = [] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {genreList.map((genre, index) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default GenreColumn;
