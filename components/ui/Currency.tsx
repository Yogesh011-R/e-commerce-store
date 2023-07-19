'use client';
import { formatter } from '@/lib/utils';
import { FC, useEffect, useState } from 'react';

interface ICurrencyProps {
  value?: string | number;
}

const Currency: FC<ICurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <div className='font-bold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
