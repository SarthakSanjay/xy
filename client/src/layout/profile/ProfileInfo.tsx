import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
} from "@/components/typography/Typography";
import { TOKEN } from "@/utils/constant";
import { convertIntoMonthYear } from "@/utils/date";
import axios from "axios";
import { useEffect, useState } from "react";

interface profile {
  id?: number;
  username?: string;
  fullname?: string;
  bio?: string;
  createOn: string;
  designation?: string;
  email?: string;
  links?: string;
  location?: string;
}
const ProfileInfo = () => {
  const [profile, setProfile] = useState<profile>({createOn:''});
  console.log(profile);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      });
  }, []);
  return (
    <div className="w-full px-5 ">
      <TypographyH4 text={`${profile.fullname}`} />
      <TypographyMuted text={`@${profile.username}`} />
      <TypographyP text={`${profile.bio}`} />
      <div className="flex gap-5">
        <TypographyMuted text={`${profile.designation}`} />
        <TypographyMuted text={`${profile.location}`} />
      </div>
      <div className="flex gap-5">
        <TypographyMuted text={`${profile.links}`} />
        <TypographyMuted text={`Joined ${convertIntoMonthYear(profile.createOn)}`} />
      </div>
      <div className="flex gap-5">
        <div className="flex gap-1 items-center">
          <TypographyP text={"50"} />
          <TypographyMuted text="following" />
        </div>
        <div className="flex gap-1 items-center">
          <TypographyP text={"96"} />
          <TypographyMuted text="Followers" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
