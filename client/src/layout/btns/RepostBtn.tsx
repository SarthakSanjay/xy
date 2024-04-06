import { Button } from "@/components/ui/button";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { TfiLoop } from "react-icons/tfi";
interface RepostBtnProp {
  tweetId: number;
}
const RepostBtn: React.FC<RepostBtnProp> = ({ tweetId }) => {
  const handelRepost = () => {

    axios
      .put(`${import.meta.env.VITE_API_BASE_URL}/repost/${tweetId}`, null, {
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
      <TfiLoop />
    </Button>
  );
};

export default RepostBtn;
