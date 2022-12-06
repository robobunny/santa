import type {
  QueryResolvers,
  MutationResolvers,
  WishRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { hasRole } from 'src/lib/auth';

export const wishes: QueryResolvers['wishes'] = () => {
  return db.wish.findMany({
    where: { userId: context.currentUser?.id },
  })
}

export const adminWishes: QueryResolvers['wishes'] = () => {
  return hasRole(["mom", "admin"])
    ? db.wish.findMany()
    : wishes();
};

export const wish: QueryResolvers['wish'] = ({ id }) => {
  return db.wish.findUnique({
    where: {
      id,
      userId: context.currentUser?.id,
    },
  })
}

export const createWish: MutationResolvers['createWish'] = ({ input }) => {
  input = {
    ...input,
    userId: context.currentUser?.id,
  };
  return db.wish.create({
    data: input,
  })
}

export const updateWish: MutationResolvers['updateWish'] = ({ id, input }) => {
  return db.wish.update({
    data: input,
    where: {
      id,
      userId: context.currentUser?.id,
    },
  })
}

export const deleteWish: MutationResolvers['deleteWish'] = ({ id }) => {
  return db.wish.delete({
    where: { id },
  })
}

export const Wish: WishRelationResolvers = {
  user: (_obj, { root }) => {
    return db.wish.findUnique({ where: { id: root?.id } }).user()
  },
}
