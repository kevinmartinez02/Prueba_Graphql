import {gql} from 'apollo-server'
const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        last_name: String!
        age: Int!
        country : String!
    }
    type Query{
        allUsers: [User]
    }
    type Mutation{
        createUser(name:String,last_name:String,age:Int,country:String): User
    }
`
export default typeDefs;