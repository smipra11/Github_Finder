import React ,{createContext, useContext,useReducer}from 'react'
import AlertReducer from "./AlertReducer"
const AlertContext = createContext()


export const AlertProvider = ({children}) =>{
  const initialstate= {
    alert:null
  }
 
  const[state,dispatch] = useReducer(AlertReducer,initialstate)

  const setAlert = (msg,type) =>{
     dispatch({type:"SET_ALERT",payload:{msg,type}})

     setTimeout(() => {
    dispatch({type:"REMOVE_ALERT"})
     }, 1000);
  }
  return(
  <AlertContext.Provider value={{alert:state,setAlert}}>
    {children}
  </AlertContext.Provider>
  )
}
export default AlertContext

