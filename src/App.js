import './App.scss';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails/ApartmentDetails';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
      <Route path="/home">
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


      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
