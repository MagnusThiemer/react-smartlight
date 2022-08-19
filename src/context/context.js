import {createContext, useMemo, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({children}) => {
  const [fetchUrlAppendix, setFetchUrlAppendix] = useState('')
  const [stateObject, setStateObject] = useState('')
  const [lightSettings, setLightSettings] = useState({
    'on': false
  })

  const value = useMemo(
    () => ({fetchUrlAppendix, setFetchUrlAppendix, lightSettings, setLightSettings, stateObject, setStateObject}),
    [fetchUrlAppendix, lightSettings, stateObject]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
 
export {StateContext, ContextProvider};