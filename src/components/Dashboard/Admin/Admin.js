import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Logo from '../../../Images/Logo.png';
import AddAdmin from '../Admin/AddAdmin/AddAdmin';
import AddRentHouseForm from '../Admin/AddHouse/AddRentHouseForm';
import BookingList from '../Admin/Bookinglist/BookingList';
import './Admin.scss';


const Admin = () => {
  const styles = {
    background: '#fff',
    width: '0px',
    margin: '0px 5px',
    height: '100%',
    padding: '1px',
  };
  
  return (
    <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={180}
      resizerStyle={styles}
    >
      <menu className='admin__menu'>
        <img src={Logo}/>
          <Link to="/admin">
            <div>
              <i className="fa fa-inbox mr-2" aria-hidden="true"></i>
                 Booking List
             </div>
          </Link>
          <Link to="/addRentHouse">
             <div>
               <i className="fa fa-plus mr-2" aria-hidden="true"></i>
               Add House
              </div>
         </Link>
         <Link to="/addNewAdmin">
           <div>
              <i className="fa fa-user mr-2" aria-hidden="true"></i>
             Add New Admin
            </div>
          </Link>
      </menu>
       
       
      <div classNameName="">
        <Route exact path="/admin" component={BookingList} />
        <Route path="/addRentHouse" component={AddRentHouseForm} />
        <Route path="/addNewAdmin" component={AddAdmin} />
      </div>
    </SplitPane>
  </Router>
  );
};

export default Admin;