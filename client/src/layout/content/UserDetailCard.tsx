import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ReactNode } from "react"
import { tweet } from "../types/tweet"
import UserAvatar from "@/components/UserAvatar"
import { Button } from "@/components/ui/button"
import { TypographyMuted, TypographyP } from "@/components/typography/Typography"

interface UserDetailCard {
  component : ReactNode,
  tweet ?: tweet
}
const UserDetailCard : React.FC<UserDetailCard> = ({component ,tweet}) => {
  return (
    <HoverCard>
    <HoverCardTrigger asChild>
      <div className="cursor-pointer">
      {component}

      </div>
    </HoverCardTrigger>
    <HoverCardContent className="h-60 w-60 z-10 rounded-lg bg-black border">
     <div className="flex justify-between">
      <div className="h-16 w-16 ">
        <UserAvatar fromProfile={true} />
      </div>
      <Button
         variant="outline" className="border-white rounded-full ">
          Follow
        </Button>
     </div>
     <div>
      <h1>{tweet?.user?.fullname}</h1>
      <h1 className=" text-gray-500">@{tweet?.user.username}</h1>
      <p>{tweet?.user.bio}</p>
     </div>
     <div className="flex gap-5">
        <div className="flex gap-1 items-center">
          <TypographyP text={`${tweet?.user._count?.following}`} />
          <TypographyMuted text="Following" />
        </div>
        <div className="flex gap-1 items-center">
          <TypographyP text={`${tweet?.user._count?.followedBy}`} />
          <TypographyMuted text="Followers" />
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
  )
}

export default UserDetailCard