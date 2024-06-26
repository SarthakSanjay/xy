import { Button } from "@/components/ui/button";
import axios from "axios";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { tweet } from "../types/tweet";
import { TOKEN } from "@/utils/constant";
import { useEffect, useState } from "react";

interface LikeBtnProps{
    tweet:tweet
}
const LikeBtn: React.FC<LikeBtnProps>  = ({tweet}) => {
    const [liked , setLiked] = useState(false)
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/like/isLiked/${tweet.id}`,{
        headers:{
          Authorization: `Bearer ${TOKEN}`
        }
      }).then((res)=>{
        setLiked(res.data.isLikedTweet)
      })
    },[])
    const handleLike = () =>{
        axios.put(`${import.meta.env.VITE_API_BASE_URL}/like`,{
          tweetId: tweet.id,
          targetId : tweet.user?.id
        },{
          headers:{
            Authorization: `Bearer ${TOKEN}`
          }
        })
        .then(()=>{
            alert("tweet liked")
        }).catch((error)=>console.log(error))
    }
  return (
    <Button
      className="hover:text-pink-500 hover:bg-pink-500/30 rounded-full h-10 w-10 p-0"
      variant={"link2"}
      onClick={handleLike}
    >
      {
        liked ?   <IoMdHeart className="text-pink-500" /> : <IoMdHeartEmpty  /> 
      }
      
     
      <span className="text-sm pl-1">{tweet._count.like}</span>
    </Button>
  );
};

export default LikeBtn;
