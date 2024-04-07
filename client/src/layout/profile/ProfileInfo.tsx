import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
} from "@/components/typography/Typography";
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="w-full px-5 ">
      <TypographyH4 text={"Username"} />
      <TypographyMuted text={"@username"} />
      <TypographyP text={"Fullstack dev"} />
      <div className="flex gap-5">
        <TypographyMuted text="Software developer/Software Engineer/Programmer" />
        <TypographyMuted text="India" />
      </div>
      <div className="flex gap-5">
        <TypographyMuted text="github.com/sarthaksanjay" />
        <TypographyMuted text="joined september 2022" />
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
