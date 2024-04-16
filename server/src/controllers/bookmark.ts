import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

const prisma = new PrismaClient();

export const bookmarkTweet = async(req:CustomRequest , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.user?.id) 
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
            // await prisma.tweet.update({
            //     where:{id:tweetId},
            //     data: {bookmarks:{decrement:1},isBookmarked:false}
            // })
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
            data: {
            isBookmarked:true
        }
        })
        res.status(200).json({
            msg:"tweet bookmarked successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}
export const userBookmarkedTweet = async(req:CustomRequest , res:Response)=>{
    const userId : number = parseInt(req.user?.id)
   try {
     const bookmarked = await prisma.bookmark.findMany({
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
         bookmarked
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}