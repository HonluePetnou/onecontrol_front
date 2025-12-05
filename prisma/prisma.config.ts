import { PrismaMariaDb } from '@prisma/adapter-mariadb'; // Adjust this import based on your database

const dbConfig = {
  adapter: new PrismaMariaDb({
    // Provide your database connection details here
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }),
};

export default {
  datasources: {
    db: dbConfig,
  },
};