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
        findUser(id:ID!): User
        findUserName(name:String):User
    }
    type Mutation{
        createUser(name:String,last_name:String,age:Int,country:String): User
        updateUser(id:ID,name:String,last_name:String,age:Int,country:String):User
        updateUserName(id:ID,name:String):User
        deleteUser(id:ID!):User
    }
`
export default typeDefs;