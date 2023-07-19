import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';
import { FC } from 'react';

interface IProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<IProductPageProps> = async ({ params }) => {
  const { productId } = params;

  const product = await getProduct(productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2  lg:gap-x-8'>
            <Gallery images={product.images} />
            <div className='mt-10 px-10 sm:mt-16 sm:px-0 lg:mt-0'>
              <Info data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList
            title='Related Product'
            // items={suggestedProducts.filter(item => item.id !== productId)}
            items={suggestedProducts.filter(item => item.id !== productId)}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
