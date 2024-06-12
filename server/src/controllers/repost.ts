import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

const prisma = new PrismaClient();

export const repostTweet = async(req:CustomRequest , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.user?.id) //change later
    console.log('repost',userId);
    try {
        const existingRepost = await prisma.repost.findFirst({
            where:{
                tweetId:tweetId,
                userId:userId
            }
        })
        if (existingRepost) {
            await prisma.repost.delete({
                where:{
                    id:existingRepost.id,
                }
            })
            return res.status(400).json({ msg: 'You have already reposted this tweet' });
        }
        await prisma.repost.create({
            data:{
                tweetId:tweetId,
                userId:userId
            }
        })

       const tweet = await prisma.tweet.update({
            where:{id:tweetId},
            data: {
                isReposted:true
            }
        })

        await prisma.notification.create({
            data:{
                userId: userId ,
                targetId: tweet.userId,
                type :'Reposted',
                tweetId:tweet.id
            }
        })
        res.status(200).json({
            msg:"tweet reposted successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}

export const totalRepostByTweetId = async(req:Request , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const totalReposts = await prisma.repost.findMany({
        where:{
            tweetId:tweetId
        }
    })
    res.status(200).json({
        total : totalReposts.length
    })
}

export const userRepostedTweets = async(req:CustomRequest , res:Response)=>{
    const userId : number =  parseInt(req.user?.id)
  try {
      const tweet = await prisma.repost.findMany({
          where:{
              userId:userId
          },select:{
              tweet:{
                select:{
                    id:true,
                    text:true,
                    isLiked:true,
                    isBookmarked:true,
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
              }
          }
      })
      res.status(200).json({
        msg:'reposted tweets',
        tweet
      })
  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
}
}

export const isReposted = async(req:CustomRequest , res:Response)=>{
    const userId:number = req.user?.id
    const tweetId:number = parseInt(req.params.tweetId)
    // console.log('userID',userId,'tweetId',tweetId);
    try {
      const reposted =  await prisma.repost.findFirst({
            where:{
                userId:userId,
                tweetId:tweetId
            }
        })
        if(!reposted){
           return res.status(200).json({
                isRepostedTweet:false
            })
        }
        res.status(200).json({
            isRepostedTweet:true
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}