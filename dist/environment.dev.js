"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettings = void 0;
const os = __importStar(require("os"));
class AppSettings {
    static getServerIpAddress() {
        const interfaces = os.networkInterfaces();
        for (const iface of Object.values(interfaces)) {
            for (const alias of iface) {
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        return 'localhost';
    }
}
exports.AppSettings = AppSettings;
AppSettings.PORT = 3000;
AppSettings.SERVER_ENVIRONMENT = `http://${AppSettings.getServerIpAddress()}:`;
AppSettings.API_ENDPOINT = AppSettings.SERVER_ENVIRONMENT + AppSettings.PORT + '/api/';
AppSettings.TYPE = 'postgres';
AppSettings.HOSTDB = 'be4care-postgres-azure.postgres.database.azure.com';
AppSettings.PORTDB = '5432';
AppSettings.USERDB = 'agonzalez@be4care-postgres-azure';
AppSettings.PWDB = 'Gpsglobal2014';
AppSettings.DB = 'b4care-api-express';
