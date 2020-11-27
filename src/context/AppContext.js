import React, { createContext, useEffect, useState } from 'react'

//importare ed utilizzare AppContext per nei consumers
export const AppContext = createContext()


//importare ed impostare AppProvider a monte dei consumers
const AppProvider = ({ children }) => {

  const URL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18"

  const [data, setData] = useState()

  useEffect(() => {
      void (async () => {
        try {
          const res = await (await fetch(URL)).json()
          setData(res.results.data);

        } catch (err) {
          alert('Si Ë verificato un errore', err)
        }
      })()
    }, [])


  return (
    //passaggio di variabili, setVariabili e funzioni da invocare nei diversi componenti
    <AppContext.Provider value={{ data }}>
      {children}
    </AppContext.Provider>
  )

}

export default AppProvider
