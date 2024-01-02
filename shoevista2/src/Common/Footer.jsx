import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';



const Footer = () => {
  return (
    <div className='w-100' >
    <footer className="bg-dark text-white pt-5 pb-4 w-100 ">
      <div className="container text-center text-md-left w-100">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Company</h5>
            <p>
            Shoe vista, Inc. is a leading footwear and apparel retailer that unlocks the "inner sneakerhead" in all of us. With approximately 2,600 retail stores in 26 countries across North America, Europe, Asia, Australia, and New Zealand.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
            <p>
              <span className="text-white" style={{ textDecoration: 'none' }}>Sandals</span>
            </p>
            
            <p>
              <span className="text-white" style={{ textDecoration: 'none' }}>Shoes</span>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Services</h5>
            <p>
              <span className="text-white" style={{ textDecoration: 'none' }}>Return & Refund Policy</span>
            </p>
            <p>
              <span className="text-white" style={{ textDecoration: 'none' }}>Free Shipping</span>
            </p>
            
          </div>
          <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p>
            <BsInstagram />  <BsFacebook/> <AiFillTwitterCircle/> <BsWhatsapp/>
            </p>
           
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-12">
            <p className="text-center">
              Copyright &copy; 2023 All rights reserved by Shoe vista
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;