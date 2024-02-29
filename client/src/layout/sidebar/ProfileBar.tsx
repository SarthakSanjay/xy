import UserAvatar from "@/components/UserAvatar"
import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"

const ProfileBar: React.FC = () => {
    const [username , setUsername] = useState<string>('')
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/username`,{
            headers:{
                Authorization:`Bearer ${Cookies.get('token')}`
            }
        }).then((res)=>{
            setUsername(res.data.username)
        })
    },[])
  return (
    <div className="h-12 w-1/2 text-white flex items-center justify-between">
        <UserAvatar />
        <h1 className="text-gray-500">@{username}</h1>
    </div>
  )
}

export default ProfileBar