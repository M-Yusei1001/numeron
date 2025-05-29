import { createClient } from '@supabase/supabase-js';
// import { PrismaClient } from './generated/prisma';

// const prisma = new PrismaClient()

export function devSupabaseClient() {
    const DEV_POSTGRES_URL = process.env.DEV_POSTGRES_URL || "";
    const DEV_ANON_KEY = process.env.DEV_ANON_KEY || "";

    if (!DEV_POSTGRES_URL || !DEV_ANON_KEY) {
        throw new Error("Supabase URL and ANON Key must be set in env.");
    };

    return createClient(DEV_POSTGRES_URL, DEV_ANON_KEY);
};