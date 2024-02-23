import UserAvatar from "@/components/UserAvatar";
import { Card } from "@/components/ui/card";
import PostActivity from "./PostActivity";
import { More } from "./More";
import { tweet } from "./Content";

interface PostProps{
    tweet : tweet
}
const Post: React.FC<PostProps> = ({ tweet }) => {
  return (
    <Card className="h-max flex py-2 px-3 bg-black rounded-none">
      <UserAvatar />

      <div className="h-full w-full">
        <div className="flex justify-between my-2">
          <div className="flex gap-2 mx-2 text-gray-500">
            <h1 className="text-white">{tweet.id}</h1>
            <h2>{tweet.id}</h2>.<h2>time</h2>
          </div>
          <More />
        </div>
        <p className="mx-2">
            {tweet.text}
        </p>
        <PostActivity />
      </div>
    </Card>
  );
};

export default Post;
