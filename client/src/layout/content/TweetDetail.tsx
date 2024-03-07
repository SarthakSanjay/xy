import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Comment from "../comment/Comment";
import PostedTweet from "./PostedTweet";
import {tweet} from '../types/tweet'
import {comment} from '../types/comment'

const TweetDetail = () => {
    const {tweetId} = useParams()
  const [comment, setComment] = useState([]);
const [tweet, setTweet] = useState<tweet>({ bookmarks: 0, commentCount: 0, id: 0, likes: 0, reposts: 0, text: "", user: { username: "", fullname: "" }, createOn: "", views: 0 });
console.log(comment);
// console.log(tweet);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/${tweetId}`).then((res) => {
      setTweet(res.data.tweet);
    //   console.log(res.data.tweet);
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/comment/all/${tweetId}`)
      .then((res)=>{
        setComment(res.data.comments)
      })
    });
  }, []);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
        <Label>Post</Label>
        <PostedTweet tweet={tweet} fromComment={false} />
        {
            comment.map((comment:comment) =>{
                return <Comment key={comment.id} comment={comment} />
            })
        }
    </ScrollArea>
  );
};

export default TweetDetail;
