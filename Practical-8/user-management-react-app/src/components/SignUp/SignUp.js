import React from 'react'
import { useFormik } from 'formik';

import './SignUp.css';    

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      console.log('Form data: ', values)
    },
    validate: values => {
      let errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
    }
  })
  return (
    <div className='sign-up-page'>
      <div className='sign-up'>
        <div className='sign-up-title'>Sign Up</div>
        <form onSubmit={formik.handleSubmit}>
          <div className='photo-input'>Photo +</div>
          <label htmlFor='name'>Name </label><br />
          <input 
            type={'name'} 
            id='name' 
            name='name' 
            onChange={formik.handleChange} 
            value={formik.values.name} 
          />
          <br />
          <label htmlFor='email'>Email </label><br />
          <input 
            type={'email'} 
            id='email' 
            name='email' 
            onChange={formik.handleChange} 
            value={formik.values.email} 
          />
          <br />
          <label htmlFor='phoneNumber'>Phone number </label><br />
          <input 
            type={'phoneNumber'} 
            id='phoneNumber' 
            name='phoneNumber' 
            onChange={formik.handleChange} 
            value={formik.values.phoneNumber} 
          />
          <br />
          <label htmlFor='password'>password </label><br />
          <input 
            type={'password'} 
            id='password' 
            name='password' 
            onChange={formik.handleChange} 
            value={formik.values.password} 
          />
          <br />
          <label htmlFor='confirmPassword'>Confirm Password </label><br />
          <input 
            type={'password'} 
            id='confirmPassword' 
            name='confirmPassword' 
            onChange={formik.handleChange} 
            value={formik.values.confirmPassword} 
          />
          <br />
          <div className='btn-group'>
            <button className='submit-btn'>Submit</button>
            <button className='reset-btn'>Reset</button>
          </div>
        </form>
      </div>
      <div className='asset'>
        <img src='https://squahr.com/assets/images/authentication/signup.png' alt='sign-up-img' />
      </div>
    </div>
  )
}

export default SignUp