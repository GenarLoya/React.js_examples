import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from 'http'

export async function startApolloServer(port = 3002, typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  //app.listen(port);

  await new Promise(resolve => httpServer.listen({port: 4000}, resolve))

  console.log("Server run on port " + 4000);
}
