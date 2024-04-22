import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Smile } from "lucide-react"
import EmojiPicker from "emoji-picker-react"
import { useContext } from "react"
import { stateContext } from "@/App"
export function EmojiBtn() {
  const {setEmoji} = useContext(stateContext)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost"><Smile /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
            <EmojiPicker theme={'dark'} height={400}  onEmojiClick={(n)=>{
              setEmoji(n.emoji)
            }}/>

      </PopoverContent>
    </Popover>
  )
}
