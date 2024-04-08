import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import { tweet } from "../types/tweet";
import ContentHeader from "./ContentHeader";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/Loading";

export const defaultTweetObj = {
  bookmarks: 0,
  _count: { comment: 0, childComments: 0 },
  id: 0,
  likes: 0,
  reposts: 0,
  text: "",
  user: { username: "", fullname: "" },
  createOn: "",
  views: 0,
}
//original tweet detail page
const CommentDetail = () => {
  const [tweet, setTweet] = useState<tweet>(defaultTweetObj);
  const [comment, setComment] = useState<tweet>(defaultTweetObj);
  const [childComment, setChildComment] = useState([]);

  const { commentId, parentId } = useParams();
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/tweet/${parentId}`)
      .then((res) => {
        setLoading(true);
        setTweet(res.data.tweet);
        axios
          .get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/comment/getSpecificComment/${commentId}`
          )
          .then((res) => {
            setComment(res.data.comment);
            console.log(res.data.comment);
          });
        axios
          .get(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/comment/getChildComments/${commentId}`
          )
          .then((res) => {
            setChildComment(res.data.comments[0].childComments);
            setLoading(false);
          });
      });
  }, [commentId]);

  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader text="Post"/>
      <Tweet tweet={tweet} fromComment={false} detail={true} isComment={true} />
      <Tweet tweet={comment} fromComment={false} detail={true} isComment={true} />
      {!isLoading ? (
        childComment.map((tweet: tweet) => {
          return (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              isChildComment={true}
              isComment={true}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </ScrollArea>
  );
};

export default CommentDetail;
