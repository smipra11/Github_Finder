
import React, { createContext, useReducer, useEffect,useState } from 'react'
import { createRenderer } from 'react-dom/test-utils'
import { FaWindowRestore, FaWindows } from 'react-icons/fa'
import GithubReducer from './GithubReducer'
const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const inititialState = {
    users: [],
    user: {},
    repos:[],
    loading: false
  }
  const [state, dispatch] = useReducer(GithubReducer, inititialState)
  const[name,setname] = useState({})
  
  const searchUser = (text) => {
    return (
      setLoading(),
      fetch(`https://api.github.com/search/users?q=${text}`)
        .then(response => response.json())
        .then(data => dispatch({
          type: "GET_USER",
          payload: data.items
        })))
  }
  const getUser = async(login) => {

    setLoading()
    const response = await fetch(`https://api.github.com/users/${login}`)
    //console.log(response.data.login)
   
    if (response.status === 404) {
      window.location = "/notfound"
    }
    else {
      const  data  = await response.json();

      console.log(name)
      dispatch({
        type: "GET_SINGLEUSER",
        payload: data
      })
    }
  }
  


  const clearUser = () => {
    dispatch({ type: "CLEAR_USER" })
  }

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" })
  }
   const getRepos = async(login) =>{
    setLoading()
    const params  = new URLSearchParams({
      sort:'created',
      per_page:10


    })
    const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`)
    const data = await response.json();
    console.log(data)
    dispatch({
      type:"GET_REPOS",
      payload:data
    })

   }
  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading, getUser, searchUser, clearUser, user: state.user ,repos:state.repos,getRepos}}>
      {children}
    </GithubContext.Provider>
  )

}
export default GithubContext