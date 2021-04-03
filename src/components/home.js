
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Countdown from 'react-countdown';
import '../components/home.css'
import signInWithGoogle  from "../providers/UserProvider";
import firebase from "firebase/app";
import Footer from "../components/footer"

import auth from "../components/firebase"

import { UserContext } from "../providers/UserProvider";






function Home() {


    
const provider = new firebase.auth.GoogleAuthProvider();

  
    
  const user = useContext(UserContext);
  
console.log(user.user)
if((user.user)==null){
  return <Redirect to="/LoginSKILL" />
}
  if(false){

    console.log("hello")
    return (
        <>
        <section className=" mt-5 ">
            <div className="row justify-content-center">

            <div className="mainSec ">

            <div>
                <img src={user.photoURL}></img>
                </div>
                
            </div>

            </div>
            <div className="mt-4 row justify-content-center">
            <Link to='/Instructions' className="btn effect01" ><span>Hey {user.displayName} Let's Start our Quest</span>
                </Link>     
            {/* <Link to='/ProfilePage' className="btn effect01" ><span>ProfilePage</span>
                </Link>      */}          
        </div>
        
          </section>
          
        <Link to='/ProfilePage' className="mx-5 px-5 btn effect01 my-4" ><span>Profile</span></Link> 
          <Footer/>
        </>
    )
}
}

export default Home
