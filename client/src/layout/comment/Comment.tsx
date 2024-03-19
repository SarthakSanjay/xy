import UserAvatar from "@/components/UserAvatar";
import { Card } from "@/components/ui/card";
import { More } from "../content/More";
import CommentActivity from "./CommentActivity";
import { Link } from "react-router-dom";
import { comment } from "../types/comment";

interface CommentProp {
  comment: comment;
  fromComment?: boolean;
}

//comment of origial post
const Comment: React.FC<CommentProp> = ({ comment, fromComment }) => {
  console.log('comment' , comment);
  return (
    <Card
      className={`${
        fromComment
          ? "h-max flex pt-2 px-3 dark:bg-black border-none dark:text-white rounded-none"
          : "h-max flex py-2 px-3 dark:bg-black dark:text-white rounded-none"
      } 
    `}
    >
      <div className=" flex flex-col items-center">
        <UserAvatar />
        {fromComment ? (
          <div className="w-[2px] my-1 rounded-full h-full bg-gray-500 "></div>
        ) : (
          ""
        )}
      </div>
      <div className="h-full w-full ">
        <div className="flex justify-between  ">
          <div className="flex gap-2 mx-2 text-gray-500">
            <h1 className="text-black dark:text-white">
              {comment.user.fullname}
            </h1>
            <h2>{comment.user.username}</h2>.
            {/* <h2>{new Date(tweet.createOn).getHours() + "h"}</h2> */}
          </div>
          <More />
        </div>
        <p>{comment.id}</p>
          <Link to={`/comment/${comment.id}`}>

          <p className="mx-2">{comment.text}</p>
          </Link>


        {fromComment ? (
          <p className="mx-2 text-gray-500">
            Replying to{" "}
            <span className="text-sky-500">{comment.user.username}</span>
          </p>
        ) : (
          <CommentActivity comment={comment} />

        )}
      </div>
    </Card>
  );
};

export default Comment;
