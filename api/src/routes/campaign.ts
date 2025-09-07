import { Hono } from "hono"


export const campaign = new Hono()

campaign.get('/all', async (ctx) => {
    const prisma = ctx.get('prisma')
    const campaigns = await prisma.Campaign.findMany()
    if (!campaigns){
        return ctx.notFound()
    }
    return ctx.json(campaigns)
})

campaign.post('/new', async (ctx) =>{
    try{
        const body = await ctx.req.json()
        const now = new Date();
        const endDate = new Date(2025, 10, 4)
        
        const prisma = ctx.get('prisma')
        const campaign = await prisma.Campaign.create({
            data: {
                name: body.name,
                description: body.description,
                city: body.city,
                state: body.state,
                country: body.country,
                zipcode: body.zipcode,
                campaign_type: body.campaign_type,
                date_created: now,
                end_date: endDate
            }
        })
        return ctx.text('A new campaign has been added!', 201)
    } catch (error){
        return ctx.json({error: error})
    }
    
})