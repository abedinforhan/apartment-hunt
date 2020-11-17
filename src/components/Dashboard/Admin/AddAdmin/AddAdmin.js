import React from 'react';
import { useForm } from 'react-hook-form';
import './AddAdmin.scss';


const AddAdmin = () => {

    //hook form 
    const { register, handleSubmit,errors } = useForm();

    const onSubmit = data => {
        fetch('https://shielded-waters-93893.herokuapp.com/addAdminEmail', {
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