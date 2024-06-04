import useUIState from '@/hooks/useUIState';
import { cn } from '@/lib/utils';

type CategoryItemProps = {
  category: {
    label: string;
    src: string;
  };
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  const onClickCategory = () => {
    if (homeCategory === category.label) {
      setHeaderImageSrc('');
      setHomeCategory('');
    } else {
      setHeaderImageSrc(category.src);
      setHomeCategory(category.label);
    }
  };

  return (
    <li
      onClick={onClickCategory}
      className={cn(
        'h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
        category.label === homeCategory && 'bg-white text-black hover:bg-white'
      )}
    >
      {category.label}
    </li>
  );
};

export default CategoryItem;
