import React from 'react'

//importazione componenti
import Page from './components/Page'

//importazione provider
import AppProvider from './context/AppContext'


function App() {

  return (
    <div className="App">
      <AppProvider>

        <Page />

      </AppProvider>
    </div>
  )

}

export default App