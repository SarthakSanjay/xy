import { Button } from "@/components/ui/button";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { FiBookmark } from "react-icons/fi";

interface BookmarkBtnProp {
  tweetId : number
}
const BookmarkBtn : React.FC<BookmarkBtnProp> = ({tweetId}) => {
  const handleBookmark = () =>{
    axios.put(`${import.meta.env.VITE_API_BASE_URL}/bookmark/${tweetId}`,null,{
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
      <FiBookmark />
    </Button>
  );
};

export default BookmarkBtn;
