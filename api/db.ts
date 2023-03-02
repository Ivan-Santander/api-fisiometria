import { DataSource } from "typeorm";
import { AppSettings } from "./environment.dev";
import { Fisiometria } from "./entities/Fisiometria";

const TYPE: any = AppSettings.TYPE;
const HOSTDB = AppSettings.HOSTDB;
const PORTDB: any = AppSettings.PORTDB;
const USERDB = AppSettings.USERDB;
const PWDB = AppSettings.PWDB;
const DB = AppSettings.DB;

export const AppDataSource = new DataSource({
  type: TYPE,
  host: HOSTDB,
  port: PORTDB,
  username: USERDB,
  password: PWDB,
  database: DB,
  entities: [Fisiometria],
  logging: true,
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
