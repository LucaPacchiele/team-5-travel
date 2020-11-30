import React, { useContext } from 'react'



import '../assets/Posti.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
import MapComp from './MapComp'
import ListaPosti from './ListaPosti'
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
        <ListaPosti />
        </>

        :
        <Spinner />
      }

    </div>
  )

}

export default Page