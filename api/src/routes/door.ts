import { Hono } from "hono"

export const door = new Hono()

door.get('/check', async (ctx) => {
    ctx.status(200)
    return ctx.text('works!')
})