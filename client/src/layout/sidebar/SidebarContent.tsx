import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import ProfileBar from "./ProfileBar";
import { Home ,Search ,Bell,Mail,Bookmark,User ,CircleEllipsis } from "lucide-react";
const SidebarContent = () => {
  return (
    <div className="h-screen w-full  flex flex-col items-end justify-center  ">
      <div className="h-12 absolute top-0 w-12 left-24 ">

      <Logo />
      </div>
      <div className=" flex flex-col items-start  gap-6 px-8">
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><Home /> <span className="ml-2">Home</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><Search /> <span className="ml-2">Explore</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><Bell /> <span className="ml-2">Notificaiton</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><Mail /> <span className="ml-2">Messages</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><Bookmark /> <span className="ml-2">Bookmark</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><User /> <span className="ml-2">Profile</span></Button>
        <Button className="flex justify-start w-3/4 text-lg" variant={"ghost"}><CircleEllipsis /> <span className="ml-2">More</span></Button>

        <Button className="bg-sky-500 text-white h-12 rounded-full w-56 my-5 text-lg">
          Post
        </Button>

        <ProfileBar />
      </div>  
    </div>
  );
};

export default SidebarContent;
