import { Button } from "@/components/ui/button";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { FiBookmark } from "react-icons/fi";
import { tweet } from "../types/tweet";
import { BookmarkCheck } from "lucide-react";

interface BookmarkBtnProp {
  tweet : tweet,
}
const BookmarkBtn : React.FC<BookmarkBtnProp> = ({tweet}) => {
  const handleBookmark = () =>{
    axios.put(`${import.meta.env.VITE_API_BASE_URL}/bookmark/${tweet.id}`,null,{
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then(() => alert('bookmarked'))
  }
  return (
    <Button
    onClick={handleBookmark}
      className="hover:text-sky-500 hover:bg-sky-500/30 rounded-full h-10 w-10 py-0 px-1"
      variant={"link2"}
    >
      {
        tweet.isBookmarked ? <BookmarkCheck className="text-sky-500" /> : <FiBookmark />
      }
      {/* <span className="text-sm pl-1">{tweet._count.bookmark}</span> */}
    </Button>
  );
};

export default BookmarkBtn;
