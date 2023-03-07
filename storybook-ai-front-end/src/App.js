import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import { Footer } from './components/Footer';



function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Landingpage />}></Route>
            {/* <Route path='/about' element={<Aboutpage />}></Route> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
