import { Image as ImageType } from '@/types';
import { FC } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface IGalleryTabProps {
  image: ImageType;
}

const GalleryTab: FC<IGalleryTabProps> = ({ image }) => {
  return (
    <Tab className='relative flex aspect-square  max-h-[80px]  max-w-[80px] cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => {
        return (
          <div>
            <span className='absolute w-full  h-full inset-0 overflow-hidden rounded-md aspect-square'>
              <Image
                fill
                src={image.url}
                alt=''
                className='object-cover object-center max-h-[80px] '
              />
            </span>
            <span
              className={cn(
                'absolute inset-0 rounded-md ring-2 ring-offset-2',
                selected ? 'ring-black' : 'ring-transparent'
              )}
            ></span>
          </div>
        );
      }}
    </Tab>
  );
};

export default GalleryTab;
