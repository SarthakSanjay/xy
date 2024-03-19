import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Post from "./PostedTweet";
import Tweet from "./TweetBox";
import { useEffect, useState } from "react";
import axios from "axios";
import {tweet} from '../types/tweet'
//this is content section
const Content = () => {
  const [posts, setPosts] = useState([]);
  const [tweet , setTweet] = useState<boolean>(false)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/all`).then((res) => {
      setPosts(res.data.tweets);
    });
  }, [tweet]);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <Header />
      <Tweet setTweet={setTweet} />
      {posts.map((tweet: tweet) => {
        // console.log('tweet',tweet);
        return <Post key={tweet.id} tweet={tweet} />;
      })}
    </ScrollArea>
  );
};

export default Content;
