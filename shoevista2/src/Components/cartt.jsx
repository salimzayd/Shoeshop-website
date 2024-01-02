import React, { useContext, useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Data } from '../App';
import Header from '../Common/Header';


const Cartt = () => {
  <><Header /> </>
  const { setcart, product, setvieworder,loginuser, } = useContext(Data);

  const navigate = useNavigate();
  const [cartuser,setcartuser]=useState([]);
  useEffect(()=>{
    setcartuser(loginuser.cart);
  },[loginuser.cart])
;

// product remove akkan
const removeTask = (x) => {
  const newTask = cartuser.filter((item) => item.id !== x);
  setcartuser(newTask);
  loginuser.cart = newTask
  toast.error('Your product is Removed');
};

// product qnty koottan
  const handleinc = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.quantity <= item.stock) {
          item.quantity += 1;
          item.newPrice = parseFloat(productprice.newPrice) * item.quantity;
        }
      }
      return item;
    });
    setcart(updatecart);
  };

  // product qnty kurakkan
  const handledec = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cartuser.map((item) => {
      if (item.id === x) {
        if (item.quantity <= item.stock && item.quantity > 1) {
          item.quantity -= 1;
          item.newPrice = parseFloat(productprice.newPrice) * item.quantity;
        }
      }
      return item;
    });
    setcart(updatecart);
  };

  const reducer =() =>{ cartuser.reduce((acc, curr) => acc + parseFloat(curr.newPrice), 0);
  }

  // cart full clear cheyyan
  const clear = () => {
    loginuser.cart=[];
    setcartuser([])
    toast.success('Your Cart is Empty');
  };

  const order = () => {
    navigate('/payment');
    setvieworder(cartuser);

    if(loginuser){
      loginuser.cart = [];
      setcartuser([]);
    }
  };

  return (
    <div>
      <section className="navu h-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning"> </span>
                    <a href="#!" className="text-danger">
                       {reducer} <i className="fas fa-angle-down mt-1"></i> 
                    </a>
                  </p>
                </div>
              </div>

              {cartuser.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBCardImage className="rounded-3" fluid src={item.img} alt="products" />
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="8">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{' '}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4" className="d-flex align-items-center justify-content-around">
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handledec(item.id)}>
                          -
                        </button>
                        <span className="border border-secondary p-3">{item.quantity}</span>
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handleinc(item.id)}>
                          +
                        </button>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBTypography tag="h5" className="mb-0">
                          {item.newPrice}
                        </MDBTypography>
                      </MDBCol>

                      <MDBCol md="12" lg="6" xl="4" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon onClick={() => removeTask(item.id)} icon="trash text-danger" size="lg" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div>
         <h1>TOTAL {reducer}</h1> 
        <button className="bg-warning m-2" onClick={(()=>clear())}>
          ClearCart
        </button>


  <button className="bg-success" onClick={order}>
          Buy ALL
        </button>
      </div>
    </div>
  );
};

export default Cartt;