export const schema = gql`
  type Wish {
    id: Int!
    createdAt: DateTime!
    title: String
    url: String
    description: String
    userId: Int!
    user: User!
  }

  type Query {
    wishes: [Wish!]! @requireAuth
    wish(id: Int!): Wish @requireAuth
  }

  input CreateWishInput {
    title: String
    url: String
    description: String
    userId: Int!
  }

  input UpdateWishInput {
    title: String
    url: String
    description: String
    userId: Int
  }

  type Mutation {
    createWish(input: CreateWishInput!): Wish! @requireAuth
    updateWish(id: Int!, input: UpdateWishInput!): Wish! @requireAuth
    deleteWish(id: Int!): Wish! @requireAuth
  }
`
