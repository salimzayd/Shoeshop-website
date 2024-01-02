import React, { useContext,useState } from 'react';
import { Data } from '../App';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';


const Main = () => {
  const navigate = useNavigate();
  const { product } = useContext(Data);
  const [search,setsearch]=useState("");
  const Ser = product.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    } else {
      return "";
    }
  });


  return (
    <div>
      <Header />

<div className='d-flex mx-5 mt-2 ' style={{justifyContent:"flex-end"}}>    
  <form class="form-inline "  >
    <input class="form-control mr-sm-2 bg-info"   onChange={(e)=>{setsearch(e.target.value)}}  type="search" placeholder="Search" aria-label="Search"/>
  </form>
</div>




    <Row className="justify-content-center m-4">
      {Ser.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
          <Card style={{ width: '17rem' }}>
            <Card.Img style={{ width: '15rem', height: '10rem' }} variant="top" src={item.img} alt='Loading...' />
            <Card.Body className="text-center">
              <Card.Title className='mt-2'>{item.title}</Card.Title>
              <Card.Text>
                <h2>
                  <del>RS {item.prevPrice}</del>

              </h2>
              
                <h2>RS {item.newPrice}</h2>
                <h4 className='text-danger'>{item.company}</h4>
              </Card.Text>
              <Button className='bg-primary' onClick={() => navigate(`/viewproducts/${item.id}`)} variant="danger">
                View Products
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Main;