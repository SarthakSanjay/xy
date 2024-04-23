import { Button } from '@/components/ui/button'
import {useNavigate} from 'react-router-dom'
import { Home } from 'lucide-react'

const HomeBtn = () => {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Home /> <span className="ml-2">Home</span>
        </Button>
  )
}

export default HomeBtn