import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const MessageBtn = () => {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/messages')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Mail /> <span className="ml-2">Messages</span>
    </Button>
  )
}

export default MessageBtn