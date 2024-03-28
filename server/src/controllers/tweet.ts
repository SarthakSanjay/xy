import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const postTweet = async(req:Request , res:Response) =>{
   try {
     const userId :number = parseInt(req.params.userId)
     const text:string = req.body.text
     const tweet = await prisma.tweet.create({
         data : {
             userId:userId,
             text:text
         }
     })
     res.status(201).json({
         msg:"tweet posted",
         tweet:tweet
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}

export const getAllTweets = async(req:Request , res:Response)=>{
  try {
      const tweets = await prisma.tweet.findMany({
          select:{
              id:true,
              text:true,
              reposts:true,
              likes:true,
              views:true,
              bookmarks :true,
              createOn:true,
              user:true,
              _count:{
                  select:{
                      comment:true
                  }
              }
          }
      })
      
      res.status(200).json({
          msg:"success",
          tweets:tweets
      })
  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
  }
}
export const getTweetById = async(req:Request,res:Response)=>{
    const tweetId: number = parseInt(req.params.tweetId)
  try {
      const tweet = await prisma.tweet.findFirst({
          where:{
              id:tweetId
          },
          select:{
              id:true,
              text:true,
              reposts:true,
              likes:true,
              views:true,
              bookmarks :true,
              createOn:true,
              user:true,
              _count:{
                select:{
                    comment:true
                }
              }
          }
      })
      if(!tweet){
          return res.status(404).json({
              msg:"no tweet found"
          })
      }
      res.status(200).json({
          msg:"tweet found",
          tweet
      })
  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
  }
}
export const deleteTweet = async(req:Request , res:Response) =>{
    const tweetId : number = parseInt(req.params.id)
   try {
     await prisma.tweet.delete({
         where:{id:tweetId}
     })
     res.status(200).json({
         msg:"tweet deleted"
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}

export const bookmarkTweet = async(req:Request , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.params.userId) //change later
    try {
        const existingBookmark = await prisma.bookmark.findFirst({
            where:{
                tweetId:tweetId,
                userId:userId
            }
        })
        if (existingBookmark) {
            await prisma.bookmark.delete({
                where:{
                    id:existingBookmark.id,
                }
            })
            await prisma.tweet.update({
                where:{id:tweetId},
                data: {bookmarks:{decrement:1}}
            })
            return res.status(400).json({ msg: 'You have already bookmarked this tweet' });
        }
        await prisma.bookmark.create({
            data:{
                tweetId:tweetId,
                userId:userId
            }
        })

        await prisma.tweet.update({
            where:{id:tweetId},
            data: {bookmarks:{increment:1}}
        })
        res.status(200).json({
            msg:"tweet bookmarked successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}
export const userBookmarkedTweet = async(req:Request , res:Response)=>{
    const userId : number = parseInt(req.params.userId)
   try {
     const bookmarkedTweets = await prisma.bookmark.findMany({
         where:{
             userId:userId
         },
         include:{tweet:true}
     })
     res.status(200).json({
         tweets:bookmarkedTweets
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}
export const allrepostAndLikes = async(req:Request,res:Response)=>{
   try {
     const likes = await prisma.like.findMany()
     const repost = await prisma.repost.findMany()
     res.status(200).json({
         likes,repost
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}
