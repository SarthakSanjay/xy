import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm  } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import Cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
const formSchema = z.object({
  email: z.string().email({ message: "please provide email" }),
  password: z.string()
});

export function Login() {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
   await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, values)
    .then(res=>{
        Cookies.set('token',res.data.token)
        navigate('/')
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mx-auto">Login</DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@domain.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mx-auto w-full" type="submit">
              Login
            </Button>
          </form>
          <FormDescription>Login using email and password</FormDescription>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
