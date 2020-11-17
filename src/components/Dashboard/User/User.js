import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SplitPane from 'react-split-pane';
// import Logo from '../../../images/logos/Logo.png';
import MyRent from './MyRent';



const User= () => {
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
      defaultSize={170}
      resizerStyle={styles}
    >
      <menu className='admin__menu'>
        <img src=''/>
        <div>
            <Link to="/User"><i className="fa fa-home mr-2" aria-hidden="true"></i>My Rent</Link>
        </div>
    </menu>
       
        <div className="">
        <Route exact path="/User" component={MyRent} />
        </div>
    </SplitPane>
  </Router>
  );
};

export default User;