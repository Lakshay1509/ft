import { db } from "@/db/drizzle";
import { goals } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { asc, eq } from "drizzle-orm";
import { Hono } from "hono";
import {z} from "zod"


const app = new Hono()
    .get("/:id",zValidator(
        "param",
        z.object({
            id:z.string()
        })
    ), clerkMiddleware(),async(c)=>{

        const auth = getAuth(c);
        const { id } = c.req.valid("param");

        if(!auth?.userId){
            return c.json({error:"Unauthorized"},401);
        }

        if (!id) {
            return c.json({ error: "Missing id." }, 400);
          }

        const data =  await db
        .select({
            id: goals.categoryId,
            month : goals.month,
            amount: goals.amount,
            
            
        })
        .from(goals)
        .where(
            eq(goals.categoryId, id)
        )
        .orderBy(asc(goals.month))

        if(!data){
            return c.json({error:"Not found"},404)
        }

        return c.json({data})
    })





export default app;