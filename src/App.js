import './App.css';

import React, { useState } from 'react';


import Todo from "./Components/Todo";

import {

  Switch,
  Route,
  Link
} from "react-router-dom";
import Company from './Components/Company';
import Bmw from './Components/Bmw';
import { Navbar } from 'react-bootstrap';
import Bookings from './Components/Bookings';
import Contact from './Components/Contact';
import { CartProvider } from "react-use-cart";

import ShowBmw from './Components/ShowBmw';
import Cart from './Components/Cart';
import Cont from './Components/Cont';








function App(props) {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [address, setAddress] = useState("")



  const [mode, setMode] = useState('light')

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';






    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'White';

    }

  }


  return (
    <>

      <Navbar mode={props.mode} toggleMode={props.toggleMode} />

      <Switch>
        <CartProvider>
          <Route exact path="/">
            <Todo mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/company">
            <Company mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/bmw">
            <Bmw mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/booked">
        
            <Bookings fname={fname} lname={lname} address={address} mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/contact">
            <Contact mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/show">
            <ShowBmw mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/cart">
            <Cart mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/cont">
            <Cont fname={fname} lname={lname} address={address} setFname={setFname} setLname={setLname} setAddress={setAddress} mode={mode} toggleMode={toggleMode} />
          </Route>
        </CartProvider>

      </Switch>
      {/* <Todo/>
      <Todolist/> */}




    </>
  );
}

export default App;
