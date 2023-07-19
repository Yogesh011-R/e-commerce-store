'use client';

import { FC, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

interface INavbarActionsProps {}

const NavbarActions: FC<INavbarActionsProps> = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) return null;

  const router = useRouter();

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button
        onClick={() => router.push('/cart')}
        className='flex items-center rounded-full bg-black px-4 py-2'
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm text-white font-medium'>
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;