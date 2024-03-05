import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Post from "./Post";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
export interface tweet {
  bookmarks: number;
  commentCount: number;
  id:number;
  likes: number;
  reposts: number;
  text: string;
  user: {
    username: string;
    fullname: string;
  };
  createOn: string;
  views: number;
}
const TweetDetail = () => {
    const {tweetId} = useParams()
    console.log('tweetId',tweetId);
//   const [comment, setComment] = useState([]);
const [tweet, setTweet] = useState<tweet>({ bookmarks: 0, commentCount: 0, id: 0, likes: 0, reposts: 0, text: "", user: { username: "", fullname: "" }, createOn: "", views: 0 });

console.log(tweet);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/${tweetId}`).then((res) => {
      setTweet(res.data.tweet);
    //   console.log(res.data.tweet);
    });
  }, []);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
        <Label>Post</Label>
        <Post tweet={tweet} fromComment={false} />
      {/* {comment.map((tweet: tweet) => {
        return <Post key={tweet.id} tweet={tweet} />;
      })} */}
    </ScrollArea>
  );
};

export default TweetDetail;
