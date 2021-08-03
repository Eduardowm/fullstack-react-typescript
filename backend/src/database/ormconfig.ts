import { ConnectionOptions } from "typeorm";

const mongoConfig: ConnectionOptions = {
  type: "mongodb",
  name: "mongodb",
  username: "root",
  password: "secret",
  database: "db-boosktore",
  useNewUrlParser: true,
  connectTimeoutMS: 3600000,
  socketTimeoutMS: 3600000,
  port: 3900,
  poolSize: 5,
  host: "localhost",
  authSource: "admin",
  entities: [ "./src/schemas/**/*.{ts,js}" ],
  migrations: [ "./src/database/migrations/**/*.{ts,js}" ],
  cli: {
    entitiesDir: "./src/schemas",
    migrationsDir: "./src/database/migrations",
  },
};

export = mongoConfig;
