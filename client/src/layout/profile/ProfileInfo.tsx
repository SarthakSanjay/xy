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
  const [followers , setFollowers] = useState(0)
  const [following , setFollowing] = useState(0)
  console.log(TOKEN);
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
      //follow count
      axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/follow/followCount`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setFollowing(res.data.following);
        setFollowers(res.data.followedBy);
      });
  }, []);
  return (
    <div className="w-full px-5 ">
      <TypographyH4 text={`${profile.fullname}`} />
      <TypographyMuted text={`@${profile.username}`} />
      <TypographyP text={`${profile.bio ?? "set bio"}`} />
      <div className="flex gap-5">
        <TypographyMuted text={`${profile.designation ?? 'set designation'}`} />
        <TypographyMuted text={`${profile.location ?? 'set location'}`} />
      </div>
      <div className="flex gap-5">
        <TypographyMuted text={`${profile.links ?? 'your links'}`} />
        <TypographyMuted text={`Joined ${convertIntoMonthYear(profile.createOn)}`} />
      </div>
      <div className="flex gap-5">
        <div className="flex gap-1 items-center">
          <TypographyP text={`${following}`} />
          <TypographyMuted text="Following" />
        </div>
        <div className="flex gap-1 items-center">
          <TypographyP text={`${followers}`} />
          <TypographyMuted text="Followers" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
