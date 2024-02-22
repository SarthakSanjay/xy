import Logo from "@/components/Logo"
import { SideToggle } from "./sidebar/SideToggle"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"


const Header = () => {
  return (
    <div className="w-full md:h-[52px] h-[102px] flex">
       
        <div className="flex flex-col w-full h-full ">
        <div className="md:hidden h-1/2 flex justify-between w-[56%] ">
            <SideToggle />
            <Logo />
        </div>
        <div className="w-full h-1/2 md:h-full flex ">
            <Button variant={"navigation"} size={"nav"}>For you</Button>
            <Button variant={"navigation"} size={"nav"}>Following</Button>
            <div className=" absolute md:static h-full w-12 md:flex items-center justify-center right-2 top-2">
                <ModeToggle />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header