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
