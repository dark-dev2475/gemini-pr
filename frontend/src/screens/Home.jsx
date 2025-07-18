import React,{useContext} from 'react'
import {UserContext} from '../context/user.context'

const Home = () => {


  const {user}=useContext(UserContext);
 console.log("User in Home:", user);
  return (
    <div>
     {JSON.stringify(user)}
    </div>
  )
}

export default Home
