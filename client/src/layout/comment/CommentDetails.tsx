import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Comment from "../comment/Comment";
import { tweet } from "../types/tweet";
import { comment } from "../types/comment";

//original tweet detail page
const CommentDetails = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState([]);
  const [tweet, setTweet] = useState<tweet>({
    bookmarks: 0,
    commentCount: 0,
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
      .get(`${import.meta.env.VITE_API_BASE_URL}/comment/getChildComments/${commentId}`)
      .then((res) => {
        // setTweet(res.data.tweet);
        setComment(res.data.comments[0].childComments);
        console.log(res.data.comments[0].childComments);
        // axios
        //   .get(
        //     `${
        //       import.meta.env.VITE_API_BASE_URL
        //     }/tweet/comment/all/${commentId}`
        //   )
        //   .then((res) => {
        //     setComment(res.data.comments);
        //   });
      });
  }, []);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <Label>Post</Label>
      {/* <Comment comment={tweet} fromComment={true} /> */}
      {comment.map((comment: comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </ScrollArea>
  );
};

export default CommentDetails;
