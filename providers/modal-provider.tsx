'use client';

import PreviewModal from '@/components/PreviewModal';
import { FC, useState, useEffect } from 'react';

interface IModalProviderProps {}

const ModalProvider: FC<IModalProviderProps> = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
