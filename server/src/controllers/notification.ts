import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNotification = async(req:CustomRequest ,res:Response) =>{
    const userId : number = req.user?.id

    const notifications = await prisma.notification.findMany({
        where:{
            tweet:{
                userId:userId
            }
        },select:{
            id:true,
            type:true,
            user:{
                select:{
                    id:true,
                    fullname:true,
                    username:true
                }
            },
            tweet:{
                select:{
                    id:true,
                    text:true
                }
            },
            createOn:true
        }
    })

    res.status(200).json({
        notifications
    })
}

export const getAllNotification = async(req:Request ,res:Response) =>{
    const noti = await prisma.notification.findMany({
        select:{
            id:true,
            type:true,
            user:true,
            targetId:true,
            target:{
                select:{
                    id:true,
                    fullname:true,
                    username:true
                    
                }
            },
            tweet:{
                select:{
                    user:{
                        select:{
                            id:true,
                            fullname:true,
                            username:true
                        }
                    }
                }
            }
        }
    })
   const message = noti.map(n =>{
        return `${n.user.fullname} ${n.type} ${n.tweet?.user.fullname || n.target?.fullname }`
    })
    console.log(noti);
    res.status(200).json({message})
}