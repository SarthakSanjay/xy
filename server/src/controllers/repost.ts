import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

const prisma = new PrismaClient();

export const repostTweet = async(req:CustomRequest , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.user?.id) //change later
    console.log('repost',userId);
    try {
        const existingRepost = await prisma.repost.findUnique({
            where:{
                tweetId:tweetId,
                userId:userId
            }
        })
        if (existingRepost) {
            await prisma.repost.delete({
                where:{
                    userId:userId,
                }
            })
            await prisma.tweet.update({
                where:{id:tweetId},
                data: {reposts:{decrement:1}}
            })
            return res.status(400).json({ msg: 'You have already reposted this tweet' });
        }
        await prisma.repost.create({
            data:{
                tweetId:tweetId,
                userId:userId
            }
        })

        await prisma.tweet.update({
            where:{id:tweetId},
            data: {reposts:{increment:1}}
        })
        res.status(200).json({
            msg:"tweet reposted successfully"
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"})
    }
}