
import React,{createContext,useReducer,useEffect} from 'react'
import GithubReducer from './GithubReducer'
const GithubContext = createContext()

export  const GithubProvider =({children}) =>{
  const inititialState={
    users:[],
    loading:false
  }
  const [state,dispatch] = useReducer(GithubReducer,inititialState)
  const searchUser = (text) =>[
    setLoading(),
    fetch(`https://api.github.com/search/users?q=${text}`)
    .then(response=>response.json())
    .then(data=>dispatch({
       type:"GET_USER" ,
       payload:data.items
    }))
  ]
 
  const clearUser = ()=>{
   dispatch({type:"CLEAR_USER"})
  }

   const setLoading = () =>{
    dispatch({type:"SET_LOADING"})
   }
    return(
        <GithubContext.Provider value={{users:state.users,loading:state.loading,searchUser,clearUser}}>
         {children}
        </GithubContext.Provider>
    )

}
export default GithubContext