import { Search } from "@/components/Search"
import { Logout } from "../auth/Logout"

const RightBar = () => {
  return (
    <div className="w-[33.13%] h-full hidden md:block">
        <div className="flex gap-2 my-2 mx-2">
        <Search />
        <Logout />
        </div>
    </div>
  )
}

export default RightBar