import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoute from './user routes/userRoute.js';

const app = express();
app.use(express.json());
// prismaClient waxay iga caawinesa inaa query database-ka u diro ama aan ka kaeeno
export const prisma = new PrismaClient();


const PORT = 8000;

app.use('/api/users', userRoute)


app.listen(PORT, () => {
    console.log(`Server is running o port: ${PORT}`);
})

// 1. si aad usameesid schema: waxad leddahy: npx prisma init --datasource-provider mysql
// 2. npx prisma migrate dev --name init --create-only: si aan u la socono wax walba oo ku saabsan dtabase-kena
// 3. npx prisma migrate deploy: model-ka aan so kordhiyay prisma ogoow oo la soco
// 4. npx prisma studio : gui waye