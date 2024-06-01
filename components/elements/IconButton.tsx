import { ReactNode } from 'react';

type IconButtonProps = {
  icon: ReactNode;
  onClickIcon: () => void;
};

const IconButton = ({ icon, onClickIcon = () => {} }: IconButtonProps) => {
  return (
    <div>
      {' '}
      <div
        className='flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer'
        onClick={onClickIcon}
      >
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
