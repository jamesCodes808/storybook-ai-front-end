import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Bookshelf from './components/Bookshelf';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

import Landingpage from './components/Landingpage';
import { Footer } from './components/Footer';
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <AnimatePresence >
            <Routes key={0}>
              <Route key={1} path='/bookshelf' element={<Bookshelf />}></Route>
              <Route key={2} path='/login' element={<Login />}></Route>

              <Route key={3} path='/logout' element={<Logout />}></Route>

              <Route key={4} path='/about' element={<About />}></Route>

              <Route key={5} path='/' element={<Landingpage />}></Route>
              {/* <Route path='/about' element={<Aboutpage />}></Route> */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;