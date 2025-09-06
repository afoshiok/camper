import { Hono } from "hono"

export const campaignMember = new Hono()

campaignMember.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})