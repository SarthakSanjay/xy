import { Button } from "@/components/ui/button";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { useState } from "react";
import { TfiLoop } from "react-icons/tfi";
interface RepostBtnProp {
  tweetId: number;
}
const RepostBtn: React.FC<RepostBtnProp> = ({ tweetId }) => {
  const [isReposted , setIsReposted] = useState<boolean>(false)
  // useEffect(()=>{
  //     axios.get(`${import.meta.env.VITE_API_BASE_URL}/like/isLiked/${tweetId}`,{
  //       headers:{
  //         Authorization:`Bearer ${TOKEN}`
  //       }
  //     })
  //     .then((res)=>{
  //         if(res.data.isLikedTweet){
  //              setIsReposted(true)
  //         }else{
  //             setIsReposted(false)
  //         }
  //     })
  // },[isReposted])
  const handelRepost = () => {
    setIsReposted(!isReposted)
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
      <TfiLoop className={`${isReposted ? "text-green-500" : ''}`} />
    </Button>
  );
};

export default RepostBtn;
