import { Button } from "@/components/ui/button";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

interface LikeBtnProps{
    tweetId:number
}
const LikeBtn: React.FC<LikeBtnProps>  = ({tweetId}) => {
    const [isLiked , setIsLiked] = useState<boolean>(false)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/like/isLiked/${tweetId}`,{
          headers:{
            Authorization:`Bearer ${Cookies.get('token')}`
          }
        })
        .then((res)=>{
            if(res.data.isLikedTweet){
                 setIsLiked(true)
            }else{
                setIsLiked(false)
            }
        })
    },[isLiked])
    const handleLike = () =>{
        let userId = Cookies.get('userId')
        axios.put(`${import.meta.env.VITE_API_BASE_URL}/like/${userId}/${tweetId}`)
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
      <IoMdHeartEmpty className={`${isLiked ? "text-pink-500" : ''}`} /> 
    </Button>
  );
};

export default LikeBtn;
