import React, { useContext, useEffect, useState } from 'react'



import '../assets/Posti.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
import MapComp from './MapComp'
import ListaPosti from './ListaPosti'
import Operator from './Operator';
import Footer from './Footer';


import Logout from './Logout'




import { AppContext } from "../context/AppContext";
import  { authContext }  from "../context/ProvideAuth";

import Tariffe from './Tariffe';
import '../assets/tariffe.css'



function Page() {
  const { data } = useContext(AppContext)
  let auth = useContext(authContext);

  useEffect(() => {
    console.log("PAGE: ", auth)
  },[])
  
  return (
      
    <div className="Page">

      {data
        ?
        <>

        <Logout />

        <Header />
        <Operator/>
        <MapComp />
        <Tariffe />
        <ListaPosti />
        <Footer/>

       
        

    
        </>

        :
        <Spinner />
       
      }

    </div>
    
  )

}

export default Page