import * as os from 'os';

export class AppSettings {
    public static PORT = 3000
    public static SERVER_ENVIRONMENT = `http://${AppSettings.getServerIpAddress()}:`
    public static API_ENDPOINT= AppSettings.SERVER_ENVIRONMENT+AppSettings.PORT+'/api/'

    public static TYPE = 'postgres';
    public static HOSTDB = 'be4care-postgres-azure.postgres.database.azure.com';
    public static PORTDB = '5432';
    public static USERDB = 'agonzalez@be4care-postgres-azure';
    public static PWDB = 'Gpsglobal2014';
    public static DB = 'b4care-api-express';

    private static getServerIpAddress(): string {
        const interfaces = os.networkInterfaces();
        for (const iface of Object.values(interfaces)) {
            for (const alias of iface!) {
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        return 'localhost';
    }
}
