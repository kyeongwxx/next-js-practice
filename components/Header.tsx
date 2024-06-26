'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import UserIcon from './UserIcon';
import PagePadding from './PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Logo from './elements/Logo';
import { cn } from '@/lib/utils';
import useUIState from '@/hooks/useUIState';
import HeaderDrawer from './HeaderDrawer';

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const { headerImageSrc } = useUIState();

  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headerRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    const currentHeader = headerRef.current;
    currentHeader?.addEventListener('scroll', handleScroll);

    return () => {
      currentHeader?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className='relative overflow-y-auto w-full h-full'>
      <section className='absolute w-full top-0'>
        <div className='relative w-full h-[400px]'>
          <Image
            className='object-cover'
            src={
              headerImageSrc ||
              'https://images.unsplash.com/photo-1707833558984-3293e794031c'
            }
            fill
            alt='image-unsplash'
          />
          <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
          <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black w-full'></div>
        </div>
      </section>

      <section
        className={cn('sticky top-0 left-0 z-10', isScrolled && 'bg-black')}
      >
        <PagePadding>
          <div className='h-[64px] flex flex-row justify-between items-center'>
            <article
              className={cn(
                'hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.5)] rounded-2xl px-[16px] gap-[16px]',
                isScrolled && 'border border-neutral-500'
              )}
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className='h-full w-full bg-transparent'
                placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'
                type='text'
              />
            </article>

            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo />
              </article>
            </HeaderDrawer>

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
