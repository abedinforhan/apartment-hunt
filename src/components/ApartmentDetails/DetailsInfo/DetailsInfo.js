import React from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../../../images/images/img1.png';
import img2 from '../../../images/images/img2.png';
import img3 from '../../../images/images/img3.png';
import img4 from '../../../images/images/img4.png';
import img5 from '../../../images/images/img5.png';


const DetailsInfo = () => {

      const { register, handleSubmit, watch, errors } = useForm();
      const onSubmit = data => console.log(data);
  
      console.log(watch("example"))

      
      
      return (
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="w-100">
                        <img height="350px" width="730px" src={img1} alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100 mt-4">
                        <img height="110px" width="170px" src={img2} alt="" />
                        <img height="110px" width="170px" src={img3} alt="" />
                        <img height="110px" width="170px" src={img4} alt="" />
                        <img height="110px" width="170px" src={img5} alt="" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <form className="p-4" style={{ backgroundColor: "#F4F4F4" }} onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="exampleRequired" placeholder="Full Name" required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Phone No." required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Email Address" required ref={register({ required: true })} />
                        <br />

                        <textarea className="form-control" name="exampleRequired" placeholder="Massage" cols="30" rows="7" Massage required ref={register({ required: true })} />
                        <br />

                        <button style={{backgroundColor: 'rgba(39, 90, 83, 1)', color: 'white'}} type="submit" className="btn w-100">Request Booking</button>

                    </form>
                </div>
            </div>
        </div>
      );
};

export default DetailsInfo;