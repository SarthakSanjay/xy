import UserAvatar from "@/components/UserAvatar"
import { Card } from "@/components/ui/card"
import PostActivity from "./PostActivity"
import { More } from "./More"


const Post = () => {
  return (
    <Card className="h-max flex py-2 px-3 bg-black rounded-none">
        
          <UserAvatar />
        
        <div className="h-full w-full">
                <div className="flex justify-between my-2">
                   <div className="flex gap-2 mx-2 text-gray-500">
                        <h1 className="text-white">Sharko</h1>
                        <h2>username</h2>
                        .
                        <h2>time</h2>
                   </div>
                   <More />
                </div>
                <p className="mx-2">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, veniam optio placeat esse aspernatur quae rerum obcaecati officiis. Vero, cum? ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem repudiandae inventore quaerat! Veniam aspernatur, laudantium doloremque corporis voluptate voluptas cumque est nesciunt eum reiciendis! Voluptatum tempora molestiae sunt iusto?</p>
               <PostActivity />
        </div>
      </Card>
  )
}

export default Post