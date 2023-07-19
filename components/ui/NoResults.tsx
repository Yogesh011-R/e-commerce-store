import { FC } from 'react';

interface INoResultsProps {}

const NoResults: FC<INoResultsProps> = props => {
  return (
    <div className='flex items-center justify-center h-full w-full text-neutral-500'>
      No Results Found.
    </div>
  );
};

export default NoResults;
