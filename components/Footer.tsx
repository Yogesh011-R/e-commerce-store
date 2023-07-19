import { FC } from 'react';

interface IFooterProps {}

const Footer: FC<IFooterProps> = props => {
  return (
    <div className='border-t bg-white '>
      <div className='mx-auto py-10'>
        <p className='text-center text-xs text-black'>
          &copy; 2023 Store, Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
