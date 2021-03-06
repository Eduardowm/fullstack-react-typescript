import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { buildSchema } from "type-graphql";
import Container from "typedi";
import { initializeMongoDB } from "../database/connection";
import { BookResolver } from "../resolvers/bookResolver";

export const useGraphQL = async (app: Express) => {
  await initializeMongoDB();
  const schema = await buildSchema({
    resolvers: [ BookResolver ],
    container: Container,
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });
  return app;
};
