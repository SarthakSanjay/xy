import { useEffect, useState } from 'react'
import './App.css'
import  Cookies from 'js-cookie'
import Sidebar from './layout/sidebar/Sidebar'
import Auth from './layout/auth/Auth'
import RightBar from './layout/rightSection/RightBar'
import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const token = Cookies.get('token')
    if(token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])
  if(isLoggedIn === false){
    return <Auth />
  }
  return (
      <div className='dark:bg-black dark:text-white h-screen w-screen flex '>
        <Sidebar />
        <Outlet />
        <RightBar />
      </div>
    
  )
}

export default App
