import React, { useContext } from 'react'

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'

//importazione provider
import AppProvider from '../context/AppContext'

import { AppContext } from "../context/AppContext";

function Page() {
  const { data } = useContext(AppContext)

  return (

    <div className="Page">

      {data
        ?
        <Header />



        
        :
        <Spinner />
      }

    </div>
  )

}

export default Page