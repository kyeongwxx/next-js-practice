import Header from '@/components/Header';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
