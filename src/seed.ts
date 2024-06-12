// Env need to be import first
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });

import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { configService } from './config/config.service'; // Mettez à jour le chemin si nécessaire
import { MeetingFactory } from './modules/meeting/meeting.factory';
import { CompanyFactory } from './modules/company/company.factory';
import MainSeeder from './main.seeder';
import { ProspectFactory } from './modules/prospect/prospect.factory';
import { SellerFactory } from './modules/seller/seller.factory';
import { RecordFactory } from './modules/record/record.factory';

const typeOrmConfig: DataSourceOptions = configService.getTypeOrmConfig();

const options: DataSourceOptions & SeederOptions = {
    ...typeOrmConfig,
    factories: [
        MeetingFactory,
        CompanyFactory,
        SellerFactory,
        ProspectFactory,
        RecordFactory,
    ],
    seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

const seed = async () => {
    if (!dataSource.isInitialized) await dataSource.initialize();
    await runSeeders(dataSource);
    process.exit();
};

seed().catch((e) => console.error(e));
