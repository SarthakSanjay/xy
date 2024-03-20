import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import TweetBox from "../content/TweetBox";
import { X } from "lucide-react";

//button to add comment to origial post
export const PostBtn = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-sky-500 text-white h-12 rounded-full w-56 my-5 text-lg">
          Post
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black top-52 max-w-xl flex flex-col gap-0  p-0">
        <AlertDialogCancel className="relative top-0 left-0 w-10 h-10 p-0 bg-none rounded-full border-none hover:bg-gray-500/30">
          <X />
        </AlertDialogCancel>
        <TweetBox />
      </AlertDialogContent>
    </AlertDialog>
  );
};
