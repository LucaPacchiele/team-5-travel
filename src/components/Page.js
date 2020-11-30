import React, { useContext } from 'react'

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'

import { AppContext } from "../context/AppContext";
import Tariffe from './Tariffe';
import '../assets/tariffe.css'

function Page() {
  const { data } = useContext(AppContext)

  return (
      
    <div className="Page">

      {data
        ?
        <>
        <Header />
        <Tariffe />
        </>


        
        :
        <Spinner />
       
      }

    </div>
    
  )

}

export default Page