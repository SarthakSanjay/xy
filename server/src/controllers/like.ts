import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const likeTweet = async(req:CustomRequest , res:Response)=>{
    const {tweetId , targetId} = req.body
    const userId :number = parseInt(req.user?.id)
  
    try {
        const existingLike = await prisma.like.findFirst({
            where:{
                tweetId:tweetId,
                userId:targetId
            }
        })
        if (existingLike) {
            console.log(existingLike);
            let id = existingLike.id
            await prisma.like.delete({
                where:{
                    id:id
                }
            })
            return res.status(200).json({ msg: 'like removed  ' });
        }
        await prisma.like.create({
            data:{
                tweetId:tweetId,
                userId:userId
            }
        })

        await prisma.tweet.update({
            where:{id:tweetId},
            data: {
                isLiked:true
            }
        })
    
         await prisma.notification.create({
            data:{
                userId: userId ,
                targetId:targetId,
                type :'Liked',
                tweetId:tweetId
            }
        })
        console.log('userId',userId,'targetId',targetId);
        res.status(200).json({
            msg:"tweet liked successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}
export const userLikedTweet = async(req:CustomRequest, res:Response)=>{
    const userId : number = parseInt(req.user?.id)
   try {
     const tweet = await prisma.like.findMany({
        where:{
            userId:userId
        },select:{
            tweet:{
              select:{
                  id:true,
                  text:true,
                  isBookmarked:true,
                  isReposted:true,
                  isLiked:true,
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
            }
        }
     })
     
     res.status(200).json({
         msg:'success',
         tweet
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}

export const isLikedTweet = async(req:CustomRequest , res:Response)=>{
    const userId:number = req.user?.id
    const tweetId:number = parseInt(req.params.tweetId)
    // console.log('userID',userId,'tweetId',tweetId);
    try {
      const liked =  await prisma.like.findFirst({
            where:{
                userId:userId,
                tweetId:tweetId
            }
        })
        if(!liked){
           return res.status(200).json({
                isLikedTweet:false
            })
        }
        res.status(200).json({
            isLikedTweet:true
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}