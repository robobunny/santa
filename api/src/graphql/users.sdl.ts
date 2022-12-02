export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    wishlist: [Wish]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth({roles: ['admin', 'mom']})
    deleteUser(id: Int!): User! @skipAuth
  }
`
