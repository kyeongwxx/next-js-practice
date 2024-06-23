import { ReactNode } from 'react';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';

type LayoutProps = {
  children: ReactNode;
};

const SideBar = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-row h-full'>
      <nav className='hidden lg:block w-[240px] border-r-[1px] border-neutral-600'>
        <div className='p-[24px]'>
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className='w-full lg:w-[calc(100%-240px)]'>{children}</div>
    </div>
  );
};

export default SideBar;
