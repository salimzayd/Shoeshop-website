import React,{useEffect,useState} from "react";
import {MDBContainer,MDBRow,MDBCard,MDBCardBody,MDBCardImage,MDBIcon,MDBRipple,MDBBtn,MDBTypography, MDBCol } from 'mdb-react-ui-kit'
import { Axios } from "../App";
import { useNavigate,useParams } from "react-router-dom";

const OrderData = () =>{
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate();

    const {id} = useParams()


    useEffect(() =>{
        const fetchOrder = async () =>{
            try{
                const response = await Axios.get(`/api/users/${id}/orders`);
                console.log(response,"wert");
                if(response.status === 200) {
                    setOrders(response.data.data)
                }
            }catch(error){
                console.error(error);
            }
        };
        fetchOrder();
    },[id])
    console.log(orders);

    return (
        <>
        <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                            Shopping cart
                        </MDBTypography>
                    
                    <div>
                    <p className="mb-0">
                        <span className="text-warning"></span>
                        <a href="#!" className="text-danger">
                            <i className=" fas fa-angle-down mt-1"></i>
                        </a>
                    </p>
                    </div>
                    </div>


                    {orders.map((item) =>(
                        <MDBCard key={""} className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <MDBCol md="12" lg="6" xl="4">
                                        <MDBCardImage className="rounded-3" alt="products" />
                                    </MDBCol>
                                    <MDBCol md="12" lg="6" xl="8">
                                        <p className="lead fw-normal mb-2">{}</p>
                                    </MDBCol>

                                    <MDBCol md="12" lg="6" xl="4" className="text-end">
                                        <a href="#!" className="text-danger">
                                            <MDBIcon onClick={""} icon="trash text-danger" size="lg" />

                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
        
        </>
    )
}

export default OrderData;