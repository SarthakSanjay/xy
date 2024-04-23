import { Button } from '@/components/ui/button'
import { TOKEN } from '@/utils/constant'
import axios from 'axios'
import { Bell } from 'lucide-react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const NotificationBtn = () => {
    const navigate = useNavigate()
    const [notifications , setNotifications] = useState(0)
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/noti`,{
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then(res => setNotifications(res.data.unreadCount))
  },[])
  return (
    <Button onClick={()=>{navigate('/notification')}} className="relative flex justify-start w-3/4 text-lg gap-2" variant={"ghost"}>
    <span><Bell /></span>
    <span className="absolute bottom-5 left-6 bg-sky-500 rounded-full text-sm h-5 w-5 p-2 flex justify-center items-center">{notifications}</span>
    <span>Notificaiton</span>
  </Button>
  )
}

export default NotificationBtn