import { Hono } from "hono"

export const campaignTypes = new Hono()

campaignTypes.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})