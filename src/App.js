
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import styled from "styled-components";
import Header from "./Components/Header/Header";

import { createContext, useState } from "react";
import CarDetails from "./Components/CarDetails/CarDetails";

import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header />
      
        <Switch>
        
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/car">
            <CarDetails/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          
          
          
          
        </Switch>
      </Router>
      
    </UserContext.Provider>
    </div>)
}

export default App;
