import { cn } from '@/lib/utils';
import { FC, MouseEventHandler } from 'react';

interface IIconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactElement;
  className?: string;
}

const IconButton: FC<IIconButtonProps> = ({ onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white shadow-md  border p-2 hover:scale-110 transition ',
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
