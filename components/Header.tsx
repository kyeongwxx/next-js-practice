import Image from 'next/image';
import { ReactNode } from 'react';
import UserIcon from './UserIcon';
import PagePadding from './PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

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

      <section className='sticky'>
        <PagePadding>
          <div className='h-[64px] flex flex-row justify-between items-center'>
            <article className='flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.5)] rounded-2xl px-[16px] gap-[16px]'>
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className='h-full w-full bg-transparent'
                placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'
                type='text'
              />
            </article>

            <article className='flex flex-row gap-6 items-center'>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>

      <section className='relative'>{children}</section>
    </header>
  );
};

export default Header;
