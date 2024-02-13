import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface User{
    username:string,
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    bio:string,
    designation:string,
    links:string,
    location:string
}
export const getAllUser = async(req:Request , res:Response)=>{
    const users = await prisma.user.findMany()
    res.status(200).json({
        msg:"success",
        users:users
    })
}
export const insertUser = async(req: Request , res:Response)=>{
    const body = req.body
    const user =  await prisma.user.create({
        data : body
    })
    console.log(body);
    // console.log(user);
    res.status(201).json({
        msg:"user inserted",
        user:user
    })
}

export const updateUser = async(req:Request , res:Response) =>{
    const field = req.body
    const id :number = parseInt(req.params.id)
    console.log('field',field , "id",id);
    const existingUser = await prisma.user.findUnique({
        where:{
            id : id
        }
    })
    if(!existingUser){
        return res.status(404).json({msg:"user not found"})
    }

    const updatedUser = await prisma.user.update({
        where:{id:id},
        data:{
            ...existingUser,
            ...field
        }
    })
    res.status(200).json({
        msg: 'User updated',
        user: updatedUser,
    });
}