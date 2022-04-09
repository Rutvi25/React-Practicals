import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import Home from './components/HomePage/Home';
import Welcome from './components/Welcome';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute restricted={false} component={Welcome} />} />
        <Route path='/signup' element={<PublicRoute restricted={true} component={SignUp} />} />
        <Route path='/home' element={<PrivateRoute component={Home} />} />    
      </Routes>
    </div>    
  );
};

export default App;