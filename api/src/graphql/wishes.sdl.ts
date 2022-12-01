export const schema = gql`
  type Wish {
    id: Int!
    user: User!
    userId: Int!
    name: String!
    description: String!
    price: String!
    url: String!
  }

  type Query {
    wishes: [Wish!]! @skipAuth
    wish(id: Int!): Wish @skipAuth
  }

  input CreateWishInput {
    userId: Int!
    name: String!
    description: String!
    price: String!
    url: String!
  }

  input UpdateWishInput {
    userId: Int
    name: String
    description: String
    price: String
    url: String
  }

  type Mutation {
    createWish(input: CreateWishInput!): Wish! @skipAuth
    updateWish(id: Int!, input: UpdateWishInput!): Wish! @skipAuth
    deleteWish(id: Int!): Wish! @skipAuth
  }
`
