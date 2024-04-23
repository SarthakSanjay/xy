import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Smile } from "lucide-react"
import EmojiPicker from "emoji-picker-react"

interface EBprop {
  handleEmojiClick : Function
}
export const EmojiBtn: React.FC<EBprop> = ({handleEmojiClick}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost"><Smile /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
        {/* @ts-ignore */}
            <EmojiPicker theme="auto" height={400} onEmojiClick={handleEmojiClick}/>

      </PopoverContent>
    </Popover>
  )
}
