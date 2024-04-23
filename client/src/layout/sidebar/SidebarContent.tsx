import Logo from "@/components/Logo";
import ProfileBar from "./Username";
import { PostBtn } from "./PostBtn";
import HomeBtn from "./sidebarNavBtns/HomeBtn";
import ExploreBtn from "./sidebarNavBtns/ExploreBtn";
import NotificationBtn from "./sidebarNavBtns/NotificationBtn";
import MessageBtn from "./sidebarNavBtns/MessageBtn";
import BookmarkBtn from "./sidebarNavBtns/BookmarkBtn";
import ProfileBtn from "./sidebarNavBtns/ProfileBtn";
import MoreBtn from "./sidebarNavBtns/MoreBtn";

const SidebarContent = () => {
  return (
    <div className="h-screen w-full  flex flex-col items-end justify-center  ">
      <div className="h-12 absolute top-0 w-12 left-24 ">
        <Logo />
      </div>
      <div className=" flex flex-col items-start  gap-6 px-8">
        <HomeBtn />
        <ExploreBtn />
        <NotificationBtn />
        <MessageBtn />
        <BookmarkBtn />
        <ProfileBtn />
        <MoreBtn />
        <PostBtn />
        <ProfileBar />
      </div>
    </div>
  );
};

export default SidebarContent;
