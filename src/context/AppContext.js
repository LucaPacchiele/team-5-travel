import React, { createContext, useEffect, useState } from 'react'

//importare ed utilizzare AppContext per nei consumers
export const AppContext = createContext()


//importare ed impostare AppProvider a monte dei consumers
const AppProvider = ({ children }) => {


  const url = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18"

  const [giorni, setGiorni] = useState([])
  

  const callApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      //configurare lo stato
      setGiorni(data.results.data.rows)




    } catch (err) {
      console.warn('error', err)
    }
  }

  //all'avvio del componente provider
  useEffect( () => {
    callApi()
  }, [])

  return (
    //passaggio di variabili, setVariabili e funzioni da invocare nei diversi componenti
    <AppContext.Provider value={{ callApi, giorni}}>
      {children}
    </AppContext.Provider>
  )


}

export default AppProvider
