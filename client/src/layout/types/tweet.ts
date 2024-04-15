export interface tweet {
    bookmarks: number;
    _count: {
      comment:number,
      childComments:number,
      repost:number,
      like:number,
      bookmark:number
    };
    id:number;
    likes: number;
    reposts: number;
    text: string;
    user: {
      username: string;
      fullname: string;
      bio: string;
      _count: {
        following: number;
        followedBy:number;
      }
    };
    createOn: string;
    views: number;
    isBookmarked :boolean;
  }

  export interface TweetBoxTypes {
    isTweet?: boolean
    isComment?:boolean
    isChildComment?: boolean

  }