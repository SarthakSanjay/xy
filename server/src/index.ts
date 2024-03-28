import express from 'express';
import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import userRouter from './routes/user'
import tweetRouter from './routes/tweet'
import commentRouter from './routes/comment'
import likeRouter from './routes/like'
import repostRouter from './routes/repost'
import cors from 'cors'
const prisma = new PrismaClient();
const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use('/',userRouter)
app.use('/tweet',tweetRouter)
app.use('/comment',commentRouter)
app.use('/like', likeRouter)
app.use('/repost',repostRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("Express is working fine");
});


const startServer = async () => {
    try {
        await app.listen(3000);
        console.log("Server is running on port 3000");
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

startServer();
