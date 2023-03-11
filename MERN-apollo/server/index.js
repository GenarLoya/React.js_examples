import { startApolloServer } from "./app.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { connectDB } from "./db.js";

const port = 3000;

connectDB();

startApolloServer(port, typeDefs, resolvers);
