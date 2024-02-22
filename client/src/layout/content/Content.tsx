import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "../Header";
import Post from "./Post";

const Content = () => {
  return (
    <ScrollArea className="w-full lg:w-[41.67%] border">
        <Header />
      {/* {[1,2,3,4,5,6,7,8].map((item)=>{
                    return <Card className="h-[400px]">{item}</Card>
                })} */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollArea>
  );
};

export default Content;
