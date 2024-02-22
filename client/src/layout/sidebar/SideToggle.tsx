import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import SidebarContent from "./SidebarContent"
import UserAvatar from "@/components/UserAvatar"

export function SideToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden mt-2 ">
      <Button variant={"ghost"}>

        <UserAvatar />
      </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="border border-red-500"  >
      <SidebarContent />
      
       
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
