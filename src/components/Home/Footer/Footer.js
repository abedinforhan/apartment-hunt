import React from 'react';
import './Footer.scss';
import fb from '../../../images/logos/facebook.png';
import insta from '../../../images/logos/instagram.png';
import link from '../../../images/logos/linkedIn.png';
import utube from '../../../images/logos/utube.png';



const Footer = () => {
      return (
            <div class = "footer-container ">
            <div class = "row m-5">
                <div class="col-md-3 mt-5 p-5">
                    <h6>H#340(4th Floor), <br/> Road#24,New DOHS,Mohakhali, Dhaka, Bangladesh <br/> Phone: 018XXXXXXXX <br/> E-mail: info@company.com</h6>
                </div>
                <div class="col-md-3 mt-5">
                <h4>Company</h4>
                <p>About</p>
                <p>Site Map</p>
                <p>Support Center</p>
                <p>Terms & Conditions</p>
                <p>Submit Listing</p>
                </div>
                <div class = "col-md-3 mt-5">
                <h4>Quick Links</h4>
                <p>Quick Links</p>
                <p>Rentals</p>
                <p>Sales</p>
                <p>Contact</p>
                <p>Terms & Conditions</p> 

                </div>
                <div class = "col-md-3 mt-5">
                      <div>
                      <h4>About us</h4>
                <p>We are the top real estate <br/> agency in Dhaka, with agents <br/> available to answer any <br/> question 24/7.</p>

                      </div>
                      <div class = "d-flex justify-content-between">
                            <img style={{height: '20px'}} src={fb} alt=""/>
                            <img style={{height: '20px'}} src={insta} alt=""/>
                            <img style={{height: '20px'}} src={link} alt=""/>
                            <img style={{height: '20px'}} src={utube} alt=""/>
                      </div>
               
                </div>
            </div>
           
        </div>
      );
};

export default Footer;