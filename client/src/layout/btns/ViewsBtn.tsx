import { Button } from "@/components/ui/button"
import { BiBarChart } from "react-icons/bi"

const ViewsBtn = () => {
  return (
    <Button className="hover:text-sky-500 hover:bg-sky-500/30 rounded-full h-10 w-10 p-0" variant={"link2"}>
    <BiBarChart />
</Button>
  )
}

export default ViewsBtn