import { Hono } from "hono"


export const campaign = new Hono()

campaign.get('/all', async (c) => {
    const prisma = c.get('prisma')
    const campaigns = await prisma.Campaign.findMany()
    if (!campaigns){
        return c.notFound()
    }
    return c.json(campaigns)
})