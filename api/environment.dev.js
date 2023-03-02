"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettings = void 0;
class AppSettings {
}
exports.AppSettings = AppSettings;
AppSettings.PORT = 3000;
AppSettings.SERVER_ENVIRONMENT = 'http://127.0.0.1:';
AppSettings.API_ENDPOINT = AppSettings.SERVER_ENVIRONMENT + AppSettings.PORT + '/api/';
AppSettings.TYPE = 'postgres';
AppSettings.HOSTDB = 'be4care-postgres-azure.postgres.database.azure.com';
AppSettings.PORTDB = '5432';
AppSettings.USERDB = 'agonzalez@be4care-postgres-azure';
AppSettings.PWDB = 'Gpsglobal2014';
AppSettings.DB = 'b4care-api-express';
