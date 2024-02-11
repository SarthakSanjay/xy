import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {
    const name = await c.req.json()
    console.log(name);
  return c.text('Hello Hono!')
})

export default app
