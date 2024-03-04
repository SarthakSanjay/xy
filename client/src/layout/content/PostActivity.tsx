import { Button } from "@/components/ui/button"
import { TfiLoop } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { TbUpload } from "react-icons/tb";
import { Comment } from "../postOpt/Comment";
import { tweet } from "./Content";

interface TweetProp{
    tweet : tweet
}

const PostActivity: React.FC<TweetProp> = ({tweet}) => {
  return (
    <div className="flex w-full justify-between ">
                    <Comment tweet={tweet} />
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