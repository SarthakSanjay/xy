import { Button } from "@/components/ui/button";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { tweet } from "../types/tweet";
import { Repeat2 } from "lucide-react";
interface RepostBtnProp {
  tweet: tweet;
}
const RepostBtn: React.FC<RepostBtnProp> = ({ tweet}) => {
  const handelRepost = () => {
    axios
      .put(`${import.meta.env.VITE_API_BASE_URL}/repost/${tweet.id}`, null, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(() => {
        console.log("tweet reposted");
      });
  };
  return (
    <Button
      onClick={handelRepost}
      className="hover:text-green-500 hover:bg-green-500/30 rounded-full h-10 w-10 p-0"
      variant={"link2"}
    >
      <Repeat2 className={`${tweet.isReposted ? "text-green-500 font-extrabold" : ''}`} />
       <span className="text-sm pl-1">{tweet._count.repost}</span>
    </Button>
  );
};

export default RepostBtn;
