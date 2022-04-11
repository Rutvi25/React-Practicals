import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Welcome() {
  const signedUp = useSelector((state) => state.userManagementReducer.signedUp); 
  return (
    <div>
      <h1>Welcome Page</h1>
      {
      signedUp 
      ?  <div>
            <h2>Hello! We hope you're doing well</h2>
            <Link to="/home">Go to Home Page</Link>
          </div>          
      : <div>
          <h2>Hello User!</h2>
          <Link to="/signup">Go to sign up page</Link>
        </div>
      }
    </div>
  )
}

export default Welcome