import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "@/utils/constant";

const formSchema = z.object({
  fullname: z.string(),
  username: z.string(),
  bio: z.string().optional(),
  designation: z.string().optional(),
  location: z.string().optional(),
  links: z.string().optional()
});

export function EditProfile() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      bio: "",
      designation: "",
      location: "",
      links: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/update`, values ,{
        headers :{
          Authorization: `Bearer ${TOKEN}`
        }
      });
      navigate("/profile");
      console.log(values);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        onClick={()=>{
          navigate('/profile/edit-user')
        }}
         variant="outline" className="border-white rounded-full relative left-[77%] bottom-28">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Fullname</Label>
            <Input id="name" placeholder="Enter your name" {...form.register("fullname")} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" placeholder="Enter your username" {...form.register("username")} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">Bio</Label>
            <Input id="bio" placeholder="Enter your bio" {...form.register("bio")} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="designation" className="text-right">Designation</Label>
            <Input id="designation" placeholder="Enter your designation" {...form.register("designation")} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">Location</Label>
            <Input id="location" placeholder="Enter your location" {...form.register("location")} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="links" className="text-right">Links</Label>
            <Input id="links" placeholder="Enter your links" {...form.register("links")} className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
