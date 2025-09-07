import { Hono } from "hono"

//FIXME: Add header for auth, we don't want just anyone making these requests!

export const campaign = new Hono()

//GET all campaigns
campaign.get('/all', async (ctx) => {
    try {
        const prisma = ctx.get('prisma')
        const allCampaigns = await prisma.Campaign.findMany()
        return ctx.json(allCampaigns, 200)
    } catch (error){
        return ctx.json({error: error})
    }
})

//Get a capaign by ID
campaign.get('/:id', async (ctx) => {
    try {
        const prisma = ctx.get('prisma')
        const campaignId = ctx.req.param('id')
        const campaign = await prisma.Campaign.findUnique({
            where: {
                id: campaignId
            }
        })
        if (!campaign){
            return ctx.text("The campaign you are looking for doesn't exist", 404)
        }
        return ctx.json(campaign, 200)
    }
    catch (error){
        return ctx.json({error: error}, 500)
    }
})

//Create a new campaign
campaign.post('/new', async (ctx) =>{
    try{
        const body = await ctx.req.json()
        const now = new Date();
        const endDate = new Date(2025, 10, 4) //For testing
        
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
                end_date: endDate,
                campaign_status: body.campaign_status
            }
        })
        return ctx.text('A new campaign has been added!', 201)
    } catch (error){
        return ctx.json({error: error}, 500)
    }
})

campaign.put("/", async (ctx) => {
    //TODO: Change campaign data
})

campaign.delete("/:id", async (ctx) => {
    try {
        const prisma = ctx.get('prisma')
        const campaignId = ctx.req.param('id')
        const campaign = await prisma.Campaign.delete({
            where: {
                id: campaignId
            }
        })
        if (!campaign){
            return ctx.text("The campaign you are looking for doesn't exist", 404)
        }
        return ctx.text(`Campaign: ${campaignId} has been deleted`, 200)
    }
    catch (error){
        return ctx.json({error: error}, 500)
    }
})