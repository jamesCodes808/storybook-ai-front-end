import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookshelf from './components/Bookshelf';



function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>

            <Route
              path="/bookshelf"
              element={<Bookshelf />} >

            </Route>

          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
