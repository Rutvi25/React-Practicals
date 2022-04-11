import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './SignUp.css';  
import { addUser } from '../../actions';
import signupsvg from '../SignUp/signupsvg.png';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  file: null,
  fileURL: ''
}
const validate = values => {
  let errors = {};
  // for name
  if (!values.name.trim()) {
    errors.name = 'Required';
  } else if (!/^[a-zA-Z ]*$/i.test(values.name)) {
    errors.name = 'only alphabetic values are allowed';
  } else if (values.name.trim().length < 15) {
    errors.name = 'Must be 15 characters or more';
  };
  // for email
  if(!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  };
  // for phone number
  if(!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if(!/^[6-9]\d{9}$/gi.test(values.phoneNumber)) {
    errors.phoneNumber = 'Enter valid phone number';
  };
  // for password
  if(!values.password) {
    errors.password = 'Required';
  } else if (!/^\S*$/i.test(values.password)) {
    errors.password = 'space not allowed';
  } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)) {
    errors.password = 
    'password must contain 8 characters, atleast one lower & upper case character, one number and one special character';
  };
  // for confirm password
  if(!values.confirmPassword.trim()) {
    errors.confirmPassword = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Please type the same password again!'
  };
  // for file input
  if(!values.file) {
    errors.file = 'Required';
  } else if (values.file.size > 2000000) {
    errors.file = 'file size must be less than 2 MB';
  } else if (values.file.type !== "image/jpg" 
    && values.file.type !== "image/png" && values.file.type !== "image/jpeg" ) {
    errors.file = 'only png and jpg files are acceptable';
  };
  return errors;
};
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const onSubmit = values => {
    const { name, email, phoneNumber, password, fileURL } = values;
    dispatch(
      addUser({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        fileURL: fileURL
      })
    );
    navigate('/home');
  }
  return (
    <div className='sign-up-page'>
      <div className='sign-up'>
        <div className='sign-up-title'>Sign Up</div>
        <div className='asset asset-mobile'>
          <img src={signupsvg} alt='sign-up-img' />
        </div>
        <div className='sign-up-form'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            {({values, setFieldValue}) => (
              <Form> 
                {
                  values.file && 
                  <div className='photo-preview'>
                    <img className='preview-img' src={values.fileURL} alt='preview-img' />
                  </div>
                }  
                <input 
                  ref={fileRef} hidden className='photo' 
                  id="file" name="file" type="file" 
                  onChange={(e) => {
                    setFieldValue("file", e.currentTarget.files[0]); 
                    setFieldValue('fileURL', URL.createObjectURL(e.currentTarget.files[0]))
                  }} 
                />
                <div onClick={() => fileRef.current.click()} className='photo-input'>Photo +</div>
                <div className='error-msg img-error-msg'>
                  <ErrorMessage name='file' />
                </div>
                {/* Name field */}
                <label htmlFor='name'>Name </label><br />
                <Field className='input' type={'text'} id='name' name='name' />
                <div className='error-msg'>
                  <ErrorMessage name='name' />
                </div>
                {/* Email field */}
                <label htmlFor='email'>Email </label><br />
                <Field type={'email'} id='email' name='email' />
                <div className='error-msg'><ErrorMessage name='email' /></div>
                {/* Phone Number field */}
                <label htmlFor='phoneNumber'>Phone number </label><br />
                <Field className='input' type={'number'} id='phoneNumber' name='phoneNumber' />
                <div className='error-msg'>
                  <ErrorMessage name='phoneNumber' />
                </div>
                {/* Password field */}
                <label htmlFor='password'>password </label><br />
                <Field type={'password'} id='password' name='password' />
                <div className='error-msg'>
                  <ErrorMessage name='password' />
                </div>
                {/* Confirm Password field */}
                <label htmlFor='confirmPassword'>Confirm Password </label><br />
                <Field type={'password'} id='confirmPassword' name='confirmPassword' />
                <div className='error-msg'>
                  <ErrorMessage name='confirmPassword' />
                </div>
                {/* Submit & Reset */}
                <div className='btn-group'>
                  <button type={'submit'} className='submit-btn'>Submit</button>
                  <button type={'reset'} className='reset-btn'>Reset</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='asset asset-pc'>
        <img src={signupsvg} alt='sign-up-img' />
      </div>
    </div>
  );
};

export default SignUp;