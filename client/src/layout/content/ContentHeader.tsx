import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import {useNavigate} from 'react-router-dom'
const ContentHeader = () => {
  const navigate = useNavigate()
  return (
    <Label>
    <div className="w-full h-16 flex justify-start items-center px-3">
      <button onClick={()=>{
        navigate(-1)
      }}><ArrowLeft /></button>
      <h1 className="text-xl px-7">Post</h1>

    </div>
    </Label>
  )
}

export default ContentHeader