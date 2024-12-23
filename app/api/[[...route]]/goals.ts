import { db } from "@/db/drizzle";
import { goals, insertGoalSchema } from "@/db/schema";
import { getCurrentMonthInYYYYMM } from "@/lib/utils";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { createId } from "@paralleldrive/cuid2";
import { and, desc, eq } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
  .get(
    "/:id/:month?",
    zValidator(
      "param",
      z.object({
        id: z.string(),
        month: z.string().optional(),
      })
    ),
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c);
      const { id, month } = c.req.valid("param");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      if (!id) {
        return c.json({ error: "Missing id." }, 400);
      }

      let data;

      if (month) {
        data = await db
          .select({
            id: goals.categoryId,
            month: goals.month,
            amount: goals.amount,
          })
          .from(goals)
          .where(and(eq(goals.categoryId, id), eq(goals.month, month)));
      } else {
        data = await db
          .select({
            id: goals.categoryId,
            month: goals.month,
            amount: goals.amount,
          })
          .from(goals)
          .where(and(eq(goals.categoryId, id)))
          .orderBy(desc(goals.month));
      }

      if (!data) {
        return c.json({ error: "Not found" }, 404);
      }

      return c.json({ data });
    }
  )

  .post(
    "/",
    clerkMiddleware(),
    zValidator(
      "json",
      z.object({
        categoryId: z.string(),
        amount: z.number(),
      })
    ),
    async (c) => {
      const auth = getAuth(c);

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const values = c.req.valid("json");

      if (!values) {
        return c.json({ error: "Missing id." }, 400);
      }

      const data = await db
        .insert(goals)
        .values({
          id: createId(),
          month: "default",
          ...values,
        })
        .returning();

      return c.json({ data });
    }
  )
  .patch(
    "/:id",
    clerkMiddleware(),
    zValidator(
      "param",
      z.object({
        id: z.string(),
      })
    ),
    zValidator(
      "json",
      insertGoalSchema.pick({
          amount: true,
      })
    
    ),

    async (c) => {
      const auth = getAuth(c);
      const { id } = c.req.valid("param");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const values = c.req.valid("json");

      if (!values) {
        return c.json({ error: "Missing id." }, 400);
      }

      const [data] = await db
        .update(goals)
        .set(values)
        .where(eq(goals.categoryId, id))
        .returning();

      return c.json({ data });
    }

    )

    .put(
      "/create-update",
      clerkMiddleware(),
      zValidator(
        "json",
        z.object({
          categoryId: z.string(),
          amount: z.number(),
        })
      ),

      async (c) =>{
        const auth = getAuth(c);
        const values = c.req.valid("json");
        const month = getCurrentMonthInYYYYMM();

        if (!auth?.userId) {
          return c.json({ error: "Unauthorized" }, 401);
        }

        if (!values) {
          return c.json({ error: "Missing id." }, 400);
        }

        const [checkData] = await db
        .select({
          id: goals.categoryId,
          month: goals.month,
          amount: goals.amount,
        })
        .from(goals)
        .where(and(eq(goals.categoryId, values.categoryId), eq(goals.month, month)));

        if(checkData){

          const [data] = await db
          .update(goals)
          .set(values)
          .where(eq(goals.categoryId, values.categoryId))
          .returning();

          return c.json({ data });
        }
        else{
          const [data] = await db
          .insert(goals)
          .values({
            id: createId(),
            month: month,
            ...values,
          })
          .returning();

          return c.json({ data });
        }
      }
    )

    



export default app;
