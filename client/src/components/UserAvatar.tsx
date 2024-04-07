import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProp {
  fromProfile?: boolean
}
const UserAvatar: React.FC<UserAvatarProp> = ({fromProfile}) => {
  return (
          <Avatar className={`${fromProfile ? "h-full w-full" :""}`}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
  )
}

export default UserAvatar