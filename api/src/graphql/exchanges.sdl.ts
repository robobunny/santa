export const schema = gql`
  type Exchange {
    id: Int!
    createdAt: DateTime!
    name: String!
    admin: User!
    adminId: Int!
    users: [User]!
  }

  type Query {
    exchanges: [Exchange!]! @requireAuth
    exchange(id: Int!): Exchange @requireAuth
  }

  input CreateExchangeInput {
    name: String!
    adminId: Int!
  }

  input UpdateExchangeInput {
    name: String
    adminId: Int
  }

  type Mutation {
    createExchange(input: CreateExchangeInput!): Exchange! @requireAuth
    updateExchange(id: Int!, input: UpdateExchangeInput!): Exchange!
      @requireAuth
    deleteExchange(id: Int!): Exchange! @requireAuth
  }
`
