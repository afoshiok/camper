import { Hono } from "hono"

export const member = new Hono()

member.post('/new', async (ctx) => {
    try {
        const body = await ctx.req.json()
        const prisma = ctx.get('prisma')
        const member = await prisma.Member.create({
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                member_type: body.member_type,
            }
        })
        return ctx.text('A new member has been added!', 201)
    } catch (error){
        return ctx.json({error: error}, 500)
    }
})

member.get('/all', async (ctx) => {
    //This endpoint will get the all the members part of a CAMPAIGN
})