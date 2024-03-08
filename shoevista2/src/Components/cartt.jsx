import React, { useContext, useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Axios,Data } from '../App';
import Header from '../Common/Header';


const Cartt = () => {
  <><Header /> </>
  const { setcart, setvieworder,loginuser, } = useContext(Data);
  const [product,setProduct] = useState([])
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate();
  const [cartuser,setcartuser]=useState([]);


  const fetchCart = async () =>{
    try{
      const response = await Axios.get(`api/users/${userId}/viewcart`)

      if(response.status === 200){
        setProduct(response.data.data)
      }
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchCart();
  },[])
;

const handleQuantity = async (cartId,quantityChange) =>{
  const data = {id:cartId,quantityChange};

  try{
    await Axios.put(`/api/users/${userId}/cart`,data);
    const response = await Axios.get(`/api/users/${userId}/viewcart`);
    if(response.status === 200){
      return fetchCart()
    }
  }catch(error){
    toast.error(error)
  }
};

const handleRemoveItem = async (itemId) =>{
  console.log(itemId,"rdty");

  try{
    const response = await Axios.delete(`/api/users/${userId}/cart/${itemId}`);
    if(response === 200){
      toast.success(response.data.message)
      return fetchCart()
    }
  }catch(error){
    console.error(error);
    toast.error('error removing product from the cart')
  }
};


const handleCheckout = async () =>{
  try{
    const response = await Axios.post(`/api/users/${userId}/payment`)
    console.log(response,"payment");
    if(response === 200){
      const url = response.data.url
      const confirmation = window.confirm("payment session created . redirecting to the payment gateway. continue?")
      if(confirmation)window.location.replace(url)
    }
  }catch (error){
    toast.error(error.response.data.message)
  }
};

const calculatetotal = (cartItems) =>{
  return cartItems.reduce((total,item) => total + item.productsId.price * item.quantity,0).toFixed(2)

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
                    <a className="text-danger">
                       <i className="fas fa-angle-down mt-1"></i> 
                    </a>
                  </p>
                </div>
              </div>

              {product && product.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBCardImage className="rounded-3" fluid src={item.productsId?.image} alt="products" />
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="8">
                        <p className="lead fw-normal mb-2">{item.productsId.title}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{' '}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4" className="d-flex align-items-center justify-content-around">
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handleQuantity(item._id,-1)}>
                          -
                        </button>
                        <span className="border border-secondary p-3">{item.quantity}</span>
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handleQuantity(item._id,1)}>
                          +
                        </button>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBTypography tag="h5" className="mb-0">
                          {item.productsId.price*item.quantity}
                        </MDBTypography>
                      </MDBCol>

                      <MDBCol md="12" lg="6" xl="4" className="text-end">
                        <a  className="text-danger">
                          <MDBIcon onClick={() => handleRemoveItem(item.productsId._id)} icon="trash text-danger" size="lg" />
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
         <h1>TOTAL {calculatetotal(product)}</h1> 
        <button className="bg-warning m-2" onClick={()=>handleCheckout()}>
          ClearCart
        </button>


  <button className="bg-success" onClick={() => handleCheckout()}>
          Buy ALL
        </button>
      </div>
    </div>
  );
};

export default Cartt;