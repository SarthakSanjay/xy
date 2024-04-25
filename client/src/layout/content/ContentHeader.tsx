import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import {useNavigate} from 'react-router-dom'
interface ContentHeaderProp {
  text:string
  total?:number
  type?:string
}
const ContentHeader: React.FC<ContentHeaderProp> = ({text,total,type}) => {
  const navigate = useNavigate()
  return (
    <Label>
    <div className="w-full h-16 flex justify-start items-center px-3">
      <button onClick={()=>{
        navigate(-1)
      }}><ArrowLeft /></button>
      <div>

      <h1 className="text-xl px-7">{text}</h1>
      <h2 className="text-sm text-muted-foreground px-7">{total} {type}</h2>
      </div>

    </div>
    </Label>
  )
}

export default ContentHeader