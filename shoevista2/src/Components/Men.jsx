import React, { useContext } from 'react'
import { Data } from '../App'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';


const Men = () => {
    const navigate=useNavigate()
    const {product} = useContext(Data)
    
    const MenProduct=product.filter((item)=>item.gender==="men")
    return (
        <div>
            <><Header /></>



            <div className='d-flex flex-wrap m-4'>
                {MenProduct.map((item)=>(
                <Card   className='m-2'   style={{ width: '17rem' }}>
                    <Card.Img  style={{width:"15rem", height:"10rem"}}   variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title  className='m-2'>{item.title}</Card.Title>
                        <Card.Text>
                        <h2> <del>RS {item.prevPrice}</del> </h2>
                        <h2>RS {item.newPrice}</h2>
                      
                        </Card.Text>
                        <Button  onClick={()=>navigate(`/viewproducts/${item.id}`)}  variant="primary">viewproducts</Button>
                    </Card.Body>
                </Card>
                 ))}
            </div>






        </div>
    )
}

export default Men