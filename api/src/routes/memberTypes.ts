import { Hono } from "hono"

export const memberTypes = new Hono()

memberTypes.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})