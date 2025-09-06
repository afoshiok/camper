import { Hono } from "hono"

export const visit = new Hono()

visit.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})