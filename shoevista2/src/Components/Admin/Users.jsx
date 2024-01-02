import React, { useContext } from 'react';
import { Data } from '../../App';
// import Img1 from "./user.jpg";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SideBar from '../SideBar';

const Users = () => {
  const { userData } = useContext(Data);

  return (
    <div>
      {userData?.length<=0 ? <h1>No User Found</h1>:<h1>User Details</h1>}
    <div className='d-flex'>
      <div>
        <SideBar />
      </div>

      <div className='w-100'>
        <div className='table-responsive'>
          <MDBTable responsive='sm' striped bordered>
            <MDBTableHead>
              <tr>
                <th scope='col'></th>
                <th scope='col'>Username</th>
                <th scope='col'>E-Mail</th>
                
                
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userData.map((item) => (
                <tr key={item.userId}>

                <td>
                    <div className='d-flex align-items-center'>
                      {/* <img
                        src={Img1}
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      /> */}
                    </div>
                  </td>
                  <td>{item.userName}</td>
                  <td>{item.emailId}</td>
                
                  </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
     </div>
    
    
    </div>
  );
};

export default Users;