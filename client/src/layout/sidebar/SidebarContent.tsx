import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const SidebarContent = () => {
  return (
    <div className="h-screen w-full  flex flex-col items-end justify-center  ">
      <div className="h-12 absolute top-0 w-12 left-24 ">

      <Logo />
      </div>
      <div className=" flex flex-col items-start  gap-6 px-8">
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Explore</Button>
        <Button variant={"ghost"}>Notificaiton</Button>
        <Button variant={"ghost"}>Messages</Button>
        <Button variant={"ghost"}>Bookmark</Button>
        <Button variant={"ghost"}>Profile</Button>
        <Button variant={"ghost"}>More</Button>

        <Button className="bg-sky-500 text-white h-12 rounded-full w-56 my-5 text-lg">
          Post
        </Button>
      </div>
    </div>
  );
};

export default SidebarContent;
