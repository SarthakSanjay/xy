import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";

const prisma = new PrismaClient();

export const followUser = async(req:CustomRequest , res:Response) =>{
    const followedById :number = req.user?.id 
    const {followingId} = req.body
    console.log('followedBy',followedById,'followingId', followingId);
   try {
     const followedUser = await prisma.follow.create({
         data:{
             followedById:followedById,
             followingId: followingId
         }
     })
     await prisma.notification.create({
        // @ts-ignore
        data:{
            userId: followedById,
            type :'Followed',
            targetId: followingId
        }
    })

     res.status(200).json({
        msg:  `${followedById} now following ${followingId}`,
        followedUser
     })
   }  catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"}) 
}

}

export const getFollowerAndFollowings = async(req:Request , res:Response) => {
    const userId:number = parseInt(req.params.id)
    try {
        const following = await prisma.follow.findMany({
            where:{
                followedById:userId
            },select:{
                following:true
            }
        })
        const followedBy = await prisma.follow.findMany({
            where:{
                followingId:userId
            },select:{
                followedBy:true
            }
        })
        res.status(200).json({
            following,
            followedBy
        })
    }  catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"}) 
    }
}


export const getFollowerAndFollowingsCount = async(req:CustomRequest , res:Response) => {
    const userId:number = parseInt(req.user?.id)
    console.log(userId);
    try {
        const following = await prisma.follow.count({
            where:{
                followedById:userId
            }
        })
        const followedBy = await prisma.follow.count({
            where:{
                followingId:userId
            }
        })
        res.status(200).json({
            following,
            followedBy
        })
    }  catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"}) 
    }
}