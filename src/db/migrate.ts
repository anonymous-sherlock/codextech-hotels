import { config } from 'dotenv';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

config({ path: '.dev.vars' });

const databaseUrl = drizzle(postgres(`${process.env.DATABASE_URL}`, { ssl: 'require', max: 1 }));

const migrateDatabase = async () => {
    try {
        console.log('🟠 Migrating client');
        await migrate(databaseUrl, { migrationsFolder: "src/db/migrations" });
        console.log('🟢 Successfully Migrated');
        process.exit(0);
    } catch (error) {
        console.log('🔴 Error Migrating client', error);
        process.exit(0);
    }
};
migrateDatabase();