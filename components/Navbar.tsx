import { FC } from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import MainNav from '@/components/MainNav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/NavbarActions';

interface INavbarProps {}

const Navbar: FC<INavbarProps> = async props => {
  const categories = await getCategories();
  // console.log('🚀 ~ file: Navbar.tsx:12 ~ categories:', categories);

  return (
    <header className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
