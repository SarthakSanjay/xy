import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const ProfileBtn = () => {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/profile')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
    <User /> <span className="ml-2">Profile</span>
  </Button>
  )
}

export default ProfileBtn