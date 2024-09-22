import {gql} from 'apollo-server'
const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        last_name: String!
        age: Int!
        country : String!
    }
`
export default typeDefs;