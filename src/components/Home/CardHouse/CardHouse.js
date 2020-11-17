import React, { useState } from 'react';
import img1 from '../../../images/images/img1.png';
import img2 from '../../../images/images/img2.png';
import img3 from '../../../images/images/img3.png';
import img4 from '../../../images/images/img4.png';
import img5 from '../../../images/images/img5.png';
import img6 from '../../../images/images/img6.png';
import location from '../../../images/logos/map-marker-alt-solid 1.png';
import bed from '../../../images/logos/bed 1.png';
import bath from '../../../images/logos/bath 1.png';
import './CardHouse.scss';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData/fakeData';

const CardHouse = () => {

      const [destination, setDestination] = useState([fakeData]);

    const [detailsInfo, setDetailsInfo] = useState({});

      return (
            <div>
                 <div class="text-center">
                  <h5>House Rent</h5>
                  <h2><strong>Discover the latest Rent  <br/> available today</strong></h2>
                 </div>
            <section class = "container mt-5 mb-5">
            <div class="card-deck row d-flex justify-content-center">
            <div class="card">
            <img src={img1} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h4 class="card-title"> <strong>Washington Avenue</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$194</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}}>View Details</button> </Link>
                 </div>
            </div>
            </div>
            <div class="card">
            <img src={img2} class="card-img-top" alt="..."/>
            <div class="card-body">

                  <h4 class="card-title"> <strong>Family Apartment three</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$356</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}} >View Details</button> </Link>                 </div>
            </div>
            </div>
            <div class="card">
            <img src={img3} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h4 class="card-title"> <strong>Gorgeous House</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$256</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}}>View Details</button> </Link>                 </div>
            </div>
                  </div>
                  </div>
                 </section>
                 <section class = "container">
                 <div class="card-deck row d-flex justify-content-center">
            <div class="card">
            <img src={img4} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h4 class="card-title"> <strong>Luxury Villa</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$466</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}}>View Details</button> </Link>                 </div>
            </div>
            </div>
            <div class="card">
            <img src={img5} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h4 class="card-title"> <strong>Epic Huda Palace</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$526</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}}>View Details</button> </Link>                 </div>
            </div>
            </div>
            <div class="card">
            <img src={img6} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h4 class="card-title"> <strong>Washington Avenue</strong> </h4>
                  <div class = "d-flex justify-content-start">
                  <img class="img" src={location} alt=""/>  <p class="text-secondary ">Nasirabad H/S Chattogram</p>
                  </div>
                 <div class="d-flex justify-content-between">
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bed} alt=""/>  <p class="text-secondary">3 Bedrooms</p>
                       </div>
                       <div class="d-flex justify-content-start">
                       <img class="img" src={bath} alt=""/>  <p class="text-secondary">2 Bathroom</p>
                       </div>
                 </div>
                 <br/>

                 <div class = "d-flex justify-content-between">
                  <h3> <strong>$286</strong></h3>
                  <Link to={"/rentDetails/"+ detailsInfo.id }>
                    <button style={{backgroundColor:'rgba(39, 90, 83, 1)', color: 'white'}}>View Details</button> </Link>                 </div>
            </div>
                  </div>
                  </div>
                 </section>
            </div>
      );
};

export default CardHouse;