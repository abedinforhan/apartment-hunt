import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddAdmin.scss';


const AddAdmin = () => {


const [houses, setHouses] = useState()

useEffect(() => {
    fetch('http://localhost:8080/houses')
    .then(res =>  res.json())
    .then(data => setHouses(data[0]))
},[])


console.log(houses)

    //hook form 
    const { register, handleSubmit,errors } = useForm();

    const onSubmit = data => {
        // console.log(data)
        fetch('http://localhost:8080/addAdminEmail', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response => response.json())
        .then(data => console.log(data))   
    }
    return (
        <div className="addAdmin ">
             <div className="addRentHouse__header">
               <span>Add a Admin</span>
                <span>Namxdcfdsfcvdsfcdsce</span>
            </div>


    
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <h6>Email Address :</h6>
                <input name="email" ref={register({ required: true })} />
               {errors.exampleRequired && <span>Email is required</span>}
              <input type="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;