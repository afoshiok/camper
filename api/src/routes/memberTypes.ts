import { Hono } from "hono"

export const memberTypes = new Hono()

const populateData = [
    {type_name: "Volunteer"},
    {type_name: "Organizer"}
]

memberTypes.post('/populate', async (ctx) => {
    const prisma = ctx.get('prisma')
    try{
        const allTypes = await prisma.MemberTypes.findMany()
        if (allTypes.length === 0){
            const types = await prisma.MemberTypes.createMany({
                data: populateData
            })
            return ctx.text('MemberType Table populated')
        }
        return ctx.text('MemberType Table is already populated')
    }
    catch (error){
        console.error('Error populating member types:', error)
        return ctx.json({error: error instanceof Error ? error.message : 'Unknown error'}, 500)
    }
})