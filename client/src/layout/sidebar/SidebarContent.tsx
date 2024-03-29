import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import ProfileBar from "./ProfileBar";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  CircleEllipsis,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PostBtn } from "./PostBtn";
const SidebarContent = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full  flex flex-col items-end justify-center  ">
      <div className="h-12 absolute top-0 w-12 left-24 ">
        <Logo />
      </div>
      <div className=" flex flex-col items-start  gap-6 px-8">
        <Button onClick={()=>{navigate('/')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Home /> <span className="ml-2">Home</span>
        </Button>
        <Button onClick={()=>{navigate('/explore')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Search /> <span className="ml-2">Explore</span>
        </Button>
        <Button onClick={()=>{navigate('/notification')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Bell /> <span className="ml-2">Notificaiton</span>
        </Button>
        <Button onClick={()=>{navigate('/messages')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Mail /> <span className="ml-2">Messages</span>
        </Button>
        <Button onClick={()=>{navigate('/bookmark')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <Bookmark /> <span className="ml-2">Bookmark</span>
        </Button>
        <Button onClick={()=>{navigate('/profile')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <User /> <span className="ml-2">Profile</span>
        </Button>
        <Button onClick={()=>{navigate('/more')}} className="flex justify-start w-3/4 text-lg" variant={"ghost"}>
          <CircleEllipsis /> <span className="ml-2">More</span>
        </Button>

       <PostBtn />

        <ProfileBar />
      </div>
    </div>
  );
};

export default SidebarContent;
