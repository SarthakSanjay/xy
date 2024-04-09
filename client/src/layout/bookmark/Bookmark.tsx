import { ScrollArea } from "@/components/ui/scroll-area";
import useLoading from "@/hooks/useLoading";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { tweet } from "../types/tweet";
import Tweet from "../content/Tweet";
import Loading from "@/components/Loading";
import ContentHeader from "../content/ContentHeader";

//this is content section
const Bookmark = () => {
  const [bookmark , setBookmark] = useState([])
  console.log(bookmark);
  const { isLoading, setLoading } = useLoading();
  useEffect(()=>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookmark`,{
      headers:{
          Authorization :`Bearer ${TOKEN}`
      }
  }).then((res) =>{
    setBookmark(res.data.bookmarked)
    setLoading(false)
  })
  },[])
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
      <ContentHeader text="Bookmarks" />
        {!isLoading ? (
          bookmark.map((tweetObj:{tweet:tweet}) => {
            console.log(tweetObj.tweet);
            return <Tweet key={tweetObj.tweet.id} tweet={tweetObj.tweet} isTweet={true}  />;
          })
        ) : (
          <Loading />
        )}
    </ScrollArea>
  );
};

export default Bookmark;
