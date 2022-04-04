import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import Home from './components/HomePage/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>    
  );
}

export default App;
