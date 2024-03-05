import { app } from '@/hono';
import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { cors } from 'hono/cors';
import * as schema from "./db/schema";
import authhandlers from './routes/auth.route';


app.use('/*', cors())
app.use(async (ctx, next) => {
  const connection = new Pool({ connectionString: ctx.env.DATABASE_URL });
  ctx.db = drizzle(connection, { schema });
  await next();
});

// routers
app.get("/api/auth", ...authhandlers)

app.get("/", (c) => c.json(c.env))

export default app
