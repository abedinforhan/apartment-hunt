import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png';

const Header = () => {
      return (
            <div>
                  <nav className="ml-5 mr-5 navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
          <img style={{height:"54.8px", width:"100px"}} src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-2">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active mx-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-right active mx-2">
              <a className="nav-link" href="#service">Service</a>
            </li>
            <li className="nav-right active mx-2">
              <a className="nav-link" href="#concern">Concern</a>
            </li>
            <li className="nav-right active mx-2">
              <a className="nav-link" href="#events">Events</a>
            </li>
            <li className="nav-item active mx-2">              
            <a className="nav-link" href="#contact">Contact</a>
            </li>
           
              
              <Link to="/login">
                <button style={{background:"#275A53"}} type="button" className="btn px-3 text-white">Login</button>
              </Link>
            
          </ul>
        </div>
      </nav>
            </div>
      );
};

export default Header;