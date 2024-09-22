import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schema = makeExecutableSchema({typeDefs: typeDefs,resolvers: resolvers});
export default schema;
