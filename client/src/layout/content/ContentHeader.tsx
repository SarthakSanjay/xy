import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

const ContentHeader = () => {
  return (
    <Label>
    <div className="w-full h-16 flex justify-start items-center px-3">
      <button><ArrowLeft /></button>
      <h1 className="text-xl px-7">Post</h1>

    </div>
    </Label>
  )
}

export default ContentHeader