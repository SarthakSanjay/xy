export interface tweet {
    id:number;
    text: string;
    isBookmarked :boolean;
    isLiked: boolean;
    isReposted:boolean;
    user: {
      id :number;
      username: string;
      fullname: string;
      bio: string;
      _count: {
        following: number;
        followedBy:number;
      }
    };
    _count: {
      comment:number,
      childComments:number,
      repost:number,
      like:number,
      bookmark:number
    };
    createOn: string;
  }

  export interface TweetBoxTypes {
    isTweet?: boolean
    isComment?:boolean
    isChildComment?: boolean

  }