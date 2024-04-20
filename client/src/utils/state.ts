import { tweet } from "@/layout/types/tweet";

export const initialTweetState: tweet = {
    id: 0,
    text: "",
    isLiked: false,
    isReposted:false,
    isBookmarked:false,
    user: { 
        id:0,
        username: "",
        fullname: "",
        bio:"" ,
        _count:{
            followedBy: 0,
            following :0
        } },
        _count: { 
            comment: 0,
            childComments: 0,
            repost: 0,
            bookmark : 0,
            like: 0
        },
        createOn: "",
  }