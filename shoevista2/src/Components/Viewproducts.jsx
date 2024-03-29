import React, { useContext, useState } from 'react';
import { Data } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Header from '../Common/Header';

const Viewproducts = () => {
  const navigate = useNavigate();
  const { product, login, loginuser } = useContext(Data);
  const { id } = useParams();
  const findView = product.filter((item) => item.id === parseInt(id));
  const [btn, setbtn] = useState(true);

  const addCart = () => {
   <><Header /></>

    if (login) {
      const [productget] = findView;
    
    
      const isProductInCart = loginuser && loginuser.cart && loginuser.cart.some((item) => item.id === productget.id);

  
      if (!isProductInCart) {
        loginuser.cart = loginuser.cart || [];
        
       
        loginuser.cart.push({ ...productget, qty: 1 });
        console.log(loginuser.cart)
        console.log(loginuser, "viewproduct");
        toast.success("Your Product is Added");
      } else {
       
        toast.error("This product is already in your cart");
        setbtn(false);
      }
    } else {
      navigate('/login');
      toast.error("Please login");
      
    }
  };
  

  return (
    <div className='container mt-5 m-3'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6'>
          {findView.map((item) => (
            <Card className='w-100'>
              <Card.Img
                className='mx-auto' 
                style={{ width: "15rem", height: "10rem" }}
                variant='top'
                src={item.img}
              />
              <Card.Body className='text-center'>
               
                <Card.Title>{item.title}</Card.Title>
                <h3 className='text-warning'>Rs {item.newPrice}</h3>
                <h5 className='text-danger'>{item.company}</h5>

                {btn ? (
                  <Button className='bg-success' variant='primary' onClick={addCart}>
                    Add to Cart
                  </Button>
                ) : (
                  <Button className='bg-danger' variant='primary' onClick={() => navigate("/cart")}>
                    Go To Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewproducts;