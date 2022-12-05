import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import * as stubs from '../__test__/stubs'

const seedUsers = () => {
  return Promise.all(
    stubs.users.map(async (data: Prisma.UserCreateArgs['data']) => {
      return await db.user.create({ data });
    }));
};

const seedExchanges = () => {
  return Promise.all(
    stubs.exchanges.map(async (data: Prisma.ExchangeCreateArgs['data']) => {
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
