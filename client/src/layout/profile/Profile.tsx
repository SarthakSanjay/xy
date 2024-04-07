import { ScrollArea } from "@/components/ui/scroll-area";
import ContentHeader from "../content/ContentHeader";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import ProfileInfo from "./ProfileInfo";

//this is content section
const Profile = () => {
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader text="username" />
      <div className="h-[280px] w-full border border-white">
        <div className="h-[200px] w-full bg-gray-600"></div>
        <div className="h-[120px] w-[120px] relative left-5 bottom-16">
          <UserAvatar fromProfile={true} />
        </div>
        <Button variant={"outline"} className="border-white rounded-full relative left-[77%] bottom-28">Edit Profile</Button>
      </div>
      <ProfileInfo />
    </ScrollArea>
  );
};

export default Profile;
