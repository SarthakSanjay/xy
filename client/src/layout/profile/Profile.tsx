import { ScrollArea } from "@/components/ui/scroll-area";
import ContentHeader from "../content/ContentHeader";
import UserAvatar from "@/components/UserAvatar";
import ProfileInfo from "./ProfileInfo";
import ProfileNavbar from "./ProfileNavbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { stateContext } from "@/App";
import { EditProfile } from "./EditProfile";

//this is content section
const Profile = () => {
  const {total ,text} = useContext(stateContext)
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader text="username" total={total} type={text} />
      <div className="h-[280px] w-full border border-white">
        <div className="h-[200px] w-full bg-gray-600"></div>
        <div className="h-[120px] w-[120px] relative left-5 bottom-16">
          <UserAvatar fromProfile={true} />
        </div>
        <EditProfile />
      </div>
      <ProfileInfo />
      <ProfileNavbar />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </ScrollArea>
  );
};

export default Profile;
