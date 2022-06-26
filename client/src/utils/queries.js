import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        image
        description
        bookId
        authors
        link
      }
    }
  }
`;