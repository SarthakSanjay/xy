import UserAvatar from "@/components/UserAvatar";
import { Card } from "@/components/ui/card";
import PostActivity from "./PostActivity";
import { More } from "./More";
import { tweet } from "../types/tweet";
import { Link } from "react-router-dom";
interface TweetProp {
  tweet: tweet;
  fromComment?: boolean;
  isComment?: boolean;
  detail?: boolean;
}

//original tweet posted by user
const Tweet: React.FC<TweetProp> = ({
  tweet,
  fromComment,
  isComment,
  detail,
}) => {
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
              {tweet.user.fullname}
            </h1>
            <h2>{tweet.user.username}</h2>.
            <h2>{new Date(tweet.createOn).getHours() + "h"}</h2>
          </div>
          <More />
        </div>
        <p>{tweet.id}</p>

        {isComment ? (
          <Link to={`/${tweet.user.username}/comment/${tweet.id}`}>
            <p className="mx-2">{tweet.text}</p>
          </Link>
        ) : (
          <Link to={`/${tweet.user.username}/tweet/${tweet.id}`}>
            <p className="mx-2">{tweet.text}</p>
          </Link>
        )}

        {fromComment ? (
          <p className="mx-2 text-gray-500">
            Replying to{" "}
            <span className="text-sky-500">{tweet.user.username}</span>
          </p>
        ) : (
          <div>
            {detail ? <hr className="mt-1" /> : ""}
            <PostActivity tweet={tweet} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Tweet;
