import React from 'react';
import CategoryMenu from './CategoryMenu';
import { FiMusic } from 'react-icons/fi';
import { FiBarChart } from 'react-icons/fi';
import { FiSmile } from 'react-icons/fi';

const Category = () => {
  return (
    <div className='flex flex-col gap-4 w-full lg:flex-row'>
      <CategoryMenu icon={<FiMusic color='#AAAAAA' />} label='최신음악' />
      <CategoryMenu icon={<FiBarChart color='#AAAAAA' />} label='차트' />
      <CategoryMenu icon={<FiSmile color='#AAAAAA' />} label='분위기 및 장르' />
    </div>
  );
};

export default Category;
