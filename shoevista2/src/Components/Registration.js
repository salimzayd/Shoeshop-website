import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../App';

const Registration = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(Data);
  const userNameRef = useRef(null);
  const emailIdRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const emailId = emailIdRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !emailId || !password) {
      setErrorMessage('Please fill out the form');
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/.test(emailId);
    if (!isEmailValid) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (userData.find((user) => user.userName === username)) {
      setErrorMessage('Username already exists. Please choose a different one.');
      return;
    }

    setErrorMessage('');
    const newUser = { userName: username, emailId: emailId, password: password, cart: [] };
    setUserData([...userData, newUser]);

    navigate('/login');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className='rounded shadow p-3 mb-5 bg-white' style={{ width: '25rem' }}>
        <form>
          <h1 className='mt-3' style={{ fontFamily: 'inherit' }}>
            SIGN UP
          </h1>
          <input ref={userNameRef} className='form-control mt-3' type='text' placeholder='Username' required />
          <br />
          <input ref={emailIdRef} className='form-control mt-4' type='email' placeholder='Email' required/>
          <br />
          <input ref={passwordRef} className='form-control mt-4' type='password' placeholder='Password' required/>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button className='btn btn-primary rounded mt-4 w-100' onClick={submit}>
            Sign up
          </button>
          <p className='mt-4'>
            Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;