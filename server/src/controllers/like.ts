import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const likeTweet = async(req:Request , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.params.userId) //change later
    try {
        const existingLike = await prisma.like.findUnique({
            where:{
                tweetId:tweetId,
                userId:userId
            }
        })
        if (existingLike) {
            console.log(existingLike);
            await prisma.like.delete({
                where:{
                    userId:userId,
                    // tweetId:tweetId
                }
            })
            await prisma.tweet.update({
                where:{id:tweetId},
                data: {likes:{decrement:1}}
            })
            return res.status(400).json({ msg: 'You have already liked this tweet' });
        }
        await prisma.like.create({
            data:{
                tweetId:tweetId,
                userId:userId
            }
        })

        await prisma.tweet.update({
            where:{id:tweetId},
            data: {likes:{increment:1}}
        })
        res.status(200).json({
            msg:"tweet liked successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}
export const userLikedTweet = async(req:Request, res:Response)=>{
    const userId : number = parseInt(req.params.userId)
   try {
     const likes = await prisma.like.findMany({
         where:{
             userId:userId
         },
         include:{tweet:true}
     })
     
     res.status(200).json({
         msg:'success',
         likes:likes
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}

export const isLikedTweet = async(req:CustomRequest , res:Response)=>{
    const userId:number = req.user?.id
    const tweetId:number = parseInt(req.params.tweetId)
    try {
      const liked =  await prisma.like.findFirst({
            where:{
                userId:userId,
                tweetId:tweetId
            }
        })
        if(!liked){
            res.status(200).json({
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