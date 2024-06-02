import Image from 'next/image';
import { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className='relative overflow-y-auto w-full h-full'>
      <section className='absolute w-full top-0'>
        <div className='relative w-full h-[400px]'>
          <Image
            className='object-cover'
            src='https://images.unsplash.com/photo-1487956382158-bb926046304a'
            fill
            alt='image-unsplash'
          />
          <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
          <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black w-full'></div>
        </div>
      </section>

      <section className='absolute'>{children}</section>
    </header>
  );
};

export default Header;
