import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.scss';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails/ApartmentDetails';
import Admin from './components/Dashboard/Admin/Admin';
import User from './components/Dashboard/User/User';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
      <Route exact  path="/home">
      <Home></Home>
       </Route>
       <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/login">
            < Header/>
            <Login></Login>
        </Route>
        <Route path="/rentDetails/:apartmentId">
          <ApartmentDetails />
        </Route>
        <Route path = '/admin' >
          <Admin/>
        </Route>
        <Route path = '/dashboard/user'>
             <User/>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
