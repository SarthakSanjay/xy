import { tweet } from "@/layout/types/tweet";

export const initialTweetState: tweet = {
    bookmarks: 0,
    _count: { 
        comment: 0,
        childComments: 0,
        repost: 0,
        bookmark : 0,
        like: 0
     },
    id: 0,
    likes: 0,
    reposts: 0,
    text: "",
    user: { 
      username: "",
       fullname: "",
        bio:"" ,
         _count:{
            followedBy: 0,
            following :0
         } },
    createOn: "",
    views: 0,
    isBookmarked:false
  }