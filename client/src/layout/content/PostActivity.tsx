import { Button } from "@/components/ui/button"
import { LuMessageSquare } from "react-icons/lu";
import { TfiLoop } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { TbUpload } from "react-icons/tb";




const PostActivity = () => {
  return (
    <div className="flex w-full justify-between ">
                    <Button variant={"link2"}>
                        <LuMessageSquare />
                    </Button>
                    <Button variant={"link2"}>
                        <TfiLoop />
                    </Button>
                    <Button variant={"link2"}>
                        <IoMdHeartEmpty />
                    </Button>
                    <Button variant={"link2"}>
                        <BiBarChart />
                    </Button>
                    <div className="mx-2 ">
                    <Button className="px-1" variant={"link2"}>
                        <FiBookmark />
                    </Button>
                    <Button className="px-1" variant={"link2"}>
                        <TbUpload />
                    </Button>
                    </div>
    </div>
  )
}

export default PostActivity