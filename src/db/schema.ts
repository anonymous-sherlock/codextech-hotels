import { sql } from "drizzle-orm";
import { doublePrecision, integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid, } from "drizzle-orm/pg-core";

export const userRole = pgEnum("UserRole", ['ADMIN', 'CUSTOMER'])
export const user = pgTable("User", {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    emailVerified: timestamp("email_verified", { precision: 3, mode: 'string' }),
    image: text("image"),
    password: text("password"),
    role: userRole("role").default('CUSTOMER').notNull(),
    createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
},
    (table) => {
        return {
            emailKey: uniqueIndex("User_email_key").on(table.email),
        }
    });

export const hotel = pgTable("Hotel", {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    name: text("name").notNull(),
    description: text("description"),
    address: text("address").notNull(),
    phoneNumber: text("phone_number").notNull(),
    website: text("website"),
    images: text("images").array(),
    rating: doublePrecision("rating"),
    amenities: text("amenities").array(),
    createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
});

