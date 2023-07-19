import { Product } from '@/types';
import { FC } from 'react';
import NoResults from './ui/NoResults';
import ProductCard from './ui/ProductCard';

interface IProductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<IProductListProps> = ({ items, title }) => {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'> {title}</h1>
      {items.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map(item => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
