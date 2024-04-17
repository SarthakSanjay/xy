import { Request, Response } from 'express';
import { CustomRequest } from "../middleware/authMiddleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNotification = async(req:CustomRequest ,res:Response) =>{
    const userId : number = req.user?.id

    const notifications = await prisma.notification.findMany({
        where:{
            userId:userId
        }
    })
    res.status(200).json({
        notifications
    })
}