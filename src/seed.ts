import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { Meeting } from './modules/meeting/meeting.entity';
import { MeetingFactory } from './modules/meeting/meeting.factory';
import MeetingSeeder from './modules/meeting/meeting.seeder';
import { config as dotenvConfig } from 'dotenv';
import { Prospect } from './modules/prospect/prospect.entity';
import { Seller } from './modules/seller/seller.entity';
import { Record } from './modules/record/record.entity';
import { Company } from './modules/company/company.entity';

dotenvConfig({ path: '.env' });

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: 'localhost',
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [Meeting, Prospect, Seller, Record, Company],
    factories: [MeetingFactory],
    seeds: [MeetingSeeder],
};

const dataSource = new DataSource(options);
const seed = async () => {
    if (!dataSource.isInitialized) await dataSource.initialize();
    await runSeeders(dataSource);
    process.exit();
};
seed().catch((e) => console.error(e));
