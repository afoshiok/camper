import { Hono } from 'hono'
import { campaign } from './campaign'
import { prisma } from './middleware/prismaMiddleware'


const app = new Hono().basePath('/api')
app.use('*', prisma())

app.route('/campaign', campaign)

app.get('/status', (c) => {
  c.status(200)
  return c.text('Hello!')
})

export default app
