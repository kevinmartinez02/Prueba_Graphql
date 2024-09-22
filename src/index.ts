import { ApolloError,ApolloServer,gql } from "apollo-server";
import schema from "./graphql/schema";

const server = new ApolloServer({schema})
server.listen().then(({url})=>{
    console.log(`server is running in ${url}`);
})