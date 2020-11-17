import React, { useEffect, useState } from 'react';
import './BookingList.scss';
import TableRow from './TableRow';

const BookingList = () => {
  
    const [houses,setHouses] =useState([])
     
    useEffect(() => {
       fetch('https://shielded-waters-93893.herokuapp.com/customerHouses')
      .then(res => res.json())
      .then(data => setHouses(data))
      .then(()=>console.log(houses))
      },[])
      

    return (
       <div className="bookingList ">
             <div className="bookingList__header">
               <span>Booking List</span>
                <span>Namxdcfdsfcvdsfcdsce</span>
            </div>
      
           <div className='bookingList__container'>
                <table className="table">
                    <thead >
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                      houses.map(house => 
                            <TableRow  
                            name={house.name}  
                            email={house.email} 
                            phone={house.phone} 
                            message={house.message} 
                            status={house.status} 
                             />
                      )
                    }   
                   </tbody>
                </table>
                </div>
        </div>
   
    
    );
};

export default BookingList;