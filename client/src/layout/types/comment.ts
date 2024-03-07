export interface comment{
    bookmarks: number;
    commentCount: number;
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