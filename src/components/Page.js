import React, { useContext } from 'react'



import '../assets/Posti.css';

//importazione componenti
import Header from './Header'
import Spinner from './Spinner'
import MapComp from './MapComp'
import ListaPosti from './ListaPosti'



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




       
        <ListaPosti />
 

        <MapComp />
    
        </>





        
        :
        <Spinner />
       
      }

    </div>
    
  )

}

export default Page