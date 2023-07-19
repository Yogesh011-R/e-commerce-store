'use client';
import Button from '@/components/ui/Button';
import { Color, Size } from '@/types';
import { FC, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';
import Filter from './Filter';

interface IMobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: FC<IMobileFilterProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className='lg:hidden flex items-center gap-x-2 ' onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />

        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative  ml-auto flex h-full w-full  max-w-xs flex-col overflow-y-auto bg-white py-4 px-6 shadow-xl'>
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className='p-4 '>
              <Filter valueKey='sizeId' name='sizes' data={sizes} />
              <Filter valueKey='colorId' name='colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
