import { tweet } from "../types/tweet";
import LikeBtn from "../btns/LikeBtn";
import CommentBtn from "../btns/CommentBtn";
import RepostBtn from "../btns/RepostBtn";
import ViewsBtn from "../btns/ViewsBtn";
import BookmarkBtn from "../btns/BookmarkBtn";
import ShareBtn from "../btns/ShareBtn";

interface TweetProp {
  tweet: tweet;
}
//original tweet activity
const PostActivity: React.FC<TweetProp> = ({ tweet }) => {
    // console.log('tweet from post activity', tweet);
  return (
    <div className="flex w-full justify-between ">
      <CommentBtn tweet={tweet} />
      <RepostBtn />
      <LikeBtn tweetId={tweet.id} />
      <ViewsBtn />
      <div className="mx-2 ">
        <BookmarkBtn />
        <ShareBtn />
      </div>
    </div>
  );
};

export default PostActivity;
