import React, {useRef} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './SignUp.css';  
import PhotoPreview from '../PhotoPreview';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  file: null
}
const validate = values => {
  let errors = {}
  // for name
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 15) {
    errors.name = 'Must be 15 characters or more';
  }
  // for email
  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // for phone number
  if(!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if(!/^[6-9]\d{9}$/gi.test(values.phoneNumber)) {
    errors.phoneNumber = 'Only Indian phone number is valid';
  }
  // for password
  if(!values.password) {
    errors.password = 'Required';
  }
  // for confirm password
  if(!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Please type the same password again!'
  } 
  if(!values.file) {
    errors.file = 'Required';
  } else if (values.file.size > 2000000) {
    errors.file = 'file size is greater than 2 MB';
  }
  return errors;
}
const onSubmit = values => {
  console.log('Form data: ', values)
}
function SignUp() {
  const fileRef = useRef(null)
  return (
    <div className='sign-up-page'>
      <div className='sign-up'>
        <div className='sign-up-title'>Sign Up</div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
          {({values, setFieldValue}) => (
            <Form> 
              {values.file && <div className='photo-preview'><PhotoPreview file={values.file} /></div>}  
              <input ref={fileRef} hidden className='photo' id="file" name="file" type="file" onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }} 
              />
              <div onClick={() => fileRef.current.click()} className='photo-input'>Photo +</div>
              <ErrorMessage name='file' />
              <br/>
              {/* Name field */}
              <label htmlFor='name'>Name </label><br />
              <Field className='input' type={'text'} id='name' name='name' />
              <ErrorMessage name='name' />
              <br />
              {/* Email field */}
              <label htmlFor='email'>Email </label><br />
              <Field type={'email'} id='email' name='email' />
              <ErrorMessage name='email' />
              <br />
              {/* Phone Number field */}
              <label htmlFor='phoneNumber'>Phone number </label><br />
              <Field className='input1' type={'text'} id='phoneNumber' name='phoneNumber' />
              <ErrorMessage name='phoneNumber' />
              <br />
              {/* Password field */}
              <label htmlFor='password'>password </label><br />
              <Field type={'password'} id='password' name='password' />
              <ErrorMessage name='password' />
              <br />
              {/* Confirm Password field */}
              <label htmlFor='confirmPassword'>Confirm Password </label><br />
              <Field type={'password'} id='confirmPassword' name='confirmPassword' />
              <ErrorMessage name='confirmPassword' />
              <br />
              {/* Submit & Reset */}
              <div className='btn-group'>
                <button type={'submit'} className='submit-btn'>Submit</button>
                <button type={'reset'} className='reset-btn'>Reset</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className='asset'>
        <img src='https://squahr.com/assets/images/authentication/signup.png' alt='sign-up-img' />
      </div>
    </div>
  )
}

export default SignUp