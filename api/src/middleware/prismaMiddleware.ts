import { createMiddleware } from "hono/factory";
import { PrismaClient } from '../generated/prisma'
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from 'pg';
import { Context, MiddlewareHandler } from "hono";

export const prisma = (): MiddlewareHandler => //source: https://zaher.dev/blog/cloudflare-workers-honojs-and-postgres
    createMiddleware(async (ctx: Context, next: any) => {
        if(!ctx.get('prisma')) {
            const connectionString = process.env.DATABASE_URL;
            const pool = new Pool({ connectionString });
            const adapter = new PrismaPg(pool)
            ctx.set('prisma', new PrismaClient({ adapter }))
        }
        await next();
    })

