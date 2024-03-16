import { Button } from "@/components/ui/button"
import { TfiLoop } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { TbUpload } from "react-icons/tb";
import { comment } from "../types/comment";
import { CommentBtn } from "../comment/CommentBtn";

interface CommentProp{
    comment:comment
}
// comment activity
const CommentActivity: React.FC<CommentProp> = ({comment}) => {
  return (
    <div className="flex w-full justify-between ">
                    <CommentBtn tweet={comment} />
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

export default CommentActivity