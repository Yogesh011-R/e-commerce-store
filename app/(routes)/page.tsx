import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';
import { FC } from 'react';

interface IHomePageProps {}

export const revalidate = 0;

const HomePage: FC<IHomePageProps> = async props => {
  const billboard = await getBillboard('5da9eb76-6a5c-476a-bdb4-eb3216460fe0');

  const products = await getProducts({
    isFeatured: true,
  });

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />{' '}
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
