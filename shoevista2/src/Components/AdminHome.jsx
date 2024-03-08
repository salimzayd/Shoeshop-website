import React, { useContext, useEffect, useState } from 'react'
import SideBar from './SideBar'
import Card from 'react-bootstrap/Card';
import { Axios,Data } from '../App';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {
  const{userData,vieworder} =useContext(Data);
  const [user,setuser] = useState([])
  const [order,setOrder] = useState([])
const navigate=useNavigate();


useEffect(() =>{

  const fetchProducts = async ()=>{
    const response = await Axios.get("api/admin/users")
    if(response.status === 200){
      setuser(response.data.data)
    }
  }
  fetchProducts()
},[])

useEffect(() =>{
  const fetchOrders = async () =>{
    try{
      const response = await Axios.get(`api/admin/orders`)
      if(response.status === 200){
        setOrder(response.data.products)
      }
    } catch (error){

    }
  }
  fetchOrders()
},[])


  return (
    <div className='d-flex bg-secondary w-100'>
  <div>
  <SideBar/>
  </div>
<div className='d-flex mt-5 '>

<div  >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2 m-2 bg-success" 
          onClick={()=>navigate("/users")} 
        >
          <Card.Header>USERS</Card.Header>
          <Card.Body>
            <Card.Title> USERS </Card.Title>
            <Card.Text>
       <h1>  {userData.length} </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>

        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2 bg-warning" 
          onClick={()=>navigate("/vieworder")}
        >
          <Card.Header> ORDERS</Card.Header>
          <Card.Body>
            <Card.Title> ORDERS </Card.Title>
            <Card.Text>
       <h1>     {vieworder.length} </h1> 
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2 bg-danger"
        >
          <Card.Header> Sales</Card.Header>
          <Card.Body>
            <Card.Title>Sales </Card.Title>
            <Card.Text>
        <h1>  {userData.length} </h1>
           
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2  bg-primary"
        >
          <Card.Header> Delivered</Card.Header>
          <Card.Body>
            <Card.Title> Delivery </Card.Title>
            <Card.Text>
      <h1>  {userData.length+5} </h1>  
             
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
       
</div>


    </div>
  )
}
export default AdminHome;