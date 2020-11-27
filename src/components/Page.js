import React, { useContext } from 'react'



import '../assets/Giorni.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
<<<<<<< HEAD
import MapComp from './MapComp'
=======
import ListaGiorni from './ListaGiorni'

>>>>>>> 745640056e39cf6d2236a010c1bd246b74ddd64b
//importazione provider
import AppProvider from '../context/AppContext'

import { AppContext } from "../context/AppContext";

function Page() {
  const { data } = useContext(AppContext)

  return (

    <div className="Page">

      {data
        ?
<<<<<<< HEAD
        <>
        <Header />
        <MapComp />
        </>

=======
        // <Header />
        <ListaGiorni />
>>>>>>> 745640056e39cf6d2236a010c1bd246b74ddd64b


        
        :
        <Spinner />
      }

    </div>
  )

}

export default Page