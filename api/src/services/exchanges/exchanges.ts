import type {
  QueryResolvers,
  MutationResolvers,
  ExchangeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const exchanges: QueryResolvers['exchanges'] = () => {
  return db.exchange.findMany()
}

export const exchange: QueryResolvers['exchange'] = ({ id }) => {
  return db.exchange.findUnique({
    where: { id },
  })
}

export const createExchange: MutationResolvers['createExchange'] = ({
  input,
}) => {
  return db.exchange.create({
    data: input,
  })
}

export const updateExchange: MutationResolvers['updateExchange'] = ({
  id,
  input,
}) => {
  return db.exchange.update({
    data: input,
    where: { id },
  })
}

export const deleteExchange: MutationResolvers['deleteExchange'] = ({ id }) => {
  return db.exchange.delete({
    where: { id },
  })
}

export const Exchange: ExchangeRelationResolvers = {
  admin: (_obj, { root }) => {
    return db.exchange.findUnique({ where: { id: root?.id } }).admin()
  },
  users: (_obj, { root }) => {
    return db.exchange.findUnique({ where: { id: root?.id } }).users()
  },
}
