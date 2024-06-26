import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing = true): string {
        if (!this.env[key] && throwOnMissing)
            throw new Error(`config service error - missing env.${key}`);
        return this.env[key];
    }

    public ensureValues(keys: string[]) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public getTypeOrmConfig(): DataSourceOptions {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [join(__dirname, '/../modules/**/*.entity.{js,ts}')],
            synchronize: true,
            logging: false,
        };
    }
}

const configService = new ConfigService(process.env).ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE',
]);

export { configService };
