import { PrismaClient } from '@prisma/client';

// save prisma, avoid creating many prisma dus to hot reloading dev
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;
