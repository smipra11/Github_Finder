import {useEffect,useState,useContext} from 'react'

import Spinners from '../UI/Spinners'
import UserItem from './UserItem'
import GithubContext from '../../context/github/Githubcontext'

function UserResults() {

 const {users,loading} = useContext(GithubContext)
 console.log(users)
 
 
   
if (!loading){
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2' >

      {users.map(user=>(
        <UserItem user={user}/>
      ))}
    </div>
  )
}
  else{
    return(
       <Spinners/>
    )

  }

}
export default UserResults
