import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const ExploreBtn = () => {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/explore')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Search /> <span className="ml-2">Explore</span>
        </Button>
  )
}

export default ExploreBtn