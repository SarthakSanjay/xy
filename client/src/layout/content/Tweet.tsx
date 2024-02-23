import UserAvatar from "@/components/UserAvatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"


const Tweet = () => {
  return (
    <Card className="h-min flex py-2 px-3 bg-black rounded-none">
        <UserAvatar />
        <div className="mx-2 w-full min-h-[140px]  flex flex-col  ">
            <Textarea placeholder="What is happening?!" className="h-full flex-grow text-xl bg-black border-none focus-visible:ring-transparent resize-none" />
            <hr className="w-2/3" />
            <Button className="w-[100px] relative left-[410px] bg-sky-500 text-white rounded-full text-xl">Post</Button>
        </div>

</Card>
  )
}

export default Tweet