import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Bookshelf from './components/Bookshelf';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

import Landingpage from './components/Landingpage';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Landingpage />,
    },
    {
      path: '/bookshelf',
      element: <Bookshelf />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
  ]);

  const location = useLocation();


  if (!element) return null;

  return (

    <ChakraProvider>
      {/* <Router> */}
      <Navbar />
      <main>
        <AnimatePresence initial={false}>
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </ChakraProvider>
  );
}
