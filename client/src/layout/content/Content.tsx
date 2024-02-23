import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Post from "./Post";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import axios from "axios";

export interface tweet {
      bookmarks: number;
      commentCount: number;
      id: number;
      likes: number;
      reposts: number;
      text: string;
      userId: number;
      views: number;
    };
const Content = () => {
    const [post , setPost] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/all`)
        .then(res => {
            console.log(res.data.tweets);
            setPost(res.data.tweets)
        })
    },[])
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
        <Header />
        <Tweet />
      {post.map((tweet: tweet)=>{
                    return <Post key={tweet.id} tweet={tweet} />
                })}
    </ScrollArea>
  );
};

export default Content;
