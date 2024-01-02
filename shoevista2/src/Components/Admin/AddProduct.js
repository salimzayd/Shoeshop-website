import React, { useContext, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from '../../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../SideBar';

const AddProduct = () => {
  let id = 12;
  const navigate = useNavigate();
  const { product, setProduct } = useContext(Data);
  const quantityRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const imageUrlRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPrice = parseFloat(priceRef.current.value);
    const quantity = parseInt(quantityRef.current.value);

    if (isNaN(newPrice) || isNaN(quantity)) {
      toast.error("Invalid price or quantity");
      return;
    }

    const newProduct = {
      id: id + 1,
      title: titleRef.current.value,
      newPrice,
      img: imageUrlRef.current.value,
      gender: categoryRef.current.value,
    };

    const newTask = [...product, newProduct];
    setProduct(newTask);
    navigate("/main");
    toast.success("Product Added successfully");
  };

  return (
<div className='d-flex'>

<div>
  <SideBar/>
</div>




<div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Add a Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input type="text" id="title" ref={titleRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input type="number" id="price" ref={priceRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL:
              </label>
              <input type="text" id="imageUrl" ref={imageUrlRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Gender:
              </label>
              <input type="text" id="category" ref={categoryRef} className="form-control" required />
            </div>


            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Qty:
              </label>
              <input type="number" id="quantity" ref={quantityRef} className="form-control" required />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>




</div>







   
  );
};

export default AddProduct;