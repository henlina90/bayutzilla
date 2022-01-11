import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import SearchFilters from './SearchFilters';


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bayutzilla Real Estate</title>
      </Head>
      <Box maxWidth='1300px' m='auto'>
        <header>
        <Navbar />
       </header>
        <main>{children}</main>
        <footer>
         <Footer />
        </footer>
      </Box>
    </>
  );
}

export default Layout;