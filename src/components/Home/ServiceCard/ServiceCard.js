import React from 'react';
import service1 from '../../../images/logos/service 1.png';
import service2 from '../../../images/logos/service 2.png';
import service3 from '../../../images/logos/service 3.png';


const ServiceCard = () => {
      return (
            <div>
                  <div class="text-center mt-5 mb-5">
                  <h5>Service</h5>
                  <h2><strong>We're an agency tailored to all<br/> clients' needs that always delivers</strong></h2>
                 </div>

            <section class = "container mt-5 mb-5">
            <div class="card-deck row d-flex justify-content-center">
            <div class="card">
            <img src={service1} class="card-img-top mx-auto" style={{height: '100px', width: '100px'}} alt="..."/>
            <div class="card-body">
                  <h5 class="card-title text-center"> <strong>Wide Range of Properties</strong> </h5>
                  <p class="text-secondary text-center"> With a robust selection of popular <br/> properties on hand, as well as <br/> leading properties from experts.</p>

            </div>
            </div>
            <div class="card">
            <img src={service2} class="card-img-top mx-auto" style={{height: '100px', width: '100px'}}  alt="..."/>
            <div class="card-body">

                  <h5 class="card-title text-center"> <strong>Financing Made Easy</strong> </h5>
                  <p class="text-secondary text-center">Our stress-free finance department <br/> that can find financial solutions to <br/> save your money.</p>

            </div>
            </div>
            <div class="card">
            <img src={service3} class="card-img-top mx-auto" style={{height: '100px', width: '100px'}}  alt="..."/>
            <div class="card-body">
                  <h5 class="card-title text-center"> <strong>Trusted by Thousands</strong> </h5>
                  <p class="text-secondary text-center">10 new offers every say, 350 offers <br/> on site, trusted by a community of <br/> thousands of users.</p>
                  
            </div>
            </div>
            </div>
            </section>
                 

            </div>
      );
};

export default ServiceCard;