import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface Tweet {
    userId :number,
    text:string
}
export const postTweet = async(req:Request , res:Response) =>{
    const body:Tweet = req.body
    const tweet = await prisma.tweet.create({
        data : body
    })
    res.status(201).json({
        msg:"tweet posted",
        tweet:tweet
    })
}

export const getAllTweets = async(req:Request , res:Response)=>{
    const tweets = await prisma.tweet.findMany()
    res.status(200).json({
        msg:"success",
        tweets:tweets
    })
}

export const deleteTweet = async(req:Request , res:Response) =>{
    const tweetId : number = parseInt(req.params.id)
    await prisma.tweet.delete({
        where:{id:tweetId}
    })
    res.status(200).json({
        msg:"tweet deleted"
    })
}

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
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}