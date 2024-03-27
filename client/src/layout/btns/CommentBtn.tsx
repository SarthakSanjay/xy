import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { LuMessageSquare } from "react-icons/lu";


  import { X } from "lucide-react";
import { tweet } from "../types/tweet";
import Tweet from "../content/Tweet";
import TweetBox from "../content/TweetBox";
  interface CommentBtnProp{
    tweet:tweet
  }
  //button to add comment to origial post
  const  CommentBtn :React.FC<CommentBtnProp> = ({tweet}) =>{
    console.log("comment",tweet.text ,tweet.id ,"count",tweet._count);
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="hover:text-sky-500 hover:bg-sky-500/30 rounded-full h-10 w-10 p-0 flex items-center" variant={"link2"}>
            <LuMessageSquare />
            <span className="text-sm pl-1">{tweet._count?.comment}</span>
            <span className="text-sm pl-1">{tweet._count?.childComments || ""}</span>
            
            {/* {tweet._count?.comment  ? tweet._count?.comment : tweet._count?.childComments} */}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black top-52 max-w-xl flex flex-col gap-0">
          <AlertDialogCancel className="relative top-0 left-0 w-10 h-10 p-0 bg-none rounded-full border-none hover:bg-gray-500/30"><X /></AlertDialogCancel>
          <Tweet tweet={tweet} fromComment={true} />
          <TweetBox tweetId={tweet.id}  fromComment={true} isComment={true} />
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  export default CommentBtn