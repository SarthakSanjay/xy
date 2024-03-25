import { Button } from "@/components/ui/button";
import { FiBookmark } from "react-icons/fi";

const BookmarkBtn = () => {
  return (
    <Button
      className="hover:text-sky-500 hover:bg-sky-500/30 rounded-full h-10 w-10 py-0 px-1"
      variant={"link2"}
    >
      <FiBookmark />
    </Button>
  );
};

export default BookmarkBtn;
