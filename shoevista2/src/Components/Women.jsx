import React,{useContext} from 'react';
import { Data } from '../App';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';

const Women = () => {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const Wproduct = product.filter((item) => item.gender === 'wommen');
  console.log(Wproduct);

  return (
    <>
    <Header/>

    <Row className='m-4'>
      {Wproduct.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card className='' style={{ width: '18rem' }}>
            <Card.Img style={{ width: '15rem', height: '10rem' }} variant='top' src={item.img} />
            <Card.Body>
              <Card.Title className='m-2'>{item.title}</Card.Title>
              <Card.Text>
                <h2>
                  <del>RS {item.prevPrice}</del>
                </h2>
                <h2>RS {item.newPrice}</h2>
              </Card.Text>
              <Button onClick={() => navigate(`/viewproducts/${item.id}`)} variant='primary'>
                View Products
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default Women;