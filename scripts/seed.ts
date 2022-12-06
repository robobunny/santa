import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import * as stubs from '../__test__/stubs'

const seedUsers = () => {
  console.log(`Adding ${stubs.users.length} users to the dev db`);
  return Promise.all(
    stubs.users.map(async (data: Prisma.UserCreateArgs['data']) => {
      return await db.user.create({ data });
    }));
};

const seedWishes = () => {
  console.log(`Adding ${stubs.wishes.length} wishes to the dev db`);
  return Promise.all(
    stubs.wishes.map(async (data: Prisma.WishCreateArgs['data']) => {
      return await db.wish.create({ data });
    }));
}

export default async () => {
  try {
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )
    await seedUsers();
    await seedWishes();
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
