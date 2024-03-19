import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../comment/Comment";
import { comment } from "../types/comment";
import ContentHeader from "../content/ContentHeader";

//original comment detail page
const CommentDetails = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/comment/getChildComments/${commentId}`)
      .then((res) => {
        setComment(res.data.comments[0].childComments);
      });
  }, [commentId]);
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader /> 
      {comment.map((comment: comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </ScrollArea>
  );
};

export default CommentDetails;
