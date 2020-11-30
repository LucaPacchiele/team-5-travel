import React, { useContext } from 'react'



import '../assets/Giorni.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
import MapComp from './MapComp'
import ListaGiorni from './ListaGiorni'
//importazione provider
import AppProvider from '../context/AppContext'

import { AppContext } from "../context/AppContext";

function Page() {
  const { data } = useContext(AppContext)

  return (

    <div className="Page">

      {data
        ?
        <>
        <Header />
        <MapComp />
        {/* // <ListaGiorni /> */}
        </>

        // <Header />


        
        :
        <Spinner />
      }

    </div>
  )

}

export default Page