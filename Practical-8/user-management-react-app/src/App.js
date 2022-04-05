import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import Home from './components/HomePage/Home';

function App() {
  const navigate = useNavigate();
  const signedUp = useSelector((state) => state.userManagementReducer.signedUp) 
  useEffect(() => {
    signedUp ? navigate('/home') : navigate('/signup');
  }, [])
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
