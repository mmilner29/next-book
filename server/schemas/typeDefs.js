// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String
    image: String
    link: String!
}
type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type Auth {
    token: ID!
    user: User
}
input saveBook {
    authors: [String]
    title: String
    image: String
    description: String
    bookId: String
    link: String
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBook): User
    removeBook(bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;