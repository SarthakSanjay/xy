import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { CustomRequest } from "../middleware/authMiddleware";
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
 try {
       const user =  await prisma.user.create({
           data : {username , fullname , email ,password ,bio ,designation ,links ,location}
       })
       const token = jwt.sign({email:email,password:password}, process.env.TOKEN_SECRET as jwt.Secret)
       console.log(token);
   
       console.log(user);
       // console.log(user);
       res.status(201).json({
           msg:"user inserted/registered",
           userId:user.id,
           token
       })
 } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
 }
}
export const loginUser = async(req:Request , res:Response)=>{
    const {email ,password}:User = req.body
    const token = jwt.sign({email:email,password:password},process.env.TOKEN_SECRET as jwt.Secret)
 try {
       const user = await prisma.user.findFirst({
           where: {
               email: email
           }
       })
       if(user?.password === password){
           return res.status(200).json({
               msg:"login success",
               userId:user.id,
               token
           })
       }
   
       console.log(user);
       // console.log(user);
       res.status(404).json({
           msg:"not authorized",
       })
 } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
 }
}


export const getAllUser = async(req:CustomRequest , res:Response)=>{
   try {
     const users = await prisma.user.findMany()
     console.log(req.user?.id);
     res.status(200).json({
         msg:"success",
         users:users
     })
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}


export const updateUser = async(req:CustomRequest , res:Response) =>{
    const field = req.body
    const id :number = req.user?.id
    console.log('field',field , "id",id);
   try {
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
   } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
   }
}

export const deleteUser = async(req:CustomRequest , res:Response)=>{
    const id : number = req.user?.id
  try {
      await prisma.user.delete({
          where:{id:id}
      })
      res.status(200).json({
          msg:"user deleted successfully"
      })
  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
  }
}
export const getSpecificUser = async(req:Request , res:Response)=>{
    // const id : number = parseInt(req.params.id)
    const username: string = req.params.username.toString()
  try {
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
  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({msg:"Internal server error"})
  }
}

export const displayUsername = async(req:CustomRequest , res:Response)=>{
    const username:string = req.user?.username
    try {
        if(!username){
            return res.json({})
        }
        res.status(200).json({
            username
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"}) 
    }
}

export const getUserProfile = async(req:CustomRequest , res:Response)=>{
    const userId : number = parseInt(req.user?.id)
    try {
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        res.status(200).json({
            user
        })
    }  catch (error:any) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"}) 
    }
}