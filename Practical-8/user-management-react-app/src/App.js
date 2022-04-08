import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import Home from './components/HomePage/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<PublicRoute restricted={true} component={SignUp} path='signup'/>} />
        <Route path='/home' element={<PrivateRoute component={Home} path='/home' />} />    
      </Routes>
    </div>    
  );
};

export default App;