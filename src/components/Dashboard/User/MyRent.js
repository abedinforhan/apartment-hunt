import React from 'react';
import './myRent.scss';

const MyRent = () => {
    return (
        <div className='myRent' >
               <div className="bookingList__header">
               <span>My All Rents</span>
                <span>Namxdcfdsfcvdsfcdsce</span>
            </div>
      
           <div className='bookingList__container'>
                <table className="table">
                    <thead >
                        <tr>
                        <th scope="col">House Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                      
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyRent;