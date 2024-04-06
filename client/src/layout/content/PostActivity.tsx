import { tweet, TweetBoxTypes } from "../types/tweet";
import LikeBtn from "../btns/LikeBtn";
import CommentBtn from "../btns/CommentBtn";
import RepostBtn from "../btns/RepostBtn";
import ViewsBtn from "../btns/ViewsBtn";
import BookmarkBtn from "../btns/BookmarkBtn";
import ShareBtn from "../btns/ShareBtn";

interface PostActivityProp extends TweetBoxTypes {
  tweet: tweet;
  fromComment?: boolean;
}

//original tweet activity
const PostActivity: React.FC<PostActivityProp> = ({
  tweet,
  isComment,
  isChildComment,
  fromComment,
  isTweet,
}) => {
  return (
    <div className="flex w-full justify-between ">
      <CommentBtn
        isTweet={isTweet}
        isComment={isComment}
        isChildComment={isChildComment}
        tweet={tweet}
        fromComment={fromComment}
      />
      <RepostBtn tweetId={tweet.id} />
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
