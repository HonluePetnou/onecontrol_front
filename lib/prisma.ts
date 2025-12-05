import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { env } from "@/config/env";
import { DB_DEFAULTS } from "@/config/constants";

// Use a properly initialized global holder so the symbol exists at runtime
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Create MariaDB adapter using env values
const adapter = new PrismaMariaDb({
  host: env.database.host,
  port: env.database.port,
  user: env.database.user,
  password: env.database.password,
  database: env.database.name,
  connectionLimit: DB_DEFAULTS.CONNECTION_LIMIT,
});

const client =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (env.app.env !== "production") globalForPrisma.prisma = client;

export default client;
export const prisma: any = client;
