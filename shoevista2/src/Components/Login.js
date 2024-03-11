import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { Form, Link, useNavigate } from 'react-router-dom';
// import { Data } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Axios } from '../App';

const Login = () => {
  const  [LoginUser, setLoginUser] = useState([]);
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim()
    const password = e.target.elements.password.value.trim()
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL

    if(email === '' || password === ''){
      toast.error('enter both username and password');
      return;
    }
    let url = 'http://localhost:3004/api/admin/login';

    if(email === adminEmail){
      url = 'http://localhost:3004/api/admin/login';
    }

    try{
      const payload = {email,password};
      const response = await Axios.post(url,payload);


      if(response.status === 200){
        if(email === adminEmail){
          localStorage.setItem('jwt', response.data.Data.token);
          localStorage.setItem('userName',response.data.Data.user.name);
          localStorage.setItem('userId',response.data.Data.user._id);
          localStorage.setItem('email',response.data.Data.user.email);
        }else{
          localStorage.setItem('jwt',response.data.Data.token)
          localStorage.setItem('role','role')
        }

        if(email === adminEmail){
          navigate('/admin');
          toast.success('Login successfull')
        }
      }else{
        toast.error(response.message);
      }
    }catch(error){
      console.log(error);
      toast.error('invalid username or password')
    }


  
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="shadow p-4 mb-5 bg-white rounded m-3" style={{ maxwidth: '500px',width:'100%' }}>
        <Form onSubmit={handleLogin}>
          <FormGroup className='mb-3'>
            <FormControl type='text' placeholder='email address' name='email' required />

          </FormGroup>

          <FormGroup className='mb-3'>
            <FormControl type='password' placeholder='password' name='password' required/>

          </FormGroup>

          <Row className='mb-3'>
            <col>
            <Link to='/forget-password' className='text-primary'>Forgot password</Link>
            </col>
          </Row>

          <Button variant='success' type='submit' block>Login</Button>
        </Form>

        <Row>
          <col className='mt-3'>
          <h6>
            Don't have an account ? <Link to='/register'>Signup</Link>
          </h6>
          </col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;