import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserAltSlash } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiVolumeMute } from "react-icons/bi";
import { MdOutlineBlock } from "react-icons/md";


export function More() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger  asChild>
        <Button  variant={"link2"}>...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem><FaUserAltSlash /> <span className="mx-2">Not interested in this post</span></DropdownMenuItem>
        <DropdownMenuItem><AiOutlineUserAdd /> <span className="mx-2">Follow username</span></DropdownMenuItem>
        <DropdownMenuItem><BiVolumeMute /> <span className="mx-2">Mute username</span></DropdownMenuItem>
        <DropdownMenuItem><MdOutlineBlock /> <span className="mx-2">Block username</span></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
