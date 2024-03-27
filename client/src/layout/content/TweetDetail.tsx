import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import { tweet } from "../types/tweet";
import ContentHeader from "./ContentHeader";
import Loading from "@/components/Loading";
import useLoading from "@/hooks/useLoading";

//original tweet detail page
const TweetDetail = () => {
  const { tweetId } = useParams();
  const [comment, setComment] = useState([]);
  const {isLoading , setLoading} = useLoading()
  const [tweet, setTweet] = useState<tweet>({
    bookmarks: 0,
    _count: { comment: 0, childComments: 0 },
    id: 0,
    likes: 0,
    reposts: 0,
    text: "",
    user: { username: "", fullname: "" },
    createOn: "",
    views: 0,
  });

  useEffect(() => {
    console.log("twwweeetIdddd", tweetId);
    axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/tweet/${tweetId}`)
    .then((res) => {
        setLoading(true)
        setTweet(res.data.tweet);

        axios
          .get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/comment/getCommentByTweetId/${tweetId}`
          )
          .then((res) => {
            setComment(res.data.comments);
            setLoading(false)
          });
      });
  }, []);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader />
      <Tweet tweet={tweet} fromComment={false} detail={true} />
      <Suspense fallback={<Loading />}>

      {
        !isLoading ?
      comment.map((tweet: tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} isComment={true} />;
      })
      :
      <Loading />
    }
      </Suspense>
    </ScrollArea>
  );
};

export default TweetDetail;
