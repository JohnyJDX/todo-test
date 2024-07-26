import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex h-full justify-center mt-7 container pb-4'>
        <Outlet />
      </main>
    </>
  );
};
