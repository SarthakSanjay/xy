import { Button } from '@/components/ui/button'
import { CircleEllipsis } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const MoreBtn = () => {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/more')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
    <CircleEllipsis /> <span className="ml-2">More</span>
  </Button>
  )
}

export default MoreBtn