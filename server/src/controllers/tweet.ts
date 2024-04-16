import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

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
              isBookmarked:true,
              isLiked:true,
              isReposted:true,
              createOn:true,
              user:{
                select:{
                    id:true,
                    fullname:true,
                    username:true,
                    bio:true,
                    createOn:true,
                    _count:{
                        select:{
                            followedBy:true,
                            following:true,
                        }
                    }
                }
              },
              _count:{
                  select:{
                      comment:true,
                      bookmark:true,
                      like:true,
                      repost:true
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
              isBookmarked:true,
              isLiked:true,
              isReposted:true,
              createOn:true,
              user:true,
              _count:{
                select:{
                    comment:true,
                    bookmark:true,
                    like:true,
                    repost:true
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

export const getTweetByUserId = async(req:CustomRequest,res:Response)=>{
    const userId: number = parseInt(req.user?.id)
  try {
      const tweet = await prisma.tweet.findMany({
          where:{
              userId:userId
          },
          select:{
              id:true,
              text:true,
              isBookmarked:true,
              isLiked:true,
              isReposted:true,
              createOn:true,
              user:true,
              _count:{
                select:{
                    comment:true,
                    bookmark:true,
                    like:true,
                    repost:true
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