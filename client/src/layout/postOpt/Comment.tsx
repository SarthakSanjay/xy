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
import React from "react";
import Post from "../content/Post";

interface CommentProp{
    tweet:tweet
}
export const Comment : React.FC<CommentProp> = ({tweet}) =>{
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"link2"}>
          <LuMessageSquare />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Post tweet={tweet} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
