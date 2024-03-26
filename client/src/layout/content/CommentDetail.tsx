import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import { tweet } from "../types/tweet";
import ContentHeader from "./ContentHeader";

//original tweet detail page
const CommentDetail = () => {
    const tweetId = 2
  const { commentId } = useParams();
  const [comment, setComment] = useState([]);
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
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/tweet/${tweetId}`)
      .then((res) => {
        setTweet(res.data.tweet);
        axios
          .get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/comment/getChildComments/${commentId}`
          )
          .then((res) => {
            setComment(res.data.comments[0].childComments);
          });
      });
  }, []);
  console.log('comment',comment);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader />
      <Tweet tweet={tweet} fromComment={false} detail={true} />
      {comment.map((tweet: tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} isComment={true} />;
      })}
    </ScrollArea>
  );
};

export default CommentDetail;
