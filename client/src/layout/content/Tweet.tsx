import UserAvatar from "@/components/UserAvatar";
import { Card } from "@/components/ui/card";
import PostActivity from "./PostActivity";
import { More } from "./More";
import { tweet } from "../types/tweet";
import { Link } from "react-router-dom";
import { calculateTimeDifference } from "@/utils/date";
import { TweetBoxTypes } from "../types/tweet";
import UserDetailCard from "./UserDetailCard";

interface TweetProp extends TweetBoxTypes {
  tweet: tweet;
  fromComment?: boolean;
  detail?: boolean;
  parentId?: number
}

//original tweet posted by user
const Tweet: React.FC<TweetProp> = ({
  tweet,
  fromComment,
  isComment,
  detail,
  isChildComment,
  isTweet,
  parentId
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
      <div className=" flex flex-col items-center ">
       <UserDetailCard component={<UserAvatar />} tweet={tweet}/>

        {fromComment ? (
          <div className="w-[2px] my-1 rounded-full h-full bg-gray-500 "></div>
        ) : (
          ""
        )}
      </div>
      <div className="h-full w-full ">
        <div className="flex justify-between  ">
          <div className="flex gap-2 mx-2 text-gray-500">
            <UserDetailCard 
              tweet={tweet}
              component={
                <div className="flex gap-2">
                  <h1 className="text-black dark:text-white">
                    {tweet?.user.fullname}
                  </h1>
                  <h2>@{tweet.user.username}</h2>.
                </div>
              } />
            <h2>
            {calculateTimeDifference(tweet.createOn)}</h2>
          </div>
          <More />
        </div>
        {/* <p>{tweet.id}</p> */}

        {isComment ? (
          <Link to={`/${tweet.user.username}/comment/${parentId}/${tweet.id}`}>
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
            <PostActivity fromComment={fromComment} isComment={isComment} isChildComment={isChildComment} isTweet={isTweet} tweet={tweet} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Tweet;
