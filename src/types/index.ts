import { NeonDatabase } from "drizzle-orm/neon-serverless"
import * as schema from "../db/schema";

export type ENV = {
  DATABASE_URL: string
  DATABASE_AUTH_TOKEN: string
}

declare module 'hono' {
  interface Context {
    db: NeonDatabase<typeof schema>
  }
}
