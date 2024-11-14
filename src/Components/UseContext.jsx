import React, { createContext } from 'react'

 export  const AppContext = createContext();

function ContextProvider(props) {
    const phone = '+123456789'
    const name = "Liton"
   
  return (
  <AppContext.Provider value={{phone, name}} >
        {props.children }
    </AppContext.Provider>
  )
}

export default ContextProvider
