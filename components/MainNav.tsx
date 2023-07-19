'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface IMainNavProps {
  data: Category[];
}

const MainNav: FC<IMainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map(route => {
    return {
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    };
  });
  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map(route => {
        return (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              ' font-medium hover:text-black  mt-0.5 transition-colors',
              route.active ? 'text-black font-medium' : 'text-neutral-500'
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
