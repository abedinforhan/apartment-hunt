import React from 'react';
import { useForm } from 'react-hook-form';
import './AddRentHouseForm.scss';
const AddRentHouseForm = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{ 
        console.log(data);
        const file = data.file[0] ;
        const title = data.title ;
        const price = data.price ;
        const location = data.location ;
        const bedroom = data.bedroom ;
        const bathroom = data.bathroom ;
        
        const formData = new FormData()
        formData.append('file',file)
        formData.append('title',title)
        formData.append('price',price)
        formData.append('location',location)
        formData.append('bedroom',bedroom)
        formData.append('bathroom',bathroom)


         fetch('http://localhost:8080/addHousebyAdmin', 
        {
            method: 'POST',
            body: formData
         })  
         .then(response => response.json())
         .then(data =>  console.log(data) )
           .catch(error => console.error(error)
                )
    
    }


    return (
        <div className="addRentHouse" >
            <div className="addRentHouse__header">
               <span>Booking List</span>
                <span>Namxdcfdsfcvdsfcdsce</span>
            </div>

            <div className="addRentHouse__container">
            <form onSubmit={handleSubmit(onSubmit)}  className='row'>
               <div className='col-md-6'>
                   <h6>Name</h6>
                  <input 
                      name = 'title'
                      placeholder = 'Enter title' 
                      ref = {register({ required: true })}  
                     />
               </div>
              
               <div className='col-md-6'>
                  <h6>Price</h6>
                  <input 
                    name = 'price' 
                    placeholder = 'Price' 
                    ref = {register({ required: true })}  
                   />
              </div>

              <div className='col-md-6'>
                  <h6>Location</h6>
                   <input  
                    name = 'location' 
                    placeholder = 'Location' 
                    ref = {register({ required: true })}  
                   />
              </div>

              <div className='col-md-6'>
                  <h6>No of Bedrooms</h6>
                  <input 
                  name = 'bedroom'
                  placeholder = 'Bedroom No' 
                  ref = {register({ required: true })}  
                 />
              </div>

              <div className='col-md-6'>
                  <h6>No of Bathrooms</h6>
                  <input 
                  name = 'bathroom'
                  placeholder = 'Barhroom No' 
                  ref = {register({ required: true })}  
                 />
              </div>

              <div className='col-md-6'>
                  <h6>Thumbnail</h6>
                  <input 
                    type = "file"
                    name = 'file'
                    ref = {register({ required: true })}  
                  />
              </div>
             <button>Submit</button>
            </form>

            </div>
          
        </div>
    );
};

export default AddRentHouseForm;