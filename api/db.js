"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const environment_dev_1 = require("./environment.dev");
const Fisiometria_1 = require("./entities/Fisiometria");
const TYPE = environment_dev_1.AppSettings.TYPE;
const HOSTDB = environment_dev_1.AppSettings.HOSTDB;
const PORTDB = environment_dev_1.AppSettings.PORTDB;
const USERDB = environment_dev_1.AppSettings.USERDB;
const PWDB = environment_dev_1.AppSettings.PWDB;
const DB = environment_dev_1.AppSettings.DB;
exports.AppDataSource = new typeorm_1.DataSource({
    type: TYPE,
    host: HOSTDB,
    port: PORTDB,
    username: USERDB,
    password: PWDB,
    database: DB,
    entities: [Fisiometria_1.Fisiometria],
    logging: true,
    synchronize: true,
});
