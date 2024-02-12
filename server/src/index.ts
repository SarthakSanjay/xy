import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createUser } from './controllers/user.controller'


const prisma = new PrismaClient({
  datasourceUrl: "postgresql://sarthaksanjaycoll21:uFsaGK2N8Udi@ep-crimson-sky-00140653.us-east-2.aws.neon.tech/cohort2test?sslmode=require",
}).$extends(withAccelerate())
const app = new Hono()


app.get('/', (c) => {

  return c.text('Hello from Hono!')
})

app.post('/',async(c)=>{
  const body = await c.req.json()
  console.log(body);
  const create = await createUser(body)
  await prisma.$disconnect()
  return c.text("user created",body)
  
})
export default app
