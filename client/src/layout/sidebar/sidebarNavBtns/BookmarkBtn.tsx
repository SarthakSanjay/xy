import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const BookmarkBtn = () => {
  const navigate = useNavigate()
  return (
    <Button onClick={()=>{navigate('/bookmark')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Bookmark /> <span className="ml-2">Bookmark</span>
      </Button>
  )
}

export default BookmarkBtn