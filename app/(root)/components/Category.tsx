'use client';

import { homeCategoryList } from '@/lib/dummyData';
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <ul className='max-w-full overflow-x-auto flex flex-row gap-4'>
      {homeCategoryList.map((category) => (
        <CategoryItem key={category.label} category={category} />
      ))}
    </ul>
  );
};

export default Category;
