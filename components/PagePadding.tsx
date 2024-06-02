import { ReactNode } from 'react';

type PagePaddingProps = {
  children: ReactNode;
};

const PagePadding = ({ children }: PagePaddingProps) => {
  return <div className='mx-auto px-[10px] py-2 lg:px-[100px]'>{children}</div>;
};

export default PagePadding;
