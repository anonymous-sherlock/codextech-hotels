import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.dev.vars' });

if (!process.env.DATABASE_URL) {
    console.log('🔴 Cannot find database url');
}

export default {
    schema: './src/db/schema.ts',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',

    },
} satisfies Config;