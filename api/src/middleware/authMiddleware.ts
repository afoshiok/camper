import { createMiddleware } from 'hono/factory'
import { decode, sign, verify } from 'hono/jwt'

export const authMiddleware = createMiddleware(async (ctx, next) => {
    const authHeader = ctx.req.header('Authorization')

    
})