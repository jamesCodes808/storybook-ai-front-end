import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookshelf from './components/Bookshelf';
import Login from './Auth/Login'
import Logout from './Auth/Logout'

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

            <Route
              path='/login'
              element={<Login />} >
            </Route>

            <Route
              path='/logout'
              element={<Logout />} >
            </Route>

          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
