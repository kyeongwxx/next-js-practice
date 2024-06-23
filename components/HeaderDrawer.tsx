import { ReactNode, useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';

type HeaderDrawerProps = {
  children: ReactNode;
};

const HeaderDrawer = ({ children }: HeaderDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-[240px] h-full'>
        <div className='py-3'>
          <div className='px-3'>
            <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
