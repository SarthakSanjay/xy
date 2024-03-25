import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Tweet from "./Tweet";
import TweetBox from "./TweetBox";
import { useEffect, useState } from "react";
import axios from "axios";
import {tweet} from '../types/tweet'
//this is content section
const Content = () => {
  const [posts, setPosts] = useState([]);
  const [isTweet , setIsTweet] = useState<boolean>(false)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/all`).then((res) => {
      setPosts(res.data.tweets);
    });
  }, [isTweet]);

  console.log('post form content',posts);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <Header />
      <TweetBox setIsTweet={setIsTweet} />
      {posts.map((tweet: tweet) => {
        console.log('tweet form content',tweet);
        return <Tweet key={tweet.id} tweet={tweet} fromComment={false} />;
      })}
    </ScrollArea>
  );
};

export default Content;
