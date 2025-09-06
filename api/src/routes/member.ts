import { Hono } from "hono"

export const member = new Hono()

member.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})