import { Hono } from "hono"

export const campaignTypes = new Hono()

const populateData = [
    {id:1, type_name: "Election"},
    {id: 2, type_name: "Legislation"},
    {id: 3, type_name: "Other"}
]

campaignTypes.post('/populate', async (ctx) => {
    const prisma = ctx.get('prisma')
    try{
        const allTypes = await prisma.campaignTypes.findMany()
        if (allTypes.length === 0){
            const types = await prisma.campaignTypes.createMany({
                data: populateData
            })
            return ctx.text('CampaignTypes Table has been populated populated')
        }
        return ctx.text('CampaignTypes Table is already populated')
    }
    catch (error){
        console.error('Error populating member types:', error)
        return ctx.json({error: error instanceof Error ? error.message : 'Unknown error'}, 500)
    }
})