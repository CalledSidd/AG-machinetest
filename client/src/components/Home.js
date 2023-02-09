import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/Authcontext'
import Sidebar from './Nav'


const Home = () => {
  let {user, authTokens} = useContext(AuthContext)
  const Navigate = useNavigate()

  useEffect(() => {
      if(! authTokens){
          Navigate('/login')
      }else{
        
      }
  },[])



  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default Home