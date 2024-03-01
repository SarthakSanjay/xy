import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  text: z.string()
});

const Tweet = () => {
  const navigate = useNavigate();
  console.log(Cookies.get("userId"));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await axios
      .post(
        `${import.meta.env.VITE_API_BASE_URL}/tweet/${Cookies.get("userId")}`,
        values
      )
      .then((res) => {
        Cookies.set("token", res.data.token);
        navigate("/");
      });
  }
  return (
    <Form {...form}>
      <Card className="h-min flex py-2 px-3 dark:bg-black rounded-none">
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
                      placeholder="What is happening?!"
                      {...field}
                      className="h-full flex-grow text-xl dark:bg-black border-none focus-visible:ring-transparent resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <hr className="w-2/3" />
            <Button
              type="submit"
              className="w-[100px] relative left-[410px] bg-sky-500 text-white rounded-full text-xl"
            >
              Post
            </Button>
          </form>
        </div>
      </Card>
    </Form>
  );
};

export default Tweet;
