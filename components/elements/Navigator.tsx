'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { FiCompass, FiMusic } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: '홈',
        isActive: pathname === '/',
        href: '/',
      },
      {
        icon: <FiCompass size={24} />,
        label: '둘러보기',
        isActive: pathname === '/explore',
        href: '/explore',
      },
      {
        icon: <FiMusic size={24} />,
        label: '보관함',
        isActive: pathname === '/library',
        href: '/library',
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className='flex flex-col gap-2 p-4'>
        {routes.map((route) => (
          <Link key={route.label} href={route.href}>
            <div
              className={cn(
                'flex flex-row items-center gap-4 text-[16px] hover:bg-neutral-700 rounded-lg p-2',
                route.isActive && 'bg-neutral-800'
              )}
            >
              {route.icon}
              <span>{route.label}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navigator;
