import { Button } from "@/components/ui/button";
import { TfiLoop } from "react-icons/tfi";

const RepostBtn = () => {
  return (
    <Button
      className="hover:text-green-500 hover:bg-green-500/30 rounded-full h-10 w-10 p-0"
      variant={"link2"}
    >
      <TfiLoop />
    </Button>
  );
};

export default RepostBtn;
