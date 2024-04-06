import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Tweet from "./Tweet";
import TweetBox from "./TweetBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { tweet } from "../types/tweet";
import Loading from "@/components/Loading";
import useLoading from "@/hooks/useLoading";

//this is content section
const Content = () => {
  const [posts, setPosts] = useState([]);
  // const [isTweet , setIsTweet] = useState<boolean>(false)
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tweet/all`).then((res) => {
      setLoading(true);
      setPosts(res.data.tweets);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <Header />
      <TweetBox
        //  setIsTweet={setIsTweet}
        fromContent={true}
      />
      {!isLoading ? (
        posts.map((tweet: tweet) => {
          //tweet from content
          return (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              fromComment={false}
              isTweet={true}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </ScrollArea>
  );
};

export default Content;
