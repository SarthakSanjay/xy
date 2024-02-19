import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();

interface User{
    username:string,
    fullname: string
    email:string,
    password:string,
    bio:string,
    designation:string,
    links:string,
    location:string
}
export const registerUser = async(req: Request , res:Response)=>{
    const {username , fullname , email ,password ,bio ,designation ,links ,location}:User = req.body
    const user =  await prisma.user.create({
        data : {username , fullname , email ,password ,bio ,designation ,links ,location}
    })
    const token = jwt.sign({email:email,password:password}, process.env.TOKEN_SECRET as jwt.Secret)
    console.log(token);

    console.log(user);
    // console.log(user);
    res.status(201).json({
        msg:"user inserted",
        user:user,
        token
    })
}
export const loginUser = async(req:Request , res:Response)=>{
    const {email ,password}:User = req.body
    const token = jwt.sign({email:email,password:password},process.env.TOKEN_SECRET as jwt.Secret)
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    if(user?.password === password){
        return res.status(200).json({
            msg:"login success",
            token
        })
    }
    
    console.log(user);
    // console.log(user);
    res.status(404).json({
        msg:"not authorized",
    })
}


export const getAllUser = async(req:Request , res:Response)=>{
    const users = await prisma.user.findMany()
    res.status(200).json({
        msg:"success",
        users:users
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

export const deleteUser = async(req:Request , res:Response)=>{
    const id : number = parseInt(req.params.id)
    await prisma.user.delete({
        where:{id:id}
    })
    res.status(200).json({
        msg:"user deleted successfully"
    })
}
export const getSpecificUser = async(req:Request , res:Response)=>{
    // const id : number = parseInt(req.params.id)
    const username: string = req.params.username.toString()
   const user =  await prisma.user.findUnique({
        where:{username:username},
        include:{
            tweets:true
        }
    })
    if(!user){
        return res.status(404).json({
            msg:"user not found"
        })
    }
    res.status(200).json({
        msg:"user found",
        user:user
    })
}

