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
   }
}

export const getAllTweets = async(req:Request , res:Response)=>{
    const tweets = await prisma.tweet.findMany({
        select:{
            id:true,
            text:true,
            commentCount:true,
            reposts:true,
            likes:true,
            views:true,
            bookmarks :true,
            createOn:true,
            user:true
        }
    })
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
}
export const repostTweet = async(req:Request , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.params.userId) //change later
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

export const bookmarkTweet = async(req:Request , res:Response)=>{
    const tweetId :number = parseInt(req.params.id)
    const userId :number = parseInt(req.params.userId) //change later
    try {
        const existingBookmark = await prisma.bookmark.findUnique({
            where:{
                tweetId:tweetId,
                userId:userId
            }
        })
        if (existingBookmark) {
            await prisma.bookmark.delete({
                where:{
                    userId:userId,
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
    const bookmarkedTweets = await prisma.bookmark.findMany({
        where:{
            userId:userId
        },
        include:{tweet:true}
    })
    res.status(200).json({
        tweets:bookmarkedTweets
    })
}
export const allrepostAndLikes = async(req:Request,res:Response)=>{
    const likes = await prisma.like.findMany()
    const repost = await prisma.repost.findMany()
    res.status(200).json({
        likes,repost
    })
}