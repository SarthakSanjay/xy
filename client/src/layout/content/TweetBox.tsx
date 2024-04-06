import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FC, useEffect } from "react";
import { TOKEN, USER_ID } from "@/utils/constant";
import { TweetBoxTypes } from "../types/tweet";

const formSchema = z.object({
  text: z.string(),
});
// to post tweet
interface TweetBoxProp extends TweetBoxTypes {
  fromComment?: boolean;
  tweetId?: number;
  fromContent?: boolean;
}

const TweetBox: FC<TweetBoxProp> = ({
  fromComment,
  tweetId,
  fromContent,
  isComment,
  isChildComment,
  isTweet,
}) => {
  useEffect(() => {
    // console.log("useEffect form tweet");
  }, [onSubmit]);
  const { tweetID } = useParams();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (fromContent) {
      //post tweet
      await axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/tweet/${USER_ID}`, values)
        .then((res) => {
          navigate("/");
        });
      console.log("this is tweet");
      console.log("tweetId", tweetId);
    }

    if (isTweet) {
      console.log("this is tweet");
      await axios
        .post(
          `${import.meta.env.VITE_API_BASE_URL}/comment/${tweetId}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        )
        .then((res) => {
          alert("commented");
          navigate("/");
        });
    }

    if (isComment) {
      //post comment
      await axios
        .post(
          `${import.meta.env.VITE_API_BASE_URL}/comment/${tweetID}`,
          { ...values, parentCommentId: tweetId },
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        )
        .then((res) => {
          alert("clild comment commented");
          navigate("/");
        });
      console.log("parent", tweetId, "params", tweetID);
    }
  }
  return (
    <Form {...form}>
      <Card
        className={`h-min flex  px-3 dark:bg-black rounded-none
      ${fromComment ? "border-none py-0 my-0" : "py-2"}
      `}
      >
        <UserAvatar />
        <div className="mx-2 w-full min-h-[140px]  flex flex-col  ">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={
                        fromComment ? "Post your reply" : "What is happening?!"
                      }
                      {...field}
                      className="h-full flex-grow text-xl dark:bg-black border-none focus-visible:ring-transparent resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={`w-[100px] relative ${
                fromComment ? "left-[370px]" : "left-[410px]"
              } bg-sky-500 text-white rounded-full text-xl`}
              disabled={!form.formState.isDirty}
            >
              Post
            </Button>
          </form>
        </div>
      </Card>
    </Form>
  );
};

export default TweetBox;
