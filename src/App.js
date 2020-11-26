import React from 'react'

//importazione componenti
import Header from './components/Header'

//importazione provider
import AppProvider from './context/AppContext'


function App() {
  return (
    <div className="App">
      <AppProvider>
        
        <Header />
    

      </AppProvider>
    </div>
  )

}

export default App