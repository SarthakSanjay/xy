import express from 'express';
import { PrismaClient } from "@prisma/client";
import { getAllUser, insertUser, updateUser } from './controllers/user';
import { Request, Response } from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.send("Express is working fine");
});

app.post("/",insertUser)
// insertUser();
app.put('/update/:id',updateUser)
app.get('/all',getAllUser)
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
