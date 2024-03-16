import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LuMessageSquare } from "react-icons/lu";
import { tweet } from "../types/tweet";
import React from "react";
import PostedTweet from "../content/PostedTweet";
import TweetBox from "../content/TweetBox";
import { X } from "lucide-react";

interface CommentProp{
    tweet:tweet
}
//button to add comment to origial post
export const CommentBtn : React.FC<CommentProp> = ({tweet}) =>{
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="hover:text-sky-500 hover:bg-sky-500/30 rounded-full h-10 w-10 p-0" variant={"link2"}>
          <LuMessageSquare />{tweet.commentCount === 0 ? '' : tweet.commentCount}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black top-52 max-w-xl flex flex-col gap-0">
        <AlertDialogCancel className="relative top-0 left-0 w-10 h-10 p-0 bg-none rounded-full border-none hover:bg-gray-500/30"><X /></AlertDialogCancel>
        <PostedTweet tweet={tweet} fromComment={true} />
        <TweetBox tweetId={tweet.id} fromComment={true} isComment={true} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
