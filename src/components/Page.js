import React, { useContext, useEffect, useState } from 'react'

import '../assets/Posti.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
import MapComp from './MapComp'
import ListaPosti from './ListaPosti'
import ListaInfo from './ListaInfo'
import Logout from './Logout'

import { AppContext } from "../context/AppContext";
import  { authContext }  from "../context/ProvideAuth";

import Tariffe from './Tariffe';
import '../assets/cardInfo.css';



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
        <MapComp />
        <ListaPosti />
        <Tariffe /> 
        <ListaInfo />
        
    
        </>

        :
        <Spinner />
       
      }

    </div>
    
  )

}

export default Page