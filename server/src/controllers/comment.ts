import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

const prisma = new PrismaClient();

export const addCommentToTweet = async(req:CustomRequest ,  res:Response)=>{
    const tweetId:number = parseInt(req.params.tweetId)
    const userId: number = parseInt(req.user?.id)
    const text : string = req.body.text
    const parentCommentId:number = req.body.parentCommentId
    console.log(tweetId , userId , text);
   try {
        const comment = await prisma.comment.create({
            data:{
                tweetId:parentCommentId ? null : tweetId,
                userId:userId,
                text:text,
                parentCommentId:parentCommentId
            }
        })
        return res.status(200).json({
            msg:'successfully commented',
            comment
    
         })
   } catch (error:any) {
    console.log(error.message);
     res.status(404).json({
        msg:"comment failed"
     })
   }

}

export const getCommentsByTweetId = async(req:Request , res:Response)=>{
    const tweetId = parseInt(req.params.tweetId)
   try {
     const comments = await prisma.comment.findMany({
         where:{
             tweetId:tweetId
         },
         select:{
            id:true,
            bookmarks:true,
            likes:true,
            reposts:true,
            createOn:true,
            text:true,
            views:true,
            user:true
         }
     })
     res.status(200).json({
         comments
     })
   } catch (error :any) {
    res.status(404).json({
        msg : error.message
    })
   }
}

export const getChildComments = async(req:Request,res:Response)=>{
    const commentId = parseInt(req.params.commentId)
    try {
        const comments = await prisma.comment.findMany({
            where:{
                id:commentId
            },
            select:{
                childComments:{
                    select:{
                        id:true,
                        bookmarks:true,
                        likes:true,
                        reposts:true,
                        createOn:true,
                        text:true,
                        views:true,
                        user:true
                    }
                }
            }
        })
        res.status(200).json({
            comments
        })
    } catch (error :any) {
        res.status(404).json({
            msg : error.message
        })
       }
    
}