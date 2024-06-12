import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNotification = async(req:CustomRequest ,res:Response) =>{
    const userId : number = req.user?.id
    console.log("userId",userId);
    await prisma.notification.updateMany(
        {
        where:{
            targetId : userId,
            isRead:false
        },
        data:{
            isRead:true
        }
     }
    )
    const noti = await prisma.notification.findMany({
        where:{
            targetId:userId
         },
        select:{
            id:true,
            type:true,
            user:{
                select:{
                    fullname:true
                }
            },
            tweet:{
                select:{
                    text:true
                }
            }
        }
    })
    const unreadCount = await prisma.notification.count({
        where:{
            targetId:userId,
            isRead:false
         }
    })
    const latestNoti = noti.reverse()
    console.log(latestNoti);
    res.status(200).json({latestNoti,unreadCount})

}

