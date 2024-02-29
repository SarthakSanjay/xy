import { useEffect, useState } from 'react'
import './App.css'
import Content from './layout/content/Content'
import  Cookies from 'js-cookie'
import Sidebar from './layout/sidebar/Sidebar'
import Auth from './layout/auth/Auth'
import RightBar from './layout/rightSection/RightBar'


function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(Cookies.get('token')){
      setIsLoggedIn(true)
    }
  },[])
 
  if(!isLoggedIn){
    return <Auth />
  }
  return (
      <div className='bg-black h-screen w-screen flex '>
        <Sidebar />
        <Content />
        <RightBar />
      </div>
    
  )
}

export default App
