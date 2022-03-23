import { ConnectionOptions } from "typeorm";

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const DB_URL = `mongodb+srv://${username}:${password}@cluster0.fpqe5.mongodb.net/mood_picreact?retryWrites=true&w=majority`;

export const prod: ConnectionOptions = {
  type: "mongodb",
  url: DB_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: false,

  entities: ["src/data/entities/*.ts"],
  subscribers: ["src/data/subscriber/*.ts"],
  migrations: ["src/data/migration/*.ts"],

  cli: {
    entitiesDir: "src/data/entities",
    migrationsDir: "src/data/migration",
    subscribersDir: "src/data/subscriber",
  },
};

export const dev: ConnectionOptions = {
  type: "mongodb",
  host: "localhost",
  database: "mood_picreact",

  useNewUrlParser: true,
  synchronize: true,
  logging: false,

  entities: ["src/data/entities/*.ts"],
  subscribers: ["src/data/subscriber/*.ts"],
  migrations: ["src/data/migration/*.ts"],

  cli: {
    entitiesDir: "src/data/entities",
    migrationsDir: "src/data/migration",
    subscribersDir: "src/data/subscriber",
  },
};

export default dev;
