import React, { useContext, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { userData, setLogin, setloginuser } = useContext(Data);
  const navigate = useNavigate();
  const userRef = useRef(null);
  const passRef = useRef(null);

  
  const logins = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;

    const users1 = userData.find((item) => item.userName === username );
    const users2 = userData.find((item) =>  item.password === password);

    if (users1 && users2) {
      setLogin(true);
      toast.success('Thank you For Login');
      navigate('/');
      setloginuser(users1)
      setloginuser(users1)
      
    } else {
      toast.error('User not found');
      
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="shadow p-3 mb-5 bg-white rounded m-3" style={{ width: '25rem' }}>
        <Row className="mb-3">
          <Col>
            <input className="form-control" placeholder="Username" ref={userRef} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <input type="password" className="form-control" placeholder="Password" ref={passRef} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h6 className="text-primary">Forgot password</h6>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Button variant="success" onClick={logins} block>
              Login
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <h6 className="mt-3">
              Don't have an account? <Link to="/register">Signup</Link>
            </h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;