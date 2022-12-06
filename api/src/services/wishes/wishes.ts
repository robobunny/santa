import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const wishes: QueryResolvers['wishes'] = () => {
  return db.wish.findMany()
}

export const wish: QueryResolvers['wish'] = ({ id }) => {
  return db.wish.findUnique({
    where: { id },
  })
}

export const createWish: MutationResolvers['createWish'] = ({ input }) => {
  return db.wish.create({
    data: input,
  })
}

export const updateWish: MutationResolvers['updateWish'] = ({ id, input }) => {
  return db.wish.update({
    data: input,
    where: { id },
  })
}

export const deleteWish: MutationResolvers['deleteWish'] = ({ id }) => {
  return db.wish.delete({
    where: { id },
  })
}
