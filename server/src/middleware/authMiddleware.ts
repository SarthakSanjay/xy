import { PrismaClient } from "@prisma/client";
import {Request as ExpressRequest , Response , NextFunction } from "express";
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

const prisma = new PrismaClient()
export interface CustomRequest extends ExpressRequest {
    user?: JwtPayload; 
}
interface user{
    id:number,
    email:string,
    username:string
}
export const authMiddleware = async(req:CustomRequest , res:Response , next:NextFunction)=>{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token){
        res.status(401).json({
            msg:"not authorized"
        })
    }
    let decoded : JwtPayload
    try {
        decoded = jwt.verify(token as string , process.env.TOKEN_SECRET as Secret) as JwtPayload
        const user = await prisma.user.findUnique({
            where:{
                email: decoded.email
            },
           
        })
        if (!user) {
            res.status(401).json({
                msg: "User not found"
            });
            return;
        }
        let userObj:user = {
            id: user.id,
            email: user.email,
            username:user.username
        };
        req.user = userObj
        next()
    } catch (error : any) {
        console.error('JWT verification failed:', error.message);
        return res.status(401).json({ msg: 'Authentication failed' })
    }
}