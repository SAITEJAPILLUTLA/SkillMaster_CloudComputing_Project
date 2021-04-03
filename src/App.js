

import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import './components/navbar.css'
import Navbar from './components/navbar.js';
import "firebase/auth";
import "firebase/firestore";
import Home from "../src/components/home";
import { UserContext } from "./providers/UserProvider";
import UserProvider from "./providers/UserProvider";
import LoginSKILL from "../src/components/login";
require('dotenv').config()
export default function App() {
  return (<>
  <Router>
      <Navbar/>
    <Switch>


      
    <Route path='/' exact component={Home} />
      <Route path='/LoginSKILL' exact component={LoginSKILL} />

{/*     

    <Route path='/' exact component={Home} />
      <Route path='/Home' exact component={Home} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/services' exact component={Services} />
      <Route path="/thanks/:id" exact component={Thanks} /> */}
      
    </Switch>
    </Router>
  </>
  );
}
