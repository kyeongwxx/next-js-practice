'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import IconButton from './IconButton';
import { IoCloseOutline } from 'react-icons/io5';
import { Dispatch, SetStateAction } from 'react';

type LogoProps = {
  isInDrawer?: boolean;
  onClickClose?: () => void;
};

const Logo = ({ isInDrawer = false, onClickClose }: LogoProps) => {
  const { push } = useRouter();

  const onClickMenu = () => {};

  const onClickLogo = () => {
    push('/');
  };

  return (
    <section className='flex flex-row items-center gap-3'>
      {isInDrawer ? (
        <IconButton
          icon={<IoCloseOutline size={24} />}
          onClickIcon={onClickClose ? onClickClose : () => {}}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}

      <div className='cursor-pointer' onClick={onClickLogo}>
        <Image width={100} height={30} src='/main-logo.svg' alt='main-logo' />
      </div>
    </section>
  );
};

export default Logo;
