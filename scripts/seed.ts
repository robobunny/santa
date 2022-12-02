import { hashPassword } from '@redwoodjs/api'
import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const FAKE_PW = 'passwd';

const fakeUsers = [ "Billy", "Stevie", "Kevin", "Molly", "Cassie", "Mary", "Elizabeth", "Aydin", "Mom", ]
  .map((user, i)=>{
    let [hashedPassword, salt] = hashPassword(FAKE_PW);
    return {
      id: i+1,
      name: user,
      email: user.toLowerCase()+"@example.com",
      hashedPassword,
      salt,
      roles: user==="Mom" ? "mom" : user==="Billy" ? "admin" : "basic",
    };
  });

const seedUsers = () => {
  return Promise.all(
    fakeUsers.map(async (data: Prisma.UserCreateArgs['data']) => {
      return await db.user.create({ data });
    }));
};

const fakeExchanges = ['2022'].map((name, i)=>({
  name,
  id: i+1,
  adminId: 1,
  users: {
    connect: fakeUsers.map((u, i)=>i<8 && ({ id: u.id })).filter(Boolean),
  },
}));

const seedExchanges = () => {
  return Promise.all(
    fakeExchanges.map(async (data: Prisma.ExchangeCreateArgs['data']) => {
      return await db.exchange.create({ data });
    }));
};

export default async () => {
  try {
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )
    await seedUsers();
    await seedExchanges();
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
