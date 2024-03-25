export interface tweet {
    bookmarks: number;
    _count: {comment:number,childComments:number};
    id:number;
    likes: number;
    reposts: number;
    text: string;
    user: {
      username: string;
      fullname: string;
    };
    createOn: string;
    views: number;
  }