import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Logo = () => {
  return (
    <Avatar className="h-full w-12 ">
        <AvatarImage src="/XY.png" />
        <AvatarFallback>XY</AvatarFallback>
    </Avatar>
  )
}

export default Logo