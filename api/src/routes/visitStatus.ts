import { Hono } from "hono"

export const visitStatus = new Hono()

visitStatus.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})