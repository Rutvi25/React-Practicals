import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
