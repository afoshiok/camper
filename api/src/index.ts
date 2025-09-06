import { Hono } from 'hono'
import { campaign } from './routes/campaign'
import { prisma } from './middleware/prismaMiddleware'
import { memberTypes } from './routes/memberTypes'
import { campaignTypes } from './routes/capaignTypes'
import { member } from './routes/member'
import { visitStatus } from './routes/visitStatus'
import { visit } from './routes/visit'
import { campaignMember } from './routes/campaignMember'
import { door } from './routes/door'


const app = new Hono().basePath('/api')
app.use('*', prisma())

app.route('/campaign', campaign)
app.route('/member', member)
app.route('/membertypes', memberTypes)
app.route('/campaigntypes', campaignTypes)
app.route('/visitstatus', visitStatus)
app.route('/visit', visit)
app.route('/campaignmember', campaignMember)
app.route('/door', door)

app.get('/status', (c) => {
  c.status(200)
  return c.text('Hello!')
})

export default app
