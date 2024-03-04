import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LuMessageSquare } from "react-icons/lu";
import { tweet } from "../content/Content";
import React, { useState } from "react";
import Post from "../content/Post";
import { boolean } from "zod";
import Tweet from "../content/Tweet";
import { X } from "lucide-react";
interface CommentProp{
    tweet:tweet
}
export const Comment : React.FC<CommentProp> = ({tweet}) =>{
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"link2"}>
          <LuMessageSquare />{tweet.commentCount === 0 ? '' : tweet.commentCount}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black top-52 max-w-xl flex flex-col gap-0">
        <AlertDialogCancel className="relative top-0 left-0 w-10 h-10 p-0 bg-none rounded-full border-none hover:bg-gray-500/30"><X /></AlertDialogCancel>
        <Post tweet={tweet} fromComment={true} />
        <Tweet  fromComment={true}/>
      </AlertDialogContent>
    </AlertDialog>
  );
}
